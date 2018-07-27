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
      debugger
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
    }
  }
</script>

<style>

</style>