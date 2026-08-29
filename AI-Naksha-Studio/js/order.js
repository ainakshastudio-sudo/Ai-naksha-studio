document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#projectForm'); if(!form)return;
 form.addEventListener('submit',e=>{e.preventDefault(); if(!form.reportValidity())return;
 const v=id=>document.getElementById(id)?.value.trim()||'—';
 const msg=`AI NAKSHA STUDIO — NEW PROJECT ORDER\n\nName: ${v('name')}\nPhone: ${v('phone')}\nEmail: ${v('email')}\nService: ${v('service')}\nProject Type: ${v('projectType')}\nPlot/Site Size: ${v('siteSize')}\nDeadline: ${v('deadline')}\n\nProject Brief:\n${v('brief')}\n\nReference / Additional Information:\n${v('reference')}`;
 window.open('https://wa.me/919571481348?text='+encodeURIComponent(msg),'_blank','noopener');
 });
});
