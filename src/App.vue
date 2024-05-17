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
</template>

<script setup lang="ts">
import { Application } from 'vue3-pixi';

const win = window
</script>
