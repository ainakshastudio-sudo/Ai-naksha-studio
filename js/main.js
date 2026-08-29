document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu'), links=document.querySelector('.navlinks');
 if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
 document.querySelectorAll('a[href]').forEach(a=>{const href=a.getAttribute('href'); if(href && href.endsWith('.html')) a.addEventListener('click',()=>document.body.classList.add('leaving'));});
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
});
