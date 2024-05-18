import { Vec } from '@/game/types'

export class Game {
  public size: Vec<2> = [64, 64]

  // terrain (rock, water)

  // buildings

  // resources (lumber, gold, oil)

  // units

  // players

  get cols() {
    return this.size[0]
  }

  get rows() {
    return this.size[1]
  }
}
