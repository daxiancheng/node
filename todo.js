const fs = require('fs');
let list = []
let exists = fs.existsSync("./db");
if(exists){
    list = JSON.parse(fs.readFileSync('./db'))
}else{
    fs.writeFileSync('./db',JSON.stringify([]))
}
if(process.argv[2] === 'add'){
    process.argv[3] && list.push(process.argv[3])
}
if(process.argv[2] === 'del' && (typeof (+process.argv[3])) == 'number'){
    let num = process.argv[3] - 1
    list[num] && list.splice(num,1)
}
fs.writeFileSync('./db',JSON.stringify(list))
console.log(list)