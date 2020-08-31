/*
This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
Email: akraonandula@gmail.com

*/
var i=0,c=1;
var qs = ["#q1","#q2","#q3","#q4","#q5","#q6","#q7","#q8","#q9","#q10","#q11", "#q12","#q13","#q14","#q15"];
var a = ["#f1","#f2","#f3","#f4","#f5","#f6","#f7","#f8","#f9","#f10","#f11","#f12","#f13","#f14","#f15"];

$(document).ready(function(){
  $("#ti").show("slow");
  $("#qes").hide("slow");
  $("#rst").hide("slow");

  $("#st").click(function(){
    $("#ti").hide("slow");
    $("#qes").show("slow");
    $(qs[c-1]).show("slow");
    $(qs[c-1]).nextAll().hide("slow");
    $("#Qe").text(" Question "+c+" of 15 ");
    m();
  });
  function m(){

  $(a[c-1]).change(function(){
      $(qs[c-1]).hide("slow");
      $(qs[c]).show("slow");
      c=c+1;
      $("#Qe").text(" Question "+c+" of 15 ");
      if(c==a.length+1){
      $("#qt").hide("slow");
      $("#rst").show("slow");
      $("#ma").text(" You got "+i+" of 15 ");
    }
    else{
      m();
    }
  });
}

  $("#q1_1,#q22,#q32,#q43,#q54,#q63,#q74,#q84,#q91,#q102,#q111,#q121,#q131,#q141,#q152").click(function(){
  i=i+1;
  $(this).attr(style="background:Green;");
  });
  $("#rst").click(function(){
    $("#rst").hide("slow");
    $("#ti").show("slow");
    i=0;
    c=1;
  location.reload(true);
  });
});
