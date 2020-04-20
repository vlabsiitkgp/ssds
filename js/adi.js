
function a(){
var av= document.getElementById("a");
var bv= document.getElementById("b");
var cv= document.getElementById("c");
var dv= document.getElementById("d");
bv.innerHTML=av.value;
av.oninput=function() {
              bv.innerHTML=av.value;
              if(Number(av.value)>0)
                      {
                      cv.innerHTML=av.value;
                    }
              else {
                    cv.innerHTML=0;
                  }
              if(Number(av.value)>0)
                  {
                  dv.innerHTML=av.value;
                  }
            else {
                  dv.innerHTML=-Number(av.value);
                  }
}
};

function rad(x){
                var r1=document.getElementById('r1');
                var r2=document.getElementById('r2');
                var r3=document.getElementById('r3');
                var r4=document.getElementById('r4');
                var a1=document.getElementById('a1');
                var a2=document.getElementById('a2');
                var a3=document.getElementById('a3');
                var a4=document.getElementById('a4');
                var ra1=document.getElementById('ra1');
                var ra2=document.getElementById('ra2');
                var ra3=document.getElementById('ra3');
                var ra4=document.getElementById('ra4');
                if(x=='1')
                        {
                            r1.checked=true;
                            r2.checked=false;
                            r3.checked=false;
                            r4.checked=false;
                            a1.style.display='';
                            a2.style.display='none';
                            a3.style.display='none';
                            a4.style.display='none';
                            ra1.style.display='';
                            ra2.style.display='none';
                            ra3.style.display='none';
                            ra4.style.display='none';
                          }
                else if(x=='2')
                        {
                            r1.checked=false;
                            r2.checked=true;
                            r3.checked=false;
                            r4.checked=false;
                            a1.style.display='none';
                            a2.style.display='';
                            a3.style.display='none';
                            a4.style.display='none';
                            ra1.style.display='none';
                            ra2.style.display='';
                            ra3.style.display='none';
                            ra4.style.display='none';
                          }
                else if(x=='3')
                        {
                            r1.checked=false;
                            r2.checked=false;
                            r3.checked=true;
                            r4.checked=false;
                            a1.style.display='none';
                            a2.style.display='none';
                            a3.style.display='';
                            a4.style.display='none';
                            ra1.style.display='none';
                            ra2.style.display='none';
                            ra3.style.display='';
                            ra4.style.display='none';
                        }
                else if(x=='4')
                        {
                            r1.checked=false;
                            r2.checked=false;
                            r3.checked=false;
                            r4.checked=true;
                            a1.style.display='none';
                            a2.style.display='none';
                            a3.style.display='none';
                            a4.style.display='';
                            ra1.style.display='none';
                            ra2.style.display='none';
                            ra3.style.display='none';
                            ra4.style.display='';
                        }
                else if (x==5)
                        {
                            r1.checked=false;
                            r2.checked=false;
                            r3.checked=false;
                            r4.checked=false;
                            a1.style.display='none';
                            a2.style.display='none';
                            a3.style.display='none';
                            a4.style.display='none';
                            ra1.style.display='none';
                            ra2.style.display='none';
                            ra3.style.display='none';
                            ra4.style.display='none';
                        }

};

function bonl(){
            var r1=document.getElementById('r1');
            var r2=document.getElementById('r2');
            var r3=document.getElementById('r3');
            var r4=document.getElementById('r4');
            var a1=document.getElementById('a1');
            var a2=document.getElementById('a2');
            var a3=document.getElementById('a3');
            var a4=document.getElementById('a4');
            var ra1=document.getElementById('ra1');
            var ra2=document.getElementById('ra2');
            var ra3=document.getElementById('ra3');
            var ra4=document.getElementById('ra4');

            r1.checked=false;
            r2.checked=false;
            r3.checked=false;
            r4.checked=false;
            a1.style.display='none';
            a2.style.display='none';
            a3.style.display='none';
            a4.style.display='none';
            ra1.style.display='none';
            ra2.style.display='none';
            ra3.style.display='none';
            ra4.style.display='none';
            TESTER = document.getElementById('tester');
            	Plotly.newPlot( TESTER, [{
            	x: [1, 2, 3, 4, 5],
            	y: [1, 2, 4, 8, 16] }], {
            	margin: { t: 0 } } );

  };

function rng(start,step, end) {
      var ans = [];
      for (let i = start; i <= end; i=i+step) {
          ans.push(i);
      }
      return ans;
  };

function rngscn(x,y) {
      var pi=22/7;
      var ans = [];
      if(y==1)
            {
              for(let i=0;x[i]!=undefined;i++)
                {
                    ans.push(Math.sin(x[i]*pi/180));
                }
            }
      else if(y==2)
            {
              for(let i=0;x[i]!=undefined;i++)
                {

                    ans.push(Math.cos(x[i]*pi/180));
                }
            }
      return ans;
  };


function plt1(){
  var pi=22/7;
  var x= rng(-360,10,360);
  var y1= rngscn(x,1);
  var y2= rngscn(x,2);

  TEST = document.getElementById('test');
  var trace1 = {
  x: x,
  y: y1,
  type: 'scatter',
  name: 'ADITYA1'
  };

  var trace2 = {
  x: x,
  y: y2,
  type: 'scatter',
  name: 'ADITYA2'
  };

  var data = [trace1, trace2];
  var layout={title: 'Adiya plotly plot'};
  Plotly.newPlot(TEST, data,layout);
  };
