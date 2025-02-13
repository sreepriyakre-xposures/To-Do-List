<template>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <!-- ✅ Emit event to toggle task -->
        <input 
          type="checkbox" 
          :checked="task.completed" 
          @change="$emit('toggle-task', task.id)" 
        />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="$emit('remove-task', task.id)">X</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .task-list {
    list-style: none;
    padding: 0;
    
li{
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f9f9f9;
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
  }
  li input[type=checkbox] {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    accent-color: #1f8908;
}
span {
    flex-grow: 1;
    font-size: 16px;
    text-align: left;
}
}
  .task-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  