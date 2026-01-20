<template>
  <MainLayout
    ref="mainLayout"
    :currentUser="currentUser"
    @update:currentUser="currentUser = $event"
  >
    <div class="planner-content">

      <template v-if="currentUser">
        <div class="planner-layout">

          <!-- LEFT / MAIN COLUMN -->
          <div class="planner-main text-center">

            <!-- TOP SECTION -->
            <div class="planner-top">
              <h2>Your Travel Planner</h2>

              <!-- Country -->
              <p v-if="planner.length" style="margin-bottom:2px">
                Selected Country: <strong>{{ planner[0].country }}</strong>
              </p>

              <p v-if="planner.length" style="margin-top:0">
                To change your selected country, Please delete all the museums in your Planner.
              </p>

              <!-- USER LOCATION BLOCK -->
              <div class="location-block">

                <button class="location-btn" @click="inputLocation">
                  Input your location
                </button>

                <!-- Inline coordinates -->
                <div v-if="userLocation && !editingLocation" class="coords-inline">
                  <span>Lat: {{ userLocation.lat.toFixed(5) }}</span>
                  <span>Lng: {{ userLocation.lng.toFixed(5) }}</span>
                  <button class="small-btn save-btn" @click="editLocation">
                    Edit
                  </button>
                </div>

                <!-- Inline edit -->
                <div v-if="editingLocation" class="coords-inline">
                  <input type="number" step="any" v-model.number="tempLat" />
                  <input type="number" step="any" v-model.number="tempLng" />
                  <button class="small-btn save-btn" @click="confirmLocation">
                    Set
                  </button>
                  <button class="small-btn delete-all-btn" @click="cancelLocation">
                    Cancel
                  </button>
                </div>

                <!-- Load / Delete saved route -->
                <div class="route-actions">
                  <button class="location-btn" @click="loadSavedRoute">
                    Load Saved Route
                  </button>
                  <button class="delete-all-btn" @click="deleteSavedRoute">
                    Delete Saved Route
                  </button>
                </div>
              </div>

              <!-- TRAVEL MODE -->
              <div v-if="planner.length" class="travel-mode-select">
                <p class="mode-label">Travel Mode</p>
                <div class="mode-options">
                  <button
                    v-for="mode in travelModes"
                    :key="mode.value"
                    class="mode-btn"
                    :class="[mode.value, { active: travelMode === mode.value }]"
                    @click="travelMode = mode.value"
                    type="button"
                  >
                    <span class="mode-icon">{{ mode.icon }}</span>
                    <span class="mode-text">{{ mode.label }}</span>
                  </button>
                </div>
              </div>

              <!-- OPTIMIZE / SAVE -->
              <div v-if="planner.length && userLocation" class="button-grid">
                <button class="location-btn small-btn" @click="optimizeRoute">
                  Optimize Route
                </button>
                <button class="save-btn small-btn" @click="saveRoute">
                  Save Optimized Route
                </button>
              </div>
            </div>

            <!-- PLANNER ITEMS -->
            <div v-if="planner.length" class="planner-items">

              <!-- Delete all -->
              <div class="planner-list-header">
                <button
                  class="delete-all-btn small-btn"
                  @click="deleteAllPlanner"
                >
                  Delete All
                </button>
              </div>

              <div
                v-for="(item, index) in planner"
                :key="index"
                class="planner-item"
              >
                <div class="planner-text">
                  <div class="planner-name">{{ item.name }}</div>
                  <div class="planner-location">
                    {{ item.city }}, {{ item.country }}
                  </div>
                </div>
                <button
                  class="delete-btn"
                  @click="deletePlannerItem(item.name)"
                >
                  🗑️
                </button>
              </div>
            </div>

            <p v-else>No museums in your travel planner yet.</p>

            <!-- OPTIMIZED ROUTE -->
            <div v-if="optimizedRoute && optimizedRoute.orderedMuseums"  class="optimized-route mt-4 text-left">
                <h3>{{ routeTitle }}</h3>

                <p>
                  <strong>Travel mode:</strong>
                  {{ appliedTravelMode.charAt(0).toUpperCase() + appliedTravelMode.slice(1) }}
                </p>

                <p><strong>Total distance:</strong> {{ (optimizedRoute.totalDistance / 1000).toFixed(1) }} km</p>
                <p><strong>Total duration:</strong> {{ Math.round(optimizedRoute.totalDuration / 60) }} min</p>

                <p class="optimized-heading">Optimized order to visit museums:</p>
                
                <ul class="museum-list">
                  <li v-for="(museum, idx) in optimizedRoute.orderedMuseums" :key="idx">
                    {{ idx + 1 }}. {{ museum.name }} ({{ museum.city }})
                  </li>
                </ul>
              <div
                id="map"
                style="height:500px;width:80%;max-width:1000px;margin:20px auto;"
              ></div>
            </div>
          </div>

          <!-- RIGHT / SAVED ROUTE PANEL -->
          <div v-if="savedRoute" class="saved-route-panel">
            <button class="close-saved-btn" @click="savedRoute = null">×</button>
            <h3>Saved Travel Plan</h3>

            <p><strong>Travel mode:</strong> {{savedRoute.travelMode.charAt(0).toUpperCase() + savedRoute.travelMode.slice(1)}}</p>
            <p>
              <strong>Distance:</strong>
              {{ (savedRoute.totalDistance / 1000).toFixed(1) }} km
            </p>
            <p>
              <strong>Duration:</strong>
              {{ Math.round(savedRoute.totalDuration / 60) }} min
            </p>

            <p class="saved-route-subtitle">
              Order to visit the museums
            </p>

            <ol>
                <li v-for="(museum, i) in savedRoute.orderedMuseums" :key="i">
                  {{ museum.name }} ({{ museum.city }})

                  <!-- Transit steps -->
                  <div
                    v-if="savedRoute.travelMode === 'transit' && savedRoute.steps[i]"
                    class="transit-steps"
                  >
                    <p class="saved-route-subtitle text-center">Transit Details</p>
                    <div
                        v-for="(step, j) in savedRoute.steps[i]"
                        :key="j"
                        class="transit-step"
                      >
                        <b>{{ step.transit_details.line.vehicle.name }}</b>
                        {{ step.transit_details.line.short_name || step.transit_details.line.name }}:
                        {{ step.transit_details.departure_stop.name }} →
                        {{ step.transit_details.arrival_stop.name }}
                        ({{ step.transit_details.num_stops }} stops)
                      </div>
                  </div>
                </li>
              </ol>
          </div>

        </div>
      </template>

      <!-- NOT LOGGED IN -->
      <template v-else>
        <div class="not-logged-in">
          <p>Please login to access your travel planner.</p>
          <button @click="openLoginModal">Log In</button>
          <button @click="openSignupModal">Create Account</button>
        </div>
      </template>

    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import { Api } from '@/Api'
