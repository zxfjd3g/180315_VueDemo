<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <!--<todo-header/>-->
      <List :todos="todos" />
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import List from './components/list.vue'
  import Footer from './components/footer.vue'

  export default { // Vue中能写哪些配置这里就能写哪些

    data () { // 只能使用函数形式
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: true},
          {title: '打代码', complete: false},
        ]
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      }
    },

    components: { // 注册组件(指定组件标签名)
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    }
  }
</script>


<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>