//console.log('Loaded!');
var img=document.getElementById('madi');
var marginLeft=0;
function moveright(){
marginLeft=marginLeft+1;
img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
   var interval=setInterval(moveright,200);
};//
window.onload=function(){
var button=document.getElementById('counter');
button.onclick= function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
if(request.readyState===XMLHttpRequest.DONE){
if(request.status===200){
var counter=request.responseText;
var span=document.getElementById('count');
span.innerHTML=counter.toString();
}
}
};
request.open('GET','http://localhost:8080/counter',true);
request.send(null);
};
};
window.onload=function(){
var submit=document.getElementById('subm');
submit.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
if(request.readyState===XMLHttpRequest.DONE){
if(request.status===200){
var names=request.responseText;
names=JSON.parse(names);
var list='';
for(var i=0;i<names.length;i++)
{
list+='<li>' + names[i];
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;
}
}
};
var nameVal=document.getElementById('name');
var val=nameVal.value;
request.open('GET','http://localhost:8080/submit-name?ass='+val,true);
request.send(null);
};
};
