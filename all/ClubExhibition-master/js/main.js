var score = 0;
var submit_time = 0;
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
		if(submit_time == 1 && answer == "黑客社"){
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
        $("#Q1").hide();
        $("#Q2").show();
        $("#this_span").text("0");
        $("#Q2_next").hide();
        reorder_Q2();
    });
    $("#q1_ans_1").click(function(){
        submit_time = 0;
        $("#Q1").hide();
        $("#Q2").show();
        $("#this_span").text("0");
        $("#Q2_next").hide();
        reorder_Q2();
    });
    $("#q1_ans_2").click(function(){
        submit_time = 0;
        $("#Q1").hide();
        $("#Q2").show();
        $("#this_span").text("0");
        $("#Q2_next").hide();
        reorder_Q2();
    });
    $("#q1_ans_3").click(function(){
        submit_time = 0;
        $("#Q1").hide();
        $("#Q2").show();
        $("#this_span").text("0");
        $("#Q2_next").hide();
        reorder_Q2();
    });
}

/*******************************Q2******************************/
//each time reorder the checkbox
function reorder_Q2(){
    var order =[-1,-1];
    $("input:button[name=Question2]").each(function(){
        var rand = Math.floor((Math.random()*10))%2;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%2;
        }
        order[rand] = this.parentElement;
    });
    $("#Q2_form").empty();
    for(let i = 0; i < 2; i++){
        $("#Q2_form").append(order[i]);
    }
    next_Q2();
}

function next_Q2(){
    $("input:button[name=Question2]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "逢甲 考古"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q2").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q2_ans_0").click(function(){
        submit_time = 0;
        $("#Q2").hide();
        $("#Q3").show();
        $("#this_span").text("0");
        $("#Q3_next").hide();
        reorder_Q3();
    });
    $("#q2_ans_1").click(function(){
        submit_time = 0;
        $("#Q2").hide();
        $("#Q3").show();
        $("#this_span").text("0");
        $("#Q3_next").hide();
        reorder_Q3();
    });
}
/*********************************Q3**********************************/
function reorder_Q3(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question3]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q3_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q3_form").append(order[i]);
    }
    next_Q3();
}

function next_Q3(){
    $("input:button[name=Question3]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "7-11"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q3").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q3_ans_0").click(function(){
        submit_time = 0;
        $("#Q3").hide();
        $("#Q4").show();
        $("#this_span").text("0");
        $("#Q4_next").hide();
        reorder_Q4();
    });
    $("#q3_ans_1").click(function(){
        submit_time = 0;
        $("#Q3").hide();
        $("#Q4").show();
        $("#this_span").text("0");
        $("#Q4_next").hide();
        reorder_Q4();
    });
    $("#q3_ans_2").click(function(){
        submit_time = 0;
        $("#Q3").hide();
        $("#Q4").show();
        $("#this_span").text("0");
        $("#Q4_next").hide();
        reorder_Q4();
    });
    $("#q3_ans_3").click(function(){
        submit_time = 0;
        $("#Q3").hide();
        $("#Q4").show();
        $("#this_span").text("0");
        $("#Q4_next").hide();
        reorder_Q4();
    });
}
/*********************************Q4**************************************/
function reorder_Q4(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question4]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q4_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q4_form").append(order[i]);
    }
    next_Q4();
}

function next_Q4(){
    $("input:button[name=Question4]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "Google"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q4").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q4_ans_0").click(function(){
        submit_time = 0;
        $("#Q4").hide();
        $("#Q5").show();
        $("#this_span").text("0");
        $("#Q5_next").hide();
        reorder_Q5();
    });
    $("#q4_ans_1").click(function(){
        submit_time = 0;
        $("#Q4").hide();
        $("#Q5").show();
        $("#this_span").text("0");
        $("#Q5_next").hide();
        reorder_Q5();
    });
    $("#q4_ans_2").click(function(){
        submit_time = 0;
        $("#Q4").hide();
        $("#Q5").show();
        $("#this_span").text("0");
        $("#Q5_next").hide();
        reorder_Q5();
    });
    $("#q4_ans_3").click(function(){
        submit_time = 0;
        $("#Q4").hide();
        $("#Q5").show();
        $("#this_span").text("0");
        $("#Q5_next").hide();
        reorder_Q5();
    });
}
/*********************************Q5**************************************/
function reorder_Q5(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question5]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q5_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q5_form").append(order[i]);
    }
    next_Q5();
}

