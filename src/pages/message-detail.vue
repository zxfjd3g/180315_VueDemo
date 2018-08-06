<template>
  <ul>
    <li>id: {{messageDetail.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
  const allMessageDetails = [
    {id: 1, title: 'message001', content: 'message cotnent001'},
    {id: 3, title: 'message003', content: 'message cotnent003'},
    {id: 5, title: 'message005', content: 'message cotnent005'}
  ]
  export default {
    data () {
      return {
        messageDetail: {}
      }
    },

    mounted () { // 如果是同路由切换(只是改变了参数, 组件对象是同一个, 不会再调用mounted())
      // debugger
      // 得到请求参数中的id
      const id = this.$route.params.id*1
      // 从allMessageDetails中找到对应的mesageDetail
      const messageDetail = allMessageDetails.find(md => md.id===id)
      // 更新数据
      this.messageDetail = messageDetail
    },

    watch: {
      '$route': function (value) { // 切换了路由(只是参数变了)
        const id = value.params.id*1
        // 从allMessageDetails中找到对应的mesageDetail
        const messageDetail = allMessageDetails.find(md => md.id===id)
        // 更新数据
        this.messageDetail = messageDetail
      }
    },

    // 当前组件对象被创建前调用, 不能直接访问this(不是组件对象)
    // 但可以通过next(vm => {}), 在回调函数中访问组件对象
    beforeRouteEnter (to, from, next) {
      console.log('md准备进入了 beforeRouteEnter()', from)
      next() // 只有执行next()才能真正进入当前组件
    },
    // 当前组件对象将要更新前调用, 可以访问this
    beforeRouteUpdate (to, from, next) {
      console.log('md更新 beforeRouteUpdate', from)
      next()
    },
    // 当前组件离开前调用, 可以访问this
    beforeRouteLeave (to, from, next) {
      console.log('md要离开了 beforeRouteLeave', from)
      next() // 只有执行next()才能最终离开当前组件
    }
  }
</script>

<style>

</style>