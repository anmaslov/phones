<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ message }}</div>
    <div class="dashboard-text">roles:</div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  computed: {
    message() {
      return 'Тестовое сообщние'
    }
  }
}
</script>