function next_Q5(){
    $("input:button[name=Question5]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "8bits"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q5").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q5_ans_0").click(function(){
        submit_time = 0;
        $("#Q5").hide();
        $("#Q6").show();
        $("#this_span").text("0");
        $("#Q6_next").hide();
        reorder_Q6();
    });
    $("#q5_ans_1").click(function(){
        submit_time = 0;
        $("#Q5").hide();
        $("#Q6").show();
        $("#this_span").text("0");
        $("#Q6_next").hide();
        reorder_Q6();
    });
    $("#q5_ans_2").click(function(){
        submit_time = 0;
        $("#Q5").hide();
        $("#Q6").show();
        $("#this_span").text("0");
        $("#Q6_next").hide();
        reorder_Q6();
    });
    $("#q5_ans_3").click(function(){
        submit_time = 0;
        $("#Q5").hide();
        $("#Q6").show();
        $("#this_span").text("0");
        $("#Q6_next").hide();
        reorder_Q6();
    });
}
/*********************************Q6**************************************/
function reorder_Q6(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question6]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q6_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q6_form").append(order[i]);
    }
    next_Q6();
}

function next_Q6(){
    $("input:button[name=Question6]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "黑客社"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q6").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q6_ans_0").click(function(){
        submit_time = 0;
        $("#Q6").hide();
        $("#Q7").show();
        $("#this_span").text("0");
        $("#Q7_next").hide();
        reorder_Q7();
    });
    $("#q6_ans_1").click(function(){
        submit_time = 0;
        $("#Q6").hide();
        $("#Q7").show();
        $("#this_span").text("0");
        $("#Q7_next").hide();
        reorder_Q7();
    });
    $("#q6_ans_2").click(function(){
        submit_time = 0;
        $("#Q6").hide();
        $("#Q7").show();
        $("#this_span").text("0");
        $("#Q7_next").hide();
        reorder_Q7();
    });
    $("#q6_ans_3").click(function(){
        submit_time = 0;
        $("#Q6").hide();
        $("#Q7").show();
        $("#this_span").text("0");
        $("#Q7_next").hide();
        reorder_Q7();
    });
}
/*********************************Q7**************************************/
function reorder_Q7(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question7]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q7_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q7_form").append(order[i]);
    }
    next_Q7();
}

function next_Q7(){
    $("input:button[name=Question7]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "87"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q7").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q7_ans_0").click(function(){
        submit_time = 0;
        $("#Q7").hide();
        $("#Q8").show();
        $("#this_span").text("0");
        $("#Q8_next").hide();
        reorder_Q8();
    });
    $("#q7_ans_1").click(function(){
        submit_time = 0;
        $("#Q7").hide();
        $("#Q8").show();
        $("#this_span").text("0");
        $("#Q8_next").hide();
        reorder_Q8();
    });
    $("#q7_ans_2").click(function(){
        submit_time = 0;
        $("#Q7").hide();
        $("#Q8").show();
        $("#this_span").text("0");
        $("#Q8_next").hide();
        reorder_Q8();
    });
    $("#q7_ans_3").click(function(){
        submit_time = 0;
        $("#Q7").hide();
        $("#Q8").show();
        $("#this_span").text("0");
        $("#Q8_next").hide();
        reorder_Q8();
    });
}
/*********************************Q8**************************************/
function reorder_Q8(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question8]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q8_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q8_form").append(order[i]);
    }
    next_Q8();
}

