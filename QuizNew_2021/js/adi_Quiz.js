/*
This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/

*/
//var i=0;
var ql=0;
var cl=0;
var day = new Date();
var s=0;
var m=0;
function st() {
var day = new Date();
var se=day.getSeconds();
var da= ct(day.getDate()) +"/"+ct(day.getMonth()) +"/"+day.getFullYear() +" "+ct(day.getHours()) + " : " + ct(day.getMinutes()) + " : " + ct(se);
document.getElementById('qqd').innerHTML =da;
if(s==59){
  m++;
  s=0;
}
else{
s++;
}
 document.getElementById('qqt').innerHTML = "Time: "+ct(m)+ " : "+ ct(s) + " sec";

var t = setTimeout(st, 1000);
}
function ct(i) {
if (i < 10) {i = "0" + i};
return i;
}

$(document).ready(function(){
  // Activate the Carousel, but pause it from the start
  ql = $('.carousel-item').length - 1;
  cl=ql;
  $("#qq").carousel("pause");
  $("#qqn").text("Question "+(ql-cl+1)+" / "+(ql+1));
  $("#pb").hide();
  //$("#sb").hide();
  $("#pb").click(function(){
    cl=cl+1;
    $("#qqn").text("Question "+(ql-cl+1)+" / "+(ql+1));
    $("#qq").carousel("prev");
    if(cl>0){
      $("#nb").show();
      //$("#sb").hide();
    }
    if(cl==ql){
      $("#pb").hide();
      //$("#sb").hide();
    }
    $("#prb").css("width",(100-cl/ql*100)+"%");
  });
  $("#nb").click(function(){

    cl=cl-1;
    $("#qqn").text("Question "+(ql-cl+1)+" / "+(ql+1));
    if(cl==0){
      $("#nb").hide();
      //$("#sb").show();
    }
    $("#pb").show();
    $("#qq").carousel("next");
    $("#prb").css("width",(100-cl/ql*100)+"%");
  });
});


$("#q1c1,#q2c2,#q3c2").click(function(){
//i=i+1;
$(".an"+this.value).css("background","whitesmoke");
$("#o"+this.id).css("background","#a1e890");
//$("#qqsc").text("Score : "+i+" / "+(ql+1));
});
$("#q1c2,#q1c3,#q1c4,#q2c1,#q2c3,#q2c4,#q3c1,#q3c3,#q3c4").click(function(){
//i=i+1;
$(".an"+this.value).css("background","whitesmoke");
$("#o"+this.id).css("background","#dc8c8c");
//$("#qqsc").text("Score : "+i+" / "+(ql+1));
});
