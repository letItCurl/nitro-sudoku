import {grid, Engine, Sudoku, ToolBox, gridClear, grid3, grid4, grid5, grid6} from 'sudoku-solver-engine'
import { messageService2, messageService1 } from '../rxjs/_services';

const toolbox = new ToolBox()
var grid2 = toolbox.returnData(grid)
const sudoku = new Sudoku(grid2)

sudoku.logs = []
sudoku.id = 0

const rootReducer = (state = sudoku, action) =>{
  //console.log(action)
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
        messageService2.sendMessage(engineChecker.errors)
        messageService2.sendMessage("UNLOCK_CONSOLE")
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
    case 'RESET_DATA':
      state.logs = []
      state.grid = toolbox.returnData(grid)
      messageService1.sendMessage("triggerUpdate")
      return state
    case 'CLEAR_DATA':
      state.logs = []
      state.grid = toolbox.returnData(gridClear)
      messageService1.sendMessage("triggerRender")
      return state
    case 'CHANGE_DATA':
      state.logs = []
      state.id ++
      switch(state.id){
        case 0:
          state.grid = toolbox.returnData(grid)
          break;
        case 1:
          state.grid = toolbox.returnData(grid3)
          break;
        case 2:
          state.grid = toolbox.returnData(grid4)
          break;
        case 3:
          state.grid = toolbox.returnData(grid5)
          break;
        case 4:
          state.grid = toolbox.returnData(grid6)
          state.id = 0
          break;
      }
      messageService1.sendMessage("triggerUpdate")
      /*
      state.logs = []
      state.grid = toolbox.returnData(gridClear)
      messageService1.sendMessage("triggerUpdate")
      */
      return state
    default:
      return state
  }
}

export default rootReducer;