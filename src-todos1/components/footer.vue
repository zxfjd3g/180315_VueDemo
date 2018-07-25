<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{totalSize}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearAllComplete">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      clearAllComplete: Function,
      selectAll: Function
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
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>