function next_Q8(){
    $("input:button[name=Question8]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "記事本"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q8").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q8_ans_0").click(function(){
        submit_time = 0;
        $("#Q8").hide();
        $("#Q9").show();
        $("#this_span").text("0");
        $("#Q9_next").hide();
        reorder_Q9();
    });
    $("#q8_ans_1").click(function(){
        submit_time = 0;
        $("#Q8").hide();
        $("#Q9").show();
        $("#this_span").text("0");
        $("#Q9_next").hide();
        reorder_Q9();
    });
    $("#q8_ans_2").click(function(){
        submit_time = 0;
        $("#Q8").hide();
        $("#Q9").show();
        $("#this_span").text("0");
        $("#Q9_next").hide();
        reorder_Q9();
    });
    $("#q8_ans_3").click(function(){
        submit_time = 0;
        $("#Q8").hide();
        $("#Q9").show();
        $("#this_span").text("0");
        $("#Q9_next").hide();
        reorder_Q9();
    });
}
/*********************************Q9**************************************/
function reorder_Q9(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question9]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q9_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q9_form").append(order[i]);
    }
    next_Q9();
}

function next_Q9(){
    $("input:button[name=Question9]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "飛飛"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q9").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q9_ans_0").click(function(){
        submit_time = 0;
        $("#Q9").hide();
        $("#Q10").show();
        $("#this_span").text("0");
        $("#Q10_next").hide();
        reorder_Q10();
    });
    $("#q9_ans_1").click(function(){
        submit_time = 0;
        $("#Q9").hide();
        $("#Q10").show();
        $("#this_span").text("0");
        $("#Q10_next").hide();
        reorder_Q10();
    });
    $("#q9_ans_2").click(function(){
        submit_time = 0;
        $("#Q9").hide();
        $("#Q10").show();
        $("#this_span").text("0");
        $("#Q10_next").hide();
        reorder_Q10();
    });
    $("#q9_ans_3").click(function(){
        submit_time = 0;
        $("#Q9").hide();
        $("#Q10").show();
        $("#this_span").text("0");
        $("#Q10_next").hide();
        reorder_Q10();
    });
}
/*********************************Q10*************************************/
function reorder_Q10(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question10]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q10_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q10_form").append(order[i]);
    }
    next_Q10();
}

function next_Q10(){
    $("input:button[name=Question10]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "Capture the flag"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q10").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q10_ans_0").click(function(){
        submit_time = 0;
        $("#Q10").hide();
        $("#Q11").show();
        $("#this_span").text("0");
        $("#Q11_next").hide();
        reorder_Q11();
    });
    $("#q10_ans_1").click(function(){
        submit_time = 0;
        $("#Q10").hide();
        $("#Q11").show();
        $("#this_span").text("0");
        $("#Q11_next").hide();
        reorder_Q11();
    });
    $("#q10_ans_2").click(function(){
        submit_time = 0;
        $("#Q10").hide();
        $("#Q11").show();
        $("#this_span").text("0");
        $("#Q11_next").hide();
        reorder_Q11();
    });
    $("#q10_ans_3").click(function(){
        submit_time = 0;
        $("#Q10").hide();
        $("#Q11").show();
        $("#this_span").text("0");
        $("#Q11_next").hide();
        reorder_Q11();
    });
}
/*********************************Q11*************************************/
function reorder_Q11(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question11]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q11_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q11_form").append(order[i]);
    }
    next_Q11();
}

