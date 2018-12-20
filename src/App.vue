<template>
  <div id="app">
    
    <el-container>
      <el-aside width="300px">
        <sidebar />
      </el-aside>
      <el-main>
          <router-view/>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
      Sidebar
    }
}
</script>

<style>

</style>
