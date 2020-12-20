function parallax(element, distance, speed){
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance*speed}px)`;
}
window.addEventListener('scroll',function(){
  parallax('header', window.scrollY, 1);
  parallax('.taser', window.scrollY, 2);
  parallax('.octopus', window.scrollY, 0.1);
  parallax('.tibia', window.scrollY, 0.3);
});