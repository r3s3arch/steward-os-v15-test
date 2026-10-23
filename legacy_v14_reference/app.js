'use strict';
const KEY='stewardship_os_next_sanctuary_v1';
const defaultExercises=[{"id":"pushups","name":"Push-Ups","category":"Push","unit":"reps","description":"Maintain a straight line; lower with control and press back up."},{"id":"inclinepush","name":"Incline Push-Ups","category":"Push","unit":"reps","description":"Hands on a stable bench; keep the body straight as you lower."},{"id":"dbpress","name":"Dumbbell Bench Press","category":"Push","unit":"reps","description":"Keep shoulders stable and lower the weights deliberately."},{"id":"dbshoulder","name":"Dumbbell Shoulder Press","category":"Push","unit":"reps","description":"Brace your trunk and press overhead without leaning back."},{"id":"trxchest","name":"TRX Chest Press","category":"Push","unit":"reps","description":"Keep straps steady and torso braced; press with control."},{"id":"dips","name":"Dips","category":"Push","unit":"reps","description":"Use stable dip bars; lower within a comfortable shoulder range and press up."},{"id":"pullups","name":"Pull-Ups","category":"Pull","unit":"reps","description":"Start from a controlled hang; pull without swinging."},{"id":"chinups","name":"Chin-Ups","category":"Pull","unit":"reps","description":"Use palms-facing grip; keep your body steady through each rep."},{"id":"dbrows","name":"Dumbbell Rows","category":"Pull","unit":"reps","description":"Hinge at the hips and pull the elbow back without twisting."},{"id":"trxrows","name":"TRX Rows","category":"Pull","unit":"reps","description":"Keep body rigid; pull handles toward the ribs."},{"id":"deadhang","name":"Dead Hang","category":"Pull","unit":"seconds","description":"Hang with a comfortable grip and controlled shoulders; stop if painful."},{"id":"backext","name":"Back Extensions","category":"Pull","unit":"reps","description":"Hinge at the hips; raise torso to neutral alignment, without arching past straight."},{"id":"squats","name":"Bodyweight Squats","category":"Legs","unit":"reps","description":"Keep feet planted; sit between the hips and stand tall."},{"id":"goblet","name":"Goblet Squats","category":"Legs","unit":"reps","description":"Hold a dumbbell at the chest; squat with a braced trunk."},{"id":"lunges","name":"Dumbbell Reverse Lunges","category":"Legs","unit":"reps","description":"Step backward under control, alternating legs."},{"id":"dbdeadlift","name":"Dumbbell Romanian Deadlifts","category":"Legs","unit":"reps","description":"Hinge at the hips with neutral back and weights close."},{"id":"stepups","name":"Step-Ups","category":"Legs","unit":"reps","description":"Step onto a secure, stable platform and descend carefully."},{"id":"situps","name":"Sit-Ups","category":"Core","unit":"reps","description":"Keep feet supported if needed; curl up with control without pulling your neck."},{"id":"deadbugs","name":"Dead Bugs","category":"Core","unit":"reps","description":"Keep lower back steady while extending opposite arm and leg."},{"id":"kneeraises","name":"Hanging Knee Raises","category":"Core","unit":"reps","description":"Hang steadily and lift knees without swinging."},{"id":"reversecrunch","name":"Reverse Crunches","category":"Core","unit":"reps","description":"Curl pelvis gently upward; avoid momentum."},{"id":"plank","name":"Plank","category":"Core","unit":"seconds","description":"Maintain a straight line, breathing steadily without sagging."},{"id":"burpees","name":"Burpees","category":"Conditioning","unit":"reps","description":"Move smoothly; scale the jump or push-up as needed."},{"id":"mountain","name":"Mountain Climbers","category":"Conditioning","unit":"reps","description":"Brace the torso and drive knees alternately with control."},{"id":"thrusters","name":"Dumbbell Thrusters","category":"Conditioning","unit":"reps","description":"Squat with control, then drive dumbbells overhead as you stand."},{"id":"catcow","name":"Cat-Cow","category":"Mobility","unit":"reps","description":"Alternate spinal flexion and extension slowly with your breath."},{"id":"worldstretch","name":"World’s Greatest Stretch","category":"Mobility","unit":"seconds","description":"Ease into a lunge and thoracic rotation; switch sides halfway."},{"id":"dbsquats","name":"Dumbbell Squats","category":"Legs","unit":"reps","description":"Hold dumbbells at your sides and squat with control."},{"id":"trxpushups","name":"TRX Push-Ups","category":"Push","unit":"reps","description":"Maintain a braced body as you lower and press using the suspension straps."}];
const prayerSections=[
{label:'I · GRATITUDE',source:'A prayer of thanksgiving · original',text:'Heavenly Father, giver of every good gift, I thank You for this day, for breath, for the people entrusted to my care, and for mercies I so easily overlook. Open my eyes to Your goodness, and teach me to receive each moment with gratitude. Through Jesus Christ our Lord. Amen.',ref:'“Every good gift and every perfect gift is from above.” — James 1:17'},
{label:'II · LOVE',source:'A prayer for a loving heart · original',text:'Lord Jesus Christ, Son of God, make my heart more like Yours. Teach me to love without keeping score, to forgive freely, to speak gently, and to serve without seeking praise. Let my family, my neighbors, and all I meet experience Your love through my actions. Amen.',ref:'“Love one another, as I have loved you.” — John 15:12'},
{label:'III · HUMILITY',source:'The Jesus Prayer · traditional',text:'Lord Jesus Christ, Son of God, have mercy on me, a sinner.\n\nLord, quiet my pride and steady my thoughts. Give me humility to recognize my need for You, patience to listen, and courage to do what is right. Amen.',ref:'“God gives grace to the humble.” — James 4:6'},
{label:'IV · THANKSGIVING',source:'A doxology · traditional, with reflection',text:'Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto ages of ages. Amen.\n\nHoly God, I praise You for Your faithfulness. May my work, my rest, and the ordinary duties of this day become an offering of thanksgiving to You.',ref:'“In everything give thanks.” — 1 Thessalonians 5:18'},
{label:'V · REPENTANCE',source:'A prayer for renewal · original',text:'Holy Spirit, search my heart and reveal what needs to change. Where I have been impatient, teach me gentleness; where I have been selfish, teach me generosity; where I have neglected what is good, renew my resolve. Lead me in truth and make me willing to begin again. Amen.',ref:'“Create in me a clean heart, O God.” — Psalm 51:10'},
{label:'VI · INTERCESSION',source:'A prayer to the Triune God · original',text:'Father in heaven, I bring before You those I love and those who are suffering. Lord Jesus Christ, comfort the grieving, strengthen the weary, and grant peace to those in fear. Holy Spirit, give wisdom to those making difficult decisions and teach me how to help. Let Your will be done in us. Amen.',ref:'“Pray for one another.” — James 5:16'}
];
const $=id=>document.getElementById(id);
const clone=x=>JSON.parse(JSON.stringify(x));
const safeInt=(v,min,max)=>{const n=Number(v);return Number.isInteger(n)&&n>=min&&n<=max?n:null};
const todayISO=()=>{const d=new Date(),local=new Date(d.getTime()-d.getTimezoneOffset()*60000);return local.toISOString().slice(0,10)};
function initialData(){return {exercises:clone(defaultExercises),workouts:[],reflections:{}}}
// Normalize V1 defaults without modifying journal entries or genuine user-created exercises.
const legacyNames = {
  'push-ups':'pushups','bodyweight squats':'squats','pull-ups':'pullups',
  'dumbbell squats':'dbsquats','dumbbell bench press':'dbpress',
  'dumbbell rows':'dbrows','dumbbell shoulder press':'dbshoulder',
  'reverse lunges':'lunges','dumbbell reverse lunges':'lunges',
  'trx rows':'trxrows','trx push-ups':'trxpushups','sit-ups':'situps',
  'burpees':'burpees','bench step-ups':'stepups','step-ups':'stepups',
  'dumbbell romanian deadlift':'dbdeadlift',
  'dumbbell romanian deadlifts':'dbdeadlift'
};
function exerciseKey(name){return String(name||'').trim().toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ')}
function mergeDefaults(obj){
  const defaultsById=new Map(defaultExercises.map(ex=>[ex.id,ex]));
  const defaultsByName=new Map(defaultExercises.map(ex=>[exerciseKey(ex.name),ex]));
  const retained=[];const seen=new Set();
  for(const ex of obj.exercises){
    if(!ex||!ex.name)continue;
    const key=exerciseKey(ex.name);
    const standard=defaultsById.get(ex.id)||defaultsByName.get(key)||defaultsById.get(legacyNames[key]);
    if(standard){
      // Keep the canonical ID so older workout records can still resolve by name.
      if(!seen.has(standard.id)){retained.push(clone(standard));seen.add(standard.id)}
    }else{
      // Unrecognized entries are user data. Never silently delete them.
      if(!seen.has(ex.id)){retained.push(ex);seen.add(ex.id)}
    }
  }
  for(const ex of defaultExercises)if(!seen.has(ex.id)){retained.push(clone(ex));seen.add(ex.id)}
  obj.exercises=retained;
  return obj;
}
function loadData(){try{const obj=JSON.parse(localStorage.getItem(KEY));if(obj&&Array.isArray(obj.exercises)&&Array.isArray(obj.workouts)&&obj.reflections&&typeof obj.reflections==='object')return mergeDefaults(obj)}catch(e){}return initialData()}
let data=loadData();
try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(data));return true}catch(e){alert('Storage unavailable. Please export a backup and check browser storage settings.');return false}}
function text(el,value){el.textContent=value}
function showView(view){document.querySelectorAll('.view').forEach(el=>el.classList.toggle('active',el.id==='view-'+view));document.querySelectorAll('.tab').forEach(el=>{const yes=el.dataset.view===view;el.classList.toggle('active',yes);if(yes)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')});if(view==='journal')renderJournal();window.scrollTo({top:0,behavior:'instant'})}
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.view)));
let audioCtx=null;function chime(){try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.type='sine';osc.frequency.setValueAtTime(660,audioCtx.currentTime);osc.frequency.exponentialRampToValueAtTime(880,audioCtx.currentTime+.22);gain.gain.setValueAtTime(.0001,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.13,audioCtx.currentTime+.02);gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+.55);osc.connect(gain).connect(audioCtx.destination);osc.start();osc.stop(audioCtx.currentTime+.6)}catch(e){}}
// Prayer: 30 minutes, using wall-clock deadlines so background throttling does not distort elapsed time.
// V1.6: prayer is deliberately untimed. Toil's EMOM clock remains unchanged.
let prayer={remaining:0,running:false};
function renderPrayer(){}

