<template>
  <section>
    <h1>Tic Tac Vue2</h1>
    <p>Update Level: {{UPDATE_LEVEL}}</p>

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
import { BOARD_SIZE, UPDATE_LEVEL, log, SquareItem, INITIAL_STATE } from 'common'

export default Vue.extend({
  components: {
    Square
  },

  data () {
    return {
      BOARD_SIZE,
      UPDATE_LEVEL,
      gameState: INITIAL_STATE
    }
  },

  methods: {
    onSquareClick (clickedSquare: SquareItem) {
      log('-------- onSquareClick --------')

      switch (UPDATE_LEVEL) {
        case 'VALUE': {
          clickedSquare.value = this.gameState.nextPlayer
          this.gameState.nextPlayer = this.gameState.nextPlayer === 'O' ? 'X' : 'O'
          break
        }

        case 'ITEM': {
          const clickedSquareArrayIndex = this.gameState.squares.findIndex(square => square.index === clickedSquare.index)
          this.gameState.squares.splice(clickedSquareArrayIndex, 1, {
            index: clickedSquare.index,
            value: this.gameState.nextPlayer
          })
          this.gameState.nextPlayer = this.gameState.nextPlayer === 'O' ? 'X' : 'O'
          break
        }

        case 'ARRAY': {
          this.gameState.squares = this.gameState.squares.map(square => square === clickedSquare ? {
            ...square,
            value: this.gameState.nextPlayer
          } : square)
          this.gameState.nextPlayer = this.gameState.nextPlayer === 'O' ? 'X' : 'O'
          break
        }

        case 'STATE': {
          this.gameState = {
            squares: this.gameState.squares.map(square => square === clickedSquare ? {
              ...square,
              value: this.gameState.nextPlayer
            } : square),
            nextPlayer: this.gameState.nextPlayer === 'O' ? 'X' : 'O'
          }
          break
        }
      }
    }
  },
  created () {
    document.title = 'Vue2'
    log('[Render] GameBoard')
  },

  beforeUpdate () {
    log('[Render] GameBoard')
  }
})

</script>
<style src="common/css/styles.css" />
