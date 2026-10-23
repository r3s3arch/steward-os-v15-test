(function(){
'use strict';
// An invitation controls presentation only. Never destroy/recreate form controls,
// timers, or unsaved draft state when a section is closed.
const verses={
  near:['“Draw near to God, and he will draw near to you.”','James 4:8','Enter Prayer'],
  word:['“Your word is a lamp to my feet and a light to my path.”','Psalm 119:105','Explore Scripture'],
  walk:['“For we walk by faith, not by sight.”','2 Corinthians 5:7','Open My Scriptures'],
  temple:['“Your body is the temple of the Holy Ghost.”','1 Corinthians 6:19','Begin Training'],
  gratitude:['“Give thanks in all circumstances.”','1 Thessalonians 5:18','Write in Gratitude']
};
function makeInvitation(id,container,contentNodes,anchor){
  if(!container||!contentNodes.length||!anchor)return;
  const [verse,ref,action]=verses[id];
  const button=document.createElement('button');button.type='button';button.className='scripture-invitation';
  button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','invitation-content-'+id);
  const quote=document.createElement('span');quote.className='invitation-quote';quote.textContent=verse;
  const source=document.createElement('span');source.className='invitation-source';source.textContent=ref;
  const cue=document.createElement('span');cue.className='invitation-cue';cue.textContent=action+'  ⌄';
  button.append(quote,source,cue);
  const body=document.createElement('div');body.className='invitation-content';body.id='invitation-content-'+id;
  body.hidden=true;
  for(const node of contentNodes)body.append(node);
  anchor.after(button);button.after(body);
  button.addEventListener('click',()=>{
    const open=body.hidden;body.hidden=!open;button.setAttribute('aria-expanded',String(open));
    cue.textContent=(open?'Close · ':'')+action+(open?'  ⌃':'  ⌄');
    if(open&&id==='temple'&&document.getElementById('workoutActive')&&!document.getElementById('workoutActive').classList.contains('hidden')){
      document.getElementById('workoutActive').scrollIntoView({block:'nearest',behavior:'smooth'});
    }
  });
  return {button,body};
}
function pick(ids){return ids.map(id=>document.getElementById(id)).filter(Boolean)}
function init(){
  const near=document.getElementById('invocationPanel');
  const shepherd=near?.querySelector('.shepherd-art');
  if(near&&shepherd){
    // Keep the painting visible at all times. The prayer interface is revealed below it.
    const nodes=pick(['invocationMenuToggle','invocationMenu','invocationText','invocationScriptureLink']);
    // Move the containing selector as one unit, retaining existing event handlers.
    const selector=near.querySelector('.invocation-selector');
    const result=makeInvitation('near',near,[selector,...pick(['invocationText','invocationScriptureLink'])].filter(Boolean),shepherd);
    if(result&&selector){
      // One visible control owns the disclosure state. Never toggle the menu
      // independently of the body (the former caused intermittent two-click opens).
      const toggle=document.getElementById('invocationMenuToggle');
      const menu=document.getElementById('invocationMenu');
      if(toggle)toggle.hidden=true;
      result.button.addEventListener('click',()=>{
        const open=!result.body.hidden;
        if(menu)menu.classList.toggle('hidden',!open);
        if(toggle)toggle.setAttribute('aria-expanded',String(open));
      });
      menu?.addEventListener('click',e=>{
        if(e.target.closest('button[data-prayer]')){
          menu.classList.add('hidden');
          result.body.hidden=false;
          result.button.setAttribute('aria-expanded','true');
          result.button.querySelector('.invitation-cue').textContent='Close · Enter Prayer  ⌃';
        }
      });
    }
  }
  const word=document.getElementById('libraryPanel');
  if(word){const art=word.querySelector('.library-art');makeInvitation('word',word,[...word.querySelectorAll('.scripture-navigation, #libraryBrowse, #libraryDetail')],art);}
  const walk=document.getElementById('preparePanel');
  if(walk){const art=walk.querySelector('.walk-landscape');makeInvitation('walk',walk,pick(['myWalkCollection','prepareSections']),art);}
  const temple=document.getElementById('view-toil');
  if(temple){const intro=temple.querySelector('.page-intro');const nodes=[...temple.children].filter(n=>n!==intro);makeInvitation('temple',temple,nodes,intro);}
  const gratitude=document.getElementById('view-journal');
  if(gratitude){const intro=gratitude.querySelector('.page-intro');const nodes=[...gratitude.children].filter(n=>n!==intro);makeInvitation('gratitude',gratitude,nodes,intro);}
  // An active workout must never be hidden behind a collapsed invitation.
  const active=document.getElementById('workoutActive');
  if(active){const observer=new MutationObserver(()=>{
    if(!active.classList.contains('hidden')){
      const btn=temple?.querySelector('.scripture-invitation');
      if(btn&&btn.getAttribute('aria-expanded')==='false')btn.click();
    }
  });observer.observe(active,{attributes:true,attributeFilter:['class']});}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
