/*
This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
Email: akraonandula@gmail.com

*/
  var ckt=0;
  var ch=0;
  var clp=0;
  var amp= $("#av").val();
  var fre= $("#fv").val();
  var vr= $("#vrv").val();
  var vr1= $("#v1v").val();
  var vr2= $("#v2v").val();
  var vc1= $("#vc1v").val();
  var t1= $("#t1v").val();
  var px1= $("#px1v").val();
  var py1= $("#py1v").val();
  var vc2= $("#vc2v").val();
  var t2= $("#t2v").val();
  var px2= $("#px2v").val();
  var py2= $("#py2v").val();

  function rng(start,step,end) {
      var ans = [];
      for (let i = start; i <= end; i=i+step) {
          ans.push(i);
      }
      return ans;
  };
  function rngvr(vr,vi) {
              var ans = [];
              for(let i=0;vi[i]!=undefined;i++)
                  {
                        ans.push(vr);
                      }
              return ans;
    };
  function rngscn(a,f,x) {
      var pi=22/7;
      var ans = [];
        for(let i=0;x[i]!=undefined;i++)
          {
            ans.push(a*Math.sin(f*x[i]));
          }
      return ans;
  };
  function rngclp1(a,vr,vi,sh) {
          var ans = [];
          if(a<vr1)
          {alert("Select Vr Should be lessthan A \n select Vr value properly");}
          else{
            if(sh==1){
                  for(let i=0;vi[i]!=undefined;i++)
                      {
                            if( vi[i]>vr )
                                {ans.push(vi[i]);}
                                else
                                {ans.push(vr);}
                      }
                  }
                  else{
                    for(let i=0;vi[i]!=undefined;i++)
                        {
                              if( vi[i]<vr )
                                  {ans.push(vi[i]);}
                                  else
                                  {ans.push(vr);}
                        }
                  }
                  }
          return ans;
      };
  function rngclp2(a,vr1,vr2,vi) {
        var ans = [];
        if(a<vr1)
        {alert("Select Vr1 Should be lessthan A \n select Vr1 value properly");}
        else if(a<vr2)
        {alert("Vr2 should be lessthan A \n select Vr2 value properly");}
        else{
        for(let i=0;vi[i]!=undefined;i++)
            {
                  if(vr1>vr2){
                    if( vi[i]<vr1 && vi[i]>vr2 )
                      {ans.push(vi[i]);}
                      else if(vi[i]>vr1)
                      { ans.push(vr1);}
                      else if(vi[i]<vr2)
                      {ans.push(vr2);}
                    }
                    else {
                      if( vi[i]>vr1 && vi[i]<vr2 )
                        {ans.push(vi[i]);}
                        else if(vi[i]<vr1)
                        { ans.push(vr1);}
                        else if(vi[i]>vr2)
                        {ans.push(vr2);}

                    }
                  }
                }
        return ans;
    };
  function plt(cha){
    var amp= $("#av").val();
    var fre= $("#fv").val();
    var vr= $("#vrv").val();
    var vr1= $("#v1v").val();
    var vr2= $("#v2v").val();
    var vc1= $("#vc1v").val();
    var t1= $("#t1v").val();
    var px1= $("#px1v").val();
    var py1= $("#py1v").val();
    var vc2= $("#vc2v").val();
    var t2= $("#t2v").val();
    var px2= $("#px2v").val();
    var py2= $("#py2v").val();
                var pi=22/7;
                var ti= rng(0,0.01,4*pi);
                var vi= rngscn(amp,fre,ti);
                var vclp1s= rngclp1(amp,vr,vi,1);
                var vclp1h= rngclp1(amp,vr,vi,2);
                var vclp2= rngclp2(amp,vr1,vr2,vi);
                var vrl= rngvr(vr,vi);
                var vr1l= rngvr(vr1,vi);
                var vr2l= rngvr(vr2,vi);

                TEST = document.getElementById('grph');
                    var in1 = {
                          x: ti,
                          y: vi,
                          type: 'scatter',
                          name: 'Input(Vi)'
                    };
                    var op1 = {
                          x: ti,
                          y: vclp1s,
                          type: 'scatter',
                          name: 'Output(Vo)'
                    };
                    var op2 = {
                          x: ti,
                          y: vclp1h,
                          type: 'scatter',
                          name: 'Output(Vo)'
                    };
                    var op3 = {
                          x: ti,
                          y: vclp2,
                          type: 'scatter',
                          name: 'Output(Vo)'
                    };
                    var inr = {
                          x: ti,
                          y: vrl,
                          type: 'line',
                          name: 'Vr1',
                          line: {
                            dash: 'dot',
                            width: 1
                          }
                    };
                    var inr1 = {
                          x: ti,
                          y: vr1l,
                          type: 'line',
                          name: 'Vr2',
                          line: {
                            dash: 'dot',
                            width: 1
                          }
                    };
                    var inr2 = {
                          x: ti,
                          y: vr2l,
                          type: 'line',
                          name: 'Vr2',
                          line: {
                            dash: 'dot',
                            width: 1
                          }
                    };
                    if(cha=='1'){
                      var data = [in1];
                      var layout={title: 'Input (Vi)', xlable:'Time(secs)',ylable:'Input(V)'};
                    }
                    else if(cha=='2'){
                      if(clp=='1' || clp=='2'){
                      var data = [op1];
                      var layout={title: 'Clipper Output(Vo)', xlable:'Time(secs)',ylable:'Output(V)'};
                      }
                      else if(clp=='3' || clp=='4'){
                        var data = [op2];
                        var layout={title: 'Clipper Output(Vo)', xlable:'Time(secs)',ylable:'Output(V)'};
                      }
                      else if (clp=='5') {
                        var data = [op3];
                        var layout={title: 'Clipper Output(Vo)', xlable:'Time(secs)',ylable:'Output(V)'};
                      }
                    }
                    else if(cha=='3'){
                      if(clp=='1' || clp=='2'){
                      var data = [in1,op1,inr];
                      var layout={title: 'Clipper plot',xlable:'Time(secs)',ylable:'Input(V) & Output (V)'};
                      }
                      else if(clp=='3' || clp=='4'){
                        var data = [in1,op2,inr];
                        var layout={title: 'Clipper plot',xlable:'Time(secs)',ylable:'Input(V) & Output (V)'};
                      }
                      else if (clp=='5') {
                        var data = [in1,op3,inr1,inr2];
                        var layout={title: 'Clipper plot',xlable:'Time(secs)',ylable:'Input(V) & Output (V)'};
                      }
                      else{
                        var data = [in1];
                        var layout={title: 'Input (Vi)', xlable:'Time(secs)',ylable:'Input(V)'};
                      }
                    }
                    Plotly.newPlot(TEST, data,layout);
  };

