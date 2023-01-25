//คำสั่งระบบ Routing ที่ใช้
const express = require('express')
const router = express.Router()
const path = require('path') 
//class Router

//อ้างอิงตำแหน่งไฟล์ แบบใช้ตัวแปร
//const indexP = path.join(__dirname, 'templates/index.html')

//จะต้องเขียนก่อน listen เสมอ
//การกำหนดเส้นทาง ในการส่ง routing มา
router.get("/",(req, res) => {
    res.status(200)
    //แจ้งสถานะโค้ด
    res.type('text/html')
    //กำหนดรูปแแบบเนื้อแบบ text
    res.sendFile(path.join(__dirname, '../templates/index.html'));
    //ส่ง res เป็น page
    //สามารถอ้างอิงตำแหน่งไฟล์ได้เลยได้ไม่ต้องเก็บในตัวแปร
})


router.get("/product/:id", (req, res) => {
  //res.sendFile(path.join(__dirname, '../templates/product1.html'));
  //สร้างตัวแปร 
  const productID = req.params.id
  if (productID === "1"){
    res.sendFile(path.join(__dirname, "../templates/product1.html"));
  } else if(productID === "2"){
    res.sendFile(path.join(__dirname, "../templates/product2.html"));
  } else if(productID === "3"){
    res.sendFile(path.join(__dirname, "../templates/product3.html"));
  } else {
    res.redirect('/')
    //เปลี่ยนเส้นทางไปยังหน้าแรกอัตโนมัติ เมื่อป้อนpath ผิด
  }
  
  
  //const myhtml = `<h1>Product ${productID}</h1>`
  //res.send(myhtml)
});

module.exports = router