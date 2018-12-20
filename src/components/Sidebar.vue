<template>
    <el-menu
      :router="true"
      :default-active="$route.path"
      text-color="#000"
      active-text-color="#ffd04b">
      
      <el-menu-item v-for="route in routes" :index="route.path" :key="route.path">
        <i :class="route.icon"></i>
        {{ route.name }}
      </el-menu-item>

    </el-menu>

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