<template>
  <div class="home-container">
    <h2>To-Do List (Component-based)</h2>
    <TaskInput @add-task="addTask" />
    <TaskList :tasks="tasks" @remove-task="removeTask" @toggle-task="toggleTask" />
  </div>
</template>

<script>
import TaskInput from '@/components/TaskInput.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  components: {
    TaskInput,
    TaskList
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask(taskText) {
      this.tasks.unshift({ id: Date.now(), text: taskText, completed: false });
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    toggleTask(taskId) {
      // ✅ Debugging logs
      console.log("Task ID received:", taskId);

      // ✅ Find task and update reactivity
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        console.log("Updated Task:", task);
      }

      console.log("Updated tasks:", this.tasks);
    }
  }
};
</script>


<style lang="scss" scoped>

.home-container{
  border: 1px solid #ccc;
    padding: 20px;
    border-radius: 6px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 50px auto;
    text-align: center;
    overflow-x: hidden;
    max-height: 30rem;
    min-height: 22rem;
    max-height: 500px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #d1d1d1 #f1f1f1;


 .task-input {
    display: flex;
    align-items: center;
    background: #f3f3f3;
    border-radius: 25px;
    padding: 5px;
    // width: 100%;
    max-width: 350px;

  }
  button{
  background: #ff5b4f;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

}


/* Task List Styles */
.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
}

/* Checkbox Style */
.task-item input[type="checkbox"] {
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #ff5c5c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:checked {
    background-color: #ff5c5c;
    border: none;
    position: relative;

    &::after {
      content: "✔";
      font-size: 16px;
      color: white;
      font-weight: bold;
      display: block;
      text-align: center;
    }
  }
}

/* Completed Task */
.completed {
  text-decoration: line-through;
  color: gray;
  opacity: 0.7;
}

button {
  background: none;
  border: none;
  color: red;
  font-size: 18px;
  cursor: pointer;
}

/* Input Box */
.task-input {
  display: flex;
  align-items: center;
  background: #f6f6f6;
  padding: 12px 18px;
  border-radius: 30px;
  width: 100%;
}

.task-input input {
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
  font-size: 16px;
}

.task-input button {
  background: #ff5c5c;
  color: white;
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 30px;
  cursor: pointer;
}
</style>