// Exercise library and EMOM session.
function selectedExercise(){return data.exercises.find(x=>x.id===$('exerciseSelect').value)}
const exerciseCategories=['Push','Pull','Legs','Core','Conditioning','Mobility','Custom'];
function renderExerciseSelect(prefer){
  const select=$('exerciseSelect'),categorySelect=$('categorySelect');
  const id=prefer||select.value;
  const chosen=data.exercises.find(ex=>ex.id===id);
  const currentCategory=chosen?.category||categorySelect.value||'Push';
  categorySelect.replaceChildren();
  for(const category of exerciseCategories){
    if(!data.exercises.some(ex=>(ex.category||'Custom')===category))continue;
    const option=document.createElement('option');option.value=category;option.textContent=category;
    categorySelect.append(option);
  }
  if([...categorySelect.options].some(o=>o.value===currentCategory))categorySelect.value=currentCategory;
  renderExercisesInCategory(id);
}
function renderExercisesInCategory(prefer){
  const select=$('exerciseSelect');select.replaceChildren();
  const matches=data.exercises.filter(ex=>(ex.category||'Custom')===$('categorySelect').value);
  for(const ex of matches){const option=document.createElement('option');option.value=ex.id;option.textContent=ex.name;select.append(option)}
  if(matches.some(ex=>ex.id===prefer))select.value=prefer;
  renderExerciseDescription();updatePreview();
}
$('categorySelect').addEventListener('change',()=>renderExercisesInCategory());
function renderExerciseDescription(){const ex=selectedExercise();text($('exerciseDescription'),ex?.description||'');$('unitSelect').value=ex?.unit||'reps';updateUnitLabel()}
function updateUnitLabel(){const unit=$('unitSelect').value;text($('quantityLabel'),unit==='seconds'?'Seconds each minute':'Repetitions each minute');$('repsInput').max=unit==='seconds'?'59':'1000'}
function updatePreview(){const unit=$('unitSelect').value,qty=safeInt($('repsInput').value,1,unit==='seconds'?59:1000),minutes=safeInt($('minutesInput').value,1,180);text($('workoutPreview'),qty&&minutes?`${minutes} rounds · ${qty} ${unit==='seconds'?'seconds':'repetitions'} each minute · ${qty*minutes} planned ${unit==='seconds'?'seconds':'repetitions'}`:'Enter a valid target and 1–180 minutes.');$('beginWorkout').disabled=!qty||!minutes||!selectedExercise()}
$('exerciseSelect').addEventListener('change',()=>{renderExerciseDescription();updatePreview()});['repsInput','minutesInput','unitSelect'].forEach(id=>$(id).addEventListener('input',()=>{if(id==='unitSelect')updateUnitLabel();updatePreview()}));
$('toggleExerciseEditor').addEventListener('click',()=>{const ex=selectedExercise();$('exerciseEditor').classList.remove('hidden');$('exerciseName').value=ex?.name||'';$('exerciseInfo').value=ex?.description||'';$('exerciseCategory').value=ex?.category||'Custom';$('exerciseUnit').value=ex?.unit||'reps';text($('exerciseEditorMessage'),'Edit the selected exercise, or enter a new name to create one.')});
$('cancelExercise').addEventListener('click',()=>$('exerciseEditor').classList.add('hidden'));
$('saveExercise').addEventListener('click',()=>{const name=$('exerciseName').value.trim(),description=$('exerciseInfo').value.trim(),category=$('exerciseCategory').value,unit=$('exerciseUnit').value;if(!name){text($('exerciseEditorMessage'),'Enter an exercise name.');return}const current=selectedExercise();let target=data.exercises.find(e=>e.name.toLowerCase()===name.toLowerCase());if(target&&target.id!==current?.id){text($('exerciseEditorMessage'),'An exercise with that name already exists.');return}if(current&&current.name.toLowerCase()===name.toLowerCase()){current.description=description;current.category=category;current.unit=unit;target=current}else{target={id:'custom-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),name,description,category,unit};data.exercises.push(target)}persist();renderExerciseSelect(target.id);$('exerciseEditor').classList.add('hidden')});
$('deleteExercise').addEventListener('click',()=>{const ex=selectedExercise();if(!ex||data.exercises.length<=1){text($('exerciseEditorMessage'),'At least one exercise must remain.');return}if(!confirm(`Delete “${ex.name}” from the exercise library? Previous journal entries will remain.`))return;data.exercises=data.exercises.filter(x=>x.id!==ex.id);persist();renderExerciseSelect();$('exerciseEditor').classList.add('hidden')});
let workout=null,review=null;const WORKOUT_STORAGE='stewardship_os_next_active_session_v1';
function saveActive(){try{if(workout)localStorage.setItem(WORKOUT_STORAGE,JSON.stringify(workout));else localStorage.removeItem(WORKOUT_STORAGE)}catch(e){}}
function loadActive(){try{const s=JSON.parse(localStorage.getItem(WORKOUT_STORAGE));if(s&&s.exercise&&Number.isFinite(s.minutes)&&Number.isFinite(s.reps)&&Number.isFinite(s.remainingMs)){if(s.running){s.remainingMs=Math.max(0,(Number(s.deadline)||Date.now())-Date.now());s.running=false;s.deadline=null;}return s}}catch(e){}return null}
function setWorkoutPanel(name){$('workoutSetup').classList.toggle('hidden',name!=='setup');$('workoutActive').classList.toggle('hidden',name!=='active');$('workoutReview').classList.toggle('hidden',name!=='review')}
function startWorkout(){if(workout||review){alert('Finish or discard your current session before starting another.');return}const ex=selectedExercise(),reps=safeInt($('repsInput').value,1,1000),minutes=safeInt($('minutesInput').value,1,180);if(!ex||!reps||!minutes)return;const unit=$('unitSelect').value;if(unit==='seconds'&&reps>59)return;const prep=$('prepCountdown').checked?5000:0;workout={exercise:clone(ex),reps,unit,minutes,load:$('loadInput').value.trim(),prepMs:prep,remainingMs:minutes*60000+prep,deadline:Date.now()+minutes*60000+prep,running:true,startedAt:new Date().toISOString(),chime:$('workoutChime').checked,lastRound:0};saveActive();setWorkoutPanel('active');renderWorkout()}
$('beginWorkout').addEventListener('click',startWorkout);
function renderWorkout(){if(!workout)return;const left=workout.running?Math.max(0,workout.deadline-Date.now()):workout.remainingMs;const prep=left>workout.minutes*60000;const elapsed=Math.max(0,workout.minutes*60000-left);const completedRounds=Math.min(workout.minutes,Math.floor(elapsed/60000));if(workout.running&&!prep&&completedRounds!==workout.lastRound){if(workout.chime)chime();workout.lastRound=completedRounds}if(workout.running&&left<=0){finishWorkout(false);return}text($('activeExerciseName'),workout.exercise.name);text($('roundLabel'),prep?'PREPARE':`ROUND ${Math.min(workout.minutes,completedRounds+1)} OF ${workout.minutes}`);const remainingInMinute=prep?Math.ceil((left-workout.minutes*60000)/1000):Math.ceil((60000-(elapsed%60000))/1000);text($('workoutClock'),`${String(Math.floor(remainingInMinute/60)).padStart(2,'0')}:${String(remainingInMinute%60).padStart(2,'0')}`);$('timerFill').style.width=`${prep?0:100*(elapsed%60000)/60000}%`;text($('repCallout'),prep?'Get ready':`${workout.reps} ${workout.unit==='seconds'?'seconds':'repetitions'} each minute`);text($('timerMessage'),prep?'Begin when the first minute starts.':workout.running?'Work, then rest until the next minute.':'Paused — resume when ready.');text($('pauseWorkout'),workout.running?'Pause':'Resume')}
$('pauseWorkout').addEventListener('click',()=>{if(!workout)return;if(workout.running){workout.remainingMs=Math.max(0,workout.deadline-Date.now());workout.running=false;workout.deadline=null}else{workout.deadline=Date.now()+workout.remainingMs;workout.running=true}saveActive();renderWorkout()});
function finishWorkout(early){if(!workout)return;const left=workout.running?Math.max(0,workout.deadline-Date.now()):workout.remainingMs;const elapsed=Math.max(0,workout.minutes*60000-left);const fullMinutes=Math.min(workout.minutes,Math.floor(elapsed/60000));const completed=!early&&left<=0;review={id:'w-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),date:new Date().toISOString(),exercise:workout.exercise.name,exerciseId:workout.exercise.id,repsPerMinute:workout.reps,unit:workout.unit||'reps',plannedMinutes:workout.minutes,completedRounds:completed?workout.minutes:fullMinutes,elapsedSeconds:completed?workout.minutes*60:Math.floor(elapsed/1000),load:workout.load,completed,actualEdited:false};workout=null;saveActive();showReview()}
$('endWorkout').addEventListener('click',()=>{$('endWorkoutDialog').showModal()});$('cancelEarly').addEventListener('click',()=>$('endWorkoutDialog').close());$('confirmEarly').addEventListener('click',()=>{$('endWorkoutDialog').close();finishWorkout(true)});
function showReview(){setWorkoutPanel('review');text($('reviewExercise'),review.exercise);text($('actualLabel'),review.unit==='seconds'?'Actual total seconds (optional correction)':'Actual total repetitions (optional correction)');text($('reviewTitle'),review.completed?'Well done.':'Every effort counts.');text($('reviewDescription'),review.completed?'Your session is complete. Review and save your record.':'You ended this session early. Only fully elapsed rounds are counted in the estimate.');$('reviewSummary').replaceChildren();[['Rounds',`${review.completedRounds} / ${review.plannedMinutes}`],['Target / round',`${review.repsPerMinute} ${review.unit==='seconds'?'sec':'reps'}`],['Planned total',`${review.plannedMinutes*review.repsPerMinute} ${review.unit==='seconds'?'sec':'reps'}`],['Elapsed',`${Math.floor(review.elapsedSeconds/60)}m ${review.elapsedSeconds%60}s`]].forEach(([label,value])=>{const el=document.createElement('div'),strong=document.createElement('strong'),span=document.createElement('span');strong.textContent=value;span.textContent=label;el.append(strong,span);$('reviewSummary').append(el)});$('actualReps').value=review.completedRounds*review.repsPerMinute;$('workoutNote').value=''}
let emomSaveBusy=false;
$('saveWorkout').addEventListener('click',()=>{if(!review||emomSaveBusy)return;const actual=safeInt($('actualReps').value,0,1000000);if(actual===null){alert('Enter a valid actual repetition total, from 0 to 1,000,000.');return}review.actualReps=actual;review.actualEdited=actual!==review.completedRounds*review.repsPerMinute;review.note=$('workoutNote').value.trim();emomSaveBusy=true;const previous=data.workouts;try{data.workouts=[review,...previous.filter(w=>w.id!==review.id)];if(!persist()){data.workouts=previous;return}review=null;setWorkoutPanel('setup');showView('toil');renderHistory()}finally{emomSaveBusy=false}});
$('discardWorkout').addEventListener('click',()=>{if(!confirm('Discard this unsaved workout?'))return;review=null;setWorkoutPanel('setup')});
// Journal: notes autosave by local calendar date.
let noteTimer=null;function renderReflection(){const date=$('reflectionDate').value||todayISO(),r=data.reflections[date]||{};$('gratitudeTitle').value=r.title||'';$('gratitudeNote').value=r.gratitude||'';$('goodnessFlag').checked=!!r.goodness; text($('autosaveStatus'),'Reflections save automatically on this device.')}
function saveReflection(){const date=$('reflectionDate').value||todayISO();data.reflections[date]={title:$('gratitudeTitle').value.trim(),gratitude:$('gratitudeNote').value,goodness:$('goodnessFlag').checked};if(persist()){text($('autosaveStatus'),'Saved on this device.');renderGratitudeSeek();return true}return false}
$('reflectionDate').value=todayISO();$('reflectionDate').addEventListener('change',()=>{clearTimeout(noteTimer);renderReflection()});['gratitudeTitle','gratitudeNote','goodnessFlag'].forEach(id=>$(id).addEventListener('input',()=>{text($('autosaveStatus'),'Saving…');clearTimeout(noteTimer);noteTimer=setTimeout(saveReflection,300)}));
function renderGratitudeSeek(){
 const root=$('gratitudeSeekResults'),q=$('gratitudeSeekText').value.trim().toLocaleLowerCase(),kind=$('gratitudeSeekType').value;
 root.replaceChildren();
 const entries=Object.entries(data.reflections||{}).filter(([date,r])=>r&&typeof r==='object'&&(r.gratitude||r.heart||r.intention||r.goodness)).filter(([date,r])=>(kind!=='goodness'||r.goodness)&&(!q||[date,r.title,r.gratitude,r.heart,r.intention].join(' ').toLocaleLowerCase().includes(q))).sort(([a],[b])=>b.localeCompare(a));
 if(!entries.length){const empty=document.createElement('p');empty.className='empty';empty.textContent='No reflections match your search.';root.append(empty);return}
 for(const [date,r] of entries){const btn=document.createElement('button');btn.type='button';btn.className='library-item';const title=document.createElement('strong');title.textContent=(r.title||date)+(r.goodness?' · God’s Goodness':'');const preview=document.createElement('span');preview.textContent=(r.gratitude||r.heart||r.intention||'Reflection').slice(0,160);btn.append(title,preview);btn.addEventListener('click',()=>{openGratitudeLetter(date)});root.append(btn)}
}
let activeGratitudeLetter=null;
function openGratitudeLetter(date){
 const entry=data.reflections?.[date];if(!entry)return;
 activeGratitudeLetter=date;
 text($('gratitudeLetterDate'),date);
 text($('gratitudeLetterTitle'),entry.title||'A Reflection of Gratitude');
 $('gratitudeLetterGoodness').classList.toggle('hidden',!entry.goodness);
 const content=$('gratitudeLetterContent');content.replaceChildren();
 for(const [heading,value] of [['',entry.gratitude]]){
  if(!value)continue;const section=document.createElement('section');const label=document.createElement('h4');label.textContent=heading;const body=document.createElement('p');body.textContent=value;section.append(body);content.append(section);
 }
 $('gratitudeLetterView').classList.remove('hidden');$('gratitudeLetterView').focus();
}
$('gratitudeLetterBack').addEventListener('click',()=>{activeGratitudeLetter=null;$('gratitudeLetterView').classList.add('hidden');$('gratitudeSeekText').focus()});
$('gratitudeLetterEdit').addEventListener('click',()=>{if(!activeGratitudeLetter)return;$('reflectionDate').value=activeGratitudeLetter;renderReflection();$('gratitudeLetterView').classList.add('hidden');$('gratitudeTitle').focus()});
$('gratitudeSeekText').addEventListener('input',renderGratitudeSeek);
$('gratitudeSeekType').addEventListener('change',renderGratitudeSeek);
function renderJournal(){renderGratitudeSeek();renderHistory()}
let showAllWorkouts=false; $('historyViewAll').addEventListener('click',()=>{showAllWorkouts=!showAllWorkouts;renderHistory()});function renderHistory(){const list=$('historyList');const now=new Date();const start=new Date(now);start.setDate(now.getDate()-((now.getDay()+6)%7));start.setHours(0,0,0,0);const weekCount=data.workouts.filter(w=>w.completed&&new Date(w.date)>=start).length;$('weeklySummary').textContent=weekCount+' '+(weekCount===1?'workout':'workouts')+' this week';$('historyViewAll').classList.toggle('hidden',data.workouts.length<=3);$('historyViewAll').textContent=showAllWorkouts?'Show recent workouts':'View all workouts';list.replaceChildren();if(!data.workouts.length){const p=document.createElement('p');p.className='empty';p.textContent='Your completed workouts will appear here. Begin with one faithful minute.';list.append(p);return}data.workouts.slice(0,showAllWorkouts?undefined:3).forEach(w=>{const item=document.createElement('article');item.className='history-item';const top=document.createElement('div');top.className='history-top';const heading=document.createElement('h3');heading.textContent=w.exercise;const tag=document.createElement('span');tag.className='status-tag';tag.textContent=w.completed?'Completed':'Ended early';top.append(heading,tag);item.append(top);const p=document.createElement('p');const d=new Date(w.date);p.textContent=`${isNaN(d)?w.date:d.toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})} · ${w.completedRounds}/${w.plannedMinutes} rounds · ${Math.floor((w.elapsedSeconds||0)/60)}m ${(w.elapsedSeconds||0)%60}s · ${w.repsPerMinute} ${w.unit==='seconds'?'sec':'reps'}/min · ${w.actualReps} total ${w.unit==='seconds'?'sec':'reps'}${w.actualEdited?' (corrected)':' (estimate)'}${w.load?' · '+w.load:''}`;item.append(p);if(w.type==='traditional'){p.textContent=`${new Date(w.date).toLocaleDateString()} · Traditional · ${(w.entries||[]).length} exercise(s) · ${w.durationMinutes||0} min`;const details=document.createElement('p');details.textContent=(w.entries||[]).map(e=>`${e.exercise}: ${traditionalSetRows(e).map(set=>`${set.reps} reps${set.weight?' @ '+set.weight:''}`).join(', ')}`).join('  |  ');item.append(details)}if(w.note){const note=document.createElement('p');note.textContent=w.note;item.append(note)}const actions=document.createElement('div');actions.className='history-actions';const repeat=document.createElement('button');repeat.textContent='Repeat workout';repeat.addEventListener('click',()=>{if(w.type==='traditional'){showView('toil');setTrainingMode('traditional');editingTraditionalRecord=null;traditionalSessionId='traditional-'+Date.now()+'-'+Math.random().toString(36).slice(2,10);traditionalSessionSaved=false;traditionalEntries=(w.entries||[]).map(e=>({...e,setDetails:traditionalSetRows(e).map(row=>({...row}))}));$('traditionalDuration').value=w.durationMinutes||0;$('traditionalNotes').value='';traditionalSeconds=0;traditionalRunning=false;renderTraditionalEntries();queueTraditionalDraft();$('traditionalStatus').textContent='New unsaved workout · pre-filled from your last session.';return}if(workout||review){alert('Finish or discard your current workout first.');return}renderExerciseSelect(w.exerciseId);if(!data.exercises.some(e=>e.id===w.exerciseId)){const match=data.exercises.find(e=>e.name===w.exercise);if(match)renderExerciseSelect(match.id)} $('repsInput').value=w.repsPerMinute;$('minutesInput').value=w.plannedMinutes;$('unitSelect').value=w.unit||'reps';updateUnitLabel();$('loadInput').value=w.load||'';updatePreview();showView('toil')});const edit=document.createElement('button');edit.textContent='Edit record';edit.addEventListener('click',()=>{if(w.type==='traditional'){editingTraditionalRecord=w.id;traditionalEntries=(w.entries||[]).map(e=>({...e,setDetails:traditionalSetRows(e).map(row=>({...row}))}));$('traditionalDuration').value=w.durationMinutes||0;$('traditionalNotes').value=w.note||'';renderTraditionalEntries();showView('toil');setTrainingMode('traditional');$('traditionalStatus').textContent='Editing saved session. Update the entries and save again.';return}const value=prompt(w.unit==='seconds'?'Actual total seconds:':'Actual total repetitions:',w.actualReps);if(value===null)return;const n=safeInt(value,0,1000000);if(n===null){alert('Enter a whole number from 0 to 1,000,000.');return}const previousActual=w.actualReps,previousEdited=w.actualEdited;w.actualReps=n;w.actualEdited=true;if(!persist()){w.actualReps=previousActual;w.actualEdited=previousEdited;return}renderHistory()});const del=document.createElement('button');del.textContent='Delete';del.addEventListener('click',()=>{if(!confirm('Delete this workout permanently?'))return;const previousWorkouts=data.workouts;data.workouts=previousWorkouts.filter(x=>x.id!==w.id);if(!persist()){data.workouts=previousWorkouts;return}renderHistory()});actions.append(repeat,edit,del);item.append(actions);list.append(item)})}
$('exportData').addEventListener('click',()=>{clearTimeout(noteTimer);if(!saveReflection()){text($('backupStatus'),'Backup cancelled: the latest reflection could not be saved.');return}const blob=new Blob([JSON.stringify({format:'stewardship-os-next-v1',exportedAt:new Date().toISOString(),data,prayerFavorites,personalPassages,biblePrefs},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`stewardship-os-backup-${todayISO()}.json`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);text($('backupStatus'),'Backup downloaded. Store it somewhere safe.')});
$('importData').addEventListener('change',async e=>{
  const file=e.target.files?.[0];if(!file)return;
  try{
    if(file.size>5*1024*1024)throw Error('Backup file is too large.');
    const backup=StewardshipBackup.validBackup(JSON.parse(await file.text()));
    if(!confirm('Restore this backup? This replaces the current workouts, Scripture collection, favorites, and Gratitude letters. Export a backup of the current records first.'))return;
    StewardshipBackup.restore(localStorage,backup);
    // Reload only after the entire restore transaction has succeeded.
    location.reload();
  }catch(err){text($('backupStatus'),'Import failed: '+err.message)}
  finally{e.target.value=''}
});
// Keep time accurate after tab changes; store active workout on every pause/resume.
setInterval(()=>{renderPrayer();if(workout)renderWorkout()},200);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){renderPrayer();if(workout)renderWorkout()}});
renderPrayer();renderExerciseSelect();renderReflection();renderHistory();renderGratitudeSeek();const recovered=loadActive();if(recovered){workout=recovered;setWorkoutPanel('active');renderWorkout()}
// One shared audio source continues across section navigation; never autoplay on load.
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));


// V1.4: Prayer library and untimed invocation. No changes to workout/journal storage schema.
const INVOCATIONS={traditional:{title:'O Heavenly King',text:'O Heavenly King, the Comforter, the Spirit of Truth,\nWho art everywhere present and fillest all things,\nTreasury of blessings and Giver of Life,\nCome and abide in us,\nAnd cleanse us from every impurity,\nAnd save our souls, O Good One.',source:'Traditional Orthodox invocation · English wording varies by tradition'},original:{title:'Come, Holy Spirit',text:'O Holy Spirit,\n\nCome and dwell within us.\n\nQuiet our minds and turn our hearts toward God. Open our understanding to His Word, and grant us the humility to receive what He reveals.\n\nWhere we are distracted, bring stillness. Where we are mistaken, bring correction. Where we are hardened, soften our hearts.\n\nTeach us to pray when we do not know how, to recognize truth even when it challenges us, and to seek the will of the Father above our own.\n\nGuide our thoughts, our prayers, and our time in Scripture.\n\nIn the name of Jesus Christ our Lord. Amen.',source:'Stewardship OS · original prayer'}};
const SPIRIT_INVITATIONS=[
['A Clean Heart','Psalm 51:10–12','Create in me a clean heart, O God. Renew a steadfast spirit within me, and do not take Your Holy Spirit from me. Teach me the joy of Your salvation. Amen.'],
['Teach Me Your Will','Psalm 143:10','Teach me to do Your will, for You are my God. May Your good Spirit lead me on level ground. Amen.'],
['Ask the Father','Luke 11:9–13','Father, You invite Your children to ask. Grant me the Holy Spirit, and make me willing to receive Your gifts in humility. In Jesus’ name. Amen.'],
['Spirit of Wisdom','Ephesians 1:16–19','Father of glory, grant me the Spirit of wisdom and revelation in knowing You. Enlighten the eyes of my heart to know the hope of Your calling. Amen.'],
['Strength Within','Ephesians 3:14–19','Father, strengthen me with power through Your Spirit in my inner being, that Christ may dwell in my heart through faith and root me in love. Amen.'],
['Help My Weakness','Romans 8:26–27','Holy Spirit, help me in my weakness when I do not know what to pray. Align my heart with the will of God. Amen.'],
['Filled with Hope','Romans 15:13','God of hope, fill me with joy and peace in believing, that by the power of the Holy Spirit I may abound in hope. Amen.'],
['The Spirit of Truth','John 14:16–17, 26','Father, through the Spirit of truth, teach me and bring to remembrance the words of Jesus. Let me abide in Christ. Amen.'],
['Guide Me in Truth','John 16:13','Spirit of truth, guide me toward what is true and teach me to attend to the words of Christ. Amen.'],
['Walk by the Spirit','Galatians 5:16–25','Lord, help me walk by the Spirit. Grow in me love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Amen.'],
['Renew My Heart','Ezekiel 36:25–27','Lord, cleanse and renew my heart. Give me a willing spirit to walk in Your ways. Amen.'],
['Power to Witness','Acts 4:29–31','Lord, grant Your servants courage to speak Your Word with humility and boldness, as You strengthened the believers by Your Spirit. Amen.'],
['Fellowship of the Spirit','2 Corinthians 13:14','May the grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with us all. Amen.'],
['Filled with Thanksgiving','Ephesians 5:18–20','Lord, fill me with Your Spirit and make my heart thankful to the Father through Jesus Christ. Amen.'],
['Power, Love, Self-Control','2 Timothy 1:6–7','Lord, strengthen me to serve without fear, with power, love, and self-control. Amen.']
];
for(let i=0;i<SPIRIT_INVITATIONS.length;i++){const [title,ref,body]=SPIRIT_INVITATIONS[i];INVOCATIONS['scripture-'+i]={title,text:body,source:'Prayer inspired by Scripture · '+ref+' · Read the passage in context'};}
let invocationCleared=false, invocationChoice=null,prayerMode='guided',librarySelected=null,libraryOnlySaved=false;
function renderInvocation(){
 const article=$('invocationText'),link=$('invocationScriptureLink');
 if(!invocationChoice){article.classList.add('hidden');link.classList.add('hidden');$('invocationMenuToggle').innerHTML='Invite the Holy Spirit <span aria-hidden="true">⌄</span>';return;}
 const i=INVOCATIONS[invocationChoice];article.classList.remove('hidden');article.replaceChildren();
 const title=document.createElement('h3');title.textContent=i.title;
 const body=document.createElement('p');body.textContent=i.text;
 const source=document.createElement('small');source.textContent=i.source;
 article.append(title,body,source);
 $('invocationMenuToggle').replaceChildren(document.createTextNode(i.title+'  '));const arrow=document.createElement('span');arrow.textContent='⌄';arrow.setAttribute('aria-hidden','true');$('invocationMenuToggle').append(arrow);
 const found=invocationChoice.startsWith('scripture-')?SPIRIT_INVITATIONS[Number(invocationChoice.split('-')[1])]:null;
 link.classList.toggle('hidden',!found);if(found){link.href=bibleLink(found[1]);link.textContent='Read '+found[1]+' in Scripture ↗'}
 for(const btn of $('invocationMenu').querySelectorAll('button[data-prayer]')){btn.setAttribute('aria-current',String(btn.dataset.prayer===invocationChoice))}
}
function buildInvocationMenu(){
 const menu=$('invocationMenu');menu.replaceChildren();
 const group=(name)=>{const heading=document.createElement('div');heading.className='invocation-menu-group';heading.textContent=name;menu.append(heading)};
 const add=(key,title,ref)=>{const button=document.createElement('button');button.type='button';button.className='invocation-menu-option';button.dataset.prayer=key;button.textContent=title;const tag=document.createElement('small');tag.textContent=ref;button.append(tag);button.addEventListener('click',()=>{invocationChoice=key;renderInvocation();menu.classList.add('hidden');$('invocationMenuToggle').setAttribute('aria-expanded','false')});menu.append(button)};
 group('Traditional & original prayers');add('traditional','O Heavenly King','Traditional Orthodox prayer');add('original','Come, Holy Spirit','Stewardship OS original');
 group('Prayers inspired by Scripture');SPIRIT_INVITATIONS.forEach((v,i)=>add('scripture-'+i,v[0],v[1]));
}
$('invocationMenuToggle').addEventListener('click',()=>{const open=$('invocationMenu').classList.toggle('hidden')===false;$('invocationMenuToggle').setAttribute('aria-expanded',String(open))});
buildInvocationMenu();
function showInvocation(){prayerMode='guided';$('invocationPanel').classList.remove('hidden');$('libraryPanel').classList.add('hidden');$('preparePanel').classList.add('hidden');setModeButtons();renderInvocation()}
function setModeButtons(){for(const [mode,id] of [['guided','modeGuided'],['library','modeLibrary'],['prepare','modePrepare']]){$(id).classList.toggle('selected',prayerMode===mode)}}
function setPrayerMode(mode){prayerMode=mode;setModeButtons();$('preparePanel').classList.toggle('hidden',mode!=='prepare');$('invocationPanel').classList.toggle('hidden',mode!=='guided');$('libraryPanel').classList.toggle('hidden',mode!=='library');if(mode==='guided')renderInvocation();if(mode==='library'){libraryOnlySaved=false;librarySelected=null;renderLibrary()}}
$('modeGuided').addEventListener('click',()=>setPrayerMode('guided'));$('modeLibrary').addEventListener('click',()=>setPrayerMode('library'));$('modePrepare').addEventListener('click',()=>setPrayerMode('prepare'));
const PRAYER_SAVED_KEY='stewardship_os_next_prayer_favorites_v1';
let prayerFavorites=[];try{const stored=JSON.parse(localStorage.getItem(PRAYER_SAVED_KEY)||'[]');if(Array.isArray(stored))prayerFavorites=stored.filter(x=>typeof x==='string')}catch(e){}
function saveFavorite(id){const set=new Set(prayerFavorites);if(set.has(id))set.delete(id);else set.add(id);prayerFavorites=[...set];try{localStorage.setItem(PRAYER_SAVED_KEY,JSON.stringify(prayerFavorites))}catch(e){alert('Could not save favorite on this device.')}renderLibrary()}
const cats=['All themes',...new Set(PRAYER_LIBRARY.map(x=>x.category))];for(const c of cats){const opt=document.createElement('option');opt.value=c;opt.textContent=c;$('libraryCategory').append(opt)}
const BIBLE_PREF_KEY='stewardship_os_next_bible_preferences_v1';
let biblePrefs={provider:'youversion',translation:'KJV'};
try{const saved=JSON.parse(localStorage.getItem(BIBLE_PREF_KEY)||'{}');if(['youversion','biblehub'].includes(saved.provider))biblePrefs.provider=saved.provider;if(['KJV','ESV','NIV','NASB','NKJV','NLT'].includes(saved.translation))biblePrefs.translation=saved.translation}catch(e){}
function bibleLink(reference,provider=biblePrefs.provider){
 const ref=String(reference||'').trim();
 if(provider==='biblehub') return 'https://biblehub.com/search.php?q='+encodeURIComponent(ref);
 if(provider==='youversion'){
  // YouVersion's stable search page accepts a reference without guessing a version-specific passage ID.
  return 'https://www.bible.com/search/bible?q='+encodeURIComponent(ref);
 }
 return 'https://www.bible.com/search/bible?q='+encodeURIComponent(ref);
}
function saveBiblePrefs(){try{localStorage.setItem(BIBLE_PREF_KEY,JSON.stringify(biblePrefs))}catch(e){}}
function setupBiblePreferences(){
 const panel=$('biblePreferencePanel');if(!panel)return;
 const provider=$('bibleProvider'),translation=$('bibleTranslation');
 provider.value=biblePrefs.provider;translation.value=biblePrefs.translation;
 const update=()=>{biblePrefs.provider=provider.value;biblePrefs.translation=translation.value;saveBiblePrefs();renderPersonal();if(typeof renderLibrary==='function')renderLibrary()};
 provider.addEventListener('change',update);translation.addEventListener('change',update);
}

function renderLibrary(){const q=$('librarySearch').value.trim().toLowerCase(),cat=$('libraryCategory').value;const items=PRAYER_LIBRARY.filter(x=>(!libraryOnlySaved||prayerFavorites.includes(x.id))&&(cat==='All themes'||x.category===cat)&&(!q||[x.title,x.category,x.scripture,x.prayer,x.question,x.context,x.related].join(' ').toLowerCase().includes(q)));$('libraryCount').textContent=items.length+' '+(items.length===1?'passage':'passages');$('libraryResults').replaceChildren();const groups=new Map();for(const x of items){if(!groups.has(x.category))groups.set(x.category,[]);groups.get(x.category).push(x)}for(const [category,passages] of groups){const group=document.createElement('details');group.className='scripture-category';group.open=false;const summary=document.createElement('summary');summary.textContent=category+' · '+passages.length+' passages';group.append(summary);const list=document.createElement('div');list.className='scripture-category-list';for(const x of passages){const b=document.createElement('button');b.type='button';b.className='library-item'+(librarySelected===x.id?' active':'');const name=document.createElement('strong');name.textContent=x.title;const verse=document.createElement('span');verse.textContent=x.scripture;b.append(name,verse);b.addEventListener('click',()=>{librarySelected=x.id;renderLibrary();$('libraryDetail').scrollIntoView({behavior:'smooth',block:'start'})});list.append(b)}group.append(list);$('libraryResults').append(group)}if(!items.length){const empty=document.createElement('p');empty.textContent='No passages in this category.';$('libraryResults').append(empty)}const chosen=items.find(x=>x.id===librarySelected);$('libraryDetail').replaceChildren();$('libraryDetail').classList.toggle('hidden',!chosen);$('libraryBrowse').classList.toggle('hidden',!!chosen);$('libraryPanel').classList.toggle('reading-open',!!chosen);if(!chosen)return;const back=document.createElement('button');back.type='button';back.className='btn subtle';back.textContent='← Back to categories';back.addEventListener('click',()=>{librarySelected=null;renderLibrary();$('libraryBrowse').scrollIntoView({block:'start'})});$('libraryDetail').append(back);
const heading=document.createElement('h3');heading.textContent=chosen.title;const ref=document.createElement('p');ref.className='library-scripture';ref.textContent=chosen.scripture;const pl=document.createElement('div');pl.className='panel-label';pl.textContent='PRAYER';const prayerText=document.createElement('p');prayerText.className='library-prayer';prayerText.textContent=chosen.prayer;const cl=document.createElement('div');cl.className='panel-label';cl.textContent='CONSIDER';const question=document.createElement('p');question.className='library-question';question.textContent=chosen.question;const rl=document.createElement('div');rl.className='panel-label';rl.textContent='READ IN CONTEXT';const context=document.createElement('a');context.className='library-link';context.href=bibleLink(chosen.context);context.target='_blank';context.rel='noopener noreferrer';context.textContent=chosen.context+' ↗';const further=document.createElement('p');further.className='library-further';further.textContent='Read further: '+chosen.related;const buttons=document.createElement('div');buttons.className='button-row';const save=document.createElement('button');save.className='btn secondary';save.textContent=prayerFavorites.includes(chosen.id)?'♥ In My Walk — Remove':'♡ Save to My Walk';save.addEventListener('click',()=>{saveFavorite(chosen.id);renderPersonal()});const reflect=document.createElement('button');reflect.className='btn subtle';reflect.textContent='Add my thoughts';reflect.addEventListener('click',()=>{saveToMyWalk(chosen);setPrayerMode('prepare')});const read=document.createElement('a');read.className='btn primary';read.href=bibleLink(chosen.scripture);read.target='_blank';read.rel='noopener noreferrer';read.textContent='Open Scripture ↗';buttons.append(save,reflect,read);$('libraryDetail').append(heading,ref,pl,prayerText,cl,question,rl,context,further,buttons)}
$('librarySearch').addEventListener('input',()=>{librarySelected=null;renderLibrary()});$('libraryCategory').addEventListener('change',()=>{librarySelected=null;renderLibrary()});
// Preserve existing backup format while including the independent favorites collection.

renderInvocation();showInvocation();


// V2: Personal Scripture collection. Saved favorites from prior releases remain valid.
const PERSONAL_KEY='stewardship_os_next_personal_scriptures_v1';
let personalPassages=[];
try{const stored=JSON.parse(localStorage.getItem(PERSONAL_KEY)||'[]');if(Array.isArray(stored))personalPassages=stored.filter(x=>x&&typeof x.reference==='string')}catch(e){}
let editingPersonalId=null;
function savePersonalCollection(){try{localStorage.setItem(PERSONAL_KEY,JSON.stringify(personalPassages));return true}catch(e){alert('Unable to save your Scripture collection. Export a backup.');return false}}
// Chapter metadata is canonical; verse boundaries are fetched from a complete KJV chapter
// and cached per chapter. Never permit an unverified verse number.
const SCRIPTURE_BOOKS=[
['Genesis',50],['Exodus',40],['Leviticus',27],['Numbers',36],['Deuteronomy',34],['Joshua',24],['Judges',21],['Ruth',4],['1 Samuel',31],['2 Samuel',24],['1 Kings',22],['2 Kings',25],['1 Chronicles',29],['2 Chronicles',36],['Ezra',10],['Nehemiah',13],['Esther',10],['Job',42],['Psalms',150],['Proverbs',31],['Ecclesiastes',12],['Song of Solomon',8],['Isaiah',66],['Jeremiah',52],['Lamentations',5],['Ezekiel',48],['Daniel',12],['Hosea',14],['Joel',3],['Amos',9],['Obadiah',1],['Jonah',4],['Micah',7],['Nahum',3],['Habakkuk',3],['Zephaniah',3],['Haggai',2],['Zechariah',14],['Malachi',4],['Matthew',28],['Mark',16],['Luke',24],['John',21],['Acts',28],['Romans',16],['1 Corinthians',16],['2 Corinthians',13],['Galatians',6],['Ephesians',6],['Philippians',4],['Colossians',4],['1 Thessalonians',5],['2 Thessalonians',3],['1 Timothy',6],['2 Timothy',4],['Titus',3],['Philemon',1],['Hebrews',13],['James',5],['1 Peter',5],['2 Peter',3],['1 John',5],['2 John',1],['3 John',1],['Jude',1],['Revelation',22]];
const scriptureBookMap=new Map(SCRIPTURE_BOOKS.map(([name,chapters])=>[name.toLowerCase(),{name,chapters}]));
$('scriptureBook').append(...SCRIPTURE_BOOKS.map(([name])=>{const opt=document.createElement('option');opt.value=name;opt.textContent=name;return opt}));
const VERSE_COUNT_CACHE_KEY='stewardship_os_vnext_verse_counts';
let verseCountCache={};
try{const saved=JSON.parse(localStorage.getItem(VERSE_COUNT_CACHE_KEY)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))verseCountCache=saved}catch(e){}
let scriptureLookupToken=0;
let scriptureLookupPending=false;
let scriptureLookupRetryTimer=null;
function pickerBook(){return scriptureBookMap.get($('scriptureBook').value.trim().toLowerCase())}
function pickerChapter(){const value=$('scriptureChapter').value;return /^\d+$/.test(value)?Number(value):null}
function pickerKey(book,chapter){return book.name+' '+chapter}
function setVerseInputs(max){
 for(const id of ['scriptureStartVerse','scriptureEndVerse']){
  const select=$(id),previous=select.value;
  select.replaceChildren();
  const empty=document.createElement('option');empty.value='';empty.textContent=max?(id==='scriptureStartVerse'?'Whole chapter / choose verse':'No ending verse'):'Choose a chapter first';select.append(empty);
  if(max)for(let n=1;n<=max;n++){const option=document.createElement('option');option.value=String(n);option.textContent='Verse '+n;select.append(option)}
  select.disabled=!max;
  if(max&&previous&&Number(previous)<=max)select.value=previous;
 }
}
function syncPersonalTitle(){
 const title=$('personalTitle'),reference=$('personalReference').value.trim();
 if(!editingPersonalId&&reference&&(!title.value.trim()||title.dataset.auto==='true')){
  title.value=reference;title.dataset.auto='true';
 }
}
$('personalTitle').addEventListener('input',()=>{$('personalTitle').dataset.auto='false'});
function verifiedVerseCount(verses){
 if(!Array.isArray(verses)||!verses.length||verses.length>200)return null;
 const numbers=verses.map(v=>Number(v.verse));
 return numbers.every((n,i)=>Number.isInteger(n)&&n===i+1)?numbers.length:null;
}
async function loadVerseCount(book,chapter,token){
 const key=pickerKey(book,chapter);
 const cached=verseCountCache[key];
 if(Number.isInteger(cached)&&cached>=1&&cached<=200)return cached;
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),12000);
 try{
  const url='https://bible-api.com/'+encodeURIComponent(book.name+' '+chapter)+'?translation=kjv';
  const response=await fetch(url,{signal:controller.signal});
  if(!response.ok)throw new Error('Scripture service unavailable');
  const data=await response.json();
  const count=verifiedVerseCount(data.verses);
  if(!count)throw new Error('Verse data could not be verified');
  verseCountCache[key]=count;
  try{localStorage.setItem(VERSE_COUNT_CACHE_KEY,JSON.stringify(verseCountCache))}catch(e){}
  return count;
 }finally{clearTimeout(timeout)}
}
function updateScripturePicker(){
 scriptureLookupToken++;
 const book=pickerBook(),chapter=$('scriptureChapter'),previousBook=chapter.dataset.book||'';
 const previous=pickerChapter();chapter.dataset.book=book?.name||'';
 chapter.replaceChildren();const prompt=document.createElement('option');prompt.value='';prompt.textContent=book?'Select chapter':'Choose a book first';chapter.append(prompt);
 if(book)for(let n=1;n<=book.chapters;n++){const opt=document.createElement('option');opt.value=String(n);opt.textContent=String(n);chapter.append(opt)}
 chapter.disabled=!book;
 if(book&&previousBook===book.name&&previous&&previous<=book.chapters)chapter.value=String(previous);
 setVerseInputs(null);$('personalReference').value='';if(!editingPersonalId&&$('personalTitle').dataset.auto==='true')$('personalTitle').value='';
 $('scripturePickerStatus').textContent=book?'Choose a chapter.':'Choose a Bible book from the suggestions.';
 if(chapter.value)updateScriptureReference();
}
async function updateScriptureReference(){
 const token=++scriptureLookupToken,book=pickerBook(),chapter=pickerChapter();
 scriptureLookupPending=false;
 if(scriptureLookupRetryTimer){clearTimeout(scriptureLookupRetryTimer);scriptureLookupRetryTimer=null;}
 setVerseInputs(null);$('personalReference').value='';
 if(!book||!chapter||chapter<1||chapter>book.chapters){$('scripturePickerStatus').textContent='Choose a valid book and chapter.';return}
 $('personalReference').value=pickerKey(book,chapter);syncPersonalTitle();
 $('scripturePickerStatus').textContent='Checking available verses… (whole chapter can be saved now)';
 try{
  const count=await loadVerseCount(book,chapter,token);
  if(token!==scriptureLookupToken)return;
  scriptureLookupPending=false;
  setVerseInputs(count);
  $('scripturePickerStatus').textContent='Verses 1–'+count+' available. Leave both verse fields empty to save the whole chapter.';
  updateVerseRangeReference();
 }catch(e){
  if(token!==scriptureLookupToken)return;
  scriptureLookupPending=true;
  $('scripturePickerStatus').textContent='Verse lookup temporarily unavailable. Whole-chapter saving remains available; verse lookup will retry when connected.';
  if(navigator.onLine){scriptureLookupRetryTimer=setTimeout(()=>{if(scriptureLookupPending&&token===scriptureLookupToken)updateScriptureReference()},15000);}
 }
}
function updateVerseRangeReference(){
 const book=pickerBook(),chapter=pickerChapter();if(!book||!chapter)return;
 const startInput=$('scriptureStartVerse'),endInput=$('scriptureEndVerse');
 const max=Math.max(0,startInput.options.length-1),start=startInput.value?Number(startInput.value):null,end=endInput.value?Number(endInput.value):null;
 const base=pickerKey(book,chapter);
 const valid=n=>n===null||(Number.isInteger(n)&&n>=1&&n<=max);
 if(startInput.disabled){$('personalReference').value=base;syncPersonalTitle();return}
 if(!valid(start)||!valid(end)||(!start&&end)||(start&&end&&end<start)){
  $('personalReference').value='';
  $('scripturePickerStatus').textContent='Invalid verse range. Choose verses from 1–'+max+' with the ending verse at or after the starting verse.';
  return;
 }
 $('personalReference').value=start?base+':'+start+(end&&end!==start?'-'+end:''):base;syncPersonalTitle();
 $('scripturePickerStatus').textContent='Selected: '+$('personalReference').value;
}
window.addEventListener('online',()=>{
 if(scriptureLookupPending&&pickerBook()&&pickerChapter())updateScriptureReference();
});
$('scriptureBook').addEventListener('change',updateScripturePicker);
$('scriptureChapter').addEventListener('change',updateScriptureReference);
$('scriptureStartVerse').addEventListener('input',updateVerseRangeReference);
$('scriptureEndVerse').addEventListener('input',updateVerseRangeReference);
function openPersonalEditor(item=null){
 editingPersonalId=item?.id||null;
 $('personalReference').value=item?.reference||'';
 $('scriptureBook').value='';$('scriptureChapter').value='';updateScripturePicker();$('personalReference').value=item?.reference||'';
 $('personalTitle').value=item?.title||'';$('personalTitle').dataset.auto=item?'false':'true';
 $('personalCategory').value=item?.category||'';
 $('personalThought').value=item?.thought||'';
 $('personalPrayer').value=item?.prayer||'';
 $('personalGoTo').checked=!!item?.goTo;
 $('personalEditor').classList.remove('hidden');
 $('personalReference').focus();
}
function saveToMyWalk(entry){
 const item=personalPassages.find(p=>p.libraryId===entry.id);
 if(!prayerFavorites.includes(entry.id)){prayerFavorites.push(entry.id);try{localStorage.setItem(PRAYER_SAVED_KEY,JSON.stringify(prayerFavorites))}catch(e){}}
 openPersonalEditor(item||{libraryId:entry.id,reference:entry.scripture,title:entry.title,category:entry.category});
}
function renderPersonal(){
 const q=$('personalFilter').value.trim().toLowerCase(),list=$('personalList');
 list.replaceChildren();
 const all=[...personalPassages];
 for(const id of prayerFavorites){
  const lib=PRAYER_LIBRARY.find(x=>x.id===id);
  if(lib&&!all.some(x=>x.libraryId===id))all.push({id:'favorite-'+id,libraryId:id,reference:lib.scripture,title:lib.title,category:lib.category,thought:'',prayer:'',goTo:false});
 }
 all.sort((a,b)=>Number(!!b.goTo)-Number(!!a.goTo));
 const filtered=all.filter(x=>[x.reference,x.title,x.category,x.thought,x.prayer].join(' ').toLowerCase().includes(q));
 if(!filtered.length){const msg=document.createElement('p');msg.className='hint';msg.textContent='Your saved and personal passages will appear here.';list.append(msg);return}
 for(const item of filtered){
  const card=document.createElement('article');card.className='personal-entry';
  const h=document.createElement('h4');h.textContent=(item.goTo?'✦ ':'')+(item.title||item.reference);
  const ref=document.createElement('p');ref.className='library-scripture';ref.textContent=item.reference;
  card.append(h,ref);
  if(item.category){const cat=document.createElement('small');cat.textContent=item.category;card.append(cat)}
  if(item.thought){const note=document.createElement('p');note.textContent=item.thought;card.append(note)}
  if(item.prayer){const prayer=document.createElement('p');prayer.textContent='My prayer: '+item.prayer;card.append(prayer)}
  const row=document.createElement('div');row.className='button-row';
  const edit=document.createElement('button');edit.className='btn secondary';edit.textContent='Edit thoughts';edit.addEventListener('click',()=>openPersonalEditor(item));
  const read=document.createElement('a');read.className='btn subtle';read.textContent='Read Scripture ↗';read.href=bibleLink(item.reference);read.target='_blank';read.rel='noopener noreferrer';
  const remove=document.createElement('button');remove.className='btn subtle';remove.textContent='Remove';remove.addEventListener('click',()=>{
   if(!confirm('Remove this passage from My Walk?'))return;
   const next=personalPassages.filter(x=>x.id!==item.id&&(!item.libraryId||x.libraryId!==item.libraryId));
   const nextFavorites=item.libraryId?prayerFavorites.filter(id=>id!==item.libraryId):prayerFavorites;
   try{
     localStorage.setItem(PERSONAL_KEY,JSON.stringify(next));
     if(item.libraryId)localStorage.setItem(PRAYER_SAVED_KEY,JSON.stringify(nextFavorites));
     personalPassages=next;prayerFavorites=nextFavorites;renderPersonal();
   }catch(e){alert('Unable to remove this passage. Your collection remains available.');}
  });
  row.append(edit,read,remove);card.append(row);list.append(card);
 }
}
$('addPersonalPassage').addEventListener('click',()=>openPersonalEditor());
$('cancelPersonalPassage').addEventListener('click',()=>$('personalEditor').classList.add('hidden'));
$('savePersonalPassage').addEventListener('click',()=>{
 const reference=$('personalReference').value.trim();if(!reference){alert('Enter a Scripture reference.');return}
 const old=personalPassages.find(x=>x.id===editingPersonalId);
 const favoriteLibId=editingPersonalId?.startsWith('favorite-')?editingPersonalId.slice(9):null;
 const libId=old?.libraryId||favoriteLibId||null;
 const item={id:old?.id||'personal-'+Date.now()+'-'+Math.random().toString(36).slice(2,6),libraryId:libId||null,reference,title:$('personalTitle').value.trim(),category:$('personalCategory').value.trim(),thought:$('personalThought').value,prayer:$('personalPrayer').value,goTo:$('personalGoTo').checked};
 // Persist the candidate collection first; never mutate the live collection on storage failure.
 const next=old?personalPassages.map(p=>p.id===old.id?item:p):[...personalPassages,item];
 try{localStorage.setItem(PERSONAL_KEY,JSON.stringify(next));personalPassages=next;$('personalEditor').classList.add('hidden');renderPersonal()}
 catch(e){alert('Unable to save your Scripture collection. Your existing entries have not been changed.')}
});
$('personalFilter').addEventListener('input',renderPersonal);
$('openMyWalk').addEventListener('click',()=>setPrayerMode('prepare'));
$('modePrepare').addEventListener('click',renderPersonal);
renderPersonal();

