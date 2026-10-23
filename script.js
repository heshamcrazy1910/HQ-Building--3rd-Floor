document.documentElement.classList.add('js');
(function(){
  var els=document.querySelectorAll('.partner');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.25});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}
  var bar=document.getElementById('bar'),t=false;
  function upd(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(scrollY/h,1):0)+')';t=false;}
  addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(upd);}},{passive:true});upd();
})();
