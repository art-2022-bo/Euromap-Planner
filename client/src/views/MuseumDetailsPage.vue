<template>
  <MainLayout
    ref="mainLayout"
    :currentUser="currentUser"
    :userReviews="userReviews"
    :selectedMuseum="selectedMuseum"
    @update:currentUser="currentUser = $event"
    @submitReview="submitMuseumReview"
    @deleteReview="deleteReview"
    @updateReview="updateReview"
    @deleteAllReviews="deleteAllReviews"
  >
    <div class="container mt-4 text-center">
      <button class="back-button mb-3" @click="goBack">← Back to map</button>

      <h1 class="page-title">Top Historical and Art Museums in {{ cityName }}, {{ countryName }}</h1>

      <div class="tabs">
        <button
          :class="{ active: activeTab === 'history' }"
          @click="activeTab = 'history'"
        >
          Top Historical Museums
        </button>
        <button
          :class="{ active: activeTab === 'art' }"
          @click="activeTab = 'art'"
        >
          Top Art Museums
        </button>
      </div>

      <div class="museum-cards">
        <div
          v-for="museum in displayedMuseums"
          :key="museum._id"
          class="museum-card"
        >
          <img
            class="museum-image"
            :src="museum.image || placeholderImg"
            alt="Museum Image"
          />
          <h2 class="museum-name">{{ museum.name }}</h2>
          <p class="museum-description"><strong>{{ museum.description }}</strong></p>
          <p class="museum-hours">
            <strong>General Opening Hours: </strong>
            <span
              v-for="(line, index) in museum.generalOpening.split(';')"
              :key="index"
            >
              {{ line.trim() }}<br />
            </span>
            <strong>Today's Opening Hours:</strong> {{ museum.today }}
          </p>
          <a
            v-if="museum.link"
            :href="museum.link"
            target="_blank"
            rel="noopener"
            class="museum-link"
          >
            Visit Website
          </a>
          <div class="spacer"></div>
          <div class="museum-buttons mt-2">
            <div class="top-buttons">
            <button @click="addToWishlist(museum)">Add to Wishlist</button>
            <button @click="addToTravelPlanner(museum)">Add to Travel Planner</button>
        </div>
            <button class="bottom-button" @click="openMuseumReview(museum)">Leave a Review</button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import placeholderImg from '@/assets/museumPlaceholder.png'
import MainLayout from '@/layouts/MainLayout.vue'
import { Api } from '@/Api'

