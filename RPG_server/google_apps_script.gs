var ss = SpreadsheetApp.getActiveSpreadsheet(),
sheet1 = ss.getSheetByName("工作表1"); // "sheet1" 改成你的工作表名稱

function checknid(string) {
  re1 = /^[dempDEMP]{1}0[0-9]{6}$/;
  re2 = /^[tT][0-9]{5}$/
  if (re1.test(string)||re2.test(string))
   return true; 
  else
    return false;
 }



function doPost(e) {
var para = e.parameter, // 存放 post 所有傳送的參數
method = para.method;

if (method == "write") {
return write_data(para);
}
if (method == "read") {
return read_data(para);
}

}
//寫入
function write_data(para) {
var NID = para.NID,
stage = para.stage,
ans1 = para.ans1;
var rowLength = sheet1.getLastRow() , // 列數 -1
columnLength = sheet1.getLastColumn(), // 欄數
allData = sheet1.getRange(2, 1, rowLength, columnLength).getValues(), // 取得所有儲存格資料
queryData, i,wherisNID,whereNIDis;

//var LastRow;
NID=NID.toUpperCase();
wherisNID = -1;
  if (checknid(NID)==true){
    for (i in allData) {
    if (allData[i].indexOf(NID) > -1) {
       queryData = allData[i];
      if(queryData[0]==NID){
       wherisNID = parseInt(i)+2; 
       whereNIDis = allData[i];
      }
      break;
    }
   
    }
    if (wherisNID!=-1){
      
      
      if (whereNIDis[parseInt(stage)+1]==''){
        sheet1.getRange(wherisNID,2,1,1).setValue(stage);
        sheet1.getRange(wherisNID,parseInt(stage)+2,1,1).setValue(ans1);
        return ContentService.createTextOutput("存擋成功")
      }
      else{
       
          return ContentService.createTextOutput("已經答過此題了")
      }
    }
    else{
      if(stage!="1"){return ContentService.createTextOutput("Hi hacker!")}
      else {sheet1.appendRow([NID,stage,ans1]);
        return ContentService.createTextOutput("建立新NID成功")}
    }
  }
  else{ return ContentService.createTextOutput("NID格式錯誤")}
}
//讀取
function read_data(para) {
var NID = para.NID,
rowLength = sheet1.getLastRow() - 1, // 列數
columnLength = sheet1.getLastColumn(), // 欄數
allData = sheet1.getRange(2, 1, rowLength, columnLength).getValues(), // 取得所有儲存格資料
queryData, queryMessage, i;
NID=NID.toUpperCase();
for (i in allData) {
if (allData[i].indexOf(NID) > -1) {
queryData = allData[i];
  queryMessage = queryData[1]; 
break;
}
} 
  if ( queryMessage==undefined){
    return ContentService.createTextOutput("nodata");}
  
// 回傳字串
return ContentService.createTextOutput(queryMessage);
}
