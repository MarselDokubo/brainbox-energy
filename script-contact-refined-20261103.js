const A='assets/';
const services=[["Transformer Condition Assessment & Diagnostics","Transformer health assessment, visual inspection, electrical and oil testing, fault investigation and prioritised technical recommendations."],["Preventive Maintenance & Reliability Programmes","Essential, preventive and condition-based maintenance programmes for individual transformers and multi-site assets."],["Corrective Engineering & Transformer Repairs","Minor and major corrective work, component replacement, troubleshooting and repairs scoped after diagnosis."],["Transformer Overhaul, Rehabilitation & Asset Life Extension","Overhaul, rehabilitation and life-extension interventions where technically appropriate."],["Transformer Rewinding & Winding Systems Restoration","Partial or full winding replacement and associated restoration, testing and commissioning, subject to technical assessment."],["Transformer Insulating Oil Analysis, Filtration & Treatment","Oil sampling, assessment, filtration, purification, dehydration, degassing and treatment as applicable."],["Electrical Infrastructure Modernisation & Upgrades","Applicable modernisation, cooling-system improvements and monitoring retrofit requirements following review."],["Emergency Power Asset Response & Restoration","Urgent inspection, fault diagnosis, corrective intervention planning and restoration support under site safety controls."],["Electrical Asset Management & Lifecycle Planning","Asset registers, condition ranking, Transformer Health Index, maintenance planning and lifecycle reporting."],["Priority Technical Response & Field Intervention","A structured priority-response framework for urgent transformer and electrical-power incidents, subject to agreed terms."]];
const gallery=[['profile-0.jpg','Transformer maintenance and testing'],['profile-18.jpg','Electrical field diagnostics'],['profile-13.jpg','Workshop technical briefing'],['profile-19.jpg','Coil winding operations'],['profile-9.jpg','Transformer oil BDV testing equipment'],['profile-22.png','RACAM workshop facility']];
const newWorkshopGallery=[
['workshop-lifting-team.webp','Transformer lifting and handling','Lifting'],
['workshop-coil-winding.webp','Transformer inspection and preparation','Inspection'],
['workshop-oil-filtration-unit.webp','Transformer oil filtration unit','Oil treatment'],
['workshop-oil-filtration-equipment.webp','Oil treatment equipment','Oil treatment'],
['workshop-heating-operation.webp','Workshop equipment operation','Equipment'],
['workshop-inspection-testing.webp','Electrical equipment inspection','Testing'],
['workshop-transformer-inspection.webp','Transformer coil winding activity','Winding']
];
const fallbackGallery=[
 ['profile-18.jpg','Electrical field diagnostics','Inspection'],
 ['profile-13.jpg','Workshop technical briefing','Workshop'],
 ['profile-19.jpg','Transformer coil winding operations','Winding'],
 ['profile-9.jpg','Transformer oil BDV test equipment','Testing'],
 ['profile-22.png','RACAM workshop facility','Facility'],
 ['profile-0.jpg','Transformer maintenance activity','Maintenance']
];
const workshopPhotos=()=>`<div class="image-grid workshop-gallery">${newWorkshopGallery.map((g,i)=>`<figure class="workshop-item" hidden><img loading="eager" decoding="async" src="${A+g[0]}" data-fallback="${fallbackGallery[i]?A+fallbackGallery[i][0]:''}" alt="${g[1]}"><figcaption><small>${g[2]}</small><br>${g[1]}</figcaption></figure>`).join('')}</div><div class="gallery-empty" hidden>Workshop photography will appear once the image assets are uploaded.</div><p class="notice">Photos illustrate workshop capabilities; equipment descriptions are subject to technical confirmation.</p>`;
function initWorkshopGallery(){
 document.querySelectorAll('.workshop-gallery').forEach(gallery=>{
  const frames=[...gallery.querySelectorAll('figure')];
  let loaded=0,settled=0;
  frames.forEach(frame=>{
   const img=frame.querySelector('img');
   function finish(ok){if(frame.dataset.done)return;frame.dataset.done='1';settled++;if(ok){frame.hidden=false;loaded++}else{frame.remove()}if(settled===frames.length&&loaded===0){const notice=gallery.nextElementSibling;if(notice&&notice.classList.contains('gallery-empty'))notice.hidden=false;gallery.hidden=true}}
   img.addEventListener('load',()=>finish(true),{once:true});
   img.addEventListener('error',()=>{if(img.dataset.fallback&&!img.dataset.usedFallback){img.dataset.usedFallback='1';img.src=img.dataset.fallback;img.alt=fallbackGallery[frames.indexOf(frame)]?.[1]||'Workshop activity';const caption=frame.querySelector('figcaption');const alt=fallbackGallery[frames.indexOf(frame)];if(alt&&caption){caption.textContent=alt[1];const small=document.createElement('small');small.textContent=alt[2];caption.prepend(small,document.createElement('br'));}return;}finish(false);});
   if(img.complete)finish(img.naturalWidth>0);
  });
 });
}
const label=t=>`<div class="eyebrow">${t}</div>`;
const banner=(t,s)=>`<section class="page-banner"><div class="page-banner-grid" aria-hidden="true"></div><div class="container"><h1>${t}</h1><p>${s}</p></div></section>`;
const btn=(t,h='#contact')=>`<a class="btn dark" href="${h}">${t} ↗</a>`;
const tiles=()=>`<div class="service-grid">${services.map((s,i)=>`<article class="service-card"><span class="number">0${i+1} / EXPERTISE</span><h3>${s[0]}</h3><p>${s[1]}</p><a href="#services">Explore service ↗</a></article>`).join('')}</div>`;
const photos=()=>`<div class="image-grid">${gallery.map(g=>`<figure><img loading="lazy" src="${A+g[0]}" alt="${g[1]}"><figcaption>${g[1]}</figcaption></figure>`).join('')}</div>`;
const process=()=>`<div class="process">${[['01','Plan','Confirm scope, site requirements, hazards and resources.'],['02','Inspect','Assess condition, operating history and test requirements.'],['03','Execute','Perform approved work with relevant HSE and quality checks.'],['04','Handover','Verify where applicable, document findings and report recommendations.']].map(x=>`<article><b>${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div>`;
const capabilityCards=()=>`<div class="service-grid">${[['Workshop & Repair Support','Transformer winding and repair resources, with workshop support for applicable maintenance and refurbishment work.'],['Oil Treatment Resources','Oil-treatment capability and associated resources for agreed transformer service requirements.'],['Electrical Testing Equipment','Electrical testing resources for diagnostic and verification tasks, subject to scope.'],['Field & Lifting Equipment','Field-service, lifting and supporting equipment where appropriate to the work plan.'],['HSE & Quality Controls','Risk assessments, safe work procedures, relevant permits, inspection checks and documentation.'],['Technical Reporting','Agreed reports can record work performed, observations, results and recommendations.']].map((x,i)=>`<article class="service-card"><span class="number">0${i+1} / CAPABILITY</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div>`;
const knowledgeCards=()=>`<div class="service-grid bb-guidance-cards">${[['What should a transformer maintenance plan cover?','Start with asset criticality, operating history, condition, site risks and manufacturer guidance. Record asset identification, inspections, condition indicators, safety requirements, acceptance criteria, reporting and follow-up.'],['Why assess transformer insulating oil?','Oil condition provides information about insulation health and operating risks. Sampling and testing should reflect the equipment, its history and the question under investigation.'],['What to include in a maintenance enquiry','Share site location, equipment type and rating, quantity, fault or service need, access constraints, desired timeline, and any available non-confidential reports or photographs.']].map(x=>`<article class="insight-card"><span class="overline">ENGINEERING GUIDANCE</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div>`;
const callout=()=>`<section class="cta"><div class="container"><h2>Planning maintenance<br>or preparing a tender?</h2><p>Send us the requirement. We will review the scope and identify the next step.</p><a class="btn light" href="#quote">Request a technical quote ↗</a></div></section>`;
const featuredWorkflow=()=>`<section class="section bb-workflow"><div class="container"><div class="bb-section-top"><div><span class="bb-eyebrow">THE WORKFLOW</span><h2>Engineering support,<br>from start to finish.</h2></div><a href="#quote" class="bb-text-link">Start an enquiry ↗</a></div><div class="bb-workflow-grid"><article class="bb-workflow-card"><div class="bb-workflow-art bb-art-one"><img loading="lazy" src="assets/profile-18.jpg" alt="Transformer inspection activity"></div><div class="bb-workflow-copy"><span>01 — INSPECT</span><h3>Understand the asset.</h3><p>Review its condition, operating requirements and potential risks before proposing a scope.</p></div></article><article class="bb-workflow-card"><div class="bb-workflow-art bb-art-two"><img loading="lazy" src="assets/workshop-inspection-testing.webp" alt="Engineers wearing protective gloves during transformer inspection and testing"></div><div class="bb-workflow-copy"><span>02 — EXECUTE</span><h3>Carry out the work.</h3><p>Approved maintenance, repair or testing work follows relevant quality and site controls.</p></div></article><article class="bb-workflow-card"><div class="bb-workflow-art bb-art-three"><img loading="lazy" src="assets/profile-9.jpg" alt="Electrical oil test equipment"></div><div class="bb-workflow-copy"><span>03 — VERIFY</span><h3>Report the result.</h3><p>Where applicable, record test results, observations and next-step recommendations.</p></div></article></div><div class="bb-workflow-strip"><strong>Engineering support, end to end.</strong><span>✓ Condition review</span><span>✓ Agreed scope</span><span>✓ Technical reporting</span></div></div></section>`;
const featuredFaq=()=>`<section class="section bb-faq"><div class="container bb-faq-layout"><div><span class="bb-eyebrow">GOOD TO KNOW</span><h2>Frequently asked<br>questions.</h2><p>Practical answers before you contact our engineering team.</p></div><div class="bb-faq-items"><details open><summary>What details should I include in an enquiry?</summary><p>Provide the equipment type, rating if known, site location, symptoms or intended service, and any relevant timeline.</p></details><details><summary>Do you support transformer maintenance and repair?</summary><p>Our portfolio includes condition assessment, maintenance, repair, oil treatment and relevant workshop engineering.</p></details><details><summary>Can you help with urgent equipment faults?</summary><p>Contact our team to discuss response availability. Qualified personnel must ensure electrical safety before work begins.</p></details><details><summary>Can we request a capability statement for a tender?</summary><p>Yes. Submit your procurement requirements using the quotation or partnership enquiry option to request appropriate supporting documents.</p></details></div></div></section>`;
const home=()=>`<section class="hero"><div class="hero-grid" aria-hidden="true"></div><div class="container"><h1>Powering Reliability.<br><span class="hero-accent">Extending Asset Life.</span></h1><p>Specialist transformer maintenance, repair and testing for dependable power.</p><div class="actions"><a class="btn light" href="#services">Explore services ↗</a><a class="btn light" href="#quote">Request technical support ↗</a></div></div></section>
<section class="stats"><div class="container"><div><strong>Assess &amp; Diagnose</strong><span>Condition assessment and technical recommendations</span></div><div><strong>Maintain &amp; Restore</strong><span>Agreed preventive and corrective engineering work</span></div><div><strong>Verify &amp; Document</strong><span>Testing, technical reports and handover</span></div></div></section>
<section class="section bb-intro-section"><div class="container split"><div><span class="overline">WHO WE ARE</span><h2>Engineering support built around equipment reliability.</h2><p class="lead">Brainbox Energy Services Limited focuses on transformer and electrical-power engineering services for organisations that depend on reliable infrastructure.</p><p>We support maintenance planning, equipment assessment, repair activities and technical documentation. Our approach is to understand the asset and its operating requirements, define the scope, execute agreed work, test where applicable, and document the outcome.</p>${btn('DISCOVER OUR COMPANY','#about')}</div><img src="${A}profile-18.jpg" alt="Transformer testing and maintenance"></div></section>
<section class="section tinted bb-services-section"><div class="container">${label('CORE ENGINEERING SERVICES')}<h2>Practical support across<br>the equipment lifecycle.</h2><p>A focused selection of our core capabilities. Explore the full service portfolio to find the right support for your power assets.</p><div class="service-grid">${services.filter((_,i)=>[0,1,2,5].includes(i)).map((x,i)=>`<article class="service-card"><span class="number">0${i+1} / SERVICES</span><h3>${x[0]}</h3><p>${x[1]}</p><a href="#services">Explore service ↗</a></article>`).join('')}</div></div></section>

${featuredWorkflow()}

<section class="section bb-feature-section"><div class="container split"><img src="${A}profile-13.jpg" alt="Technical personnel in engineering workshop"><div><h2 class="capability-statement-heading">Need our<br><span>capability statement?</span></h2><p>Our concise overview covers services and the operational approach without making unverified certification, endorsement or project claims.</p><p>For tender submissions, request supporting documents directly.</p>${btn('VIEW CAPABILITY OVERVIEW','#projects')}</div></div></section>
<section class="section tinted bb-sectors-section"><div class="container">${label('SECTORS WE SUPPORT')}<h2>Clients and operating<br>environments.</h2><p>Our framework supports organisations that own or maintain electrical assets, including utilities, oil and gas, manufacturing, hospitals, universities and estates, government institutions, commercial facilities and critical infrastructure operators.</p>${btn('DISCUSS YOUR REQUIREMENT','#quote')}</div></section>
<section class="section bb-gallery-section"><div class="container">${label('RECENT WORKSHOP PHOTOGRAPHY')}<h2>Inside the workshop.<br>People, equipment and process.</h2>${workshopPhotos()}</div></section>

<section class="section tinted bb-guidance-section"><div class="container">${label('TECHNICAL GUIDANCE')}<h2>Useful information for asset<br>owners and maintenance teams.</h2>${knowledgeCards()}</div></section>${featuredFaq()}${callout()}`;
const about=()=>`${banner('About Us','A specialised electrical power engineering company built around reliability, safety and technical excellence.')}<section class="section"><div class="container split"><img src="${A}workshop-transformer-inspection.webp" alt="PPE-equipped engineering team inspecting transformer equipment"><div>${label('OUR STORY')}<h2>Focused expertise.<br>Dependable solutions.</h2><p>Brainbox Energy Services Limited provides inspection, testing, maintenance, repair, refurbishment, oil treatment and commissioning for power transformers and associated electrical infrastructure.</p><p>As a distinct legal and operational entity, BESL benefits from the technical and organisational support of its parent, Brainbox Matrix Services Limited.</p></div></div></section><section class="section tinted"><div class="container">${label('WHAT GUIDES US')}<div class="columns"><div><h2>Our vision</h2><p>To be a trusted and reliable provider of transformer, electrical power and energy engineering services, recognised for technical competence, safety, quality and dependable service delivery.</p></div><div><h2>Our mission</h2><p>To deliver safe, reliable and cost-effective transformer and electrical power services through competent personnel, disciplined work processes, appropriate tools and equipment, and a consistent commitment to quality and client satisfaction.</p></div></div></div></section><section class="section"><div class="container">${label('OUR CORE VALUES')}<div class="values">${['Integrity','Safety','Quality','Reliability','Technical Excellence','Professionalism','Accountability','Continuous Improvement'].map(v=>`<div class="value"><b>${v}</b><p>A principle guiding our engineering practice and client relationships.</p></div>`).join('')}</div></div></section><section class="section tinted"><div class="container split"><div><h2>Supported by a wider engineering foundation.</h2><p>Brainbox Matrix Services Limited (RC 850983), established in 2009, provides access to broader engineering resources, personnel, training infrastructure and HSE practices.</p><p>Its historical transformer training programmes include over 245 Presidential Amnesty Programme trainees and 10 NCDMB delegates. These are parent-company activities, not projects executed by BESL.</p></div><img src="${A}profile-19.jpg" alt="Technical training in coil winding"></div></section>${callout()}`;
const servicePage=()=>`${banner('Transformer & Electrical Power Engineering Services','From condition assessment and preventive maintenance to repair, restoration and asset lifecycle support, we provide structured engineering services matched to asset condition, operational needs and agreed scope.')}
<section class="section"><div class="container">${label('FULL SERVICE PORTFOLIO')}<h2>Engineering services<br>across the asset lifecycle.</h2>${tiles()}</div></section>
<section class="section tinted"><div class="container split"><div>${label('WORK WITH US')}<h2>Tell us about your<br>equipment or project.</h2><p>Use our dedicated enquiry form to share your initial requirement. For urgent or time-sensitive work, contact the team directly to confirm availability.</p><p>Detailed site and technical requirements can be discussed through the appropriate process after an initial review.</p>${btn('REQUEST A TECHNICAL QUOTE','#quote')}</div><img src="${A}profile-18.jpg" alt="Transformer engineering field activity"></div></section>${callout()}`;
const projects=()=>`${banner('Capabilities & Technical Evidence','The people, workshop resources, equipment and documented processes supporting transformer and electrical-power work.')}
<section class="section"><div class="container">${label('OPERATIONAL CAPABILITY')}<h2>Give procurement teams<br>the information they need.</h2><p>Our company profile identifies workshop and repair resources, insulating oil treatment equipment, electrical test instruments, field tools and HSE controls. The exact resources mobilised for an assignment depend on scope, site and agreement.</p>${capabilityCards()}</div></section>
<section class="section tinted"><div class="container">${label('PROJECT EXECUTION')}<h2>Structured from<br>planning to handover.</h2>${process()}<p>Scope definition, site assessment, risk controls, equipment mobilisation, approved execution, verification and reporting are tailored to project conditions and client requirements.</p></div></section>
<section class="section"><div class="container">${label('WORKSHOP EQUIPMENT & ACTIVITIES')}<h2>A closer look at<br>the engineering environment.</h2>${workshopPhotos()}</div></section>
<section class="section"><div class="container">${label('WORKSHOP & FIELD IMAGES')}<h2>Evidence matters.<br>Every project should tell the story.</h2>${photos()}<div class="card-note" style="margin-top:30px"><b>Photography and project attribution</b><p>These photographs illustrate technical facilities and activities in the supplied company profile. They are not presented as named completed BESL client projects. Verified case studies may be added with appropriate client permission.</p></div></div></section>
<section class="section tinted"><div class="container split"><img src="${A}profile-9.jpg" alt="Electrical oil testing instrument"><div><h2>Need a capability statement for procurement?</h2><p>We can provide a concise description of service categories, technical resources, project controls and reporting expectations. Certifications, licences, client references and project records should be requested and verified for any formal tender.</p>${btn('REQUEST SUPPORTING DOCUMENTS','#quote')}</div></div></section>${callout()}`;
const insights=()=>`${banner('Engineering Insights','Useful information for asset owners, engineering buyers and maintenance teams.')}
<section class="section"><div class="container">${label('PRACTICAL GUIDANCE')}<h2>Understand the requirements.<br>Plan with confidence.</h2>${knowledgeCards()}</div></section>
<section class="section tinted"><div class="container split"><div><h2>Better information makes for a better engineering enquiry.</h2><p>Where available, provide the transformer rating and nameplate details, site location, operating history, symptoms, existing test results and expected completion dates. Share non-confidential information only.</p>${btn('PREPARE AN ENQUIRY','#quote')}</div><img src="${A}profile-18.jpg" alt="Technical inspection on site"></div></section>${callout()}`;

const enquiryTopics=[
['general','General company enquiry'],
['maintenance','Transformer maintenance or repair'],
['testing','Electrical testing & diagnostics'],
['oil','Oil filtration or oil analysis'],
['lifting','Transformer lifting or relocation'],
['winding','Rewinding or workshop engineering'],
['emergency','Urgent equipment fault'],
['equipment','Workshop equipment or technical capability'],
['partnership','Partnership, vendor or tender enquiry']
];
const fieldsByTopic={
  general:[['subject','What would you like to discuss?','text'],['details','How can we help?','textarea']],
  maintenance:[['rating','Transformer capacity / rating (if known)','text'],['symptoms','What maintenance or problem needs attention?','textarea'],['timing','When is support required?','text']],
  testing:[['asset','Equipment type and voltage / rating (if known)','text'],['test','Which tests or assessment are required?','textarea'],['history','Are previous results available? (Do not include confidential reports)','text']],
  oil:[['quantity','Number and size of transformers (if known)','text'],['treatment','Oil sampling, analysis, filtration or purification?','select:Sampling and analysis|Filtration|Purification / dehydration|Not sure'],['condition','Known oil issue or reason for treatment','textarea']],
  lifting:[['asset','Equipment type, estimated weight and dimensions (if known)','text'],['site','Access conditions / lifting location','textarea'],['schedule','Preferred date or site window','text']],
  winding:[['component','Winding / component or equipment type','text'],['issue','Describe the repair or rewinding requirement','textarea'],['inspection','Is the equipment available for workshop inspection?','select:Yes|No|Not sure']],
  emergency:[['incident','What happened and when?','textarea'],['status','Is the equipment isolated and site made safe?','select:Yes|No|Not sure'],['urgency','How soon do you need a response?','text']],
  equipment:[['item','Which equipment or capability interests you?','text'],['purpose','Inspection, hire, purchase or service enquiry?','select:Technical service|Equipment enquiry|General capability enquiry|Other'],['details','What information do you need?','textarea']],
  partnership:[['type','What type of collaboration?','select:Vendor registration|Tender / prequalification|Technical partnership|Other'],['deadline','Tender deadline or proposed date (if applicable)','text'],['details','Tell us about the opportunity','textarea']]
};
const enquiryTopicSelect=(id)=>`<label for="${id}">What would you like to enquire about? *</label><select id="${id}" name="enquiry_topic" required><option value="">Choose an enquiry type</option>${enquiryTopics.map(([value,label])=>`<option value="${value}">${label}</option>`).join('')}</select><div class="conditional-enquiry-fields" aria-live="polite"></div>`;
function setupEnquiryFields(formId,selectId){
 const form=document.getElementById(formId);if(!form)return;
 const select=form.querySelector('#'+selectId);
 const host=form.querySelector('.conditional-enquiry-fields');
 if(!select||!host)return;
 const makeField=([key,title,type])=>{
   const id=formId+'-'+key;
   const label='<label for="'+id+'">'+title+' *</label>';
   if(type==='textarea')return label+'<textarea id="'+id+'" name="question_'+key+'" rows="3" required></textarea>';
   if(type.startsWith('select:'))return label+'<select id="'+id+'" name="question_'+key+'" required><option value="">Select an option</option>'+type.slice(7).split('|').map(x=>'<option>'+x+'</option>').join('')+'</select>';
   return label+'<input id="'+id+'" name="question_'+key+'" type="text" required>';
 };
 select.addEventListener('change',()=>{
   const fields=fieldsByTopic[select.value]||[];
   host.innerHTML=fields.length?'<div class="conditional-fields-heading">A few questions about your request</div>'+fields.map(makeField).join(''):'';
 });
}

const choiceIcons={general:'✉',maintenance:'⚙',testing:'⌁',oil:'◈',lifting:'↥',winding:'◎',emergency:'!',equipment:'▣',partnership:'◇'};
const wizardMarkup=(kind)=>`<form class="enquiry-wizard" id="${kind}-wizard">
  <div class="wizard-progress"><div class="wizard-progress-meta"><span class="wizard-step-label">ENQUIRY / 01 — 03</span><span class="wizard-progress-name">Your request</span></div><div class="wizard-step-nodes" aria-label="Enquiry progress"><div class="wizard-node is-current"><span>01</span><small>Service</small></div><div class="wizard-node"><span>02</span><small>Details</small></div><div class="wizard-node"><span>03</span><small>Contact</small></div></div><div class="wizard-track"><span style="width:33.33%"></span></div></div>
  <div class="wizard-panel" data-wizard-step="0"><span class="wizard-kicker">START HERE</span><h3>What can we help with?</h3><p>Select a service to get started.</p>
  <div class="wizard-topic-field"><label for="${kind}-topic">What do you need help with? <b>*</b></label><select id="${kind}-topic" name="enquiry_topic" required><option value="">Select a service or enquiry type</option>${enquiryTopics.map(([value,label])=>`<option value="${value}">${label}</option>`).join('')}</select></div></div>
  <div class="wizard-panel" data-wizard-step="1" hidden><span class="wizard-kicker">A FEW DETAILS</span><h3>Tell us a little more.</h3><p>These questions help us understand what your work involves.</p><div class="wizard-questions"></div></div>
  <div class="wizard-panel" data-wizard-step="2" hidden><span class="wizard-kicker">FINAL STEP</span><h3>How can we reach you?</h3><p>Add your contact details so the team can follow up.</p>
  <div class="wizard-field"><label for="${kind}-name">Your name <b>*</b></label><input id="${kind}-name" name="contact_name" autocomplete="name" required placeholder="Full name"></div>
  <div class="wizard-field"><label for="${kind}-email">Email address <b>*</b></label><input id="${kind}-email" name="contact_email" type="email" autocomplete="email" required placeholder="you@company.com"></div>
  <div class="wizard-field"><label for="${kind}-phone">Phone number</label><input id="${kind}-phone" name="contact_phone" type="tel" autocomplete="tel" placeholder="+234 ..."></div>
  <div class="wizard-field"><label for="${kind}-org">Organisation</label><input id="${kind}-org" name="organisation" autocomplete="organization" placeholder="Company or organisation"></div>
  <label class="consent-label"><input type="checkbox" name="consent" required> I agree that my information may be used to respond to this enquiry. *</label>
  <div class="wizard-review" aria-live="polite"><div class="wizard-review-heading"><span>YOUR REQUEST AT A GLANCE</span><button type="button" class="wizard-review-edit">Edit details ↗</button></div><div class="wizard-review-rows"></div></div></div>
  <div class="wizard-actions"><button type="button" class="wizard-back" hidden>← Back</button><button type="button" class="wizard-next">Continue <span aria-hidden="true">→</span></button><button type="submit" class="wizard-send" hidden>Prepare enquiry email <span aria-hidden="true">↗</span></button></div>
  <p class="wizard-footnote"><span aria-hidden="true">◇</span> No account needed. We prepare an email draft in your mail app; you choose whether to send it.</p>
 </form>`;
const enquiryBenefits=()=>`<div class="contact-benefits"><span class="benefits-eyebrow">HOW IT WORKS</span><p>01 — Choose your service<br>02 — Share project details<br>03 — Leave your contact information</p></div>`;
const contact=()=>`<section class="section bb-enquiry-shell"><div class="container modern-contact">
 <div class="contact-intro"><h1>Let's talk about<br>your project.</h1><p>From maintenance and testing to technical partnerships, tell us what you need. We'll help you take the next step.</p>
 <div class="contact-details"><div><span>CALL US</span><a href="tel:+2349163505000">+234 916 350 5000</a></div><div><span>EMAIL US</span><a href="mailto:brainboxenergyservicesltd@gmail.com">brainboxenergyservicesltd@gmail.com</a></div><div><span>VISIT US</span><p>RACAM, Rivers State University, Port Harcourt, Nigeria.</p></div></div></div>
 ${wizardMarkup('contact')}</div></section>`;
const quote=()=>`<section class="section bb-enquiry-shell"><div class="container modern-contact">
<div class="contact-intro">${label('REQUEST A QUOTE · ENGINEERING ENQUIRY')}<h1>Tell us what<br>you need.</h1><p>Describe your equipment or project. We'll ask only the questions relevant to your enquiry.</p><div class="card-note"><b>For urgent electrical incidents</b><p>Contact us by phone to discuss response availability. Only qualified personnel should assess or isolate electrical equipment.</p><a href="tel:+2349163505000">+234 916 350 5000</a></div></div>
${wizardMarkup('quote')}</div></section>`;
function setupWizard(kind){
 const form=document.getElementById(kind+'-wizard');if(!form)return;
 const panels=[...form.querySelectorAll('.wizard-panel')];
 const back=form.querySelector('.wizard-back'),next=form.querySelector('.wizard-next'),send=form.querySelector('.wizard-send');
 const progress=form.querySelector('.wizard-track span'),counter=form.querySelector('.wizard-step-label'),name=form.querySelector('.wizard-progress-name');
 let step=0;
 function fieldHTML([key,title,type]){
  const id=kind+'-question-'+key;
  const required=/\(if known\)|\(if applicable\)|previous results|Are previous/i.test(title)?'':'required';
  const label='<label for="'+id+'">'+title+(required?' <b>*</b>':'')+'</label>';
  const attrs=' id="'+id+'" name="question_'+key+'" '+required;
  if(type==='textarea')return '<div class="wizard-field">'+label+'<textarea'+attrs+' rows="4" placeholder="Tell us more..."></textarea></div>';
  if(type.startsWith('select:'))return '<div class="wizard-field">'+label+'<select'+attrs+'><option value="">Please select</option>'+type.slice(7).split('|').map(x=>'<option>'+x+'</option>').join('')+'</select></div>';
  return '<div class="wizard-field">'+label+'<input'+attrs+' placeholder="Enter details"></div>';
 }
 function show(n){step=n;panels.forEach((p,i)=>{p.hidden=i!==n});back.hidden=n===0;next.hidden=n===2;send.hidden=n!==2;counter.textContent='YOUR ENQUIRY · 0'+(n+1)+' / 03';name.textContent=['Your request','Project details','Contact details'][n];progress.style.width=((n+1)/3*100)+'%';form.querySelectorAll('.wizard-node').forEach((node,i)=>{node.classList.toggle('is-current',i===n);node.classList.toggle('is-complete',i<n)});if(n===2)updateReview();}
 function updateReview(){const chosen=form.querySelector('select[name="enquiry_topic"]');const topic=enquiryTopics.find(t=>t[0]===chosen?.value)?.[1]||'Not selected';const rows=[['Enquiry type',topic]];form.querySelectorAll('.wizard-questions input,.wizard-questions select,.wizard-questions textarea').forEach(el=>{const value=el.value.trim();if(value){const title=el.closest('.wizard-field')?.querySelector('label')?.textContent?.replace('*','').trim()||el.name;rows.push([title,value]);}});const host=form.querySelector('.wizard-review-rows');host.replaceChildren();rows.forEach(([title,value])=>{const row=document.createElement('div');row.className='wizard-review-row';const left=document.createElement('span');left.textContent=title;const right=document.createElement('strong');right.textContent=value;row.append(left,right);host.append(row);});}
 form.querySelector('.wizard-review-edit').addEventListener('click',()=>show(1));
 function validPanel(){const panel=panels[step];if(step===0){const choice=form.querySelector('select[name="enquiry_topic"]');if(!choice || !choice.value){choice?.reportValidity();return false}return true}
  for(const element of panel.querySelectorAll('input,textarea,select')){if(!element.checkValidity()){element.reportValidity();return false}}return true;
 }
 function questions(){const chosen=form.querySelector('select[name="enquiry_topic"]');if(!chosen)return;const fields=fieldsByTopic[chosen.value]||[];form.querySelector('.wizard-questions').innerHTML=fields.map(fieldHTML).join('');const label=enquiryTopics.find(t=>t[0]===chosen.value)?.[1]||'Enquiry';form.dataset.enquiryLabel=label;}
 form.querySelector('select[name="enquiry_topic"]').addEventListener('change',questions);
 next.addEventListener('click',()=>{if(!validPanel())return;if(step===0)questions();show(Math.min(step+1,2));});
 back.addEventListener('click',()=>show(Math.max(step-1,0)));
 form.addEventListener('submit',event=>{event.preventDefault();if(!validPanel())return;mailEnquiry(form,kind==='quote'?'Brainbox Energy — Technical Quote Enquiry':'Brainbox Energy — Website Enquiry');});
 show(0);
}

// Technical training content is retained from the supplied colleague-authored training.html.
const training=()=>`<div class="bb-training">
<section class="bb-training-hero">
  <div class="bb-training-hero-inner"><div>
    <span class="bb-training-kicker">BRAINBOX TECHNICAL TRAINING</span>
    <h1>Practical skills.<br>Technical confidence.</h1>
    <p>Practical engineering training for company teams and individuals working towards competence in transformer repair and maintenance.</p>
    <a href="#training-enquiry" class="bb-training-hero-link" data-training-scroll>Explore training opportunities ↗</a>
  </div><img src="assets/workshop-inspection-testing.webp" alt="Engineers wearing protective equipment during transformer testing" loading="eager"></div>
</section>
<section class="section bb-training-section"><div class="container"><div class="section-head"><span class="eyebrow">BrainBox Technical Training</span><h1>Practical Engineering Training &amp; Skills Development</h1><p>BrainBox Energy Services Limited provides practical training opportunities for organisations seeking to upskill their workforce and individuals seeking to build technical competence in transformer repair and maintenance.</p></div><div class="training-pathways"><article class="training-pathway-card" id="corporate"><span class="eyebrow">For Companies &amp; Institutions</span><h2>Corporate Training Programmes</h2><p>Designed for organisations that want to strengthen the technical knowledge and practical capabilities of their engineering, operations and maintenance personnel.</p><ul><li>Training in transformer repairs, maintenance and related technical areas.</li><li>Delivery at the BrainBox training facility.</li><li>On-site delivery at the client's own facility.</li><li>Programme scope can be discussed and tailored to the organisation's staff development needs.</li></ul><a class="btn btn-primary" data-training-pathway="Corporate Training Programmes" href="#training-enquiry">Enquire About Corporate Training</a></article><article class="training-pathway-card" id="individual"><span class="eyebrow">For Aspiring Technical Practitioners</span><h2>Two-Year Individual Technical Training</h2><p>A structured, two-year hands-on learning pathway for individuals who want to develop practical skills and experience in transformer repairs, maintenance and related engineering work.</p><ul><li>Two-year training period.</li><li>Practical, hands-on exposure to transformer repair and maintenance activities.</li><li>Learning focused on developing technical competence through sustained participation.</li><li>Suitable for individuals seeking to build a foundation for work in the transformer maintenance field.</li></ul><a class="btn btn-primary" data-training-pathway="Two-Year Individual Technical Training" href="#training-enquiry">Apply for Individual Training</a></article></div><div class="section-head bb-training-form-title" id="training-enquiry"><h2>Training Enquiry &amp; Application</h2><p>Tell us which training pathway interests you. Our team can follow up to discuss the programme and next steps.</p></div><form class="training-enquiry-form" id="trainingEnquiryForm"><div class="form-group"><label for="trainingPathway">Training pathway *</label><select id="trainingPathway" name="trainingPathway" required="required"><option value="">Select a pathway</option><option value="Corporate Training Programmes">Corporate Training Programmes</option><option value="Two-Year Individual Technical Training">Two-Year Individual Technical Training</option></select></div><div class="form-group"><label for="applicantName">Full name *</label><input id="applicantName" name="applicantName" placeholder="Your full name" required="required" type="text"/></div><div class="form-group"><label for="applicantOrganisation">Company / organisation (if applicable)</label><input id="applicantOrganisation" name="applicantOrganisation" placeholder="Company or institution" type="text"/></div><div class="form-group"><label for="applicantEmail">Email address *</label><input id="applicantEmail" name="applicantEmail" placeholder="name@example.com" required="required" type="email"/></div><div class="form-group"><label for="applicantPhone">Telephone number *</label><input id="applicantPhone" name="applicantPhone" placeholder="+234..." required="required" type="tel"/></div><div class="form-group"><label for="trainingLocation">Preferred training location</label><select id="trainingLocation" name="trainingLocation"><option value="">Select preferred location</option><option value="BrainBox training facility">BrainBox training facility</option><option value="Client's facility">Client's facility</option><option value="To be discussed">To be discussed</option></select></div><div class="form-group"><label for="staffCount">Number of staff (corporate enquiries)</label><input id="staffCount" name="staffCount" placeholder="Number of staff to be trained" type="text"/></div><div class="form-group"><label for="trainingMessage">Training interests / message *</label><textarea id="trainingMessage" name="trainingMessage" placeholder="Tell us about your training needs..." required="required" rows="4"></textarea></div><button class="btn btn-primary" type="submit">Submit Training Enquiry</button><div class="form-status" id="trainingFormStatus" role="status"></div></form><p class="training-note">Programme schedules, detailed curriculum, fees, entry requirements and certification arrangements should be confirmed directly with BrainBox before publication.</p></div></section>
</div>`;
function setupTrainingForm(){
 const form=document.getElementById('trainingEnquiryForm');
 if(!form)return;
 const pathway=document.getElementById('trainingPathway');
 document.querySelectorAll('[data-training-pathway], [data-training-scroll]').forEach(link=>{
  link.addEventListener('click',event=>{
   event.preventDefault();
   if(link.dataset.trainingPathway)pathway.value=link.dataset.trainingPathway;
   document.getElementById('training-enquiry').scrollIntoView({behavior:'smooth',block:'start'});
  });
 });
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const d=new FormData(form);
  const fields=[
   ['Training pathway',d.get('trainingPathway')],
   ['Full name',d.get('applicantName')],
   ['Organisation',d.get('applicantOrganisation')||'Not provided'],
   ['Email',d.get('applicantEmail')],
   ['Telephone',d.get('applicantPhone')],
   ['Preferred location',d.get('trainingLocation')||'Not specified'],
   ['Number of staff',d.get('staffCount')||'Not applicable'],
   ['Training interests / message',d.get('trainingMessage')]
  ];
  const subject=encodeURIComponent('Brainbox Energy — Training Enquiry — '+d.get('trainingPathway'));
  const body=encodeURIComponent('BRAINBOX ENERGY SERVICES LIMITED — TRAINING ENQUIRY\n\n'+fields.map(([k,v])=>k+': '+v).join('\n'));
  document.getElementById('trainingFormStatus').textContent='Your email application will open with the training enquiry. Please send the prepared email to complete your request.';
  window.location.href='mailto:training@brainboxenergy.com?subject='+subject+'&body='+body;
 });
}

const pages={home,about,services:servicePage,projects,insights,contact,quote,training};
function mailEnquiry(form,subjectPrefix){const d=new FormData(form);const body=[...d.entries()].filter(([key])=>key!=='consent').map(([key,value])=>key.replaceAll('_',' ').toUpperCase()+': '+value).join('\n');location.href='mailto:brainboxenergyservicesltd@gmail.com?subject='+encodeURIComponent(subjectPrefix)+'&body='+encodeURIComponent(body)}
function render(){let route=location.hash.slice(1).split('/')[0]||'home';if(!pages[route])route='home';document.getElementById('app').innerHTML=pages[route]();document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+route));document.title=(route==='home'?'Powering Reliability':route==='quote'?'Request a Technical Quote':route[0].toUpperCase()+route.slice(1))+' | Brainbox Energy Services Limited';closeMenu(false);window.scrollTo(0,0);initWorkshopGallery();setupWizard('contact');setupWizard('quote');setupTrainingForm();}
const menuButton=document.getElementById('menu');
const mobileNav=document.getElementById('nav');
const header=document.getElementById('header');
function closeMenu(returnFocus=false){
  mobileNav.classList.remove('open');
  header.classList.remove('menu-open');
  document.body.classList.remove('nav-locked');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open navigation');
  if(returnFocus)menuButton.focus();
}
menuButton.addEventListener('click',()=>{
  const opening=!mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open',opening);
  header.classList.toggle('menu-open',opening);
  document.body.classList.toggle('nav-locked',opening);
  menuButton.setAttribute('aria-expanded',String(opening));
  menuButton.setAttribute('aria-label',opening?'Close navigation':'Open navigation');
});
mobileNav.addEventListener('click',event=>{
  if(event.target.closest('a'))closeMenu();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&mobileNav.classList.contains('open'))closeMenu(true);
});
window.addEventListener('resize',()=>{
  if(window.innerWidth>1120&&mobileNav.classList.contains('open'))closeMenu();
});
document.getElementById('year').textContent=new Date().getFullYear();
addEventListener('hashchange',render);
render();