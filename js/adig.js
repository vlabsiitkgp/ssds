/**
        * adig.js v0
        * Copyright 2020, Virtual Labs, IIT Kharagpur.
        * All rights reserved.
        * Licensed under the MIT license
        * This javascript was designed and developed by
        * Aditya Kameswara Rao Nandula,
        * Senior Research Fellow,
        * Virtual Labs Phase II,
        * IIT Kharagpur.
*/
function adi(){
              var amp= document.getElementById("A1");
              var t= document.getElementById("T1");
              var vr1= document.getElementById("Vr1");
              var vr2= document.getElementById("Vr2");
              var ampv= document.getElementById("A1v");
              var tv= document.getElementById("T1v");
              var vr1v= document.getElementById("Vr1v");
              var vr2v= document.getElementById("Vr2v");
              ampv.innerHTML=amp.value;
              tv.innerHTML=t.value;
              vr1v.innerHTML=vr1.value;
              vr2v.innerHTML=vr2.value;
              var ar=[Number(amp.value),Number(t.value),Number(vr1.value),Number(vr2.value)];
              plt(ar);

};

function rad(x){
                var r1 =document.getElementById('r1');
                var r2 =document.getElementById('r2');
                var r3 =document.getElementById('r3');
                var r4 =document.getElementById('r4');
                var r5 =document.getElementById('r5');
                var a1 =document.getElementById('a1');
                var a2 =document.getElementById('a2');
                var a3 =document.getElementById('a3');
                var a4 =document.getElementById('a4');
                var a5 =document.getElementById('a5');
                var c1 =document.getElementById('c1');
                var ra1=document.getElementById('ra1');
                var ra2=document.getElementById('ra2');
                var im1=document.getElementById('im1');
                var im2=document.getElementById('im2');
                var im3=document.getElementById('im3');
                var im4=document.getElementById('im4');
                var im5=document.getElementById('im5');
                if(x=='1')
                        {
                            r1.checked=true;
                            r2.checked=false;
                            r3.checked=false;
                            r4.checked=false;
                            r5.checked=false;
                            a5.style.display='none';
                            im1.style.display='';
                            im2.style.display='none';
                            im3.style.display='none';
                            im4.style.display='none';
                            im5.style.display='none';
                            a1.style.display='';
                            a2.style.display='none';
                            a3.style.display='none';
                            a4.style.display='none';
                            ra1.style.display='';
                            ra2.style.display='none';
                          }
                else if(x=='2')
                        {
                            r1.checked=false;
                            r2.checked=true;
                            r3.checked=false;
                            r4.checked=false;
                            r5.checked=false;
                            a5.style.display='none';
                            a1.style.display='none';
                            a2.style.display='';
                            a3.style.display='none';
                            a4.style.display='none';
                            ra1.style.display='';
                            ra2.style.display='none';
                            im1.style.display='none';
                            im2.style.display='';
                            im3.style.display='none';
                            im4.style.display='none';
                            im5.style.display='none';

                          }
                else if(x=='3')
                        {
                            r1.checked=false;
                            r2.checked=false;
                            r3.checked=true;
                            r4.checked=false;
                            r5.checked=false;
                            a5.style.display='none';
                            a1.style.display='none';
                            a2.style.display='none';
                            a3.style.display='';
                            a4.style.display='none';
                            ra1.style.display='';
                            ra2.style.display='none';
                            im1.style.display='none';
                            im2.style.display='none';
                            im3.style.display='';
                            im4.style.display='none';
                            im5.style.display='none';

                        }
                else if(x=='4')
                        {
                            r1.checked=false;
                            r2.checked=false;
                            r3.checked=false;
                            r4.checked=true;
                            r5.checked=false;
                            a5.style.display='none';
                            a1.style.display='none';
                            a2.style.display='none';
                            a3.style.display='none';
                            a4.style.display='';
                            ra1.style.display='';
                            ra2.style.display='none';
                            im1.style.display='none';
                            im2.style.display='none';
                            im3.style.display='none';
                            im4.style.display='';
                            im5.style.display='none';

                        }
                else if (x==5)
                        {
                            r1.checked=false;
                            r2.checked=false;
                            r3.checked=false;
                            r4.checked=false;
                            r5.checked=true;
                            a5.style.display='';
                            a1.style.display='none';
                            a2.style.display='none';
                            a3.style.display='none';
                            a4.style.display='none';
                            ra1.style.display='none';
                            ra2.style.display='';
                            im1.style.display='none';
                            im2.style.display='none';
                            im3.style.display='none';
                            im4.style.display='none';
                            im5.style.display='';

                        }
                        else if (x==6)
                                {
                                    r1.checked=false;
                                    r2.checked=false;
                                    r3.checked=false;
                                    r4.checked=false;
                                    r5.checked=false;
                                    a5.style.display='none';
                                    a1.style.display='none';
                                    a2.style.display='none';
                                    a3.style.display='none';
                                    a4.style.display='none';
                                    ra1.style.display='none';
                                    ra2.style.display='none';
                                    im1.style.display='none';
                                    im2.style.display='none';
                                    im3.style.display='none';
                                    im4.style.display='none';
                                    im5.style.display='none';
                                    c1.style.display='none';

                                }

};

