const imgs=document.querySelectorAll('.img')
const but=document.querySelectorAll('.button')
let x=0;
showimge=(index)=>{
  imgs.forEach((img , i)=>{
  if (i===index){
    img.style.display="block";
    but[i].classList.add('active');}

else{
    img.style.display="none";
    but[i].classList.remove('active');
  }
});
};
 slide= ()=>{
  x=(x+1)%(imgs.length);
  showimge(x)
}
showimge(x);
setInterval(slide,2000)
