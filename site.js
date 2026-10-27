const GJH = (() => {
 const countries=['Saudi Arabia','UAE','Qatar','Kuwait','Bahrain','Oman'];
 const jobs=[
 {id:'sample-01',title:'Fiber Optic Technician',company:'Example Telecom Services',city:'Riyadh',country:'Saudi Arabia',category:'Telecom / Fiber Optics',type:'Full-time',experience:'2–4 years',salary:'Not provided',education:'Diploma or relevant technical training',posted:'Sample listing',expires:'Not provided',description:'Demonstration listing for a fiber-optic field role. This is sample content, not a live or verified vacancy.',responsibilities:['Install and maintain fiber-optic cables and related equipment.','Support testing, fault finding and documentation.','Follow site safety procedures and technical instructions.'],requirements:['Relevant telecom or fiber-optic experience.','Ability to work safely on field sites.','Employer-specific requirements must be confirmed before applying.']},
 {id:'sample-02',title:'Registered Nurse',company:'Example Healthcare Group',city:'Dubai',country:'UAE',category:'Healthcare',type:'Full-time',experience:'3–5 years',salary:'Not provided',education:'Recognized nursing qualification',posted:'Sample listing',expires:'Not provided',description:'Demonstration listing only. Licensing and eligibility requirements must be confirmed with the actual employer and relevant authority.',responsibilities:['Provide patient care within professional scope.','Maintain accurate clinical documentation.','Coordinate with the care team.'],requirements:['Recognized nursing qualification.','Relevant local licensing, where required.','Experience requirements to be confirmed by employer.']},
 {id:'sample-03',title:'Civil Site Engineer',company:'Example Gulf Projects',city:'Doha',country:'Qatar',category:'Engineering & Construction',type:'Full-time',experience:'3–6 years',salary:'Not provided',education:'Civil engineering degree or equivalent',posted:'Sample listing',expires:'Not provided',description:'Sample project role for demonstration. No employer has verified this listing.',responsibilities:['Coordinate site activities and progress reports.','Review drawings and technical documentation.','Coordinate with contractors and site teams.'],requirements:['Relevant civil engineering qualification.','Construction-site experience.','Project-specific credentials to be confirmed.']},
 {id:'sample-04',title:'Hotel Front Office Supervisor',company:'Example Hospitality Co.',city:'Muscat',country:'Oman',category:'Hospitality & Hotels',type:'Full-time',experience:'2–4 years',salary:'Not provided',education:'Hospitality qualification preferred',posted:'Sample listing',expires:'Not provided',description:'Sample hospitality listing. It is not a real vacancy and should not be used as a job offer.',responsibilities:['Support daily front-office operations.','Assist guest service and shift handovers.','Help maintain service standards.'],requirements:['Relevant hospitality experience.','Strong communication and service skills.','Shift and language requirements to be confirmed.']},
 {id:'sample-05',title:'Sales Executive',company:'Example Trading Group',city:'Kuwait City',country:'Kuwait',category:'Sales & Marketing',type:'Full-time',experience:'1–3 years',salary:'Not provided',education:'Relevant qualification preferred',posted:'Sample listing',expires:'Not provided',description:'Demonstration listing for sales roles. Company identity and vacancy are not verified.',responsibilities:['Build and maintain customer relationships.','Prepare sales updates and follow up leads.','Coordinate with internal sales teams.'],requirements:['Customer-facing or sales experience.','Clear communication and follow-up skills.','Targets and compensation to be confirmed.']},
 {id:'sample-06',title:'Electrical Maintenance Technician',company:'Example Industrial Services',city:'Manama',country:'Bahrain',category:'Skilled Trades & Maintenance',type:'Full-time',experience:'2–5 years',salary:'Not provided',education:'Technical diploma or trade certificate',posted:'Sample listing',expires:'Not provided',description:'Sample listing to demonstrate the job-details experience. It is not a verified job opening.',responsibilities:['Perform routine maintenance checks.','Record faults and completed maintenance.','Follow lockout and site-safety procedures.'],requirements:['Relevant technical qualification or trade experience.','Safe working practices.','Specific certifications to be confirmed with employer.']}
 ];
 const $=(id,root=document)=>root.getElementById(id); const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]);
 const store={get(k,def=null){try{const x=localStorage.getItem('gjh_'+k);return x===null?def:JSON.parse(x)}catch{return def}},set(k,v){try{localStorage.setItem('gjh_'+k,JSON.stringify(v));return true}catch{return false}},remove(k){try{localStorage.removeItem('gjh_'+k)}catch{}}};
 function query(){return new URLSearchParams(location.search)} function getJob(id){return jobs.find(j=>j.id===id)||jobs[0]}
 function logo(company){return esc(company.split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase())}
 function card(j,mode='grid'){return `<article class="job-card"><div class="job-top"><div class="job-logo" aria-hidden="true">${logo(j.company)}</div><span class="tag tag-muted">Sample</span></div><div><h3>${esc(j.title)}</h3><div class="company">${esc(j.company)}</div></div><div class="job-meta"><span>⌖ ${esc(j.city)}, ${esc(j.country)}</span><span>◷ ${esc(j.type)}</span></div><p class="job-snippet">${esc(j.description)}</p><div class="job-foot"><span class="salary">${esc(j.salary)}</span><a class="btn btn-primary btn-sm" href="job-details.html?id=${encodeURIComponent(j.id)}">View Job Details</a></div></article>`}
 function header(){
  return `<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html" aria-label="GulfJobsHub home"><span class="brand-mark">GJH</span><span class="brand-divider"></span><span><span class="brand-name">GulfJobsHub</span><span class="brand-tag" style="display:block">GULF CLASSIFIEDS</span></span></a><nav class="classified-top-nav" aria-label="Main navigation"><a href="index.html#categories">Categories</a><a href="search.html">Jobs</a><a href="category.html?category=Housing">Housing</a><a href="category.html?category=Services">Services</a></nav><div class="lang-selector-wrap"><select id="gjhLangSelect" class="lang-select" aria-label="Select Language"><option value="en">English</option><option value="ur">Urdu (اردو)</option><option value="ar">Arabic (العربية)</option><option value="hi">Hindi (हिन्दी)</option><option value="tl">Tagalog (Filipino)</option><option value="ml">Malayalam (മലയാളം)</option></select></div><div id="google_translate_element" style="display:none;"></div><a class="btn btn-primary classified-post-link" href="post-ad.html">Post Free Ad</a></div></header>`
 }
 function footer(){return `<footer class="site-footer classified-footer"><div class="container"><div class="classified-footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark">GJH</span><span class="brand-divider" style="background:#ffffff3b"></span><span><span class="brand-name footer-brand">GulfJobsHub</span><span class="brand-tag" style="display:block;color:#c1d6e3">GULF CLASSIFIEDS</span></span></a><p class="footer-desc">Browse local listings and opportunities across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman. Verify listings before you act.</p></div><div class="footer-col"><h4>Browse</h4><a href="index.html#categories">All categories</a><a href="search.html">Jobs</a><a href="category.html?category=Housing">Housing</a><a href="category.html?category=Services">Services</a></div><div class="footer-col"><h4>Community</h4><a href="post-ad.html">Post a free ad</a><a href="job-guide.html#safety">Safety guidance</a><a href="companies.html">Companies</a></div></div><div class="footer-bottom"><span>© <span id="year"></span> GulfJobsHub. All rights reserved.</span><span>Preview listings are not verified. Real ad publishing is not connected.</span></div></div></footer>`}
 
 function initTranslation(){
  if(!document.getElementById('gt-script')){
   const s=document.createElement('script');
   s.id='gt-script';
   s.src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
   document.body.appendChild(s);
  }
  window.googleTranslateElementInit=function(){
   new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,ur,ar,hi,tl,ml',
    autoDisplay: false
   }, 'google_translate_element');
  };

  const sel=$('gjhLangSelect');
  if(sel){
   // Read saved language or default to en
   const savedLang = store.get('lang', 'en');
   sel.value = savedLang;
   
   sel.addEventListener('change', (e)=>{
    const lang = e.target.value;
    store.set('lang', lang);
    const gtCombo = document.querySelector('.goog-te-combo');
    if(gtCombo){
     gtCombo.value = lang;
     gtCombo.dispatchEvent(new Event('change'));
    } else {
     // Cookie fallback for Google Translate
     document.cookie = "googtrans=/en/" + lang + ";path=/";
     location.reload();
    }
   });

   // Sync back on load
   setTimeout(()=>{
    const gtCombo = document.querySelector('.goog-te-combo');
    if(gtCombo && savedLang !== 'en'){
     gtCombo.value = savedLang;
     gtCombo.dispatchEvent(new Event('change'));
    }
   }, 1000);
  }
 }

 function shell(){document.body.insertAdjacentHTML('afterbegin',header());document.body.insertAdjacentHTML('beforeend',footer());$('year')&&($('year').textContent=new Date().getFullYear());initTranslation();}
 function setupHome(){const grid=$('homeJobs');if(grid)grid.innerHTML=jobs.slice(0,6).map(j=>card(j)).join('');}
 function setupJobs(){
  const grid=$('jobResults'); if(!grid)return;
  const p=query(), isSearch=location.pathname.endsWith('/search.html')||location.pathname==='search.html';
  ['q','country','city'].forEach(k=>{const el=$(k);if(el&&p.has(k))el.value=p.get(k)});
  const filters=$('filterForm');
  const promptResults=()=>{grid.innerHTML='<div class="empty-state"><h3>Ready to find your next job?</h3><p>Enter a keyword, country or city, then select Search.</p></div>';const count=$('resultsCount');if(count)count.textContent='';};
  const render=()=>{
   const q=($('q')?.value||'').trim().toLowerCase(),country=$('country')?.value||'',city=($('city')?.value||'').trim().toLowerCase();
   const found=jobs.filter(j=>(!q||(j.title+' '+j.company+' '+j.description+' '+j.category).toLowerCase().includes(q))&&(!country||j.country===country)&&(!city||j.city.toLowerCase().includes(city)));
   grid.innerHTML=found.length?found.map(j=>card(j,'list')).join(''):`<div class="empty-state"><h3>No matching listings</h3><p>No job listing matches your search criteria. Please try different keywords or location filters.</p><button class="btn btn-outline btn-sm" type="button" id="clearFilters">Clear filters</button></div>`;
   const count=$('resultsCount');if(count)count.textContent=`${found.length} sample ${found.length===1?'listing':'listings'}`;
   $('clearFilters')?.addEventListener('click',()=>{filters?.reset();if(isSearch)promptResults();else render()});
  };
  if(filters){
   filters.addEventListener('submit',e=>{e.preventDefault();render()});
   if(!isSearch)filters.addEventListener('change',render);
   $('clearAll')?.addEventListener('click',()=>{filters.reset();if(isSearch)promptResults();else render()});
  }
  if(isSearch&&!['q','country','city'].some(k=>p.has(k)&&p.get(k)))promptResults();else render();
 }
 document.addEventListener('DOMContentLoaded',()=>{shell();setupHome();setupJobs();});
 return {jobs,countries};
})();