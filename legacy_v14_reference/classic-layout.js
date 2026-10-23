(function(){'use strict';function init(){
// Open the prayer selector immediately; preserve the Good Shepherd and prayer library.
// The Draw Near invitation is controlled exclusively by sanctuary-invitations.js.
// Do not hide its button or force its content open here.
// Scripture browse remains visible, not hidden behind a second navigation step.
for(const id of ['libraryPanel','preparePanel']){const root=document.getElementById(id);if(!root)continue;const button=root.querySelector('.scripture-invitation'),body=root.querySelector('.invitation-content');if(button)button.hidden=true;if(body){body.hidden=false;body.style.display='block';}}
const add=document.getElementById('wordAddPersonalPassage');
if(add){
  add.setAttribute('aria-label','Find any Bible passage and save it to My Walk');
  add.addEventListener('click',()=>{
    // Reuse the application's canonical 66-book picker and verified verse
    // boundaries. Do not create a second, less reliable scripture validator.
    document.getElementById('modePrepare')?.click();
    const walk=document.getElementById('preparePanel');
    const body=walk?.querySelector('.invitation-content');
    if(body){body.hidden=false;body.style.display='block';}
    document.getElementById('addPersonalPassage')?.click();
    const editor=document.getElementById('personalEditor');
    if(editor)editor.classList.remove('hidden');
    document.getElementById('scriptureBook')?.scrollIntoView({block:'center',behavior:'smooth'});
    document.getElementById('scriptureBook')?.focus({preventScroll:true});
  });
}
// Temple and Gratitude keep their disclosure but have clean, unillustrated navy headings.
}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();})();