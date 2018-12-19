<template>
  <div class="sidebar">
    <ul id="menu">
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    routes() {
      return this.$router.options.routes.filter(function (route) {
        return !route.hidden
      })
      //return this.$router.options.routes
    }
  }
}
</script>