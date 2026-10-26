'use strict';
const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
for(const button of nav.querySelectorAll('[data-view]'))button.addEventListener('click',()=>{const id=button.dataset.view;for(const v of document.querySelectorAll('.view'))v.classList.toggle('active',v.id===id);for(const b of nav.querySelectorAll('button')){if(b===button)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');}nav.classList.remove('open');menu.setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'instant'});});
const audio=document.getElementById('audio'),toggle=document.getElementById('musicToggle');audio.volume=.28;document.getElementById('volume').addEventListener('input',e=>audio.volume=Number(e.target.value)/100);toggle.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();toggle.textContent='Pause music';toggle.setAttribute('aria-pressed','true')}catch{toggle.textContent='Unable to play'}}else{audio.pause();toggle.textContent='Play music';toggle.setAttribute('aria-pressed','false')}});

const studyPanels={biblical:['Biblical Studies','Examine historical context, original languages, translations, theology, and historical interpretations. This academic workspace awaits integration with the verified study library.'],links:['Scripture Connections','Explore personal and curated cross-references, passage comparisons, and notes. Existing connection records remain in The Living Word until shared-library integration is tested.'],reflection:['Reflections','Record spiritual observations, questions, and applications associated with Scripture. The persistent reflection editor is not yet implemented.'],library:['My Library','A unified searchable library of notes, highlights, bookmarks, connections, and studies will appear after data integration is verified.']};
for(const button of document.querySelectorAll('[data-study]'))button.addEventListener('click',()=>{for(const b of document.querySelectorAll('[data-study]'))b.classList.toggle('selected',b===button);const [heading,description]=studyPanels[button.dataset.study];const target=document.getElementById('study-content');target.replaceChildren();const h=document.createElement('h3');h.textContent=heading;const p=document.createElement('p');p.textContent=description;target.append(h,p);if(button.dataset.study==='library'||button.dataset.study==='links')renderReaderLibrary(button.dataset.study);});
const readerFrame=document.getElementById('reader');function resizeReader(){try{const doc=readerFrame.contentDocument;if(!doc)return;readerFrame.style.height=(Math.max(doc.documentElement.scrollHeight,doc.body.scrollHeight,750)+12)+'px'}catch(e){}}readerFrame.addEventListener('load',()=>{resizeReader();try{const doc=readerFrame.contentDocument;if(doc&&'ResizeObserver'in window)new ResizeObserver(resizeReader).observe(doc.body)}catch(e){}});

// Read-only view of the existing Living Word IndexedDB record. No changes to reader data.
async function readReaderAnnotations(){
 return new Promise((resolve,reject)=>{
  const request=indexedDB.open('stewardship-living-word-v15');
  request.onerror=()=>reject(request.error||Error('Storage unavailable'));
  request.onupgradeneeded=()=>{request.transaction.abort();reject(Error('Reader study database has not been initialized'))};
  request.onsuccess=()=>{const db=request.result;
   if(!db.objectStoreNames.contains('records')){db.close();reject(Error('Study records are not initialized'));return}
   const tx=db.transaction('records','readonly');const get=tx.objectStore('records').get('annotations');
   get.onsuccess=()=>{resolve(get.result||{});db.close()};get.onerror=()=>{reject(get.error);db.close()};
  };
 });
}
function safeText(tag,cls,value){const n=document.createElement(tag);if(cls)n.className=cls;n.textContent=String(value??'');return n}
async function renderReaderLibrary(mode){
 const target=document.getElementById('study-content'),status=document.getElementById('library-status');
 status.textContent='Reading saved Scripture records…';
 try{
  const data=await readReaderAnnotations();const rows=Object.entries(data).filter(([key,v])=>/^[A-Z0-9]{2,5}\.\d+\.\d+$/.test(key)&&v&&typeof v==='object');
  const relevant=rows.filter(([,v])=>mode==='links'?(Array.isArray(v.connections)&&v.connections.length):((Array.isArray(v.notes)&&v.notes.length)||v.highlight||(Array.isArray(v.connections)&&v.connections.length)));
  target.replaceChildren(safeText('h3','',mode==='links'?'Scripture Connections':'My Library'));
  if(!relevant.length){target.append(safeText('p','',mode==='links'?'No saved personal connections found yet. Create connections within The Living Word.':'No saved annotations found yet. Create a note, highlight, or connection in The Living Word, then refresh here.'));}
  for(const [reference,entry] of relevant){
   const card=document.createElement('article');card.className='saved-card';card.append(safeText('h4','',reference));
   if(entry.highlight)card.append(safeText('p','','Highlighted verse'));
   for(const note of (Array.isArray(entry.notes)?entry.notes:[]))card.append(safeText('p','saved-note',typeof note==='string'?note:note?.text||note?.body||JSON.stringify(note)));
   for(const connection of (Array.isArray(entry.connections)?entry.connections:[])){
    const details=document.createElement('details');const summary=document.createElement('summary');summary.textContent=typeof connection==='string'?connection:connection?.reference||connection?.ref||connection?.target||'Saved connection';details.append(summary);
    if(typeof connection==='object'&&connection){const note=connection.note||connection.notes||connection.comment||'';if(note)details.append(safeText('p','',typeof note==='string'?note:JSON.stringify(note)))}card.append(details);
   }
   target.append(card);
  }
  status.textContent=relevant.length+' saved verse record(s) shown · read-only';
 }catch(error){target.replaceChildren(safeText('h3','',mode==='links'?'Scripture Connections':'My Library'),safeText('p','','The reader study library is not ready. Open The Living Word first, then return and refresh.'));status.textContent='Library not yet available';}
}
document.getElementById('refresh-library').addEventListener('click',()=>{const active=document.querySelector('[data-study].selected');renderReaderLibrary(active?.dataset.study==='links'?'links':'library')});
