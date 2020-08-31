/*
This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
Email: akraonandula@gmail.com

*/
var i=0,c=1;
$(document).ready(function(){
  var i=0;
  $("#ti").show("slow");
  $("#qes").hide("slow");
  $("#res").hide("slow");
  $("#st").click(function(){
    $("#ti").hide("slow");
    $("#qes").show("slow");
    $("#q1").show("slow");
    $("#q1").nextAll().hide("slow");
    $("#Qe").text(" Question "+c+" of 4 ");
    c=c+1;
  });
  $("#q11,#q12,#q13,#q14").change(function(){
      $("#q1").hide("slow");
      $("#q2").show("slow");
      $("#Qe").text(" Question "+c+" of 4 ");
    c=c+1;
  });
  $("#q21,#q22,#q23,#q24").change(function(){
      $("#q2").hide("slow");
      $("#q3").show("slow");
      $("#Qe").text(" Question "+c+" of 4 ");
    c=c+1;

  });
  $("#q31,#q32,#q33,#q34").change(function(){
      $("#q3").hide("slow");
      $("#q4").show("slow");
      $("#Qe").text(" Question "+c+" of 4 ");
      c=c+1;
  });
  $("#q41,#q42,#q43,#q44").change(function(){
      $("#q4").hide("slow");
      //i=i+1;
      $("#rst").show("slow");
      $("#ma").text(" You got "+i+" out of 4 ");
      alert(string($(this).val()));
  });
  $("#q11,#q22,#q31,#q43").click(function(){
  i=i+1;
  });
  $("#rst").click(function(){
    $("#rst").hide("slow");
    $("#ti").show("slow");
    i=0;
    c=1;
  location.reload(true);
  });
});
