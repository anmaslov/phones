<template>
    <div class="base">
        <p>Привет, {{ str }}</p>
        <p>Привет, {{ greeting }}</p>
        <router-view />
    </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
      return {
          greeting: 'Super-puper test'
      }
  },
  props: {
    str: String
  }
}
</script>