function next_Q11(){
    $("input:button[name=Question11]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "Python"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q11").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q11_ans_0").click(function(){
        submit_time = 0;
        $("#Q11").hide();
        $("#Q12").show();
        $("#this_span").text("0");
        $("#Q12_next").hide();
        reorder_Q12();
    });
    $("#q11_ans_1").click(function(){
        submit_time = 0;
        $("#Q11").hide();
        $("#Q12").show();
        $("#this_span").text("0");
        $("#Q12_next").hide();
        reorder_Q12();
    });
    $("#q11_ans_2").click(function(){
        submit_time = 0;
        $("#Q11").hide();
        $("#Q12").show();
        $("#this_span").text("0");
        $("#Q12_next").hide();
        reorder_Q12();
    });
    $("#q11_ans_3").click(function(){
        submit_time = 0;
        $("#Q11").hide();
        $("#Q12").show();
        $("#this_span").text("0");
        $("#Q12_next").hide();
        reorder_Q12();
    });
}
/*********************************Q12*************************************/
function reorder_Q12(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question12]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q12_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q12_form").append(order[i]);
    }
    next_Q12();
}

function next_Q12(){
    $("input:button[name=Question12]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "dir"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q12").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q12_ans_0").click(function(){
        submit_time = 0;
        $("#Q12").hide();
        $("#Q13").show();
        $("#this_span").text("0");
        $("#Q13_next").hide();
        reorder_Q13();
    });
    $("#q12_ans_1").click(function(){
        submit_time = 0;
        $("#Q12").hide();
        $("#Q13").show();
        $("#this_span").text("0");
        $("#Q13_next").hide();
        reorder_Q13();
    });
    $("#q12_ans_2").click(function(){
        submit_time = 0;
        $("#Q12").hide();
        $("#Q13").show();
        $("#this_span").text("0");
        $("#Q13_next").hide();
        reorder_Q13();
    });
    $("#q12_ans_3").click(function(){
        submit_time = 0;
        $("#Q12").hide();
        $("#Q13").show();
        $("#this_span").text("0");
        $("#Q13_next").hide();
        reorder_Q13();
    });
}
/*********************************Q13*************************************/
function reorder_Q13(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question13]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q13_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q13_form").append(order[i]);
    }
    next_Q13();
}

function next_Q13(){
    $("input:button[name=Question13]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "vim"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q13").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q13_ans_0").click(function(){
        submit_time = 0;
        $("#Q13").hide();
        $("#Q14").show();
        $("#this_span").text("0");
        $("#Q14_next").hide();
        reorder_Q14();
    });
    $("#q13_ans_1").click(function(){
        submit_time = 0;
        $("#Q13").hide();
        $("#Q14").show();
        $("#this_span").text("0");
        $("#Q14_next").hide();
        reorder_Q14();
    });
    $("#q13_ans_2").click(function(){
        submit_time = 0;
        $("#Q13").hide();
        $("#Q14").show();
        $("#this_span").text("0");
        $("#Q14_next").hide();
        reorder_Q14();
    });
    $("#q13_ans_3").click(function(){
        submit_time = 0;
        $("#Q13").hide();
        $("#Q14").show();
        $("#this_span").text("0");
        $("#Q14_next").hide();
        reorder_Q14();
    });
}
/*********************************Q14*************************************/
function reorder_Q14(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question14]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q14_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q14_form").append(order[i]);
    }
    next_Q14();
}

function next_Q14(){
    $("input:button[name=Question14]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "星期三" || answer == "星期日"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q14").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q14_ans_0").click(function(){
        submit_time = 0;
        $("#Q14").hide();
        $("#Q15").show();
        $("#this_span").text("0");
        $("#Q15_next").hide();
        reorder_Q15();
    });
    $("#q14_ans_1").click(function(){
        submit_time = 0;
        $("#Q14").hide();
        $("#Q15").show();
        $("#this_span").text("0");
        $("#Q15_next").hide();
        reorder_Q15();
    });
    $("#q14_ans_2").click(function(){
        submit_time = 0;
        $("#Q14").hide();
        $("#Q15").show();
        $("#this_span").text("0");
        $("#Q15_next").hide();
        reorder_Q15();
    });
    $("#q14_ans_3").click(function(){
        submit_time = 0;
        $("#Q14").hide();
        $("#Q15").show();
        $("#this_span").text("0");
        $("#Q15_next").hide();
        reorder_Q15();
    });
}
/*********************************Q15*************************************/
function reorder_Q15(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question15]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q15_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q15_form").append(order[i]);
    }
    next_Q15();
}

