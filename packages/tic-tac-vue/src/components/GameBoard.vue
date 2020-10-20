<template>
  <section>
    <h1>Tic Tac Vue</h1>

    <div class="game-board"
         :style="{
             gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
             gridTemplateRows: `repeat(${BOARD_SIZE}, 40px)`
         }">
      <Square v-for="item in gameState.squares"
              :key="item.index"
              :item="item"
              @square-click="onSquareClick"
      />
    </div>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Square from '@/components/Square.vue'
import { BOARD_SIZE, createGameState, SquareItem } from 'common'

export default Vue.extend({
  components: {
    Square
  },
  data () {
    return {
      BOARD_SIZE,
      gameState: createGameState()
    }
  },
  methods: {
    onSquareClick (clickedSquare: SquareItem) {
      console.log('-------- onSquareClick --------')

      // MUTABLE
      clickedSquare.value = this.gameState.nextPlayer

      // IMMUTABLE
      // this.gameState.squares = this.gameState.squares.map(square => square === clickedSquare ? { ...square, value: this.gameState.nextPlayer } : square)

      this.gameState.nextPlayer = this.gameState.nextPlayer === 'O' ? 'X' : 'O'
    }
  },
  created () {
    console.log('[Render] GameBoard')
  },

  beforeUpdate () {
    console.log('[Render] GameBoard')
  }
})

</script>
<style src="common/css/styles.css" />
