<template>
    <div class="mainDiv">
    <div class="logoDiv">
      <h2>To-Do List</h2><img src="../assets/imgpsh_fullsize_anim.png">
    </div>
      <div class="input-container">
        <input v-model="newTask" placeholder="Add your task" />
        <button @click="addTask">Add</button>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
            <input type="checkbox" v-model="task.completed" class="weer" />
          <span :class="{ 'completed': task.completed }">{{ task.text }}</span>
          <button class="delete-btn" @click="removeTask(index)">X</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: []
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.unshift({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  };
  </script>
  
  <style lang="scss">
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f4f4f4;
    margin: 0;
  }
  // Main container styling (centers the box)
  .mainDiv {
    overflow-y: auto;
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
  
      max-height: 500px; // Adjust as needed
    overflow-y: auto;  // Enables vertical scrolling
    scrollbar-width: thin; // Firefox support
    scrollbar-color: #d1d1d1  #f1f1f1; // Firefox track & thumb colors
  
    // Input and button styling
    input[type="text"] {
      width: 70%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .logoDiv{
        display: flex;
      align-items: center;
  
      img{
        width: 39px;
      }
      h2{
        font-size: 28px;
      }
      
      }
  
    button {
      padding: 10px 15px;
      background: #ff5252;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  
      &:hover {
        background: #e04848;
      }
  
    }
  
    .input-container {
    display: flex;
    align-items: center;
    background: #f3f3f3;
    border-radius: 25px;
    padding: 5px;
    width: 100%;
    max-width: 350px;
  
    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      padding: 10px;
      font-size: 16px;
      border-radius: 25px;
    }
  
    button {
      background: #ff5b4f;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
  
      &:hover {
        background: #e04a40;
      }
    }
  }
  
  
    // Task list styles
    ul {
      list-style: none;
      padding: 0;
      margin-top: 15px;
  
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f9f9f9;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 5px;
  
        // Checkbox styling
        input[type="checkbox"] {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid #ff5252;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          outline: none;
  
          &:checked {
            background-color: #ff5252;
            border: 2px solid #ff5252;
            position: relative;
  
            &::after {
              content: '✔';
              color: white;
              font-size: 12px;
              font-weight: bold;
              text-align: center;
              display: block;
            }
          }
        }
  
        // Task text style
        span {
          flex: 1;
          margin-left: 10px;
          font-size: 16px;
  
          &.completed {
            text-decoration: line-through;
            color: gray;
          }
        }
  
        // Delete button
        button {
          background: none;
          border: none;
          color: red;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  
  
    ul {
      list-style: none;
      padding: 0;
  
      li {
        display: flex;
    align-items: center;
    gap: 10px; /* Ensures spacing between checkbox and text */
    background: #f9f9f9;
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
  
        input[type="checkbox"] {
          width: 18px;
    height: 18px;
    border-radius: 50%; /* Makes the checkbox round */
    accent-color: red; /* Changes checkbox color */
        }
  
        span {
          flex-grow: 1;
    font-size: 16px;
    text-align: left;
        }
  
        .completed {
          text-decoration: line-through;
    color: gray;
        }
  
        .delete-btn {
          background: none;
          border: none;
          color: red;
          font-size: 18px;
          cursor: pointer;
          transition: 0.3s;
  
          &:hover {
            color: darkred;
          }
        }
      }
    }
  
  // Scrollbar Customization
  // Webkit Scrollbar (Chrome, Edge, Safari)
  &::-webkit-scrollbar {
      width: 2px; // Decrease width (Try 2px if you want it even thinner)
    }
  
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      background: #ff5b4f;
      border-radius: 10px;
      transition: background 0.3s ease-in-out;
    }
  
    &::-webkit-scrollbar-thumb:hover {
      background: #e04a40;
    }
  
  
  }
  </style>
  