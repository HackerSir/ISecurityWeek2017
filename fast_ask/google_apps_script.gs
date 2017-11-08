var ss = SpreadsheetApp.getActiveSpreadsheet(),
sheet1 = ss.getSheetByName("工作表1"); // "sheet1" 改成你的工作表名稱


function doPost(e) {
var para = e.parameter, // 存放 post 所有傳送的參數
method = para.method;

if (method == "write") {
write_data(para);
}
if (method == "read") {
// 這裡放讀取資料的語法 下一篇說明
}

}

function write_data(para) {
var Q_name = para.Q_name,
Q_ans = para.Q_ans;
sheet1.appendRow([Q_name,Q_ans]); // 插入一列新的資料 
}
