<template>
    <div class="task-input">
      <input v-model="newTask" placeholder="Add your task" />
      <button @click="emitTask">Add</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: ''
      };
    },
    methods: {
      emitTask() {
        if (this.newTask.trim()) {
          this.$emit('add-task', this.newTask);
          this.newTask = '';
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>




  .task-input {
    display: flex;
    gap: 10px;

    button{
  background: #00be23;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    width:100%;
}
input{
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    font-size: 16px;
    border-radius: 25px;
}
  }
  </style>
  