import L from 'leaflet'
import polyline from '@mapbox/polyline'
import 'leaflet/dist/leaflet.css'
import 'leaflet-polylinedecorator'

export default {
  name: 'TravelPlannerPage',
  components: { MainLayout },
  data() {
    return {
      currentUser: null,
      planner: [],
      userLocation: null,
      travelMode: 'driving',
      appliedTravelMode: null, 
      optimizedRoute: null,
      savedRoute: null,
      routeTitle: '',
      travelModes: [
        { value: 'driving', label: 'Driving', icon: '🚗' },
        { value: 'walking', label: 'Walking', icon: '🚶' },
        { value: 'bicycling', label: 'Cycling', icon: '🚲' },
        { value: 'transit', label: 'Transit', icon: '🚌' }
      ],
      editingLocation: false, // << add this
      tempLat: null,           // << add this
      tempLng: null 
    }
  },
  async mounted() {
    try {
      const res = await Api.get('/users/me')
      this.currentUser = res.data.user
      if (this.currentUser) await this.loadPlanner()
    } catch (err) {
      console.error('Error loading current user:', err)
    }
  },
  methods: {

    parseSavedSteps() {
          if (!this.savedRoute || !this.savedRoute.steps) return [];

          // Flatten steps from all legs
          return this.savedRoute.steps.flat().map((step, idx) => {
            if (step.travel_mode === 'TRANSIT') {
              const td = step.transit_details;
              return `${idx + 1}. Take ${td.line.short_name || td.line.name} (${td.line.vehicle.type}) from ${td.departure_stop.name} to ${td.arrival_stop.name}, Stops: ${td.num_stops}`;
            } else if (step.travel_mode === 'WALKING') {
              return `${idx + 1}. Walk ${step.distance.text} (${step.duration.text})`;
            } else {
              return `${idx + 1}. ${step.travel_mode} for ${step.distance.text}`;
            }
          });
        },
        
    async loadPlanner() {
      try {
        const res = await Api.get(`/travelPlannerLists/${this.currentUser.username}`)
        this.planner = res.data.travelPlanner || []
      } catch (err) {
        console.error('Error loading travel planner:', err)
      }
    },

    async deletePlannerItem(name) {
      if (!confirm(`Delete "${name}" from your travel planner?`)) return
      try {
        await Api.delete(`/travelPlannerLists/${this.currentUser.username}`, { data: { name } })
        this.planner = this.planner.filter(item => item.name !== name)
        this.optimizedRoute = null
      } catch (err) {
        console.error('Error deleting planner item:', err)
      }
    },

    async deleteAllPlanner() {
      if (!confirm('Delete all items from your travel planner?')) return
      try {
        await Api.delete(`/travelPlannerLists/${this.currentUser.username}/all`)
        this.planner = []
        this.optimizedRoute = null
      } catch (err) {
        console.error('Error deleting all planner items:', err)
      }
    },

    async inputLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.tempLat = position.coords.latitude;
          this.tempLng = position.coords.longitude;
          this.editingLocation = true; 
        },
        (err) => {
          console.error(err);
          alert("Failed to detect location. Please enter manually.");
          this.editingLocation = true;
          this.tempLat = '';
          this.tempLng = '';
        }
      );

    } else {
      alert("Geolocation not supported. Please enter manually.");
      this.editingLocation = true;
      this.tempLat = '';
      this.tempLng = '';
    }
  },

  confirmLocation() {
    if (!this.tempLat || !this.tempLng) return alert("Invalid coordinates");
    this.userLocation = { lat: this.tempLat, lng: this.tempLng };
    this.editingLocation = false;
    alert(`Location set to: ${this.tempLat}, ${this.tempLng}`);
  },

  cancelLocation() {
    this.editingLocation = false;
    this.tempLat = '';
    this.tempLng = '';
  },

  editLocation() {
    this.tempLat = this.userLocation.lat;
    this.tempLng = this.userLocation.lng;
    this.editingLocation = true;
  },

  async optimizeRoute() {
  this.appliedTravelMode = this.travelMode;

  if (!this.userLocation) return alert("Please input your location first");
  if (!this.planner.length) return alert("No museums in planner");

  if (this.travelMode === 'transit' && this.planner.length > 1) {
    alert(
      "Transit mode only supports one museum as a destination due to Google API limitations.\n" +
      "Please choose a single museum or switch travel mode."
    );
    this.optimizedRoute = null;
    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    return;
  }

  try {
    let payload = {
      userLocation: this.userLocation,
      museums: this.planner.map(m => m.name),
      travelMode: this.appliedTravelMode
    };

    const res = await Api.post(
      `/travelPlannerLists/optimize/${this.currentUser.username}`,
      payload
    );

    if (res.data.success === false) {
        alert(res.data.message);
        this.optimizedRoute = null;
        return;
      }
      this.optimizedRoute = res.data;
      this.routeTitle = 'Optimized Route';
      this.$nextTick(() => this.renderMap());

  } catch (err) {
    console.error('Error optimizing route:', err);
    const msg =
    err.response?.data?.message ||
    "Sorry, we couldn’t find a route. Please try a closer starting location.";
      alert(msg);
  }
},

  async saveRoute() {
  if (!this.optimizedRoute) return alert("No route to save");

  try {
    // Get existing saved route
    const existingRes = await Api.get(`/travelPlannerLists/${this.currentUser.username}/saved`);
    const existing = existingRes.data.savedTravelPlan;

    // Inline comparison: same travel mode + same museum order
    if (
      existing &&
      existing.travelMode === this.travelMode &&
      existing.orderedMuseums.map(m => m.name).join(',') ===
        this.optimizedRoute.orderedMuseums.map(m => m.name).join(',')
    ) {
      alert("This travel plan is identical to your saved route.");
      return;
    }

    if (existing) {
      const confirmed = confirm(
        "Saving this travel plan will overwrite your previously saved route.\n\nDo you want to continue?"
      );
      if (!confirmed) return;
    }

    const payload = {
      travelMode: this.travelMode,
      orderedMuseums: this.optimizedRoute.orderedMuseums,
      totalDistance: this.optimizedRoute.totalDistance,
      totalDuration: this.optimizedRoute.totalDuration,
      steps:
        this.travelMode === 'transit'
          ? this.optimizedRoute.steps.map(legSteps =>
              legSteps
                .filter(step => step.travel_mode === 'TRANSIT' && step.transit_details)
                .map(step => {
                  const td = step.transit_details;
                  return {
                    transit_details: {
                      line: {
                        vehicle: { name: td.line.vehicle.name, type: td.line.vehicle.type },
                        short_name: td.line.short_name,
                        name: td.line.name
                      },
                      departure_stop: { name: td.departure_stop.name },
                      arrival_stop: { name: td.arrival_stop.name },
                      num_stops: td.num_stops
                    }
                  };
                })
            )
          : []
    };

    await Api.post(`/travelPlannerLists/${this.currentUser.username}/save`, payload);
    alert("Travel plan saved successfully");

  } catch (err) {
    console.error("Error saving travel plan:", err);
    alert("Failed to save travel plan");
  }
},
  
    async loadSavedRoute() {
      try {
        const res = await Api.get(`/travelPlannerLists/${this.currentUser.username}/saved`)
        const saved = res.data.savedTravelPlan
        if (!saved) return alert("No saved travel plan found")

        // Only set the data, no map rendering
        this.savedRoute = saved
      } catch (err) {
        console.error("Error loading saved route:", err)
        alert("Failed to load saved route")
      }
    },

    async deleteSavedRoute() {
      if (!confirm("Are you sure you want to delete your saved travel plan?")) return;

      try {
        await Api.delete(`/travelPlannerLists/${this.currentUser.username}/saved`);
        this.optimizedRoute = null; // clear saved route from UI
        alert("Saved travel plan deleted successfully");
      } catch (err) {
        console.error(err);
        alert("Failed to delete saved travel plan");
      }
    },

  renderMap() {
  if (!this.optimizedRoute || !this.userLocation || !this.optimizedRoute.steps) return;

  if (this.map) this.map.remove();

  this.map = L.map('map');

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OSM &copy; CARTO',
    maxZoom: 19
  }).addTo(this.map);

  let allCoords = [];

  // User location
  L.marker([this.userLocation.lat, this.userLocation.lng], {
    icon: L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/487/487021.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    })
  }).addTo(this.map).bindPopup('Your Location');

  // Museum markers
  this.optimizedRoute.orderedMuseums.forEach((museum, idx) => {
    L.marker([museum.lat, museum.lng], {
      icon: L.divIcon({
        className: 'museum-marker',
        html: `<div style="
          background:#ffc107;
          color:#003b5c;
          border-radius:50%;
          width:32px;
          height:32px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:700;
          border:2px solid white;
        ">${idx + 1}</div>`
      })
    }).addTo(this.map)
      .bindPopup(`<b>${idx + 1}. ${museum.name}</b><br>${museum.city}`);

    allCoords.push([museum.lat, museum.lng]);
  });

