<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--路由链接-->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--缓存对应的路由组件对象-->
            <keep-alive>
              <!--路由器视图: 显示当前路由组件界面-->
              <router-view msg="abc"/><!--msg会传递给对应的路由组件-->
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {}
</script>


<style>

</style>