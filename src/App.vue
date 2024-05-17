<template>
  <div>
    <Application :resize-to="win">
      <container>
        <graphics
          :x="120"
          :y="120"
          @render="graphics => {
            graphics.clear()
            graphics.beginFill(0xDE3249)
            graphics.drawCircle(0, 0, 50)
            graphics.endFill()
          }"
        />
      </container>
    </Application>
  </div>

  <pre class="bg-white fixed bottom-0 right-0 text-sm p-3 max-w-72 overflow-auto w-full z-10">{{ debug }}</pre>
</template>

<script setup lang="ts">
import { Application } from 'vue3-pixi'
import { Game } from '@/game/models'

const debug = {
  game: new Game()
}

const win = window
</script>