// Temple: traditional workout log with optional timer, sharing workout history with EMOM.
let editingTraditionalRecord=null;let trainingMode='emom',traditionalEntries=[],traditionalSeconds=0,traditionalRunning=false,traditionalLast=0;
// A completed session cannot be saved twice, including after an accidental second tap.
// A new edit to the form opens a fresh session; saved workouts are never auto-imported.
const TRADITIONAL_DRAFT_KEY='stewardship_os_next_traditional_draft_v1';
let traditionalSessionId='traditional-'+Date.now()+'-'+Math.random().toString(36).slice(2,10);
let traditionalSessionSaved=false;
let traditionalDraftTimer=null;
function traditionalDraftSnapshot(){return {version:2,sessionId:traditionalSessionId,entries:traditionalEntries,exercise:$('traditionalExercise').value,sets:$('traditionalSets').value,reps:$('traditionalReps').value,weight:$('traditionalWeight').value,duration:$('traditionalDuration').value,rest:$('traditionalRest').value,notes:$('traditionalNotes').value,timerMode:$('traditionalTimerMode').value,seconds:traditionalSeconds,editingId:editingTraditionalRecord};}
function saveTraditionalDraft(){if(traditionalSessionSaved)return;try{localStorage.setItem(TRADITIONAL_DRAFT_KEY,JSON.stringify(traditionalDraftSnapshot()))}catch(e){$('traditionalStatus').textContent='Draft could not be saved on this device.'}}
function queueTraditionalDraft(){if(traditionalSessionSaved){traditionalSessionId='traditional-'+Date.now()+'-'+Math.random().toString(36).slice(2,10);traditionalSessionSaved=false}clearTimeout(traditionalDraftTimer);traditionalDraftTimer=setTimeout(saveTraditionalDraft,200)}
function clearTraditionalDraft(){clearTimeout(traditionalDraftTimer);try{localStorage.removeItem(TRADITIONAL_DRAFT_KEY)}catch(e){}}
function restoreTraditionalDraft(){try{const raw=localStorage.getItem(TRADITIONAL_DRAFT_KEY);if(!raw)return;const d=JSON.parse(raw);if(d.version!==2||!Array.isArray(d.entries)||typeof d.sessionId!=='string')return;traditionalEntries=d.entries;traditionalSessionId=d.sessionId;editingTraditionalRecord=d.editingId||null;for(const [key,id] of Object.entries({exercise:'traditionalExercise',sets:'traditionalSets',reps:'traditionalReps',weight:'traditionalWeight',duration:'traditionalDuration',rest:'traditionalRest',notes:'traditionalNotes',timerMode:'traditionalTimerMode'})){if(d[key]!==undefined)$(id).value=d[key]}traditionalSeconds=Math.max(0,Number(d.seconds)||0);traditionalRunning=false;renderTraditionalEntries();displayTraditional();$('traditionalStatus').textContent='Your unfinished workout was restored. Timer is paused.'}catch(e){$('traditionalStatus').textContent='An unfinished workout draft could not be restored.'}}
for(const id of ['traditionalExercise','traditionalSets','traditionalReps','traditionalWeight','traditionalDuration','traditionalRest','traditionalNotes','traditionalTimerMode'])$(id).addEventListener('input',queueTraditionalDraft);

