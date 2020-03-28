import {grid, Engine, Sudoku, ToolBox} from 'sudoku-solver-engine'

const toolbox = new ToolBox()
var grid2 = toolbox.returnData(grid)
const sudoku = new Sudoku(grid2)
const sudoku2 = new Sudoku(grid)
const engine = new Engine(sudoku2, toolbox)

engine.solveAll()

sudoku.logs = engine.logs

const rootReducer = (state = sudoku, action) =>{
  console.log(action)
  switch(action.type){
    case 'REPLACE_LINE':
      state.grid[action.index] = action.line
      return state
    case 'SEND_IT':
      state.focus = [action.x,action.y,action.val]
      state.trigger = function(that){this.setFocus([action.x,action.y,action.val]).call(that)}
      return state
    default:
      return state
  }
}

export default rootReducer;