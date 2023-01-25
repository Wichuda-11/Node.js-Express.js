//การ Promise

const connect = true //เช็คว่าต่อเน็ต
const url1 = "kong.dev/file1.json";

function downloading(url){
    return new Promise(function(resolve, reject){
        console.log(`กำลังโหลดไฟล์ ${url}`);
        setTimeout(()=> {
            if (connect){
                resolve(`โหลด ${url} เรียบร้อย`);
            } else {
                reject(`เกิดข้อผิดพลาด`);
            }
        },3000)
    })
}

//resolve เขียนใน then สำเร็จ
//reject เขียนใน catch ผิดพลาด
// ต้องการให้แสดงไฟล์เพิ่มให้ return ได้เรย เพื่อเลี่ยง Hellนรก
//ข้อเสีย คือ จะต้องเขียน then ทุกครั้งเมื่อทำซ้ำ ก็ไม่ค่อยนิยมเขียน
downloading(url1).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err);
})