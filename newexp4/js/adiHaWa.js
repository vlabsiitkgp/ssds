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
  function po(v,x) {
              var ans = [];
              for(let i=0;v[i]!=undefined;i++)
                  {
                        ans.push(v[i]+Number(x));
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
  function hawa(a,vi) {
          var ans = [];
          if(a<0){
                  alert("Select Amplitude (A) should be greaterthan 0 \n select A value properly");
                }
          else{
            for(let i=0;vi[i]!=undefined;i++){
                if(vi[i]>0){
                    ans.push(vi[i]);
                  }
                else{
                    ans.push(0);
                  }
                }
            }
          return ans;
      };
  function parame(vm){
        var vrms=vm/2;
        var vdc=vm/Math.PI;
        var vac=Math.sqrt(Math.pow(vrms,2)-Math.pow(vdc,2));
        var rf=vac/vdc;
        var effe=Math.pow(vdc,2)/Math.pow(vrms,2)*100;
        $("#vrms").text(vrms.toFixed(2));
        $("#vdc").text(vdc.toFixed(2));
        $("#vac").text(vac.toFixed(2));
        $("#rf").text(rf.toFixed(2));
        $("#effe").text(effe.toFixed(2));

      };


  function plt(cha){
    var amp= $("#av").val();
    var fre= $("#fv").val();
    var vc1= $("#vc1v").val();
    var t1= $("#t1v").val();
    var px1= $("#px1v").val();
    var py1= $("#py1v").val();
    var vc2= $("#vc2v").val();
    var t2= $("#t2v").val();
    var px2= $("#px2v").val();
    var py2= $("#py2v").val();
              parame(amp);
                var amp1=amp/vc1;
                var amp2=amp/vc2;
                fre1=fre*t1;
                fre2=fre*t2;
                var ti= rng(0,0.01,6);
                var vi= rngscn(amp1,fre1,ti);
                var vo= rngscn(amp2,fre2,ti);
                var ti1= po(ti,px1);
                var ti2= po(ti,px2);
                vi= po(vi,py1);
                var haw= hawa(amp2,vo);
                haw= po(haw,py2);
                gr = document.getElementById('grph');
                    var in1 = {
                          x: ti1,
                          y: vi,
                          type: 'scatter',
                          name: 'Input(Vi)'
                    };
                    var op1 = {
                          x: ti2,
                          y: haw,
                          type: 'scatter',
                          name: 'Output(Vo)'
                    };

                    if(cha=='1'){
                      var data = [in1];
                      var layout={title: 'Input (Vi)', plot_bgcolor: 'black',paper_bgcolor:'black',
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
                          autotick: true}
                      };
                    }
                    else if(cha=='2'){
                      var data = [op1];
                      var layout={title: 'Halfwave Rectified Output(Vo)', plot_bgcolor: 'black',paper_bgcolor:'black',
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
                          autotick: true}
                      };
                      }
                    else if(cha=='3'){
                      var data = [in1,op1];
                      var layout={title: 'Halfwave Rectifier Plot',plot_bgcolor:'black', paper_bgcolor:'black',text_color:'blue',
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
                          autotick: true}
                      };
                      }
                    else{
                      var data = [];
                      var layout={title: 'Halfwave Rectifier Plot',plot_bgcolor: 'black',paper_bgcolor:'black',
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
                          autotick: true}
                      };
                    }
                    Plotly.newPlot(gr, data,layout);
  };

$(document).ready(function(){
    $("#ctl").slideUp();
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
    $("#grp").slideUp();
    $("#ctl").slideUp();
    $("#pa").slideUp();
    ckt=0;
    plt(0);
});

    $("#s1").click(function(){
      if(ckt==0){
      $("#sn").text("Circuit ON");
      $("#sn").css("background","green");
      $("#ctl").slideDown("slow");
      $("#grp").slideDown("slow");
      $("#pa").slideDown("slow");
      ckt=1;
      plt(ch);
    }
    else{
      $("#sn").text("Circuit OFF");
      $("#sn").css("background","red");
      $("#grp").slideUp();
      $("#ctl").slideUp();
      $("#pa").slideUp();
      ckt=0;
      plt(0);
    }
  });
    $("#av").change(function(){
      $("#vi").text($("#av").val());
      plt(ch);
    });
    $("#fv").change(function(){
      $("#f").text($("#fv").val());
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
