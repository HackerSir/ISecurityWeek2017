document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>");
var NID;
var middle=0;
var score = 0;
var submit_time = 0;
var question={
	q_ask:"",
	q1:"",
	q2:"",
	q3:"",
	q4:"",
	ans:""
};
var now_question=0;
var question_lab=[
["下列哪項處理垃圾郵件的方法？","執行附加檔案，查看內容","回覆並要求寄件者停止","直接刪除","轉寄給朋友看","直接刪除","1"],
["為了避免收到垃圾郵件，平時該怎麼做？","定時更新修補程式","定時更新病毒碼","安裝防火牆","不隨意在網路上留下電子郵件","不隨意在網路上留下電子郵件","2"],
["如果用來上網的電腦沒有安裝防火牆，可能產生什麼風險？","電腦檔案被破壞","個人資料被竊取","電腦被駭客操控","其餘三者皆是","其餘三者皆是","3"],
["有些作業系統常常幫我們自動更新，請問：為什麼需要進行更新？","提升遊戲執行速度","清除電腦病毒","修補漏洞，降低被駭風險","其餘三者皆是","修補漏洞，降低被駭風險","4"],
["在使用公用 Wi-Fi時，下列何者網路行為是安全的？","收發電子郵件","登入網路銀行進行轉帳","查詢資料，不登入任何帳號密碼","其餘三者皆是","查詢資料，不登入任何帳號密碼","5"],
["為了避免資料遺失，下列何者備份方法是錯的？","將資料複製到外接硬碟","將資料複製到同一顆硬碟","將資料燒進光碟","將資料上傳至檔案伺服器","將資料複製到同一顆硬碟","6"],
["當瀏覽器的網址列出現 https時，代表網站具有何者功能？","資料是加密傳輸的","具有網路信賴付款機制","不會有網路交易糾紛","只要出現這個就絕對安全","資料是加密傳輸的","7"],
["在購物平台上，為何需要注意網站有無安全認證(https)？","確保賣家有支付運費","代表商品比較便宜","保護電腦不會中毒","確保個資傳輸時有加密保護","確保個資傳輸時有加密保護","8"],
["電腦使用到一半要離開座位時，怎麼做比較安全？","請附近的人幫我顧","貼上「暫離、請勿觸碰」的標籤","關閉螢幕電源","將電腦鎖定，設定保護密碼","將電腦鎖定，設定保護密碼","9"],
["開啟不常見的網站時，跳出提醒顯示你中獎該怎麼做？","中獎開心領取","不理他，一定是釣魚網站","馬上填個資","轉傳網頁給朋友一起抽","不理他，一定是釣魚網站","10"],
["如果中了勒索病毒怎麼半？","立即關機，防止加密更多檔案","繼續使用電腦，查詢解決方法","不理會","把檔案copy出來在關機","立即關機，防止加密更多檔案","11"],
["在網站上填資料時要注意什麼？","確認網址正確","確認傳輸是否加密(https)","是否在個人電腦上使用","其餘三者皆是","其餘三者皆是","12"],
["下列密碼型式比較安全","使用自己生日","使用大小寫與數字，每個網站密碼不同","每個網站使用同組密碼","使用喜歡的人的生日","使用大小寫與數字，每個網站密碼不同","13"],
];
var maxques = 13; //題數
function set_question(){
	maxques -= 1;
	if (maxques==-1){
		$("#Q1").hide();
		$("#timer").hide();
		$("#score").hide();
		$("#end_page").show();
		$("#final_score").text(score);
		timmerr.pause();
	}

	else {
		question.q_ask=question_lab[now_question][0];
		question.q1=question_lab[now_question][1];
		question.q2=question_lab[now_question][2];
		question.q3=question_lab[now_question][3];
		question.q4=question_lab[now_question][4];
		question.ans=question_lab[now_question][5];
		question.num=question_lab[now_question][6];
		question_lab.splice(now_question,1);
		now_question = Math.floor(Math.random() * (maxques));}
}
function show_question(){
	document.getElementById("q1_q").innerHTML=question.q_ask;
	document.getElementById("q1_ans_0").value=question.q1;
	document.getElementById("q1_ans_1").value=question.q2;
	document.getElementById("q1_ans_2").value=question.q3;
	document.getElementById("q1_ans_3").value=question.q4;


}
function checknid(string) {
  re1 = /^[dempDEMP]{1}0[0-9]{6}$/;
  re2 = /^[tT][0-9]{5}$/
  if (re1.test(string)||re2.test(string)){
   return true; }
  else{
    return false;
}
 }

