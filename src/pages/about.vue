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
    },

    beforeCreate() {
      console.log('about beforeCreate()')
    },
    
    mounted () {
      console.log('mounted()')
    },
    // 当前组件对象被创建前调用, 不能直接访问this(不是组件对象)
    // 但可以通过next(vm => {}), 在回调函数中访问组件对象
    beforeRouteEnter (to, from, next) {
      console.log('about准备进入了 beforeRouteEnter()', from)
      // next() // 只有执行next()才能真正进入当前组件
      next(comp => {
        console.log('about next compoent', comp.msg)
      })
    },
    // 当前组件对象将要更新前调用, 可以访问this
    beforeRouteUpdate (to, from, next) {
      console.log('about beforeRouteUpdate', from)
    },
    // 当前组件离开前调用, 可以访问this
    beforeRouteLeave (to, from, next) {
      console.log('about要离开了 beforeRouteLeave', from)
      next() // 只有执行next()才能最终离开当前组件
    }
  }
</script>

<style>

</style>