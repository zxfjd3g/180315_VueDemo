<template>
  <div>
    <mt-button type="primary" style="width: 100%" @click="test">测试mintui</mt-button>
  </div>
</template>

<script>

  import {Toast } from 'mint-ui';
  export default {

    methods: {
      test () {
        Toast('响应点击!')
      }
    }
  }
</script>


<style>

</style>