function next_Q15(){
    $("input:button[name=Question15]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "二進位"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q15").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q15_ans_0").click(function(){
        submit_time = 0;
        $("#Q15").hide();
        $("#Q16").show();
        $("#this_span").text("0");
        $("#Q16_next").hide();
        reorder_Q16();
    });
    $("#q15_ans_1").click(function(){
        submit_time = 0;
        $("#Q15").hide();
        $("#Q16").show();
        $("#this_span").text("0");
        $("#Q16_next").hide();
        reorder_Q16();
    });
    $("#q15_ans_2").click(function(){
        submit_time = 0;
        $("#Q15").hide();
        $("#Q16").show();
        $("#this_span").text("0");
        $("#Q16_next").hide();
        reorder_Q16();
    });
    $("#q15_ans_3").click(function(){
        submit_time = 0;
        $("#Q15").hide();
        $("#Q16").show();
        $("#this_span").text("0");
        $("#Q16_next").hide();
        reorder_Q16();
    });
}
/*********************************Q16*************************************/
function reorder_Q16(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question16]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q16_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q16_form").append(order[i]);
    }
    next_Q16();
}

function next_Q16(){
    $("input:button[name=Question16]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "其餘三者皆是"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q16").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q16_ans_0").click(function(){
        submit_time = 0;
        $("#Q16").hide();
        $("#Q17").show();
        $("#this_span").text("0");
        $("#Q17_next").hide();
        reorder_Q17();
    });
    $("#q16_ans_1").click(function(){
        submit_time = 0;
        $("#Q16").hide();
        $("#Q17").show();
        $("#this_span").text("0");
        $("#Q17_next").hide();
        reorder_Q17();
    });
    $("#q16_ans_2").click(function(){
        submit_time = 0;
        $("#Q16").hide();
        $("#Q17").show();
        $("#this_span").text("0");
        $("#Q17_next").hide();
        reorder_Q17();
    });
    $("#q16_ans_3").click(function(){
        submit_time = 0;
        $("#Q16").hide();
        $("#Q17").show();
        $("#this_span").text("0");
        $("#Q17_next").hide();
        reorder_Q17();
    });
}
/*********************************Q17*************************************/
function reorder_Q17(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question17]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q17_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q17_form").append(order[i]);
    }
    next_Q17();
}

function next_Q17(){
    $("input:button[name=Question17]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "TimeTree"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q17").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q17_ans_0").click(function(){
        submit_time = 0;
        $("#Q17").hide();
        $("#Q18").show();
        $("#this_span").text("0");
        $("#Q18_next").hide();
        reorder_Q18();
    });
    $("#q17_ans_1").click(function(){
        submit_time = 0;
        $("#Q17").hide();
        $("#Q18").show();
        $("#this_span").text("0");
        $("#Q18_next").hide();
        reorder_Q18();
    });
    $("#q17_ans_2").click(function(){
        submit_time = 0;
        $("#Q17").hide();
        $("#Q18").show();
        $("#this_span").text("0");
        $("#Q18_next").hide();
        reorder_Q18();
    });
    $("#q17_ans_3").click(function(){
        submit_time = 0;
        $("#Q17").hide();
        $("#Q18").show();
        $("#this_span").text("0");
        $("#Q18_next").hide();
        reorder_Q18();
    });
}
/*********************************Q18*************************************/
function reorder_Q18(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question18]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q18_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q18_form").append(order[i]);
    }
    next_Q18();
}

