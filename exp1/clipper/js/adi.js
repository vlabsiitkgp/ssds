/*
This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
Email: akraonandula@gmail.com

*/
var ckt=0;
$(document).ready(function(){
    $("#I1").slideUp("slow");
    $("#I2").slideUp("slow");
    $(".pic").slideUp("slow");
    $("#ctl").slideUp("slow");
    $("#pw").slideUp("slow");
    $("#c1,#c2,#c3,#c4").click(function(){
      $("#I1").slideDown("slow");
      $("#I2").slideUp("slow");
      $("#v2").slideUp("slow");
      $("#v1").slideDown("slow");
      $("#pw").slideDown("slow");
    });
    $("#c1").click(function(){
      $(".pic").slideUp("slow");
      $("#ClpDFSe").slideDown("slow");
      $("#grph").first().slideDown("slow");
    });
    $("#c2").click(function(){
      $(".pic").slideUp("slow");
      $("#ClpDFSh").slideDown("slow");
      $("#grph").slideDown("slow");
    });
    $("#c3").click(function(){
      $(".pic").slideUp("slow");
      $("#ClpDRSe").slideDown("slow");
      $("#grph").first().slideDown("slow");
    });
    $("#c4").click(function(){
      $(".pic").slideUp("slow");
      $("#ClpDRSh").slideDown("slow");
      $("#grph").slideDown("slow");
    });
    $("#c5").click(function(){
      $("#I1").slideUp("slow");
      $("#I2").slideDown("slow");
      $(".pic").slideUp("slow");
      $("#ClpDt").slideDown("slow");
      $("#grph1").slideDown("slow");
      $("#v1").slideUp("slow");
      $("#v2").slideDown("slow");
      $("#pw").slideDown("slow");
    });
    $("#s1").click(function(){
      if(ckt==0){
      $("#sn").text("Circuit ON");
      $("#sn").css("background","green");
      $("#ckt").removeClass("col-sm-8");
      $("#ckt").addClass("col-sm-4");
      $("#grp").addClass("col-sm-8");
      $("#ctl").slideDown("slow");
      ckt=1;
    }
    else{
      $("#sn").text("Circuit OFF");
      $("#sn").css("background","red");
      $("#grp").removeClass("col-sm-8");
      $("#grp").addClass("col-sm-4");
      $("#ckt").addClass("col-sm-8");
      $("#ctl").slideUp("slow");
      ckt=0;
    }
    });
});