function setTrainingMode(mode){
 trainingMode=mode;
 $('workoutSetup').classList.toggle('hidden',mode!=='emom');
 $('traditionalPanel').classList.toggle('hidden',mode!=='traditional');
 $('trainingEmom').classList.toggle('selected',mode==='emom');
 $('trainingTraditional').classList.toggle('selected',mode==='traditional');
}
$('trainingTraditional').addEventListener('click',()=>setTrainingMode('traditional'));
$('trainingEmom').addEventListener('click',()=>setTrainingMode('emom'));
function traditionalSettings(){
 const sets=safeInt($('traditionalSets').value,0,1000),reps=safeInt($('traditionalReps').value,0,10000);
 const duration=safeInt($('traditionalDuration').value,0,1440),rest=safeInt($('traditionalRest').value,0,3600);
 if([sets,reps,duration,rest].some(v=>v===null))return null;
 return {exercise:$('traditionalExercise').value.trim(),sets,reps,weight:$('traditionalWeight').value.trim(),duration,rest};
}
function traditionalSetRows(entry){
 if(Array.isArray(entry.setDetails)&&entry.setDetails.length)return entry.setDetails;
 const count=Math.max(1,Math.min(100,Number(entry.sets)||1));
 return Array.from({length:count},()=>({reps:Number(entry.reps)||0,weight:String(entry.weight||'')}));
}
function lastTraditionalPerformance(name){
 const target=name.trim().toLowerCase();
 return data.workouts.filter(w=>w.type==='traditional'&&w.completed)
  .sort((a,b)=>Date.parse(b.date)-Date.parse(a.date))
  .flatMap(w=>(w.entries||[]).filter(e=>String(e.exercise).trim().toLowerCase()===target).map(e=>({entry:e,date:w.date})))[0]||null;
}
function renderTraditionalEntries(){
 const list=$('traditionalEntries');list.replaceChildren();
 for(let i=0;i<traditionalEntries.length;i++){
  const e=traditionalEntries[i],row=document.createElement('div');row.className='personal-entry';
  const label=document.createElement('h4');label.textContent=e.exercise;
  const remove=document.createElement('button');remove.className='btn subtle';remove.textContent='Remove exercise';remove.addEventListener('click',()=>{traditionalEntries.splice(i,1);renderTraditionalEntries();queueTraditionalDraft()});
  row.append(label,remove);
  e.setDetails=traditionalSetRows(e);
  e.setDetails.forEach((set,j)=>{
   const group=document.createElement('div');group.className='form-grid';
   const repsLabel=document.createElement('label');repsLabel.textContent=`Set ${j+1} · Reps`;
   const reps=document.createElement('input');reps.type='number';reps.min='0';reps.max='10000';reps.value=set.reps;
   reps.addEventListener('input',()=>{set.reps=Number(reps.value);queueTraditionalDraft()});repsLabel.append(reps);
   const weightLabel=document.createElement('label');weightLabel.textContent=`Set ${j+1} · Weight`;
   const weight=document.createElement('input');weight.type='text';weight.maxLength=60;weight.value=set.weight||'';
   weight.addEventListener('input',()=>{set.weight=weight.value;queueTraditionalDraft()});weightLabel.append(weight);
   group.append(repsLabel,weightLabel);row.append(group);
  });
  const addSet=document.createElement('button');addSet.className='btn subtle';addSet.textContent='+ Add set';
  addSet.addEventListener('click',()=>{if(e.setDetails.length>=100)return;const prev=e.setDetails.at(-1)||{reps:0,weight:''};e.setDetails.push({...prev});renderTraditionalEntries();queueTraditionalDraft()});
  const removeSet=document.createElement('button');removeSet.className='btn subtle';removeSet.textContent='Remove last set';
  removeSet.addEventListener('click',()=>{if(e.setDetails.length<=1)return;e.setDetails.pop();renderTraditionalEntries();queueTraditionalDraft()});
  row.append(addSet,removeSet);list.append(row);
 }
}
$('traditionalAdd').addEventListener('click',()=>{
 const e=traditionalSettings();
 if(!e||!e.exercise){$('traditionalStatus').textContent='Enter an exercise and valid numbers.';return}
 const baseline=lastTraditionalPerformance(e.exercise);
 e.setDetails=baseline?traditionalSetRows(baseline.entry).map(set=>({...set})):traditionalSetRows(e);
 traditionalEntries.push(e);
 $('traditionalStatus').textContent=baseline?`Pre-filled from last session · ${new Date(baseline.date).toLocaleDateString()}`:'Exercise added. Adjust each set below.';
 renderTraditionalEntries();queueTraditionalDraft();
});
let traditionalSaveBusy=false;
$('traditionalSave').addEventListener('click',()=>{
 if(traditionalSaveBusy||traditionalSessionSaved)return;
 clearTimeout(traditionalDraftTimer);
 let entries=traditionalEntries.map(e=>({...e,setDetails:traditionalSetRows(e).map(set=>({...set}))}));
 const current=traditionalSettings();
 if(current?.exercise&&!entries.length)entries.push({...current,setDetails:traditionalSetRows(current)});
 if(!entries.length){$('traditionalStatus').textContent='Add at least one exercise to save.';return}
 const totalMinutes=safeInt($('traditionalDuration').value,0,1440);
 if(totalMinutes===null){$('traditionalStatus').textContent='Enter a valid duration.';return}
 const originalId=editingTraditionalRecord;
 const record={id:originalId||traditionalSessionId,type:'traditional',exercise:entries.length===1?entries[0].exercise:'Traditional workout',date:new Date().toISOString(),entries,durationMinutes:totalMinutes,elapsedSeconds:traditionalSeconds,note:$('traditionalNotes').value.trim(),completed:true};
 traditionalSaveBusy=true;
 const previous=data.workouts;
 try{
  data.workouts=[record,...previous.filter(w=>w.id!==record.id)];
  if(!persist()){
   data.workouts=previous;
   $('traditionalStatus').textContent='Could not save. Your session is still available; please retry.';
   return;
  }
  traditionalSessionSaved=true;clearTraditionalDraft();traditionalEntries=[];editingTraditionalRecord=null;renderTraditionalEntries();traditionalRunning=false;
  $('traditionalStatus').textContent='Session saved to your workout history.';
  renderHistory();
 }finally{traditionalSaveBusy=false}
});

