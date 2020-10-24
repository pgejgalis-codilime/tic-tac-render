<template>
  <div id="app">
    <GameBoard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GameBoard from './components/GameBoard.vue'

export default Vue.extend({
  name: 'App',
  components: {
    GameBoard
  }
})
</script>
