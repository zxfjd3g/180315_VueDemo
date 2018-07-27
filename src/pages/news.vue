<template>
  <ul>
    <li v-for="(news, index) in newList" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        newList: ['news01', 'news02', 'news04']
      }
    }
  }
</script>

<style>

</style>