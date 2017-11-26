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

}

}
//寫入
function write_data(para) {
var NID = para.NID,
Q_name = para.Q_name,
ans1 = para.Q_ans,
 Q_num=para.Q_num;
var notwriten=0;
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
      
      
      if (whereNIDis[parseInt(Q_num)]==''){
        sheet1.getRange(wherisNID,parseInt(Q_num)+1,1,1).setValue(ans1);
        return ContentService.createTextOutput("存擋成功")
      }
      else{
        while(notwriten==0){
           for (i in allData) {
             if (parseInt(i)==(wherisNID-2)){
               continue;
             }
             
               queryData = allData[i];
               if(queryData[0]==NID){
                 wherisNID = parseInt(i)+2; 
                 whereNIDis = allData[i];
               }
                  if (whereNIDis[parseInt(Q_num)]==''){
                    sheet1.getRange(wherisNID,parseInt(Q_num)+1,1,1).setValue(ans1);
                    notwriten=1;
                    return ContentService.createTextOutput("存檔成功")
                    //sheet1.getRange(parseInt(rowLength)+3,1,1,1).setValue("SLLLS");
                    break;
                  }
              
             }
              if(allData[i][0]==''){
               notwriten=2;
                
               }
           
        }
        if (notwriten==0 ||  notwriten==2){
              sheet1.getRange(parseInt(rowLength)+1,1,1,1).setValue(NID)
              sheet1.getRange(parseInt(rowLength)+1,parseInt(Q_num)+1,1,1).setValue(ans1);
        return ContentService.createTextOutput("已經答過此題了")
      }
      }
    }
    else{
      
      //sheet1.appendRow([NID]);
      sheet1.getRange(parseInt(rowLength)+1,1,1,1).setValue(NID)
      sheet1.getRange(parseInt(rowLength)+1,parseInt(Q_num)+1,1,1).setValue(ans1);
        return ContentService.createTextOutput("建立新NID成功")}
    
  }
  else{ return ContentService.createTextOutput("NID格式錯誤")}
}
