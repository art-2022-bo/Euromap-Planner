<template>
  <div class="main-layout-container" @click="handlePageClick">
    <!-- Sidebar -->
    <div v-if="showSidebar" class="sidebar-wrapper" @click.stop>
      <b-card class="sidebar-card">
        <b-list-group flush>
          <b-list-group-item>
            <router-link to="/" class="text-decoration-none">Home</router-link>
          </b-list-group-item>

          <div v-if="currentUser" class="user-info p-3">
            <p class="mb-1">
              <strong> Welcome, {{ currentUser.username }}</strong>!
            </p>

            <button @click="openModal('newAccount')" class="btn btn-sm btn-outline-secondary btn-skyblue mb-2">
            Create New Account
            </button>

            <button @click="openModal('changePassword')" class="btn btn-sm btn-outline-secondary btn-skyblue mb-2">
            Change Password
            </button>

            <button @click="openModal('deleteAccount')" class="btn btn-sm btn-lightred mb-2">
            Delete Account
            </button>

            <button @click="logout" class="btn btn-sm btn-outline-danger">
              Logout
            </button>
          </div>

          <div v-else>
            <b-list-group-item href="#" @click="openModal('login')">
              Log In
            </b-list-group-item>
            <b-list-group-item href="#" @click="openModal('signup')">
              Create Account
            </b-list-group-item>
          </div>

          <b-list-group-item href="#" @click="openModal('about')">
            About
          </b-list-group-item>

          <b-list-group-item href="#" @click="openModal('reviews')">
            Reviews
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/wishlist" class="text-decoration-none"
              >Wishlist</router-link
            >
          </b-list-group-item>

          <b-list-group-item>
            <router-link to="/travelPlannerLists" class="text-decoration-none">
              Travel Planner
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>

    <b-container fluid>
      <!-- Top bar -->
      <b-row class="align-items-center top-bar fixed-top-bar">
        <b-col cols="auto">
          <div class="hamburger" @click.stop="toggleSidebar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </b-col>

        <b-col cols="auto">
          <h1 class="site-name">EuroMap Planner</h1>
        </b-col>

        <b-col class="d-flex justify-content-end font-weight-bold">
          <span v-if="currentUser" class="user-welcome">
          <strong>Welcome, {{ currentUser.username }}!</strong>
        </span>
      </b-col>
      </b-row>
    </b-container>

    <div class="content-wrapper">
      <div class="main-content">
        <slot :showModal="showModal"></slot>
      </div>

      <!-- Website rating card -->
      <div class="rating-card-container">
        <b-card class="mt-4 website-rating-card">
          <div class="text-center">
            <h5>Rate our website:</h5>

            <div class="star-rating-wrapper mb-3">
              <div class="star-rating">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="star"
                  :class="{ filled: star <= websiteRating }"
                  @click="setWebsiteRating(star)"
                  @mouseover="hoverRating = star"
                  @mouseleave="hoverRating = 0"
                >
                  ★
                </span>
              </div>
            </div>

            <div v-if="websiteRating" class="mb-3">
              <span class="rating-text">
                You rated: {{ websiteRating }} star{{ websiteRating > 1 ? 's' : '' }}
              </span>
            </div>

            <div class="mb-2">
              <button
                class="submit-rating-btn"
                @click="submitWebsiteRating"
                :disabled="!websiteRating"
              >
                Submit Rating
              </button>
            </div>

            <p class="error mb-0">{{ websiteError }}</p>
          </div>
        </b-card>
      </div>
    </div>

    <!-- Modals -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">✕</button>

        <h3 v-if="modalMode === 'login'">Log In</h3>
        <h3 v-if="modalMode === 'signup'">Create Account</h3>
        <h3 v-if="modalMode === 'about'">About</h3>
        <h3 v-if="modalMode === 'reviews'">Reviews</h3>
        <h3 v-if="modalMode === 'newAccount'">Create New Account</h3>
        <h3 v-if="modalMode === 'changePassword'">Change Password</h3>

        <div v-if="modalMode === 'login'">
          <input v-model="username" type="text" placeholder="Username" />
          <input v-model="password" type="password" placeholder="Password" />
          <button @click="submit">Log In</button>
        </div>

        <div v-if="modalMode === 'signup'">
          <input v-model="username" type="text" placeholder="Username" />
          <input v-model="password" type="password" placeholder="Password" />
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <button @click="submit">Create Account</button>
        </div>

        <div v-if="modalMode === 'reviews'">
          <!-- Review submission box -->
          <div v-if="currentUser && (selectedMuseum || selectedCountry)">
            <p v-if="selectedMuseum">
              Leave a review for <strong>{{ selectedMuseum.name }}</strong> in
              {{ selectedMuseum.city }}, {{ selectedMuseum.country }}:
            </p>
            <p v-else-if="selectedCountry">
              Leave a museum review for {{ selectedCountry }}:
            </p>
            <p v-else>Leave a review:</p>

            <input
              v-model="comment"
              type="text"
              placeholder="Your review comment"
            />
            <div class="review-action-buttons">
              <button @click="$emit('submitReview', comment)">Submit Review</button>
              <!-- ADDED DELETE ALL BUTTON HERE -->
              <button
                v-if="currentUser && currentUser.role === 'admin'"
                @click="deleteAllReviews"
                class="delete-all-btn"
              >
                Delete All Reviews
              </button>
            </div>
            <p class="error">{{ museumError }}</p>
          </div>

            <div
            v-else-if="!currentUser && (selectedMuseum || selectedCountry)"
            class="login-prompt"
          >
            <p>
              Please
              <a href="#" @click="openModal('login')">log in</a>
              to leave a review.
            </p>
          </div>

          <!-- All the reviews section -->
          <div
            v-if="localUserReviews.length > 0"
            class="user-reviews-section"
          >
            <hr />
            <h5>All Reviews</h5>
            <div
              v-for="review in localUserReviews"
              :key="review._id"
              class="review-item"
            >
              <div class="review-content">
                <!-- Show who wrote the review -->
                <p class="review-author mb-2 d-flex align-items-center gap-2">
                  <strong>{{  review.personName  }}</strong>
                  <small class="text-muted">
                    {{ new Date(review.createdAt).toLocaleDateString() }}
                  </small>
                </p>

                <!-- Show museum review details -->
                <div v-if="review.reviewType === 'museum'">
                  <p v-if="review.museumName">
                    <strong>Museum:</strong> {{ review.museumName }}
                  </p>
                  <p v-if="review.city && review.country">
                    <strong>Location:</strong> {{ review.city }},
                    {{ review.country }}
                  </p>
                  <p v-else-if="review.country">
                    <strong>Country:</strong> {{ review.country }}
                  </p>
                  <p><strong>Type:</strong> Museum Review</p>
                  <div v-if="review._id === editingReviewId">
                    <input
                      v-model="editingComment"
                      type="text"
                      placeholder="Edit your museum review"
                      class="edit-input"
                    />
                    <div class="edit-actions">
                      <button
                        @click="saveEdit(review._id)"
                        class="btn btn-sm btn-success save-btn"
                      >
                        Save
                      </button>
                      <button
                        @click="cancelEditing"
                        class="btn btn-sm btn-secondary cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div v-else>
                    <p><strong>Comment:</strong> {{ review.museumReview }}</p>
                  </div>
                </div>

                <!-- Show website review details -->
                <div v-else-if="review.reviewType === 'website'">
                  <p><strong>Type:</strong> Website Rating</p>
                  <div v-if="review._id === editingReviewId">
                    <input
                      v-model="editingComment"
                      type="text"
                      placeholder="Edit your website review comment"
                      class="edit-input"
                    />
                    <input
                      v-model="editingRating"
                      type="number"
                      min="1"
                      max="5"
                      step="1"
                      placeholder="Rating (1-5)"
                      class="edit-rating-input"
                      @input="validateRating"
                    />
                    <div class="edit-actions">
                      <button
                        @click="saveEdit(review._id)"
                        class="btn btn-sm btn-success save-btn"
                      >
                        Save
                      </button>
                      <button
                        @click="cancelEditing"
                        class="btn btn-sm btn-secondary cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div v-else>
                    <p>
                      <strong>Rating:</strong> {{ review.websiteReview }} stars
                    </p>
                    <p v-if="review.museumReview">
                      <strong>Comment:</strong> {{ review.museumReview }}
                    </p>
                  </div>
                </div>

                <!--  other case for reviews without review type -->
                <div v-else>
                  <p v-if="review.museumName">
                    <strong>Museum:</strong> {{ review.museumName }}
                  </p>
                  <p v-if="review.country">
                    <strong>Country:</strong> {{ review.country }}
                  </p>
                  <p>
                    <strong>Type:</strong>
                    {{
                      review.websiteReview ? 'Website Rating' : 'Museum Review'
                    }}
                  </p>
                  <div v-if="review._id === editingReviewId">
                    <input
                      v-model="editingComment"
                      type="text"
                      :placeholder="
                        review.websiteReview
                          ? 'Edit website comment'
                          : 'Edit museum review'
                      "
                      class="edit-input"
                    />
                    <input
                      v-if="review.websiteReview"
                      v-model="editingRating"
                      type="number"
                      min="1"
                      max="5"
                      step="1"
                      placeholder="Rating (1-5)"
                      class="edit-rating-input"
                      @input="validateRating"
                    />
                    <div class="edit-actions">
                      <button
                        @click="saveEdit(review._id)"
                        class="btn btn-sm btn-success save-btn"
                      >
                        Save
                      </button>
                      <button
                        @click="cancelEditing"
                        class="btn btn-sm btn-secondary cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div v-else>
                    <p v-if="review.museumReview">
                      <strong>Comment:</strong> {{ review.museumReview }}
                    </p>
                    <p v-if="review.websiteReview">
                      <strong>Rating:</strong> {{ review.websiteReview }} stars
                    </p>
                  </div>
                </div>
              </div>

              <div v-if="currentUser && review.personName === currentUser.username" class="review-actions">
                <!-- Edit button -->
                <button
                  v-if="review._id !== editingReviewId"
                  @click="startEditing(review)"
                  class="btn btn-sm btn-outline-primary edit-btn"
                >
                  Edit
                </button>
                <!-- Delete button (ADDED) -->
                <button
                  @click="deleteReview(review._id)"
                  class="btn btn-sm btn-outline-danger delete-btn mt-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div v-else class="no-reviews">
            <p>No reviews yet.</p>
          </div>
        </div>

        <div v-if="modalMode === 'about'" class="about-box">
          <p>
            EuroMap Planner makes it easy to find the must-visit historical and
            art museums in Europe's capital cities. With smart recommendations
            and simple search tools, discovering culture becomes effortless. You
            can create and save your personal wishlist, organize your itinerary,
            and plan your visit using routes tailored to your preferred travel
            mode. Whether you walk, use public transit, or choose another
            option, EuroMap Planner helps you explore more smoothly and
            confidently. We're here to make your museum trips easier, more
            organized, and truly memorable.
          </p>
        </div>

        <div v-if="modalMode === 'newAccount'">
            <input
              v-model="currentPassword"
              type="password"
              placeholder="Current Password"
            />

            <input
              v-model="newUsername"
              type="text"
              placeholder="New Username"
            />

            <input
              v-model="newPassword"
              type="password"
              placeholder="New Password"
            />

            <input
              v-model="confirmNewPassword"
              type="password"
              placeholder="Confirm New Password"
            />

             <p class="error">
             This will permanently delete your wishlist and travel planner.
            </p>

            <button @click="submitNewAccount">
              Create New Account
            </button>
          </div>

          <div v-if="modalMode === 'changePassword'">
            <input type="password" v-model="currentPassword" placeholder="Please enter your Current Password" />
            <input type="password" v-model="newPassword" placeholder="Please enter your New Password" />
            <input type="password" v-model="confirmNewPassword" placeholder="Please confirm your New Password" />

            <button @click="submitChangePassword">Change Password</button>
          </div>

          <div v-if="modalMode === 'deleteAccount'">
            <p class="error">
              This action is irreversible! Your account, wishlist, and travel planner will be permanently deleted.
            </p>
            <input type="password" v-model="currentPassword" placeholder="Please enter your password" />
            <input type="password" v-model="confirmPassword" placeholder="Please Confirm your password" />

            <button @click="submitDeleteAccount" class="btn btn-danger">
              Delete Account
            </button>
          </div>

        <p class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'MainLayout',

  props: {
    selectedCountry: String,
    currentUser: Object,
    userReviews: Array,
    selectedMuseum: Object
  },

  data() {
    return {
      showSidebar: false,
      showModal: false,
      modalMode: '',
      username: '',
      password: '',
      confirmPassword: '',
      comment: '',
      websiteRating: 0,
      hoverRating: 0,
      errorMessage: '',
      museumError: '',
      websiteError: '',
      mapBlur: false,
      editingReviewId: null,
      editingComment: '',
      editingRating: 0,
      localUserReviews: [],
      currentPassword: '',
      newUsername: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  },

  computed: {
    userHasReviews() {
      if (!this.currentUser) return false
      return this.localUserReviews.some(
        review => review.personName === this.currentUser.username
      )
    }
  },

  watch: {
    showModal: {
      handler(newVal) {
        if (newVal && this.modalMode === 'reviews') {
          this.loadUserReviews()
        }
      }
    },

    currentUser: {
      immediate: true,
      handler(newUser) {
        if (newUser) {
          this.loadUserReviews()
        } else {
          // Don't clear reviews when a user logs out and keep showing all reviews
        }
      }
    }
  },

  async mounted() {
    try {
      const response = await Api.get('/users/me')
      this.$emit('update:currentUser', response.data.user)
    } catch {
      this.$emit('update:currentUser', null)
    }
  },

  methods: {
    async safeApiPost(url, data) {
      try {
        const res = await Api.post(url, data)
        return { data: res.data }
      } catch (err) {
        if (err.response) {
        // Expected backend error
          return { error: err.response.data.message, status: err.response.status }
        } else {
        // Unexpected errors
          console.error(err)
          return { error: 'An unexpected error occurred', status: 500 }
        }
      }
    },

    handlePageClick() {
      if (this.showSidebar) {
        this.showSidebar = false
      }
    },

    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },

    openModal(mode) {
      this.modalMode = mode
      this.showModal = true
      this.errorMessage = ''
      this.museumError = ''
      this.websiteError = ''
      this.username = ''
      this.password = ''
      this.confirmPassword = ''
      this.comment = ''
      this.currentPassword = ''
      this.newUsername = ''
      this.newPassword = ''
      this.confirmNewPassword = ''

      this.$emit('blur-map', true)
    },

    closeModal() {
      this.showModal = false
      this.$emit('blur-map', false)
    },

    setWebsiteRating(rating) {
      this.websiteRating = rating
    },

    async submitWebsiteRating() {
      try {
        if (!this.currentUser) {
          this.websiteError = 'Please log in to rate the website'
          return
        }

        if (!this.websiteRating) {
          this.websiteError = 'Please select a rating'
          return
        }

        const personName = this.currentUser
          ? this.currentUser.username
          : 'Anonymous'

        await Api.post('/reviews', {
          personName,
          reviewType: 'website',
          websiteReview: this.websiteRating
        })

        alert('Thanks for the rating!')
        this.websiteRating = 0
        this.websiteError = ''

        await this.loadUserReviews()
      } catch (err) {
        this.websiteError = err.response?.data?.message || 'Error occurred'
      }
    },

    async submit() {
      try {
        if (this.modalMode === 'about' || this.modalMode === 'reviews') return

        // LOGIN
        if (this.modalMode === 'login') {
          if (!this.username || !this.password) {
            this.errorMessage = 'Please fill in all login fields.'
            return
          }

          const { data, error } = await this.safeApiPost('/users/logIn', {
            username: this.username,
            password: this.password
          })

          if (data) {
            this.$emit('update:currentUser', data.user)
            if (!data.success) {
              this.errorMessage = data.message
              return
            }
            alert(data.message)
            this.closeModal()
          } else {
            // expected backend errors like wrong password or user not found
            this.errorMessage = error
          }
        }

        // SIGNUP
        if (this.modalMode === 'signup') {
          if (!this.username || !this.password || !this.confirmPassword) {
            this.errorMessage = 'Please fill in all signup fields.'
            return
          }

          if (this.password !== this.confirmPassword) {
            this.errorMessage = 'Passwords do not match.'
            return
          }

          if (this.password.length < 10 || (this.password.match(/[0-9]/g) || []).length !== 2) {
            this.errorMessage = 'Password must be at least 10 characters and contain exactly 2 numbers.'
            return
          }

          const { data, error } = await this.safeApiPost('/users/signUp', {
            username: this.username,
            password: this.password
          })

          if (data) {
            if (!data.success) {
              this.errorMessage = data.message
              return
            }
            alert(data.message)

            this.closeModal()
          } else {
            this.errorMessage = error
          }
        }
      } catch (err) {
        // fallback just in case
        console.error(err)
        this.errorMessage = 'An unexpected error occurred.'
      }
    },

    async logout() {
      try {
        await Api.post('/users/logout')
        this.$emit('update:currentUser', null)
        this.username = ''
        this.password = ''
        alert('Logged out successfully')
      } catch (error) {
        console.error('Logout error:', error)
      }
    },

    async loadUserReviews() {
      try {
        const response = await Api.get('/reviews')
        this.localUserReviews = response.data

        // Sort by newest first
        this.localUserReviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      } catch (err) {
        console.error('Error loading reviews', err)
      }
    },

    startEditing(review) {
      this.editingReviewId = review._id
      this.editingComment = review.museumReview || ''
      this.editingRating = review.websiteReview ? parseInt(review.websiteReview) : 0
    },

    cancelEditing() {
      this.editingReviewId = null
      this.editingComment = ''
      this.editingRating = 0
    },

    validateRating() {
      if (this.editingRating) {
        this.editingRating = Math.round(parseFloat(this.editingRating))

        if (this.editingRating < 1) this.editingRating = 1
        if (this.editingRating > 5) this.editingRating = 5
      }
    },

    async saveEdit(reviewId) {
      const currentReview = this.localUserReviews.find(r => r._id === reviewId)
      if (!currentReview) {
        alert('Review not found')
        return
      }

      if (this.editingRating) {
        this.editingRating = Math.round(parseFloat(this.editingRating))
        if (this.editingRating < 1) this.editingRating = 1
        if (this.editingRating > 5) this.editingRating = 5
      }

      try {
        if (currentReview.reviewType === 'website') {
          console.log('Using PUT for website review update')

          const putData = {
            personName: currentReview.personName,
            reviewType: 'website',
            websiteReview: this.editingRating || currentReview.websiteReview
          }

          if (this.editingComment !== undefined) {
            putData.museumReview = this.editingComment
          } else if (currentReview.museumReview) {
            putData.museumReview = currentReview.museumReview
          }

          console.log('PUT data:', putData)
          await Api.put(`/reviews/${reviewId}`, putData)
          console.log('PUT request successful')
        } else if (currentReview.reviewType === 'museum') {
          console.log('Using PATCH for museum review update')

          const patchData = {}

          if (this.editingComment !== undefined && this.editingComment !== currentReview.museumReview) {
            patchData.museumReview = this.editingComment
          }

          if (Object.keys(patchData).length > 0) {
            console.log('PATCH data:', patchData)
            await Api.patch(`/reviews/${reviewId}`, patchData)
            console.log('PATCH request successful')
          } else {
            alert('No changes made')
            this.cancelEditing()
            return
          }
        } else {
          // Fallback for reviews without review type
          console.log('Review type is not specified, using PUT as default')

          const putData = {
            personName: currentReview.personName,
            reviewType: currentReview.websiteReview ? 'website' : 'museum',
            ...currentReview
          }

          if (currentReview.websiteReview && this.editingRating) {
            putData.websiteReview = this.editingRating
          }
          if (this.editingComment) {
            putData.museumReview = this.editingComment
          }

          await Api.put(`/reviews/${reviewId}`, putData)
        }

        alert('Review updated successfully!')
        await this.loadUserReviews()
        this.cancelEditing()
      } catch (err) {
        console.error('Update error:', err.response?.data)
        const errorMsg = err.response?.data?.error || 'Failed to update review'
        alert(`Error: ${errorMsg}`)
      }
    },

    async deleteReview(reviewId) {
      // Find the review to check ownership
      const reviewToDelete = this.localUserReviews.find(r => r._id === reviewId)

      // Check if current user owns this review
      if (!this.currentUser || !reviewToDelete ||
          this.currentUser.username !== reviewToDelete.personName) {
        alert('You can only delete your own reviews')
        return
      }

      const confirmed = window.confirm('Are you sure you want to delete this review?')
      if (!confirmed) return

      try {
        await Api.delete(`/reviews/${reviewId}`)
        alert('Review deleted successfully!')

        // Remove from local array
        this.localUserReviews = this.localUserReviews.filter(r => r._id !== reviewId)
      } catch (err) {
        console.error('Delete error:', err)
        const errorMsg = err.response?.data?.error || 'Failed to delete review'

        if (err.response?.status === 403) {
          alert('Permission denied: ' + errorMsg)
        } else {
          alert('Error: ' + errorMsg)
        }
      }
    },

    async deleteAllReviews() {
      if (!this.currentUser) {
        alert('You must be logged in to delete reviews')
        return
      }

      if (this.currentUser.role !== 'admin') {
        alert('Only administrators can delete all reviews')
        return
      }

      const confirmed = window.confirm(' WARNING: This will delete all of reviews from the database. Are you absolutely sure?')
      if (!confirmed) return

      try {
        await Api.delete('/reviews')
        alert('All reviews deleted successfully!')
        await this.loadUserReviews()
      } catch (err) {
        console.error('Delete all error:', err)
        alert('Failed to delete all reviews: ' + (err.response?.data?.error || 'Unknown error'))
      }
    },

    async submitNewAccount() {
      try {
        this.errorMessage = ''

        const res = await Api.put('/users/createNewAccount', {
          currentPassword: this.currentPassword,
          newUsername: this.newUsername,
          newPassword: this.newPassword,
          confirmNewPassword: this.confirmNewPassword
        })

        if (!res.data.success) {
          this.errorMessage = res.data.message
          return
        }

        // success only
        alert(res.data.message)

        this.$emit('update:currentUser', {
          ...this.currentUser,
          username: this.newUsername
        })

        this.closeModal()
      } catch (err) {
        this.errorMessage =
      err.response?.data?.message || 'Failed to create new account'
      }
    },

    async submitChangePassword() {
      try {
        const res = await Api.patch('/users/changePassword', {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
          confirmNewPassword: this.confirmNewPassword
        })

        if (!res.data.success) {
          this.errorMessage = res.data.message
          return
        }

        alert(res.data.message)
        this.closeModal()
      } catch (err) {
        this.errorMessage = err.response?.data?.message || 'Failed to change password'
      }
    },

    async submitDeleteAccount() {
      try {
        if (!this.currentPassword || !this.confirmPassword) {
          this.errorMessage = 'Please fill in both password fields'
          return
        }

        const confirmed = window.confirm('Are you sure you want to permanently delete your account?')
        if (!confirmed) return

        const res = await Api.delete('/users/deleteUser', {
          data: {
            password: this.currentPassword,
            confirmPassword: this.confirmPassword
          }
        })

        if (!res.data.success) {
          this.errorMessage = res.data.message
          return
        }

        alert(res.data.message)
        this.logout() // logs the user out after deletion
        this.closeModal()
      } catch (err) {
        this.errorMessage = err.response?.data?.message || 'Failed to delete account'
      }
    }

  }
}
</script>

