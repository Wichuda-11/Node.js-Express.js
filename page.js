//เรียกใช้บริการ
const mymodules = require('./modules/mymodules.js')
//ชื่อฟังก์ชันเป็นอะไรก็ได้

//มีตัวเลขในตัวแปล 
const number = 5000000

console.log(mymodules.getCurrentTime())
console.log(mymodules.add(50,100));
console.log(mymodules.formatNumber(number))
