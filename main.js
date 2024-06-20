var list = false;

function showhide(){
list = !list;
if(list==true){
    menuicon.setAttribute("class","fa-regular fa-rectangle-xmark");
    menulist.style.bottom="0";
    menulist.style.display="block";
    
}
else{
    menuicon.setAttribute("class","fa-solid fa-bars");
    menulist.style.bottom="60vh";
}

}




function come(){
    console.log("sid");
    menulist.style.left="50%";
}
function go(){
    console.log("dis");
    menulist.style.left="120%";
}

gsap.from(".imga",{
    x:110, 
    opacity:0, 
    duration:50, 
     
    scrollTrigger:{
      trigger:".imga", 
    //   scrub:true, 
      
      start:"top 95%", 
      end:"top 50%", 
      
      }
  })

gsap. from(".texty",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)
gsap. from(".texty1",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty1",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)

gsap. from(".texty2",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty2",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)

gsap. from(".texty3",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty3",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)

gsap. from(".con4",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".con4",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)
gsap. from(".texty4",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty4",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)
gsap. from(".texty5",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty5",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)

gsap. from(".con6",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".con6",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)


gsap. from(".texty7",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty7",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)
gsap. from(".texty8",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty8",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)
gsap. from(".texty9",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty9",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)
gsap. from(".texty10",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty10",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)
gsap. from(".texty11",{
    y:110, 
    opacity:0, 
    duration:1,
    
scrollTrigger:{
    trigger:".texty11",
    
    //  markers:true,
     start:"top 85%",
     end:"top 70%",
}
}
)