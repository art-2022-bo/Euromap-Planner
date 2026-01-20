<template>
  <MainLayout
    ref="mainLayout"
    :selectedCountry="selectedCountry"
    :currentUser="currentUser"
    :userReviews="userReviews"
    @submitReview="submitReview"
    @submitWebsiteReview="submitWebsiteReview"
    @deleteReview="deleteReview"
    @updateReview="updateReview"
    @deleteAllReviews="deleteAllReviews"
    @blur-map="mapBlur = $event"
    @update:currentUser="currentUser = $event"
  >
    <div class="container">
      <!-- Tagline -->
      <p class="tagline text-center ">
        Discover the best museums in Europe!
      </p>
      <p class="tagline text-center ">
        Select Country
      </p>

      <div class="row justify-content-center">
        <div class="col-12 col-md-8">
          <div class="map-wrapper position-relative " :class="{ blur: mapBlur }">
            <img
              ref="museumMap"
              :src="mapImg"
              alt="Museum Map"
              class="img-fluid museum-map"
              @load="onImageLoad"
            />

            <div
              v-for="country in countries"
              :key="country.name"
              class="country-marker-circle"
              :style="{ top: country.topPercent + '%', left: country.leftPercent + '%' }"
              @click="clickCountry(country.name)"
            ></div>

          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import { Api } from '@/Api'
import mapImg from '@/assets/map.png'