function next_Q18(){
    $("input:button[name=Question18]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "三者皆可"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q18").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q18_ans_0").click(function(){
        submit_time = 0;
        $("#Q18").hide();
        $("#Q19").show();
        $("#this_span").text("0");
        $("#Q19_next").hide();
        reorder_Q19();
    });
    $("#q18_ans_1").click(function(){
        submit_time = 0;
        $("#Q18").hide();
        $("#Q19").show();
        $("#this_span").text("0");
        $("#Q19_next").hide();
        reorder_Q19();
    });
    $("#q18_ans_2").click(function(){
        submit_time = 0;
        $("#Q18").hide();
        $("#Q19").show();
        $("#this_span").text("0");
        $("#Q19_next").hide();
        reorder_Q19();
    });
    $("#q18_ans_3").click(function(){
        submit_time = 0;
        $("#Q18").hide();
        $("#Q19").show();
        $("#this_span").text("0");
        $("#Q19_next").hide();
        reorder_Q19();
    });
}
/*******************************Q19*********************************/
function reorder_Q19(){
    var order =[-1,-1,-1];
    $("input:button[name=Question19]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q19_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q19_form").append(order[i]);
    }
    next_Q19();
}

function next_Q19(){
    $("input:button[name=Question19]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "知道" || answer == "現在知道了"){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q19").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q19_ans_0").click(function(){
        submit_time = 0;
        $("#Q19").hide();
        $("#Q20").show();
        $("#this_span").text("0");
        $("#Q20_next").hide();
        reorder_Q20();
    });
    $("#q19_ans_1").click(function(){
        submit_time = 0;
        $("#Q19").hide();
        $("#Q20").show();
        $("#this_span").text("0");
        $("#Q20_next").hide();
        reorder_Q20();
    });
    $("#q19_ans_2").click(function(){
        submit_time = 0;
        $("#Q19").hide();
        $("#Q20").show();
        $("#this_span").text("0");
        $("#Q20_next").hide();
        reorder_Q20();
    });
    $("#q19_ans_3").click(function(){
        submit_time = 0;
        $("#Q19").hide();
        $("#Q20").show();
        $("#this_span").text("0");
        $("#Q20_next").hide();
        reorder_Q20();
    });
}
/*******************************Q20*********************************/
function reorder_Q20(){
    var order =[-1,-1,-1,-1];
    $("input:button[name=Question20]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
    });
    $("#Q20_form").empty();
    for(let i = 0; i < 4; i++){
        $("#Q20_form").append(order[i]);
    }
    next_Q20();
}

function next_Q20(){
    $("input:button[name=Question20]").click(function(index,val){
        submit_time++;
        var answer = $(this).val();
        if(submit_time == 1 && answer == "  "){
            score++;
            $("#score_span").text(score);
            $("#this_span").text("1");
        }
        $("button.Q20").show();
        var className = $(this).attr("class");
        $('p.'+className).show();
    });
    $("#q20_ans_0").click(function(){
        submit_time = 0;
        $("#Q20").hide();
        $("#timer").hide();
        $("#score").hide();
        $("#end_page").show();
        $("#final_score").text(score);
    });
    $("#q20_ans_1").click(function(){
        submit_time = 0;
        $("#Q20").hide();
        $("#timer").hide();
        $("#end_page").show();
        $("#score").hide();
        $("#final_score").text(score);
    });
    $("#q20_ans_2").click(function(){
        submit_time = 0;
        $("#Q20").hide();
        $("#timer").hide();
        $("#end_page").show();
        $("#score").hide();
        $("#final_score").text(score);
    });
    $("#q20_ans_3").click(function(){
        submit_time = 0;
        $("#Q20").hide();
        $("#timer").hide();
        $("#end_page").show();
        $("#score").hide();
        $("#final_score").text(score);
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
                    $("#app").hide();
                    $("#score").hide();
                    $("#final_score_time").text(score);
                    $("#Q1,#Q2,#Q3,#Q4,#Q5,#Q6,#Q7,#Q8,#Q9,#Q10,#Q11,#Q12,#Q13,#Q14,#Q15,#Q16,#Q17,#Q18,#Q19,#Q20").hide();
                    $("#end_page_time").show();
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
