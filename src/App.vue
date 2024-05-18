<template>
  <div>
    <Application :resize-to="win">
      <Loader :resources="['/public/summer/summer.json']">
        <container>
          <text :anchor="0.5" :x="120" :y="120" :style="{ fill: 'white' }">
            Hello World
          </text>

          <template v-for="row in game.rows">
            <animated-sprite
              v-for="col in game.cols"
              :textures="['summer_343.png']"
              :x="(col - 1) * 32" 
              :y="(row - 1) * 32" />
          </template>

        </container>
      </Loader>
    </Application>
  </div>

  <pre class="bg-white fixed bottom-0 right-0 text-sm p-3 max-w-72 overflow-auto w-full z-10">{{ game }}</pre>
</template>

<script setup lang="ts">
import { Application, Loader } from 'vue3-pixi'
import { Game } from '@/game/models'

const game = new Game()

// const spritesheet = new Spritesheet(Texture.from(summer.meta.image), summer)

// console.log({ spritesheet })

// const textures = {
//   humanFootman: new Texture({
//     source: base,
//   }),
// }

const win = window
</script>