export default {
  name: 'MuseumDetailsPage',
  components: { MainLayout },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const cityName = route.params.cityName
    const countryName = ref('')
    const activeTab = ref('history')
    const museums = ref({ history: [], art: [] })
    const placeholder = placeholderImg
    const currentUser = ref(null)
    const userReviews = ref([])
    const selectedMuseum = ref(null)
    const mainLayout = ref(null)
    const sortMuseum = ref('az')

    const fetchMuseums = async () => {
      try {
        const response = await Api.get(`/museums/${cityName}`
        )
        museums.value = {
          history: response.data.history || [],
          art: response.data.art || []
        }
        const countryFromApi = response.data.country || ''
        countryName.value =
          countryFromApi.charAt(0).toUpperCase() +
          countryFromApi.slice(1).toLowerCase()
      } catch (err) {
        console.error('Error fetching museums', err)
      }
    }

    const loadUserReviews = async () => {
      if (currentUser.value) {
        try {
          const response = await Api.get('/reviews')
          userReviews.value = response.data.filter(
            review => review.personName === currentUser.value.username
          )
        } catch (err) {
          console.error('Error loading user reviews', err)
        }
      }
    }

    const checkCurrentUser = async () => {
      try {
        const response = await Api.get('/users/me')
        currentUser.value = response.data.user
        if (currentUser.value) {
          await loadUserReviews()
        }
      } catch {
        currentUser.value = null
      }
    }

    const openMuseumReview = (museum) => {
      if (!currentUser.value) {
        alert('Please log in to leave a review')
        if (mainLayout.value) {
          mainLayout.value.openModal('login')
        }
        return
      }

      selectedMuseum.value = {
        name: museum.name,
        id: museum._id,
        city: cityName,
        country: countryName.value
      }

      if (mainLayout.value) {
        mainLayout.value.openModal('reviews')
      }
    }

    const submitMuseumReview = async (comment) => {
      if (!selectedMuseum.value) return

      try {
        if (!comment || comment.trim() === '') {
          if (mainLayout.value) {
            mainLayout.value.museumError = 'Please enter a comment'
          }
          alert('Please enter a comment')
          return
        }

        const personName = currentUser.value
          ? currentUser.value.username
          : 'Anonymous'

        await Api.post('/reviews', {
          personName,
          reviewType: 'museum',
          museumReview: comment,
          museumName: selectedMuseum.value.name,
          museumId: selectedMuseum.value.id,
          city: selectedMuseum.value.city,
          country: selectedMuseum.value.country
        })

        alert(`Thanks for your review of ${selectedMuseum.value.name}!`)

        if (mainLayout.value) {
          mainLayout.value.comment = ''
          mainLayout.value.museumError = ''
          mainLayout.value.closeModal()
        }

        await loadUserReviews()

        selectedMuseum.value = null
      } catch (err) {
        console.error('Error submitting review:', err)
        if (mainLayout.value) {
          mainLayout.value.museumError = err.response?.data?.message || 'Error occurred'
        }
      }
    }
    const deleteReview = async (reviewId) => {
      if (!confirm('Are you sure you want to delete this review?')) return

      try {
        await Api.delete(`/reviews/${reviewId}`)
        userReviews.value = userReviews.value.filter(r => r._id !== reviewId)
        alert('Review deleted successfully!')
      } catch (err) {
        console.error('Error deleting review:', err)
        alert('Failed to delete review.')
      }
    }

    const updateReview = async (reviewId, updatedData) => {
      try {
        await Api.patch(`/reviews/${reviewId}`, updatedData)
        alert('Review updated successfully!')
        await loadUserReviews()
      } catch (patchErr) {
        console.log('PATCH failed, trying PUT...', patchErr)

        try {
          await Api.put(`/reviews/${reviewId}`, updatedData)
          alert('Review updated successfully!')
          await loadUserReviews()
        } catch (putErr) {
          console.error('Both PATCH and PUT failed:', putErr)
          alert('Failed to update review. Please try again.')
        }
      }
    }

    const deleteAllReviews = async () => {
      if (!currentUser.value) return

      if (!confirm('Are you sure you want to delete all of your reviews? This cannot be undone.')) {
        return
      }

      try {
        const response = await Api.get('/reviews')
        const allUserReviews = response.data.filter(
          review => review.personName === currentUser.value.username
        )

        for (const review of allUserReviews) {
          await Api.delete(`/reviews/${review._id}`)
        }

        alert(`Successfully deleted ${allUserReviews.length} review(s)!`)
        await loadUserReviews()
      } catch (err) {
        console.error('Error deleting all reviews:', err)
        alert('Failed to delete all reviews.')
      }
    }

    const addToWishlist = async (museum) => {
      if (!currentUser.value) {
        alert('Please login to add to wishlist')
        return
      }

      try {
    const res = await Api.post(`/wishlists/${currentUser.value.username}`, {
      item: {
        name: museum.name,
        city: cityName,
        country: countryName.value
      }
    })

        alert(res.data.message)
      } catch (err) {
        console.error('Error adding to wishlist:', err)
        alert('Failed to add museum to wishlist.')
      }
    }

    const addToTravelPlanner = async (museum) => {
      if (!currentUser.value) {
        alert('Please login to add to your Travel Planner.')
        return
      }
      try {
        const res = await Api.post(`/travelPlannerLists/${currentUser.value.username}`, {
          item: {
            name: museum.name,
            city: cityName,
            country: countryName.value,
            lat: museum.latitude,
            lng: museum.longitude
          }
        })

        alert(res.data.message)
      } catch (err) {
        const msg = err.response?.data?.message || 'Failed to add museum to Travel Planner.'
        alert(msg)
      }
    }

    const displayedMuseums = computed(() => {
  const list = museums.value[activeTab.value] || []

  return [...list].sort((a, b) => {
    if (sortMuseum.value === 'az') {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })
})

    const goBack = () => router.push('/')

    onMounted(async () => {
      await checkCurrentUser()
      await fetchMuseums()
    })

    return {
      cityName,
      countryName,
      activeTab,
      displayedMuseums,
      addToWishlist,
      addToTravelPlanner,
      openMuseumReview,
      submitMuseumReview,
      deleteReview,
      updateReview,
      deleteAllReviews,
      goBack,
      placeholderImg: placeholder,
      currentUser,
      userReviews,
      selectedMuseum,
      sortMuseum,
      mainLayout
    }
  }
}
</script>

<style scoped>
.museum-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  background-color: #003b5c;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: #005083;
}

.page-title {
  color: #003b5c;
  text-align: center;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
}

.tabs button {
  background-color: #e0e0e0;
  border: none;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  min-width: 180px;
  max-width: 33%;
  color: #003b5c;
  text-align: center;
}

.tabs button.active {
  background-color: #003b5c;
  color: white;
}

.museum-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.museum-card {
  border: 1px solid #003b5c;
  border-radius: 10px;
  padding: 20px;
  width: calc(33% - 16px);
  min-width: 250px;
  max-width: 350px;
  text-align: center;
  background-color: #f9f9f9;
  box-sizing: border-box;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
}

.museum-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 59, 92, 0.2);
}

.museum-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.museum-name {
  font-size: 18px;
  color: #003b5c;
  margin-bottom: 8px;
}

.museum-description {
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}

.museum-hours {
  font-size: 14px;
  margin-bottom: 8px;
  color: #555;
}

.museum-link {
  display: inline-block;
  text-decoration: none;
  color: #ffc107;
  font-weight: 500;
  margin-bottom: 12px;
}

.museum-link:hover {
  text-decoration: underline;
}

.spacer {
  flex-grow: 1;
}

.museum-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.top-buttons {
  display: flex;
  gap: 8px;
}

.top-buttons button {
  flex: 1;
  padding: 8px 10px;
  font-size: 14px;
  background-color: white;
  color: #003b5c;
  border: 2px solid #003b5c;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.top-buttons button:hover {
  background-color: #003b5c;
  color: white;
}

.bottom-button {
  padding: 10px 12px;
  font-size: 16px;
  background-color: #ffc107;
  color: #003b5c;
  border: 2px solid #ffc107;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  width: 100%;
  font-weight: 600;
}

.bottom-button:hover {
  background-color: #e6ac00;
  border-color: #e6ac00;
}
</style>