$(document).ready(function(){
    $("#I1").slideUp();
    $("#I2").slideUp();
    $(".pic").slideUp();
    $("#ctl").slideUp();
    $("#pw").slideUp();
    $("#vi").text($("#av").val());
    $("#f").text($("#fv").val());
    $("#vr").text($("#vrv").val());
    $("#va1").text($("#v1v").val());
    $("#va2").text($("#v2v").val());
    $("#vc1").text($("#vc1v").val());
    $("#t1").text($("#t1v").val());
    $("#px1").text($("#px1v").val());
    $("#py1").text($("#py1v").val());
    $("#vc2").text($("#vc2v").val());
    $("#t2").text($("#t2v").val());
    $("#px2").text($("#px2v").val());
    $("#py2").text($("#py2v").val());
    plt(ch);
});

    $("#c1,#c2,#c3,#c4").click(function(){
      $("#I1").slideDown("slow");
      $("#I2").slideUp();
      $("#v2").slideUp();
      $("#v1").slideDown("slow");
      $("#pw").slideDown("slow");
    });
    $("#c1").click(function(){
      clp=1;
      $(".pic").slideUp();
      $("#ClpDFSe").slideDown("slow");
      $("#grph").slideDown("slow");
    });
    $("#c2").click(function(){
      clp=2;
      $(".pic").slideUp();
      $("#ClpDFSh").slideDown("slow");
      $("#grph").slideDown("slow");
    });
    $("#c3").click(function(){
      clp=3;
      $(".pic").slideUp();
      $("#ClpDRSe").slideDown("slow");
      $("#grph").first().slideDown("slow");
    });
    $("#c4").click(function(){
      clp=4;
      $(".pic").slideUp();
      $("#ClpDRSh").slideDown("slow");
      $("#grph").slideDown("slow");
    });
    $("#c5").click(function(){
      clp=5;
      $("#I1").slideUp();
      $("#I2").slideDown("slow");
      $(".pic").slideUp();
      $("#ClpDt").slideDown("slow");
      $("#grph").slideDown("slow");
      $("#v1").slideUp();
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
      plt(ch);
    }
    else{
      $("#sn").text("Circuit OFF");
      $("#sn").css("background","red");
      $("#grp").removeClass("col-sm-8");
      $("#grp").addClass("col-sm-4");
      $("#ckt").addClass("col-sm-8");
      $("#ctl").slideUp();
      ckt=0;
    }
  });
    $("#c1,#c2,#c3,#c4,#c5").click(function(){
      $("#s1").prop("checked",false);
      $("#sn").text("Circuit OFF");
      $("#sn").css("background","red");
      $("#grp").removeClass("col-sm-8");
      $("#grp").addClass("col-sm-4");
      $("#ckt").addClass("col-sm-8");
      $("#ctl").slideUp();
      ckt=0;
      plt(0);
    });
    $("#av").change(function(){
      $("#vi").text($("#av").val());
      plt(ch);
    });
    $("#fv").change(function(){
      $("#f").text($("#fv").val());
      plt(ch);
    });
    $("#vrv").change(function(){
      $("#vr").text($("#vrv").val());
      plt(ch);
    });
    $("#v1v").change(function(){
      $("#va1").text($("#v1v").val());
      plt(ch);
    });
    $("#v2v").change(function(){
      $("#va2").text($("#v2v").val());
      plt(ch);
    });
    $("#vc1v").change(function(){
      $("#vc1").text($("#vc1v").val());
      plt(ch);
    });
    $("#t1v").change(function(){
      $("#t1").text($("#t1v").val());
      plt(ch);
    });
    $("#px1v").change(function(){
      $("#px1").text($("#px1v").val());
      plt(ch);
    });
    $("#py1v").change(function(){
      $("#py1").text($("#py1v").val());
      plt(ch);
    });
    $("#vc2v").change(function(){
      $("#vc2").text($("#vc2v").val());
      plt(ch);
    });
    $("#t2v").change(function(){
      $("#t2").text($("#t2v").val());
      plt(ch);
    });
    $("#px2v").change(function(){
      $("#px2").text($("#px2v").val());
      plt(ch);
    });
    $("#py2v").change(function(){
      $("#py2").text($("#py2v").val());
      plt(ch);
    });
    $("#bc1").click(function(){
      ch=1;
      plt(ch);
    });
    $("#bc2").click(function(){
      ch=2;
      plt(ch);
    });
    $("#du").click(function(){
      ch=3;
      plt(ch);
    });
