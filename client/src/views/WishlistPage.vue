<template>
  <MainLayout 
  ref="mainLayout"
  :currentUser="currentUser" 
  @update:currentUser="currentUser = $event"
>
  
    <div class="wishlist-content text-center">
      <template v-if="currentUser">
        <h2>Your Wishlist</h2>

        <button 
          v-if="wishlist.length" 
          class="delete-all-btn" 
          @click="deleteAllWishlist"
        >
          Delete All
        </button>

        <div v-if="wishlist.length" class="wishlist-items mt-3">
          <div 
            v-for="(item, index) in wishlist" 
            :key="index" 
            class="wishlist-item"
          >
          <div class="wishlist-text">
            <div class="wishlist-name">{{ item.name }}</div>
             <div class="wishlist-location">
            {{ item.city }}, {{ item.country }}
            </div>
          </div>
            <button class="delete-btn" @click="deleteWishlistItem(item.name)">
              🗑️
            </button>
          </div>
        </div>

        <p v-else>No items in your wishlist yet.</p>
      </template>

      <template v-else>
        <div class="not-logged-in">
          <p>Please login to access your wishlist.</p>
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

export default {
  name: 'WishlistPage',
  components: { MainLayout },
  data() {
    return {
      currentUser: null,
      wishlist: []
    }
  },
  async mounted() {
    // Load current user
    try {
      const res = await Api.get('/users/me')
      this.currentUser = res.data.user

      if (this.currentUser) {
        await this.loadWishlist()
      }
    } catch (err) {
      console.error('Error loading current user:', err)
    }
  },
  methods: {
    async loadWishlist() {
      try {
        const res = await Api.get(`/wishlists/${this.currentUser.username}`)
        this.wishlist = res.data.wishlist || []
      } catch (err) {
        console.error('Error loading wishlist:', err)
      }
    },
    async deleteWishlistItem(name) {
      if (!confirm(`Delete "${name}" from your wishlist?`)) return
      try {
        await Api.delete(`/wishlists/${this.currentUser.username}`, {
          data: { name }
        })
        this.wishlist = this.wishlist.filter(item => item.name !== name)
      } catch (err) {
        console.error('Error deleting item:', err)
      }
    },
    async deleteAllWishlist() {
      if (!confirm('Delete all items from your wishlist?')) return
      try {
        await Api.delete(`/wishlists/${this.currentUser.username}/all`)
        this.wishlist = []
      } catch (err) {
        console.error('Error deleting all wishlist items:', err)
      }
    },
    openLoginModal() {
      // Use the ref to MainLayout to open the login modal
      this.$refs.mainLayout.openModal('login')
    },
    openSignupModal() {
      this.$refs.mainLayout.openModal('signup')
    }

  }
}
</script>

<style >
.wishlist-content {
  padding: 40px;
  color: #003b5c;
}

.wishlist-content h2 {
  font-size: 34px;
  margin-bottom: 12px;
}

.wishlist-items {
  margin-top: 20px;
}

.wishlist-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  background-color: #f8fafc;
}

.delete-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px; 
}

.delete-btn:hover {
  color: #ff4d4d;
}

.delete-all-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.delete-all-btn:hover {
  background-color: #e60000;
}

.not-logged-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh; /* center vertically */
  color: #003b5c;
}

.not-logged-in p {
  font-size: 18px;
  margin-bottom: 20px;
}

.not-logged-in button {
  margin: 5px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: #89d4e8;
  color: #003b5c;
}

.not-logged-in button:hover {
  background-color: #7bc6d9;
}

.wishlist-text {
  text-align: left;
}

.wishlist-name {
  font-weight: 600;
  font-size: 16px;
}

.wishlist-location {
  font-size: 14px;
  color: #475569;
  margin-top: 4px;
}


</style>