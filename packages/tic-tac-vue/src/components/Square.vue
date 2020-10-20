<script lang="ts">
import Vue from 'vue'
import { SquareItem } from 'common'

export default Vue.extend({
  props: {
    item: Object as () => SquareItem
  },

  render (createElement) {
    console.log('[Render]', this.item.index)
    return createElement('div', {
      staticClass: 'square',
      on: {
        click: () => {
          this.$emit('square-click', this.item)
        }
      }
    }, this.item.value)
  }
})
</script>
