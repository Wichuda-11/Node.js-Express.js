//ให้บริการการทำงานต่างๆในโปรเจค

function getCurrentTime(){
    return new Date()
}


//มีการคำนวณตัวเลข
function add(x,y){
    return x+y
}

//มีการจัดตัวเลขแปลงใส่ ,
function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


//ส่งออกโมดูล
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber