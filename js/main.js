
const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>20));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menu=document.querySelector('.menu');
if(menu){
  menu.addEventListener('click',()=>{
    let panel=document.querySelector('.mobile-panel');
    if(panel){panel.remove();return}
    panel=document.createElement('div'); panel.className='mobile-panel';
    panel.innerHTML=`<a href="index.html">Home</a><a href="services.html">Services</a><a href="portfolio.html">Portfolio</a><a href="about.html">Studio</a><a href="order.html">Place Order</a><a href="contact.html">Contact</a>`;
    Object.assign(panel.style,{position:'fixed',inset:'75px 15px auto 15px',background:'#10120f',border:'1px solid rgba(238,233,222,.15)',padding:'25px',zIndex:'99',display:'grid',gap:'18px',boxShadow:'0 20px 60px rgba(0,0,0,.4)'});
    panel.querySelectorAll('a').forEach(a=>{a.style.textTransform='uppercase';a.style.letterSpacing='.14em';a.style.fontSize='11px';a.style.color='#c7c3b9'});
    document.body.appendChild(panel);
  });
}
document.querySelectorAll('a[href$=".html"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const url=new URL(a.href); if(url.origin===location.origin && url.pathname!==location.pathname){
      e.preventDefault(); document.body.style.opacity='.82'; setTimeout(()=>location.href=a.href,130);
    }
  })
});
