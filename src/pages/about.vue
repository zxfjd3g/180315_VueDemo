<template>
  <div>
    <h2>About</h2>
    <p>{{msg}}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    // 声明接收属性
    props: {
      msg: String
    }
  }
</script>

<style>

</style>