let first = require('./myFirst')
let second = require('./mySecond')
let fs = require('fs')

console.log(first.myMul(5));
console.log(second.myMul(5));

fs.writeFile('./results.txt', `The value of 14 when passed through the myMultiplier function is( ${first.myMul(14)})`,(err) =>{ if(err) throw err; console.log('Result saved Successfully!!'); });

// Synchronously
// fs.writeFileSync('./results.txt', `The value of 14 when passed through the myMultiplier function is( ${first.myMul(14)})`)


fs.appendFile('./results.txt',`\nThe value of 14 when passed through the myMultiplier function is( ${second.myMul(14)})`, (err) =>{ if(err) throw err; console.log('File updated Successfully');} );

// Sychronously
// fs.appendFileSync('results.txt',`\nThe value of 14 when passed through the myMultiplier function is( ${second.myMul(14)})`)