// Route steps
this.optimizedRoute.steps.forEach(legSteps => {
  legSteps.forEach(step => {
    if (!step.polyline?.points) return;

    const coords = polyline.decode(step.polyline.points);
    allCoords.push(...coords);

    let color = '#ff7f50'; // default driving
    let dashArray = null;
    let popup = '';

    // Transit steps first
    if (step.travel_mode === 'TRANSIT' && step.transit_details) {
      const td = step.transit_details;
      const vehicle = td.line.vehicle.type;

      if (vehicle === 'BUS') color = '#ef4444';
      if (vehicle === 'SUBWAY') color = '#2563eb';
      if (vehicle === 'TRAIN'|| vehicle === 'HIGH_SPEED_TRAIN') color = '#16a34a';
      if (vehicle === 'TRAM') color = '#f59e0b';

      popup = `
        <b>${td.line.vehicle.name}</b><br>
        Line: ${td.line.short_name || td.line.name}<br>
        ${td.departure_stop.name} → ${td.arrival_stop.name}<br>
        Stops: ${td.num_stops}
      `;

      // Transit sometimes has walking steps inside
      if (step.travel_mode === 'WALKING') {
        color = '#6b7280';
        dashArray = '5,8';
        popup = '🚶 Walking';
      }
      else if (step.travel_mode === 'DRIVING') {
        color = '#ff9800'; 
        popup = '🚗 Driving';
      } 
      else if (step.travel_mode === 'BICYCLING') {
        color = '#8bc34a'; 
        popup = '🚲 Cycling';
      }

    } else {
      // Non-transit modes
      switch (step.travel_mode) {
        case 'WALKING':
          color = '#6b7280';
          dashArray = '5,8';
          popup = '🚶 Walking';
          break;
        case 'BICYCLING':
          color = '#8b5cf6';
          popup = '🚲 Cycling';
          break;
        case 'DRIVING':
          color = '#ff7f50';
          popup = '🚗 Driving';
          break;
      }
    }

    const routeLine = L.polyline(coords, {
      color,
      weight: 5,
      opacity: 0.85,
      dashArray
    }).addTo(this.map);

    // Add arrows for non-transit
    if (step.travel_mode !== 'TRANSIT' && L.polylineDecorator) {
      L.polylineDecorator(routeLine, {
        patterns: [{
          offset: '12px',
          repeat: '50px',
          symbol: L.Symbol.arrowHead({
            pixelSize: 8,
            polygon: true,
            pathOptions: { color, fillOpacity: 0.9 }
          })
        }]
      }).addTo(this.map);
    }

    // Always bind popup
    routeLine.bindPopup(popup);
  });
});



  if (allCoords.length) {
    this.map.fitBounds(L.latLngBounds(allCoords), { padding: [50, 50] });
  }

  this.addTransitLegend();
},
addTransitLegend() {
  const legend = L.control({ position: 'bottomright' });

  legend.onAdd = () => {
    const div = L.DomUtil.create('div', 'transit-legend');
    div.innerHTML = `
      <b>Route Legend</b><br>
      <span style="color:#ef4444">━</span> 🚌 Bus<br>
      <span style="color:#2563eb">━</span> 🚇 Subway<br>
      <span style="color:#16a34a">━</span> 🚆 Train<br>
      <span style="color:#f59e0b">━</span> 🚊 Tram<br>
      <span style="color:#6b7280">┄</span> 🚶 Walking
    `;
    return div;
  };

  legend.addTo(this.map);
},

    openLoginModal() { this.$refs.mainLayout.openModal('login') },
    openSignupModal() { this.$refs.mainLayout.openModal('signup') }
  }
}
</script>


