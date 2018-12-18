<template>
  <div class="app-wrapper">
    <div class="drawer-bg"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
  }
}
</script>