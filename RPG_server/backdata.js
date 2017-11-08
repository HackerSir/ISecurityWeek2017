document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>");
function post_answer(NID,STAGE,ANS){

	$.ajax({
type: "post",

http_headers:
	{ "Access-Control-Allow-Origin": "*" },
data: {

"method": "write",
  "NID":NID,
  "stage":STAGE,
  "ans1":ANS

},
url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbxzHdzmLmIHZ9FmeaCWCfaQ05JUt0qo_cHCuyq33aVNmKUx1sE/exec" ,// 填入網路應用程式網址
success: function (e) {
alert(e);
}
});
}

function read_stage(NID){
$.ajax({
type: "post",
data: {
"method": "read",
"NID": NID
},
url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbxzHdzmLmIHZ9FmeaCWCfaQ05JUt0qo_cHCuyq33aVNmKUx1sE/exec", // 填入網路應用程式網址
success: function (e) {
alert(e);
}
});
}
