/*
This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
Email: akraonandula@gmail.com

*/

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
  });
  $("#q11,#q12,#q13,#q14").change(function(){
      $("#q1").hide("slow");
      $("#q2").show("slow");
  });
  $("#q21,#q22,#q23,#q24").change(function(){
      $("#q2").hide("slow");
      $("#q3").show("slow");
  });
  $("#q31,#q32,#q33,#q34").change(function(){
      $("#q3").hide("slow");
      $("#q4").show("slow");
  });
  $("#q41,#q42,#q43,#q44").change(function(){
      $("#q4").hide("slow");
      //i=i+1;
      $("#res").show("slow");
      $("#ma").text(" You got "+i+" out of 4 ");
  });
  $("#q11,#q22,#q31,#q43").click(function(){
  i=i+1;
  });
  $("#rst").click(function(){
    $("#res").hide("slow");
    $("#ti").show("slow");
    i=0
  location.reload(true);
  });
});
