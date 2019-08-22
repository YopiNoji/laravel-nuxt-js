<template>
  <div>
    <nav class="nav">
      <ul class="nav-items">
        <li class="nav-item">
          <nuxt-link class="navbar-brand" to="/">
            Home
          </nuxt-link>
        </li>
        <li v-if="authenticated" class="nav-item">
          <nuxt-link class="nav-link" to="/dashboard">
            Dashboard
          </nuxt-link>
        </li>
        <li v-if="authenticated" class="nav-item">
          <a href="javascript:retrun false;" @click="signOut()">
            SignOut
          </a>
        </li>
        <li v-if="!authenticated" class="nav-item">
          <nuxt-link class="nav-link" to="/auth/login">
            Login
          </nuxt-link>
        </li>
        <li v-if="!authenticated" class="nav-item">
          <nuxt-link class="nav-link" to="/auth/register">
            Register
          </nuxt-link>
        </li>
        <li v-if="authenticated" class="nav-item">
          <nuxt-link class="nav-link" to="/Post">
            Post
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <section class="container">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.nav {
  position:fixed;
  top: 40%;
  right: 5%;
  width: 100px;
}
.nav-items {
}
.nav-item {
    display: block;
    margin: 25px;
}

.container{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    padding: 20px;
    border: 1px solid #ccc;
}
</style>>
