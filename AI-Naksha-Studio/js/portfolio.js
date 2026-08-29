document.addEventListener('DOMContentLoaded',()=>{
 const filters=[...document.querySelectorAll('.filter')], projects=[...document.querySelectorAll('.masonry .project')];
 filters.forEach(f=>f.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');const cat=f.dataset.filter;projects.forEach(p=>p.classList.toggle('hide',cat!=='all'&&p.dataset.category!==cat));}));
 const modal=document.querySelector('.modal'); if(!modal)return;
 const mImg=modal.querySelector('img'),mTitle=modal.querySelector('.modal-title'),mCat=modal.querySelector('.modal-cat'),mDesc=modal.querySelector('.modal-desc');
 projects.forEach(p=>p.addEventListener('click',()=>{mImg.src=p.querySelector('img').src;mTitle.textContent=p.dataset.title;mCat.textContent=p.dataset.category.toUpperCase();mDesc.textContent=p.dataset.desc;modal.classList.add('open');document.body.style.overflow='hidden'}));
 const close=()=>{modal.classList.remove('open');document.body.style.overflow=''};modal.querySelector('.close').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
});
