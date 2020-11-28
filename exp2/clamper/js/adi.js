/*
This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
Email: akraonandula@gmail.com

*/
  var ckt=0;
  var ch=0;
  var cla=0;
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
      var ans = [];
        for(let i=0;x[i]!=undefined;i++)
          {
            ans.push(a*Math.sin(f*x[i]));
          }
      return ans;
  };
    function po(v,x) {
                var ans = [];
                for(let i=0;v[i]!=undefined;i++)
                    {
                          ans.push(v[i]+Number(x));
                        }
                return ans;
      };
  function plt(cha){
    var amp= $("#av").val();
    var fre= $("#fv").val();
    var vr= $("#vrv").val();
    var vc1= $("#vc1v").val();
    var t1= $("#t1v").val();
    var px1= $("#px1v").val();
    var py1= $("#py1v").val();
    var vc2= $("#vc2v").val();
    var t2= $("#t2v").val();
    var px2= $("#px2v").val();
    var py2= $("#py2v").val();
                var amp1=amp/vc1;
                var amp2=amp/vc2;
                fre1=fre*t1;
                fre2=fre*t2;
                var ti= rng(0,0.01,2*Math.PI);
                var vi= rngscn(amp1,fre1,ti);
                var vo= rngscn(amp2,fre2,ti);
                vo= po(vo,vr/vc2);
                var vrl= rngvr(vr/vc2,vi);
                var ti1= po(ti,px1);
                var ti2= po(ti,px2);
                vi= po(vi,py1);
                vo= po(vo,py2);
                vrl= po(vrl,py2);

                gr = document.getElementById('grph');
                    var in1 = {
                          x: ti1,
                          y: vi,
                          type: 'scatter',
                          name: 'Input(Vi)'
                    };
                    var op = {
                          x: ti2,
                          y: vo,
                          type: 'scatter',
                          name: 'Output(Vo)'
                    };
                    var inr = {
                          x: ti2,
                          y: vrl,
                          type: 'line',
                          name: 'Vr',
                          line: {
                            dash: 'dot',
                            width: 1
                          }
                    };
                    
                    if(cha=='1'){
                      var data = [in1];
                      var layout={title: 'Input (Vi)',plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: true,
                        autotick: true},
                        yaxis: {
                          title:'Input(V)',
                          showticklabels: true,
                          autotick: true}};
                    }
                    else if(cha=='2'){
                      var data = [op,inr];
                      var layout={title: 'Clamper Circuit Output(Vo)', plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: true,
                        autotick: true},
                        yaxis: {
                          title:'Output (V)',
                          showticklabels: true,
                          autotick: true}};
                      }
                    else if(cha=='3'){
                      var data = [in1,op,inr];
                      var layout={title: 'Clamper Circuit Plot',plot_bgcolor: 'black',paper_bgcolor:'black',text_color:'blue',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: true,
                        autotick: true},
                        yaxis: {
                          title:'Vi/Vo (V)',
                          showticklabels: true,
                          autotick: true}};
                      }
                      else{
                        var data = [];
                        var layout={title: 'Clamper Circuit Plot', plot_bgcolor: 'black',paper_bgcolor:'black',
                        font: {
                          family: 'Courier New, monospace',
                          size: 18,
                          color: '#7f7f7f'
                        },
                        xaxis: {
                          title:'Time (s)',
                          showticklabels: true,
                          autotick: true},
                          yaxis: {
                            title:'Input(V)',
                            showticklabels: true,
                            autotick: true}};
                      }
                    Plotly.newPlot(gr, data,layout);
  };

  $(document).ready(function(){
      $("#ctl").slideUp();
      $(".pic").slideUp();
      $("#vi").text($("#av").val());
      $("#f").text($("#fv").val());
      $("#vc1").text($("#vc1v").val());
      $("#t1").text($("#t1v").val());
      $("#px1").text($("#px1v").val());
      $("#py1").text($("#py1v").val());
      $("#vc2").text($("#vc2v").val());
      $("#t2").text($("#t2v").val());
      $("#px2").text($("#px2v").val());
      $("#py2").text($("#py2v").val());
      $("#s1").prop("checked",false);
      $("#sn").text("Circuit OFF");
      $("#sn").css("background","red");
      $("#pa").slideUp();
      $("#pw").slideUp();
      $("#I1").slideUp();
      $("#I2").slideUp();
      ckt=0;
      plt(0);
  });

  $("#c1,#c4").click(function(){
    $("#I1").slideDown("slow");
    $("#I2").slideUp();
    $("#pw").slideDown("slow");
    $("#v1").slideUp();
  });
  $("#c2,#c3,#c5,#c6").click(function(){
    $("#I1").slideUp("slow");
    $("#I2").slideDown("slow");
    $("#v1").slideDown("slow");
    $("#pw").slideDown("slow");
    $("#v1").slideDown();
  });
  $("#c1").click(function(){
    cla=1;
    $(".pic").slideUp();
    $("#PCa").slideDown("slow");
  });
  $("#c2").click(function(){
    cla=2;
    $(".pic").slideUp();
    $("#PCaWPVr").slideDown("slow");
  });
  $("#c3").click(function(){
    cla=3;
    $(".pic").slideUp();
    $("#PCaWNVr").slideDown("slow");
  });
  $("#c4").click(function(){
    cla=4;
    $(".pic").slideUp();
    $("#NCa").slideDown("slow");
  });
  $("#c5").click(function(){
    cla=5;
    $(".pic").slideUp();
    $("#NCaWPVr").slideDown("slow");
  });
  $("#c6").click(function(){
    cla=6;
    $(".pic").slideUp();
    $("#NCaWNVr").slideDown("slow");
  });
  $("#s1").click(function(){
    if(ckt==0){
    $("#sn").text("Circuit ON");
    $("#sn").css("background","green");
    $("#ckt").removeClass("col-sm-8");
    $("#ckt").addClass("col-sm-4");
    $("#grp").removeClass("col-sm-4");
    $("#grp").addClass("col-sm-8");
    $("#ctl").slideDown("slow");
    $("#grph").slideDown("slow");
    ckt=1;
    plt(ch);
  }
  else{
    $("#sn").text("Circuit OFF");
    $("#sn").css("background","red");
    $("#grp").removeClass("col-sm-8");
    $("#grp").addClass("col-sm-4");
    $("#ckt").removeClass("col-sm-4");
    $("#ckt").addClass("col-sm-8");
    $("#ctl").slideUp();
    $("#grph").slideUp("slow");
    ckt=0;
  }
});
  $("#c1,#c2,#c3,#c4,#c5,#c6").click(function(){
    $("#s1").prop("checked",false);
    $("#sn").text("Circuit OFF");
    $("#sn").css("background","red");
    $("#grp").removeClass("col-sm-8");
    $("#grp").addClass("col-sm-4");
    $("#ckt").removeClass("col-sm-4");
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