restoreTraditionalDraft();
function formatTraditional(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function traditionalInitial(){
 const mode=$('traditionalTimerMode').value;
 if(mode==='countdown')return Math.max(0,Number($('traditionalDuration').value)||0)*60;
 if(mode==='rest')return Math.max(0,Number($('traditionalRest').value)||0);
 return 0;
}
function displayTraditional(){$('traditionalClock').textContent=formatTraditional(Math.max(0,Math.floor(traditionalSeconds)))}
$('traditionalTimerMode').addEventListener('change',()=>{traditionalRunning=false;traditionalSeconds=traditionalInitial();displayTraditional()});
$('traditionalStart').addEventListener('click',()=>{
 if($('traditionalTimerMode').value==='none'){$('traditionalStatus').textContent='Choose a timer mode, or simply log your workout.';return}
 if(!traditionalRunning){traditionalLast=Date.now();traditionalRunning=true}
});
$('traditionalPause').addEventListener('click',()=>{traditionalRunning=false;displayTraditional()});
$('traditionalReset').addEventListener('click',()=>{traditionalRunning=false;traditionalSeconds=traditionalInitial();displayTraditional()});
setInterval(()=>{
 if(!traditionalRunning)return;
 const now=Date.now(),delta=(now-traditionalLast)/1000;traditionalLast=now;
 if(['countdown','rest'].includes($('traditionalTimerMode').value)){
  traditionalSeconds=Math.max(0,traditionalSeconds-delta);
  if(traditionalSeconds===0){traditionalRunning=false;$('traditionalStatus').textContent='Timer complete.'}
 }else traditionalSeconds+=delta;
 displayTraditional();
},250);
displayTraditional();

setupBiblePreferences();
