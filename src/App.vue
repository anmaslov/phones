<template>
  <div id="app">
    
    <el-container class="container">
      <el-aside width="300px">
        <sidebar />
      </el-aside>
      <el-main>
        <BreadCrumb />
        <el-col :span="24">
          <router-view/>
        </el-col>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import BreadCrumb from './components/BreadCrumb'

export default {
  name: 'app',
  components: {
      Sidebar,
      BreadCrumb
    }
}
</script>

<style>
#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
</style>
