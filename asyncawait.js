const connect = true; //เช็คว่าต่อเน็ต
const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";

function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log(`กำลังโหลดไฟล์ ${url}`);
    setTimeout(() => {
      if (connect) {
        resolve(`โหลด ${url} เรียบร้อย`);
      } else {
        reject(`เกิดข้อผิดพลาด`);
      }
    }, 3000);
  });
}


//Async&Await คือ รอ ให้ตัวก่อนหน้าเสร็จก่อนค่อยไปตัวที่สอง
//ส่วนใหญ่ใช้ APi ดึงข้อมูล ใน javascript 
//Async&Await ทำงานร่วมกับ promise
async function start() {
    console.log(await downloading(url1));
    console.log(await downloading(url2));
}

start()

//ถ้า frontend ต้องการทำงานร่วมกับ backend
// APi ภาพสินค้า backend--- ไปยัง frontend แสดงภาพในเว็บ
// APi เป็น promise --รอดึงเป็น pending --จะต้องรอข้อมูลคือ Await --แล้วจะแสดงภาพ

//หน้าเว็บว่าง--ทำ loading--จึงแสดงภาพ