export default {
  name: 'Home',
  components: { MainLayout },

  data() {
    return {
      mapImg,
      mapBlur: false,
      selectedCountry: '',
      userReviews: [],
      currentUser: null,
      countries: [
        { name: 'Finland', topPercent: 32, leftPercent: 70 },
        { name: 'Sweden', topPercent: 32, leftPercent: 57 },
        { name: 'Norway', topPercent: 34, leftPercent: 50 },
        { name: 'Germany', topPercent: 62, leftPercent: 48 },
        { name: 'Poland', topPercent: 59, leftPercent: 62 },
        { name: 'Estonia', topPercent: 40, leftPercent: 70 },
        { name: 'Latvia', topPercent: 45, leftPercent: 70 },
        { name: 'Lithuania', topPercent: 50, leftPercent: 69 },
        { name: 'Belorussia', topPercent: 55, leftPercent: 74 },
        { name: 'Ukraine', topPercent: 63, leftPercent: 78 },
        { name: 'Moldova', topPercent: 67, leftPercent: 78 },
        { name: 'Romania', topPercent: 73, leftPercent: 70 },
        { name: 'Bulgaria', topPercent: 80, leftPercent: 72 },
        { name: 'Macedonia', topPercent: 82, leftPercent: 67 },
        { name: 'Kosovo', topPercent: 79, leftPercent: 65 },
        { name: 'Albania', topPercent: 85, leftPercent: 63.5 },
        { name: 'Greece', topPercent: 91.5, leftPercent: 69 },
        { name: 'Montenegro', topPercent: 79, leftPercent: 62 },
        { name: 'Serbia', topPercent: 76.5, leftPercent: 66 },
        { name: 'Bosnia', topPercent: 76.5, leftPercent: 60 },
        { name: 'Croatia', topPercent: 72, leftPercent: 58 },
        { name: 'Slovenia', topPercent: 71, leftPercent: 55 },
        { name: 'Hungary', topPercent: 68, leftPercent: 65.5 },
        { name: 'Slovakia', topPercent: 65.5, leftPercent: 62 },
        { name: 'Czhek Republic', topPercent: 61, leftPercent: 54 },
        { name: 'Austria', topPercent: 68, leftPercent: 55 },
        { name: 'Italy', topPercent: 74, leftPercent: 47 },
        { name: 'France', topPercent: 67, leftPercent: 38 },
        { name: 'Belgium', topPercent: 58, leftPercent: 40 },
        { name: 'Netherlands', topPercent: 54, leftPercent: 42 },
        { name: 'Denmark', topPercent: 46.5, leftPercent: 49 },
        { name: 'Spain', topPercent: 83, leftPercent: 20 },
        { name: 'Portugal', topPercent: 78, leftPercent: 12 },
        { name: 'Ireland', topPercent: 47.5, leftPercent: 23 },
        { name: 'United Kingdom', topPercent: 53.5, leftPercent: 32 }
      ],

      countriesCapital: {
        Finland: 'Helsinki',
        Sweden: 'Stockholm',
        Norway: 'Oslo',
        Germany: 'Berlin',
        Poland: 'Warsaw',
        Estonia: 'Tallinn',
        Latvia: 'Riga',
        Lithuania: 'Vilnius',
        Belorussia: 'Minsk',
        Ukraine: 'Kyiv',
        Moldova: 'Chisinau',
        Romania: 'Bucharest',
        Bulgaria: 'Sofia',
        Macedonia: 'Skopje',
        Kosovo: 'Pristina',
        Albania: 'Tirana',
        Greece: 'Athens',
        Montenegro: 'Podgorica',
        Serbia: 'Belgrade',
        Bosnia: 'Sarajevo',
        Croatia: 'Zagreb',
        Slovenia: 'Ljubljana',
        Hungary: 'Budapest',
        Slovakia: 'Bratislava',
        'Czhek Republic': 'Prague',
        Austria: 'Vienna',
        Italy: 'Rome',
        France: 'Paris',
        Belgium: 'Brussels',
        Netherlands: 'Amsterdam',
        Denmark: 'Copenhagen',
        Spain: 'Madrid',
        Portugal: 'Lisbon',
        Ireland: 'Dublin',
        'United Kingdom': 'London'
      }
    }
  },

  async mounted() {
    try {
      const response = await Api.get('/users/me')
      this.currentUser = response.data.user

      if (this.currentUser) {
        await this.loadUserReviews()
      }
    } catch {
      this.currentUser = null
    }
  },

  methods: {
    onImageLoad() {
      console.log('Europe map loaded')
    },

    clickCountry(countryName) {
      const capitalCity = this.countriesCapital[countryName.trim()]
      this.$router.push(`/museums/${capitalCity}`)
    },

    async loadUserReviews() {
      if (this.currentUser) {
        try {
          const response = await Api.get('/reviews')
          this.userReviews = response.data.filter(
            review => review.personName === this.currentUser.username
          )
        } catch (err) {
          console.error('Error loading user reviews', err)
        }
      }
    },

    async deleteReview(reviewId) {
      if (!confirm('Are you sure you want to delete this review?')) return

      try {
        await Api.delete(`/reviews/${reviewId}`)
        this.userReviews = this.userReviews.filter(r => r._id !== reviewId)
        alert('Review deleted successfully!')
      } catch (err) {
        console.error('Error deleting review:', err)
        alert('Failed to delete review.')
      }
    },

    async updateReview(reviewId, updatedData) {
      try {
        await Api.patch(`/reviews/${reviewId}`, updatedData)
        alert('Review updated successfully!')
        await this.loadUserReviews()
      } catch (patchErr) {
        console.log('PATCH failed, trying PUT...', patchErr)

        try {
          await Api.put(`/reviews/${reviewId}`, updatedData)
          alert('Review updated successfully!')
          await this.loadUserReviews()
        } catch (putErr) {
          console.error('Both PATCH and PUT failed:', putErr)
          alert('Failed to update review. Please try again.')
        }
      }
    },

    async deleteAllReviews() {
      if (!this.currentUser) return

      if (!confirm('Are you sure you want to delete all of your reviews? This cannot be undone.')) {
        return
      }

      try {
        const response = await Api.get('/reviews')
        const userReviews = response.data.filter(
          review => review.personName === this.currentUser.username
        )

        for (const review of userReviews) {
          await Api.delete(`/reviews/${review._id}`)
        }

        alert(`Successfully deleted ${userReviews.length} review(s)!`)
        await this.loadUserReviews()
      } catch (err) {
        console.error('Error deleting all reviews:', err)
        alert('Failed to delete all reviews.')
      }
    },

    async submitReview() {
      try {
        if (!this.selectedCountry || !this.$refs.mainLayout.comment) {
          this.$refs.mainLayout.museumError = 'Please enter a comment and select a country'
          return
        }

        const personName = this.currentUser
          ? this.currentUser.username
          : 'Anonymous'

        await Api.post('/reviews', {
          personName,
          reviewType: 'museum',
          museumReview: this.$refs.mainLayout.comment,
          country: this.selectedCountry
        })

        alert(`Thanks for your museum review in ${this.selectedCountry}!`)

        this.$refs.mainLayout.comment = ''
        this.$refs.mainLayout.museumError = ''

        await this.loadUserReviews()
      } catch (err) {
        this.$refs.mainLayout.museumError = err.response?.data?.message || 'Error occurred'
      }
    },
    async submitWebsiteReview(rating) {
      try {
        if (!rating) {
          this.$refs.mainLayout.websiteError = 'Please select a rating'
          return
        }

        const personName = this.currentUser
          ? this.currentUser.username
          : 'Anonymous'

        await Api.post('/reviews', {
          personName,
          reviewType: 'website',
          websiteReview: rating
        })

        alert('Thanks for the rating!')
        this.$refs.mainLayout.websiteRating = 0
        this.$refs.mainLayout.websiteError = ''

        await this.loadUserReviews()
      } catch (err) {
        this.$refs.mainLayout.websiteError = err.response?.data?.message || 'Error occurred'
      }
    }
  }
}
</script>

<style scoped>
/* Tagline of the page */
.tagline {
  font-size: 16px;
  color: #003b5c;
  font-weight: 500;
  text-align:center;
}

.map-container {
  margin: 20px auto;
  max-width: 800px;
  position: relative;
}

.museum-map {
  width: 100%;
  height: auto;
  border: 2px solid #003b5c;
  border-radius: 10px;
  transition: filter 0.3s ease;
}

.blur {
  filter: blur(5px);
}

.country-marker-circle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: transform 0.2s, background-color 0.2s;
}

.country-marker-circle:hover {
  background-color: #ffc107;
  transform: translate(-50%, -50%) scale(1.3);
}
</style>
