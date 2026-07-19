// THEME
const html=document.documentElement,themeBtn=document.getElementById('themeBtn');
const themeIcon=document.getElementById('themeIcon'),themeLabel=document.getElementById('themeLabel');
let dark=localStorage.getItem('cf-theme')?localStorage.getItem('cf-theme')==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches;
function applyTheme(d){html.setAttribute('data-theme',d?'dark':'light');themeIcon.textContent=d?'☀️':'🌙';themeLabel.textContent=d?'Light':'Dark';localStorage.setItem('cf-theme',d?'dark':'light')}
applyTheme(dark);themeBtn.addEventListener('click',()=>{dark=!dark;applyTheme(dark)});

// TRIAL MODAL
// every free trial button opens the pick-a-channel popup instead of jumping
// straight to instagram. the links still work as plain instagram links if js is off.
const trialModal=document.getElementById('trialModal');
document.querySelectorAll('.js-trial').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();trialModal.hidden=false}));
trialModal.addEventListener('click',e=>{if(e.target===trialModal||e.target.closest('.modal-close'))trialModal.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape')trialModal.hidden=true});

// TICKER
const items=['✅ Box Very Much Open','📲 DM for Free Trial','💪 Fitness For Everyone','🧡 Official CrossFit Affiliate','🗓️ Strong Saturdays','📍 ITPH CapitaLand HITEC City','😤 No Excuses'];
const tickerEl=document.getElementById('ticker');
const full=[...items,...items].map(t=>`<span class="ticker-item">${t}<span class="ticker-sep">·</span></span>`).join('');
tickerEl.innerHTML=full+full;

// DROPS
const dropsEl=document.getElementById('drops');
for(let i=0;i<20;i++){const d=document.createElement('div');d.className='drop';const h=Math.random()*10+4;d.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*-20}%;height:${h}px;width:${Math.random()*2+1}px;--dur:${Math.random()*6+5}s;--del:${Math.random()*10}s`;dropsEl.appendChild(d)}

// WOD GENERATOR
// workouts come from the config in wods.js (WODS.gym / WODS.home). the scaled and rx
// buttons just swap wod[level] on the same workout, so the two are always in sync.
let wodMode='gym', wodLevel='rx', wod=null;
const wodDisplay=document.getElementById('wodDisplay');
const wodMeta=document.getElementById('wodMeta');
const wodLevelBox=document.getElementById('wodLevel');
const genBtn=document.getElementById('genBtn');

function renderWOD(){
  wodDisplay.style.opacity=0;
  setTimeout(()=>{
    wodDisplay.innerHTML=`<span class="wod-name">${wod.emoji} ${wod.name}</span><span class="wod-format">${wod.format}</span><span class="wod-moves">${wod[wodLevel]}</span>`;
    wodDisplay.style.opacity=1;
  },180);
  wodMeta.innerHTML=`<span>${wodLevel==='rx'?'RX':'Scaled'}</span>${wod.type}`;
}

function generateWOD(){
  const list=WODS[wodMode];
  let next;
  do{next=list[Math.floor(Math.random()*list.length)];}while(list.length>1&&next===wod);
  wod=next;
  wodLevel='rx';
  setActive('.level-btn','level',wodLevel);
  renderWOD();
  wodLevelBox.style.display='inline-flex';
  genBtn.textContent='🎲 Another One';
}

// flip the 'hot' highlight to whichever button in the group is now selected
function setActive(selector,attr,value){
  document.querySelectorAll(selector).forEach(b=>b.classList.toggle('hot',b.dataset[attr]===value));
}

document.querySelectorAll('.mode-btn').forEach(b=>b.addEventListener('click',()=>{
  wodMode=b.dataset.mode;
  setActive('.mode-btn','mode',wodMode);
  generateWOD();
}));
document.querySelectorAll('.level-btn').forEach(b=>b.addEventListener('click',()=>{
  if(!wod)return;
  wodLevel=b.dataset.level;
  setActive('.level-btn','level',wodLevel);
  renderWOD();
}));
genBtn.addEventListener('click',generateWOD);

// EXCUSE BUSTER
// excuses live in the config in excuses.js (EXCUSES). data only, easy to add more.
function bustExcuse(){
  const [ex,reply]=EXCUSES[Math.floor(Math.random()*EXCUSES.length)];
  const et=document.getElementById('excuseText'),rt=document.getElementById('replyText');
  et.style.transition='opacity .18s';rt.style.transition='opacity .18s';
  et.style.opacity=0;rt.style.opacity=0;
  setTimeout(()=>{et.textContent=`"${ex}"`;rt.textContent=`→ ${reply}`;et.style.opacity=1;rt.style.opacity=1},200);
}

// CONFETTI
const canvas=document.getElementById('confetti'),ctx=canvas.getContext('2d');
let particles=[];
function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
resizeCanvas();window.addEventListener('resize',resizeCanvas);
function fireConfetti(){
  const colors=['#E87722','#fff','#FF2E2E','#FFD700','#FF6B35'];
  for(let i=0;i<140;i++)particles.push({x:Math.random()*canvas.width,y:-10,vx:(Math.random()-.5)*7,vy:Math.random()*4+2,color:colors[Math.floor(Math.random()*colors.length)],size:Math.random()*9+4,rotation:Math.random()*360,rotSpeed:(Math.random()-.5)*8,life:1,decay:Math.random()*.015+.007});
  if(!animating)animate();
}
let animating=false;
function animate(){
  animating=true;ctx.clearRect(0,0,canvas.width,canvas.height);
  particles=particles.filter(p=>p.life>0);
  particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.1;p.rotation+=p.rotSpeed;p.life-=p.decay;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rotation*Math.PI/180);ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.fillRect(-p.size/2,-p.size/4,p.size,p.size/2);ctx.restore()});
  if(particles.length>0)requestAnimationFrame(animate);else animating=false;
}

// SCROLL REVEAL
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.1});
reveals.forEach(r=>obs.observe(r));
