import readline from 'readline'
import fs from 'fs'

let listLeft = []
let listRight = []
let sums = []
let answer

const file = readline.createInterface({
  input: fs.createReadStream('./dayone-input.txt'),
  output: process.stdout,
  terminal: false
})

file.on('line', (line) =>{
  const match = line.match(/(\d+)\s+(\d+)/)
  if (match){
    listLeft.push(parseInt(match[1]))
    listRight.push(parseInt(match[2]))
  }

})

file.on('close', () => {
  listLeft.sort()
  listRight.sort()

  for (let i = 0; i < listLeft.length; i++) {
    let diff;
    diff = listLeft[i] - listRight[i]
    if (diff < 0) {
        diff = -diff
    }
    console.log(diff)
    sums.push(diff)  
  }
  answer = sums.reduce((a, b) => a + b, 0)
  console.log(answer)
})
