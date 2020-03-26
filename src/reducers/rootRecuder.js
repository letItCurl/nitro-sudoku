const row1 = [6,0,7,9,0,0,2,0,3]
const row2 = [9,0,3,4,2,0,8,6,0]
const row3 = [0,0,0,0,8,3,0,0,1]
const row4 = [5,3,0,0,6,0,9,0,2]
const row5 = [0,0,0,0,0,0,0,3,7]
const row6 = [4,0,0,1,3,2,5,0,0]
const row7 = [0,4,0,0,7,0,6,0,9]
const row8 = [7,2,0,0,0,0,0,0,0]
const row9 = [8,9,1,2,5,0,0,7,0]
const sudoku = [] 
sudoku.push(row1,row2,row3,row4,row5,row6,row7,row8,row9)
sudoku.map(line=>{
  line.map((number, index) => {
    (number===0) ? line[index]= "" : line[index]=number
  })
})

const rootReducer = (state = sudoku, action) =>{
  console.log(action)
  switch(action.type){
    case 'REPLACE_LINE':
      state[action.index] = action.line
      return state
    default:
      return state
  }
}

export default rootReducer;