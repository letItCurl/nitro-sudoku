export const replaceLineAction = (line, x, y) =>{
    return{type: 'REPLACE_LINE', line, x, y}
}

export const setSudokuNumberAction = (x, y, val) =>{
    return{type: 'SET_SUDOKU_NUMBER', x, y, val}
}