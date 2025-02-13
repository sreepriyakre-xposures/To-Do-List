<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav>
     
      <router-link to="/todolist">To-Do List</router-link> |
      <router-link to="/">Component-based</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #f1f1f1;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #60aaff;
}

nav a.router-link-active {
  color: #046ca8;
}
</style>

