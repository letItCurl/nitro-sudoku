import {grid, Engine, Sudoku, ToolBox} from 'sudoku-solver-engine'
import { messageService2 } from '../rxjs/_services';

const toolbox = new ToolBox()
var grid2 = toolbox.returnData(grid)
const sudoku = new Sudoku(grid2)
const sudoku2 = new Sudoku(grid)
const engine = new Engine(sudoku2, toolbox)
/*
engine.solveAll()
*/
sudoku.logs = []

const rootReducer = (state = sudoku, action) =>{
  console.log(action)
  switch(action.type){
    case 'REPLACE_LINE':
      state.grid[action.y] = action.line
      if(state.checkInput(action.x,action.y).erros){
        messageService2.sendMessage(state.checkInput(action.x,action.y).erros)
        state.grid[action.y][action.x] = 0
        return state
      }else{
        return state
      }
    case 'CHECK_INPUT':
      var newGrid = toolbox.returnData(action.grid)
      const newSudoku = new Sudoku(newGrid)
      const engineChecker = new Engine(newSudoku, toolbox)
      
      if(!engineChecker.solveAll()){
        messageService2.sendMessage(engineChecker.solveAll().errors)
      }else{
        state.logs = engineChecker.logs
        state.logs.unshift("--- 🔥 STARTING ENGINE 🔥 ---")
        state.logs.unshift("--> SUDOKU VALIDATED ✅")
        state.logs.push("--- FINISHED ! ---")

        messageService2.sendMessage("--> SUDOKU VALIDATED ✅")
      }
      return state
      
    case 'SET_SUDOKU_NUMBER':
      state.grid[action.y][action.x] = action.val
      return state
    default:
      return state
  }
}

export default rootReducer;