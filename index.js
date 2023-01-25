const express = require('express')
const router = require('./routes/myRouter')
const app = express()


//เรียกใช้ router
app.use(router)

//ดีบัคแสดง
app.listen(8080,() => {
    console.log("start server port 8080")
})