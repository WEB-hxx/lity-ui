import Grid from './src/grid.vue'

Grid.install = function (Vue) {
  Vue.component(Grid.name, Grid)
}

export default Grid
