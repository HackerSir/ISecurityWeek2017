document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>");
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
["題目一","Q1","Q2","Q3","ANS","ANS"],
["題目二","Q1","Q2","Q3","ANS","ANS"],
["題目3","Q1","Q2","Q3","ANS","ANS"],
["題目4","Q1","Q2","Q3","ANS","ANS"],
["題目5","Q1","Q2","Q3","ANS","ANS"]
];
var maxques = 5; //題數
function set_question(){
	maxques -= 1;
	if (maxques==-1){
		$("#Q1").hide();
		$("#timer").hide();
		$("#score").hide();
		$("#end_page").show();
		$("#final_score").text(score);
	}

	else {
		question.q_ask=question_lab[now_question][0];
		question.q1=question_lab[now_question][1];
		question.q2=question_lab[now_question][2];
		question.q3=question_lab[now_question][3];
		question.q4=question_lab[now_question][4];
		question.ans=question_lab[now_question][5];
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
function post_answer(post_Q,post_A){

	$.ajax({
type: "post",

http_headers:
	{ "Access-Control-Allow-Origin": "*" },
data: {
"method": "write",
"Q_name": post_Q,
"Q_ans": post_A

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
	/*********************test*************************/
	//$("#start_div").hide();
	//$("#score").show();
	//$("#Q4").show();
	//reorder_Q2();
	//$("#end_page").show();
});

/***********************Start Page*******************************/
$("#start_btn").click(function(){
	$("#start_div").hide();
    $("#timer").show();
	$("#score").show();
	$("#Q1").show();
	reorder();
});
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
		$("button.Q1").show();
		var className = $(this).attr("class");
		$('p.'+className).show();
	});
    $("#q1_ans_0").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q1);
        reorder();
    });
    $("#q1_ans_1").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q2);
        reorder();
    });
    $("#q1_ans_2").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q3);
        reorder();
    });
    $("#q1_ans_3").click(function(){
        submit_time = 0;
				post_answer(question.q_ask,question.q4);
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
new Vue({
    el: "#app",
    data: {
        time: 90,
        initial: 90,
        started: false,
    },

    methods: {
        start() {
            var beeps = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/240258/endbeeps.wav');

            this.interval = setInterval(() => {
                this.time -= 1;
                if (this.time === 0) {
                    this.started = false;
                    beeps.play();
										$("#Q1").hide();
										$("#timer").hide();
										$("#score").hide();
										$("#end_page").show();
										$("#final_score").text(score);
                }
            }, 1000);
            this.started = true;
        },
        pause() {
            clearInterval(this.interval);
            this.started = false;
        }
    }
})
