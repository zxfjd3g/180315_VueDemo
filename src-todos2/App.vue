<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo"/>
      <!--<todo-header/>-->
      <List :todos="todos"/>
      <TodoFooter>
        <input type="checkbox" v-model="checkAll" slot="all"/>
        <span slot="size">已完成{{completeSize}} / 全部{{totalSize}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="clearAllComplete" slot="clear">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
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

    computed: {
      totalSize () {
        return this.todos.length
      },
      completeSize () {
        return this.todos.reduce((preSize, todo) => preSize+ (todo.complete?1:0), 0)
      },

      checkAll: {
        get () {
          return this.completeSize===this.totalSize && this.totalSize>0
        },

        set (value) { // value是boolean值
          this.selectAll(value)
        }
      }
    },

    mounted () {
      // 读取local中保存的todos (todos_key)
      this.todos = storageUtil.readTodos()
      // 订阅消息(deleteTodo)
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
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