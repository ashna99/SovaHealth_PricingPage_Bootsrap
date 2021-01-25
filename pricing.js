

let divTick=document.getElementById("price");
divTick=divTick.getElementsByClassName("row");
console.log(divTick);
var i=0;
Array.from(divTick).forEach((row)=>{
  if(i>0){
  
    //let cols=row.getElementsByClassName("col");
 // console.log(cols);
    let col=document.createElement('div');
    col.setAttribute('class','col align-self-center border-end');
    col.style.height="100%";
    col.style.flexShrink='0';
    let imgTick=document.createElement('img');
    imgTick.setAttribute('class','align-self-center ');
   
    imgTick.setAttribute('src','pngtree-tick.jpg');
    
    col.appendChild(imgTick);
      for(let j=0;j<4;j++){
          row.innerHTML+=col.outerHTML;
      }   
  }
       i++;
})
$(".openbtn").click(function(){
    document.getElementById("toggle-navbar").style.width= "40vw";
  
});
$(".closebtn").click(function(){
    document.getElementById("toggle-navbar").style.width ="0";
})