function post_answer(post_Q,post_A,post_qnum){

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
    $("#timer").hide();
	$("#score").hide();
	$("#end_page").hide();
	$("#end_page_time").hide();
	$("#show_wrong").hide();
	/*********************test*************************/
	//$("#start_div").hide();
	//$("#score").show();
	//$("#Q4").show();
	//reorder_Q2();
	//$("#end_page").show();
});

/***********************Start Page*******************************/
$("#start_btn").click(function(){
	if (checknid(document.getElementById("input_nid").value)){
		NID=document.getElementById("input_nid").value;
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
		$("#start_div").show();
	}

});
$('#input_nid').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
		if (checknid(document.getElementById("input_nid").value)){
			NID=document.getElementById("input_nid").value;
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
			$("#start_div").show();
		}
  }
});

function startOAO(){
	if (checknid(document.getElementById("input_nid").value)){
		NID=document.getElementById("input_nid").value;
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

/****************************Q1*********************************/
//each time reorder the element
function reorder(){
	var order =[-1,-1,-1,-1];
	set_question();
	show_question();
	$("input:button[name=Question1]").each(function(){
			 var rand = Math.floor((Math.random()*10))%4;
			 while(order[rand] != -1){
				 rand = Math.floor((Math.random()*10))%4;
			 }
			 order[rand] = this.parentElement;
	});
	$("#Q1_form").empty();
	for(let i = 0; i < 4; i++){
		$("#Q1_form").append(order[i]);
	}
	next();
}

function next(){
	$("input:button[name=Question1]").click(function(index,val){
		submit_time++;
		var answer = $(this).val();
		if(submit_time == 1 && answer == question.ans){
			score++;
			$("#score_span").text(score);
			$("#this_span").text("1");
		}
		else {
			ans_lab.push([question.q_ask,question.ans]);
			maxans+=1;
		}
		$("button.Q1").show();
		var className = $(this).attr("class");
		$('p.'+className).show();
	});
    $("#q1_ans_0").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q1,question.num);
        reorder();
    });
    $("#q1_ans_1").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q2,question.num);
        reorder();
    });
    $("#q1_ans_2").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q3,question.num);
        reorder();
    });
    $("#q1_ans_3").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q4,question.num);
        reorder();
    });
}


/*******************************End*********************************/
$("#again_btn").click(function(){
	window.location.reload();
});
$("#again_btn_time").click(function(){
    window.location.reload();
});
/******************************Timer********************************/
var timmerr= new Vue({
    el: "#app",
    data: {
        time: 90,
        initial: 90,
        started: false,
    },

    methods: {
        start:function() {
            var beeps = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/240258/endbeeps.wav');
						if (middle==1){
            this.interval = setInterval(() => {
                this.time -= 1;
                if (this.time === 0) {
                    this.started = false;
                    beeps.play();
										$("#Q1").hide();
										$("#timer").hide();
										$("#score").hide();
										$("#end_page_time").show();
										$("#final_score_time").text(score);
                }
            }, 1000);
            this.started = true;
        }},
        pause:function() {
            clearInterval(this.interval);
            this.started = false;
        }
    }
})


var show_answer={
	q_ask:"",
	q1:"",
	q2:"",
	q3:"",
	q4:"",
	ans:""
};
var maxans=0;
var ans_lab=[];

function set_show_ans(){

	if (maxans==now_question){
		$("#Q1").hide();
		$("#timer").hide();
		$("#score").hide();
		$("#end_page").show();
		$("#final_score").text(score);
		$("#show_wrong").hide();
	}

	else {
		show_answer.q_ask=ans_lab[now_question][0];
		show_answer.ans=ans_lab[now_question][1];
		now_question +=1;
	show_show_ans();}

}
function show_show_ans(){
	document.getElementById("show_wrong_q").innerHTML=show_answer.q_ask;
	document.getElementById("show_wrong_ans_0").value=show_answer.ans;


}

function show_wrong_main(){
if (ans_lab.length>0){
$("#timer").hide();
$("#score").hide();
$("#end_page").hide();
$("#end_page_time").hide();
$("#show_wrong").show();
now_question=0;
set_show_ans();}
else {
	alert("你沒有錯任何題目喔")
}
}