<style>
.planner-content {
  padding: 40px;
  color: #003b5c;

  overflow-x: auto;
}

/* Buttons */
.location-btn {
  background-color: #89d4e8;
  color: #003b5c;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.location-btn:hover { background-color: #7bc6d9; }

.save-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.save-btn:hover { background-color: #45a049; }

.delete-all-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.delete-all-btn:hover { background-color: #e60000; }

/* Top section alignment */
.planner-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.planner-top h2 {
  margin-bottom: 1px; 
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 12px;
  justify-content: center;
}


.small-btn {
  padding: 8px 16px;
  font-size: 14px;
  min-width: auto;
}

/* Travel Mode */
.travel-mode-select { margin-top: 10px; }
.mode-label { font-weight: 600; margin-bottom: 6px; }
.mode-options {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
.mode-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid transparent;
  background-color: #f1f5f9;
  color: #003b5c;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.mode-btn:hover { 
  transform: translateY(-1px); 
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
}

.mode-btn.active { 
  border-color: currentColor; 
  background-color: white; 
}

.mode-btn.driving { color: #1f78b4; }

.mode-btn.walking { color: #2e7d32; }

.mode-btn.bicycling { color: #ef6c00; }

.mode-btn.transit { color: #6a1b9a; }

.mode-icon { font-size: 18px; }

/* Planner Items */
.planner-items { 
  margin-top: 20px; 
}

.planner-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  background-color: #f8fafc;
}
.planner-text { 
  text-align: left; 
}

.planner-name { 
  font-weight: 600; 
  font-size: 16px; 
}

.planner-location { 
  font-size: 14px; color: #475569; 
  margin-top: 4px; 
}

/* Delete buttons */
.delete-btn { 
  background-color: transparent; 
  border: none; 
  cursor: pointer; 
  font-size: 18px; 
}

.delete-btn:hover { color: #ff4d4d; }

/* Not logged in */
.not-logged-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: #003b5c;
}
.not-logged-in button {
  margin: 5px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: #89d4e8;
}

/* Location layout */
.location-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

/* Inline coordinates box */
.coords-inline {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f1f5f9;
  padding: 8px 12px;
  border-radius: 8px;
}

/* Inline inputs */
.coords-inline input {
  width: 110px;
  padding: 4px 6px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
}

/* Load / delete saved route buttons */
.route-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* Delete All above museum list */
.planner-list-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6px;
}
/* Two-column layout */
.planner-layout {
  display: flex;
  align-items: flex-start;
  gap: 28px;
}

.planner-main {
  flex: 1;
}

/* Saved route right panel */
.saved-route-panel {
  position: fixed;        
  top: 100px;             
  right: 40px;           
  width: 300px;
  max-height: 80vh;       
  overflow-y: auto;       
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;          /* on top of everything */
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.saved-route-panel.enter-active,
.saved-route-panel.leave-active {
  transition: transform 0.3s ease, 
  opacity 0.3s ease;
}

.saved-route-panel.enter-from {
  transform: translateX(120%);
  opacity: 0;
}
.saved-route-panel.enter-to {
  transform: translateX(0);
  opacity: 1;
}
.saved-route-panel.leave-from {
  transform: translateX(0);
  opacity: 1;
}
.saved-route-panel.leave-to {
  transform: translateX(120%);
  opacity: 0;
}

.close-saved-btn {
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #ff4d4d;
}
.close-saved-btn:hover {
  color: #e60000;
}

.saved-route-subtitle {
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 6px;
  font-size: 14px;
  color: #475569;
}

.optimized-route {
  font-family: 'Lora', Georgia, serif;
  color: #1a2e4d; /* dark blue for museum names */
}

.optimized-route p,
.optimized-route .optimized-heading {
  font-size: 16px;
  margin-bottom: 6px;
}

.optimized-route p strong,
.optimized-route .optimized-heading {
  font-weight: 700; 
  color: #003b5c;  
}

.museum-list {
  list-style: none; 
  padding-left: 0;
  margin-top: 6px;
}

.museum-list li {
  font-weight: 400; 
  color: #1a2e4d;  /* dark blue */
  margin-bottom: 4px;
}

.transit-legend {
  background: white;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.transit-steps {
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 8px;
  margin-bottom: 12px;
}

.transit-step {
  background-color: #f1f5f9; /* light gray box */
  color: #003b5c;
  padding: 6px 12px;
  border-radius: 8px;
  margin: 4px 0;
  width: fit-content;
  text-align: center; /* center the text */
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-size: 14px;
}

.saved-route-subtitle.text-center {
  font-weight: 600;
  margin-bottom: 4px;
  text-align: center;
}

</style>
