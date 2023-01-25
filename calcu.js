// callback function ``
//สร้างให้ deley รอ 3 วิ
//ระบุเป็นพารามิเตอร์
//ให้ callback ทำงานต่อ

function calcu(x,y,callback) {
    setTimeout(()=>{
    console.log("กำลังคำนวณ...")
    const sum = x+y
    callback(sum)
},3000)
}


//ฟังก์ชัน callback นำฟังก์ชันมารวมด้วย
calcu(100, 50, function (result) {
  console.log(`ผลบวก = ${result}`);
});
