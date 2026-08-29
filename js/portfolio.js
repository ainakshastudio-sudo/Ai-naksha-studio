
const filterButtons=document.querySelectorAll('.filter button');
const works=document.querySelectorAll('.work');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  works.forEach(w=>w.style.display=(f==='all'||w.dataset.category===f)?'block':'none');
}));
const modal=document.querySelector('.modal');
const modalImg=document.querySelector('.modal-img');
const modalTitle=document.querySelector('.modal-title');
const modalCat=document.querySelector('.modal-cat');
const modalDesc=document.querySelector('.modal-desc');
works.forEach(w=>w.addEventListener('click',()=>{
  if(!modal)return;
  modalImg.src=w.dataset.image; modalTitle.textContent=w.dataset.title; modalCat.textContent=w.dataset.category;
  modalDesc.textContent=w.dataset.description; modal.classList.add('open');
}));
document.querySelector('.modal-close')?.addEventListener('click',()=>modal.classList.remove('open'));
modal?.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
