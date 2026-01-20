const axios = require('axios');

const dayMap = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday"
};

const dayOrder = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function getTodayAbbr() {
    const jsDay = new Date().getDay(); // 0 = Sunday
    return dayOrder[jsDay === 0 ? 6 : jsDay - 1]; // Map Sunday to 'Su', Monday to 'Mo', etc.
}

function formatOpeningHours(openingHoursString) {
    if (!openingHoursString) {
        return {
            generalOpening: "Please refer to their website",
            today: "Please refer to their website"
        };
    }


    let generalOpening = openingHoursString;
    for (const [abbr, full] of Object.entries(dayMap)) {
        generalOpening = generalOpening.replace(new RegExp(`\\b${abbr}\\b`, "g"), full);
    }

    // Splitting by both ; and , 
    const segments = openingHoursString.split(/;|,/).map(s => s.trim()).filter(Boolean);

    const todayAbbr = getTodayAbbr();
    let todayHours = null;

    for (const segment of segments) {
        // Handle 24/7
        if (/24\/7|00:00-24:00/.test(segment)) {
            todayHours = "Open 24/7";
            break;
        }


        const match = segment.match(/^([A-Z][a-z]?)(?:-([A-Z][a-z]?))?\s+(.*)$/);
        if (!match) continue;

        const [, startAbbr, endAbbr, hoursRaw] = match;
        const hours = hoursRaw.toLowerCase() === 'off' ? "Closed" : hoursRaw;

        if (endAbbr) {
            const startIndex = dayOrder.indexOf(startAbbr);
            const endIndex = dayOrder.indexOf(endAbbr);
            const todayIndex = dayOrder.indexOf(todayAbbr);

            const inRange = startIndex <= endIndex
                ? todayIndex >= startIndex && todayIndex <= endIndex
                : todayIndex >= startIndex || todayIndex <= endIndex;

            if (inRange) {
                todayHours = hours;
                break;
            }
        } else {
            if (startAbbr === todayAbbr) {
                todayHours = hours;
                break;
            }
        }
    }

    if (!todayHours) todayHours = "Closed";

    return {
        generalOpening,
        today: todayHours
    };
}

async function fetchOpeningHours(name, city) {
    try {
        const query = encodeURIComponent(`${name}, ${city}`);
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1&extratags=1`;

        const response = await axios.get(url, {
            headers: { "User-Agent": "MuseumApp/1.0" }
        });

        if (!response.data || response.data.length === 0) {
            return {
                generalOpening: "Please refer to their website",
                today: "Please refer to their website"
            };
        }

        const place = response.data[0];
        const opening = place.extratags?.opening_hours || null;

        if (!opening) {
            return {
                generalOpening: "Please refer to their website",
                today: "Please refer to their website"
            };
        }

        return formatOpeningHours(opening);
    } catch (err) {
        console.error("API error:", err.message);
        return { generalOpening: null, today: null };
    }
}

module.exports = { fetchOpeningHours };
