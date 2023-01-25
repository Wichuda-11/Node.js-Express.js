// โปรแกรมดาวน์โหลดไฟล์

const url1 = "kong.dev/file1.json"
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";
const url4 = "kong.dev/file1.json";
const url5 = "kong.dev/file1.json";

function downloading(url,callback){
    
    setTimeout(() => {
      console.log(`กำลังโหลด ${url}`);
      callback(url);
    }, 3000);
}

//โหลดก่อน ใช้ฟังก์ชัน result ตามลำดับ

// callback hell ซึ่งไม่ดี
downloading(url1,function (result) {
  console.log(`ดาวน์โหลด ${result} เรียบร้อย`);
  downloading(url2, function (result) {
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`);
    downloading(url3, function (result) {
      console.log(`ดาวน์โหลด ${result} เรียบร้อย`);
    });
  });
})
