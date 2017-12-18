document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>");
var NID;
function checknid(NID1) {
  if (NID1.length==9 || NID1.length==7){
    NID=NID1.substring(0, NID1.length-1);
  }
  re1 = /^[dempDEMP]{1}0[0-9]{6}$/;
  re2 = /^[tT][0-9]{5}$/
  if (re1.test(NID)||re2.test(NID)){
   return true; }
  else{
    return false;
}
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
   var temp = parseInt(e, 10);
   if(e == "nodata") {document.getElementById("RPG_STAGE").innerHTML=e;}
   else{
                        if(temp == 1) {

                            temp = 0;

                        }

                        else if(2 <= temp && temp <= 3) {

                            temp = 1;

                        }

                        else if(4 <= temp && temp <= 6) {

                            temp = 2;

                        }

                        else {

                            temp = 3;

                        }

                      document.getElementById("RPG_STAGE").innerHTML = temp;

            }

 }
 });
 }
 function read_fast(NID){
 $.ajax({
 type: "post",
 data: {
 "method": "finalscore_read",
 "NID": NID
 },
 url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbx6XQT0wn5mtgQ0Pq40rfhYvIhLbOnEUJxUXr9sqDW-LKpiofWY/exec", // 填入網路應用程式網址
 success: function (e) {
 document.getElementById("ASK_right").innerHTML=e;
 }
 });
 }
function get_answer(post_Q,post_A,post_qnum){

	$.ajax({
type: "post",

http_headers:
	{ "Access-Control-Allow-Origin": "*" },
data: {
"NID":NID,
"method": "write",
"Q_name": post_Q,
"Q_ans": post_A,
"Q_num":post_qnum

},
url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbx6XQT0wn5mtgQ0Pq40rfhYvIhLbOnEUJxUXr9sqDW-LKpiofWY/exec" // 填入網路應用程式網址
});
}

$(document).ready(function(){


	$(".Question_page").each(function(index,item){
	$(item).hide();
})
	/*********************test*************************/
	//$("#start_div").hide();
	//$("#score").show();
	//$("#Q4").show();
	//reorder_Q2();
	//$("#end_page").show();
});

/***********************Start Page*******************************/
$("#start_btn").click(function(){
  NID=document.getElementById("input_nid").value;
	if (checknid(NID)){

		middle=1;
		$("#start_div").hide();
	  $("#timer").show();
		$("#score").show();
		$("#Q1").show();
		reorder();
	}
	else{
		alert("NID格式錯誤");
		$("#start_div").show();
	}

});
$('#input_nid').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    NID=document.getElementById("input_nid").value;
		if (checknid(NID)){

			middle=1;

			$("#start_div").hide();
		  $("#timer").show();
			$("#score").show();
			$("#Q1").show();
			reorder();
		}
		else{
			alert("NID格式錯誤");
			$("#start_div").show();
		}
  }
});

function startOAO(){
  NID=document.getElementById("input_nid").value;
	if (checknid(NID)){

		middle=1;
		timmerr.start()
		$("#start_div").hide();
	  $("#timer").show();
		$("#score").show();
		$("#Q1").show();
		reorder();
	}
	else{
		alert("NID格式錯誤");
	}

}
function reorder(){
	 read_stage(NID);
	 read_fast(NID);
	 read_gift(NID);
	 read_gift1(NID);
}
function RPG_post(){
		write_gift(NID);
}
function Fast_post(){
 write_gift1(NID);
}
function redo(){

  document.getElementById("input_nid").value="";
	$(".Question_page").each(function(index,item){
		$(item).hide();
	})
	$("#start_div").show();
	document.getElementById("RPG_STAGE").innerHTML="";
	document.getElementById("q1_ans_0").value="載入中";
	document.getElementById("ASK_right").innerHTML="";
	document.getElementById("q1_ans_1").value="載入中";
}
function read_gift(NID){
$.ajax({
type: "post",
data: {
"method": "gift_read",
"NID": NID
},
url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbxzHdzmLmIHZ9FmeaCWCfaQ05JUt0qo_cHCuyq33aVNmKUx1sE/exec", // 填入網路應用程式網址
success: function (e) {
	if (e!="20"){
		document.getElementById("q1_ans_0").value="領獎";

	}
	else{document.getElementById("q1_ans_0").value="已經領過獎了";}
}
});
}

function write_gift(NID){
$.ajax({
type: "post",
data: {
"method": "gift_write",
"NID": NID
},
url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbxzHdzmLmIHZ9FmeaCWCfaQ05JUt0qo_cHCuyq33aVNmKUx1sE/exec", // 填入網路應用程式網址
success: function (e) {
alert(e);
read_gift(NID);
}
});
}
function read_gift1(NID){
$.ajax({
type: "post",
data: {
"method": "gift_read",
"NID": NID
},
url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbx6XQT0wn5mtgQ0Pq40rfhYvIhLbOnEUJxUXr9sqDW-LKpiofWY/exec", // 填入網路應用程式網址
success: function (e) {
	if (e!="20"){
		document.getElementById("q1_ans_1").value="領獎";

	}
	else{document.getElementById("q1_ans_1").value="已經領過獎了";}
}
});
}

function write_gift1(NID){
$.ajax({
type: "post",
data: {
"method": "gift_write",
"NID": NID
},
url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbx6XQT0wn5mtgQ0Pq40rfhYvIhLbOnEUJxUXr9sqDW-LKpiofWY/exec",
success: function (e) {
alert(e);
read_gift1(NID);
}
});
}
