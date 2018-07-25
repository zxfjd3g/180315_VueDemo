<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <!--<todo-header/>-->
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :clearAllComplete="clearAllComplete" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import List from './components/list.vue'
  import Footer from './components/footer.vue'
  import storageUtil from './utils/storageUtil'

  export default { // Vue中能写哪些配置这里就能写哪些

    data () { // 只能使用函数形式
      return {
        todos: []
      }
    },

    mounted () {
      // 读取local中保存的todos (todos_key)
      this.todos = storageUtil.readTodos()
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 清除所有已完成的todo
      clearAllComplete () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },

      // 全选/全不选
      selectAll (isSelectAll) {
        this.todos.forEach(todo => todo.complete = isSelectAll)
      }
    },

    watch: {
      todos: {
        deep: true, // 尝试监视
        /*handler: function (value) {// todos最新的值
          // 将value的json数据保存到local
          storageUtil.saveTodos(value)
        }*/
        handler: storageUtil.saveTodos
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