<style>

html,
body {
  overflow-x: hidden;
}

.main-layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-content {
  flex: 1;
  padding-top: 70px;
}

.rating-card-container {
  margin-top: auto;
}

.blur {
  filter: blur(5px);
  transition: filter 0.3s ease;
}

/* Top bar styling */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #89d4e8;
  border-radius: 4px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1400;
  padding: 0 16px;
}
.fixed-top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1400;
}

/* Hamburger menu */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
  z-index: 1400;
  position: relative;
}

.hamburger span {
  display: block;
  height: 3px;
  background-color: #003b5c;
  border-radius: 2px;
}

/* Site name styling */
.site-name {
  font-size: 20px;
  font-weight: bold;
  color: #003b5c;
  margin: 0;
  line-height: 1;
}

/* User welcome text */
.user-welcome {
  color: #003b5c;
  font-weight: 500;
}

/* User info in sidebar */
.user-info {
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.sidebar-wrapper {
  position: fixed;
  top: 10px;
  left: 20px;
  width: 220px;
  height: 100vh;
  padding-top: calc(60px + env(safe-area-inset-top));
  z-index: 1200;

  border: none;
  border-radius: 0;
  overflow-y: auto;
  box-sizing: border-box;
}

.sidebar-card {
  width: 100%;
  height: 100%;
  background: white;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 0;
  box-sizing: border-box;
}

/* Sidebar for medium and larger screens (>=768px) */
@media (min-width: 768px) {
  .sidebar-card {
    background: white;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
  }

}

/* Small screens (<768px) */
@media (max-width: 767.98px) {
  .sidebar-card {
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background: white;
    overflow-y: auto;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .sidebar-card.hidden {
    transform: translateX(-250px); /* slide out left */
    opacity: 0;
    pointer-events: none;
  }
}

/* Small centered floating overlay */
.modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  max-width: 450px;
  min-height: 420px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  z-index: 1000;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
}

/* Actual modal card */
.modal-content {
  background: white;
  width: 90%;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  position: relative;
  max-height: 70vh;
  overflow-y: auto;
}

/* Inputs with nice rounding */
.modal-content input {
  width: 90%;
  margin: 8px 0;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

/* Smaller rounded button */
.modal-content button {
  margin-top: 12px;
  padding: 6px 12px;
  border-radius: 10px;
  border: none;
  background-color: #89d4e8;
  color: #003b5c;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
}

.modal-content button:hover {
  background-color: #7bc6d9;
}

/* Star Rating Styles */
.star-rating-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.star-rating {
  display: inline-block;
  font-size: 0;
  margin: 10px 0;
}

.star {
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s ease;
  display: inline-block;
  padding: 0 2px;
  position: relative;
  z-index: 1;
}

.star.filled {
  color: #ffc107;
}

.star:hover {
  color: #ffc107;
  transform: scale(1.1);
}

.star-rating:hover .star {
  color: #ffc107;
}

.star-rating .star:hover ~ .star {
  color: #ccc;
}

/* Website rating card styling*/
.website-rating-card {
  border: 2px solid #89d4e8 !important;
  border-radius: 15px !important;
  background: linear-gradient(135deg, #f8fdff 0%, #ffffff 100%) !important;
}

.website-rating-card .card-body {
  padding: 25px !important;
}

.website-rating-card .card-body h5 {
  color: #003b5c;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Rating text styles */
.rating-text {
  margin: 8px 0;
  color: #003b5c;
  font-weight: 600;
  font-size: 1rem;
  background-color: #89d4e8;
  padding: 6px 16px;
  border-radius: 15px;
  display: inline-block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Submit rating button styles */
.submit-rating-btn {
  background-color: #89d4e8 !important;
  color: #003b5c !important;
  border: none !important;
  padding: 8px 24px !important;
  border-radius: 20px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  margin-top: 15px !important;
}

.submit-rating-btn:hover:not(:disabled) {
  background-color: #7bc6d9 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
}

.submit-rating-btn:disabled {
  background-color: #ccc !important;
  cursor: not-allowed !important;
  opacity: 0.6;
  transform: none !important;
  box-shadow: none !important;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 6px;
}

.close-btn {
  position: absolute;
  top: 4px;
  left: 2px;
  all: unset;
  background: rgba(255, 255, 255, 0.25) !important;
  backdrop-filter: blur(3px);
  color: #333 !important;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.5);
}

.about-box {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  font-size: 1rem;
}

.user-reviews-section {
  margin-top: 15px;
  padding: 15px;
  background-color: #f1f5f9;
  border-radius: 12px;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid #cbd5e1;
}

.review-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  min-height: 120px;
}

.review-content {
  flex: 1;
  margin-right: 15px;
}

.review-content p {
  margin-bottom: 6px;
  font-size: 0.9rem;
  color: #334155;
}

.review-content small {
  color: #64748b;
}

.review-actions {
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-end;
  min-width: 70px;
}

.edit-btn,
.save-btn,
.cancel-btn {
  min-width: 60px;
  padding: 6px 10px;
  font-size: 12px;
}

.edit-input {
  width: 100%;
  padding: 6px;
  margin-bottom: 8px;
  border: 1px solid #89d4e8;
  border-radius: 4px;
  font-size: 14px;
}

.edit-rating-input {
  width: 70px;
  padding: 6px;
  margin-bottom: 8px;
  border: 1px solid #89d4e8;
  border-radius: 4px;
  font-size: 14px;
}

.edit-actions {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.no-reviews {
  padding: 15px;
  color: #666;
  font-style: italic;
}

.login-prompt {
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
  margin: 10px 0;
}

.login-prompt a {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.login-prompt a:hover {
  color: #0056b3;
}

.review-author {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

/* Sidebar text color */
.sidebar-card .list-group-item,
.sidebar-card .list-group-item a {
  color: #003b5c !important;
  font-weight: 500;
}

/* Remove underline from router-links */
.sidebar-card .list-group-item a {
  text-decoration: none;
}

/* Hover effect */
.sidebar-card .list-group-item:hover,
.sidebar-card .list-group-item:hover a {
  background-color: #e6f4f8;
  color: #003b5c !important;
}

.login-prompt {
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
  margin: 10px 0;
}

.login-prompt a {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.login-prompt a:hover {
  color: #0056b3;
}

.btn-skyblue {
  color: #003b5c !important;
  border-color: #3399ff !important;
  background-color: transparent !important;
}

.btn-skyblue:hover {
  background-color: #1a7ccc !important;
  color: #ffffff !important;
  border-color: #1a7ccc !important;
}

.btn-lightred {
  color: #b30000 !important;
  border-color: #b30000 !important;
  background-color: transparent !important;
}

.btn-lightred:hover {
  color: #ffffff !important;
  border-color: #ff6666 !important;
  background-color: #ff6666 !important;
}

/* Added styles for delete button */
.delete-btn {
  margin-top: 5px;
  font-size: 12px;
  padding: 4px 8px;
}

.delete-btn:hover {
  background-color: #dc3545;
  color: white;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}

/*Review action buttons container */
.review-action-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}

/*Delete all button styles */
.delete-all-btn {
  background-color: #dc3545 !important;
  color: white !important;
  border: none !important;
  padding: 6px 12px !important;
  border-radius: 10px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: 0.2s !important;
  font-size: 14px !important;
}

.delete-all-btn:hover {
  background-color: #c82333 !important;
}

</style>
