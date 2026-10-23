'use strict';
/* Backup restoration is all-or-nothing across the application's storage keys. */
(function(root){
  const FORMAT='stewardship-os-next-v1';
  const keys={data:'stewardship_os_next_sanctuary_v1',personalPassages:'stewardship_os_next_personal_scriptures_v1',prayerFavorites:'stewardship_os_next_prayer_favorites_v1',biblePrefs:'stewardship_os_next_bible_preferences_v1'};
  function validBackup(obj){
    if(!obj||obj.format!==FORMAT||!obj.data||!Array.isArray(obj.data.exercises)||!Array.isArray(obj.data.workouts)||!obj.data.reflections||typeof obj.data.reflections!=='object'||Array.isArray(obj.data.reflections))throw Error('Invalid Stewardship OS backup.');
    if(!Array.isArray(obj.personalPassages)||!obj.personalPassages.every(p=>p&&typeof p.reference==='string'))throw Error('Invalid saved Scripture collection.');
    if(!Array.isArray(obj.prayerFavorites)||!obj.prayerFavorites.every(p=>typeof p==='string'))throw Error('Invalid Scripture favorites.');
    if(!obj.biblePrefs||!['gateway','youversion'].includes(obj.biblePrefs.provider)||!['KJV','ESV','NIV','NASB','NKJV','NLT'].includes(obj.biblePrefs.translation))throw Error('Invalid Bible preferences.');
    return obj;
  }
  function restore(storage,backup){
    validBackup(backup);
    const changes=Object.entries(keys).map(([field,key])=>[key,JSON.stringify(backup[field])]);
    const originals=new Map(changes.map(([key])=>[key,storage.getItem(key)]));
    try {for(const [key,value] of changes)storage.setItem(key,value)}
    catch(err){
      let rollbackFailed=false;
      for(const [key,old] of originals){try{if(old===null)storage.removeItem(key);else storage.setItem(key,old)}catch(e){rollbackFailed=true}}
      throw Error(rollbackFailed?'Restore failed and rollback was incomplete. Do not close this page; preserve your backup file.':'Restore failed; existing records were restored.');
    }
    return true;
  }
  root.StewardshipBackup={FORMAT,keys,validBackup,restore};
  if(typeof module!=='undefined'&&module.exports)module.exports=root.StewardshipBackup;
})(typeof window!=='undefined'?window:globalThis);
