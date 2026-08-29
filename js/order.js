
const form=document.getElementById('projectForm');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const v=id=>document.getElementById(id)?.value.trim()||'Not provided';
  const message=`AI NAKSHA STUDIO AND BUILDERS — NEW PROJECT ORDER

Name: ${v('name')}
Phone: ${v('phone')}
Email: ${v('email')}
Service: ${v('service')}
Project Type: ${v('projectType')}
Plot/Site Size: ${v('siteSize')}
Deadline: ${v('deadline')}

Project Brief:
${v('brief')}

Reference / Additional Information:
${v('reference')}`;
  window.open('https://wa.me/919571481348?text='+encodeURIComponent(message),'_blank','noopener');
});
