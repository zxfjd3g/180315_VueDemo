<template>
  <div>
    <h2 v-if="!repoName">loading</h2>
    <p v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default { // Vue中能写哪些配置这里就能写哪些
    data () {
      return {
        repoName: '',
        repoUrl: ''
      }
    },

    async mounted () {
      // 发送异步ajax请求
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      // 使用vue-resource
      /*this.$http.get(url).then(
        response => {
          const result = response.data
          const mostStarRepo = result.items[0]
          // 更新状态数据
          this.repoName = mostStarRepo.name
          this.repoUrl = mostStarRepo.html_url
        },
        response => {
          console.log('请求失败!')
        }
      )*/
      
      // 使用axios
      /*axios.get(url)
        .then(
          response => {
            const result = response.data
            const mostStarRepo = result.items[0]
            // 更新状态数据
            this.repoName = mostStarRepo.name
            this.repoUrl = mostStarRepo.html_url
          }
        )
        .catch(error => {
          console.log('请求失败2')
        })*/

      const response = await axios.get(url)
      const result = response.data
      const mostStarRepo = result.items[0]
      // 更新状态数据
      this.repoName = mostStarRepo.name
      this.repoUrl = mostStarRepo.html_url
    }
  }
</script>


<style>

</style>