function bonl(){
            var r1=document.getElementById('r1');
            var r2=document.getElementById('r2');
            var r3=document.getElementById('r3');
            var r4=document.getElementById('r4');
            var r5=document.getElementById('r5');
            var a1=document.getElementById('a1');
            var a2=document.getElementById('a2');
            var a3=document.getElementById('a3');
            var a4=document.getElementById('a4');
            var a5=document.getElementById('a5');
            var ra1=document.getElementById('ra1');
            var ra2=document.getElementById('ra2');
            var im1=document.getElementById('im1');
            var im2=document.getElementById('im2');
            var im3=document.getElementById('im3');
            var im4=document.getElementById('im4');
            var im5=document.getElementById('im5');
            im1.style.display='none';
            im2.style.display='none';
            im3.style.display='none';
            im4.style.display='none';
            im5.style.display='none';
            r1.checked=false;
            r2.checked=false;
            r3.checked=false;
            r4.checked=false;
            r5.checked=false;
            a1.style.display='none';
            a2.style.display='none';
            a3.style.display='none';
            a4.style.display='none';
            a5.style.display='none';
            ra1.style.display='none';
            ra2.style.display='none';

            var amp= document.getElementById("A0");
            var t= document.getElementById("T0");
            var vr1= document.getElementById("Vr1");
            var vr2= document.getElementById("Vr2");
            var ampv= document.getElementById("A0v");
            var tv= document.getElementById("T0v");
            var vr1v= document.getElementById("Vr1v");
            var vr2v= document.getElementById("Vr2v");
            ampv.innerHTML=amp.value;
            tv.innerHTML=t.value;
            vr1v.innerHTML=vr1.value;
            vr2v.innerHTML=vr2.value;


  };

function rng(start,step, end) {
      var ans = [];
      for (let i = start; i <= end; i=i+step) {
          ans.push(i);
      }
      return ans;
  };

function rngscn(a,x,y) {
      var pi=22/7;
      var ans = [];
      if(y==1)
            {
              for(let i=0;x[i]!=undefined;i++)
                {
                    ans.push(a*Math.sin(x[i]*pi/180));
                }
            }
      else if(y==2)
            {
              for(let i=0;x[i]!=undefined;i++)
                {

                    ans.push(a*Math.cos(x[i]*pi/180));
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
    function rngvr(vr,vi) {
          var ans = [];
          for(let i=0;vi[i]!=undefined;i++)
              {
                    ans.push(vr);
                  }
          return ans;
      };



function plt(ar){
  var pi=22/7;
  var ti= rng(0,0.01,ar[1]);
  var x=rng(0,(721/ti.length),720)
  var y1= rngscn(ar[0],x,1);
  var y2= rngclp2(ar[0],ar[2],ar[3],y1);
  var y3= rngvr(ar[2],y1);
  var y4= rngvr(ar[3],y1);

  TEST = document.getElementById('grph');
  var tr1 = {
  x: ti,
  y: y1,
  type: 'scatter',
  name: 'Input(Vi)'
  };

  var tr2 = {
  x: ti,
  y: y2,
  type: 'scatter',
  name: 'Output(Vo)'
  };
  var tr3 = {
  x: ti,
  y: y3,
  type: 'line',
  name: 'Vr1',
  line: {
    dash: 'dot',
    width: 1
  }
  };
  var tr4 = {
  x: ti,
  y: y4,
  type: 'line',
  name: 'Vr2',
  line: {
    dash: 'dot',
    width: 1
  }
  };
  var data = [tr1, tr2,tr3,tr4];
  var layout={title: 'Clipper plot',xlable:'Time(secs)',ylable:'Input(V) & Output (V)'};
  Plotly.newPlot(TEST, data,layout);
  };
