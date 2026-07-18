// THEME
const html=document.documentElement,themeBtn=document.getElementById('themeBtn');
const themeIcon=document.getElementById('themeIcon'),themeLabel=document.getElementById('themeLabel');
let dark=localStorage.getItem('cf-theme')?localStorage.getItem('cf-theme')==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches;
function applyTheme(d){html.setAttribute('data-theme',d?'dark':'light');themeIcon.textContent=d?'☀️':'🌙';themeLabel.textContent=d?'Light':'Dark';localStorage.setItem('cf-theme',d?'dark':'light')}
applyTheme(dark);themeBtn.addEventListener('click',()=>{dark=!dark;applyTheme(dark)});

// TICKER
const items=['🔥 Website Coming Soon','✅ Box Very Much Open','📲 DM for Free Trial','💪 Fitness For Everyone','🧡 Official CrossFit Affiliate','🗓️ Strong Saturdays','📍 ITPH CapitaLand HITEC City','😤 No Excuses'];
const tickerEl=document.getElementById('ticker');
const full=[...items,...items].map(t=>`<span class="ticker-item">${t}<span class="ticker-sep">·</span></span>`).join('');
tickerEl.innerHTML=full+full;

// DROPS
const dropsEl=document.getElementById('drops');
for(let i=0;i<20;i++){const d=document.createElement('div');d.className='drop';const h=Math.random()*10+4;d.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*-20}%;height:${h}px;width:${Math.random()*2+1}px;--dur:${Math.random()*6+5}s;--del:${Math.random()*10}s`;dropsEl.appendChild(d)}

// COUNTERS
function animateCount(el,target,dur){let s=0,step=target/(dur/16);const iv=setInterval(()=>{s=Math.min(s+step,target);el.textContent=Math.floor(s).toLocaleString();if(s>=target)clearInterval(iv)},16)}
setTimeout(()=>{animateCount(document.getElementById('followerCount'),2497,1800);animateCount(document.getElementById('postCount'),380,1400)},500);

// WOD GENERATOR
const wods=[
  {name:"AMRAP 20",desc:"5 Pull-ups · 10 Push-ups · 15 Air Squats",type:"Bodyweight",emoji:"🔥"},
  {name:"For Time",desc:"21-15-9 Thrusters (42.5/30kg) · Pull-ups",type:"Classic: Fran",emoji:"💀"},
  {name:"EMOM 16",desc:"Odd: 10 KB Swings · Even: 10 Box Jumps (60/50cm)",type:"Conditioning",emoji:"⚡"},
  {name:"5 Rounds For Time",desc:"400m Run · 15 Deadlifts (100/70kg) · 20 Wall Balls",type:"Grunt Work",emoji:"😤"},
  {name:"AMRAP 12",desc:"3 Muscle-Ups · 6 Squat Cleans (70/50kg) · 9 Toes-to-Bar",type:"Skill+Strength",emoji:"🏆"},
  {name:"For Time",desc:"1K Row · 50 Burpees · 1K Run · 50 Burpees · 1K Row",type:"Suffer Fest™",emoji:"🫠"},
  {name:"EMOM 20",desc:"1: 5 Heavy Back Squats · 2: 10 Ring Dips · 3: 15 GHD Sit-ups · 4: Rest",type:"Strength+Skill",emoji:"💪"},
  {name:"7 Rounds For Time",desc:"7 Handstand Push-ups · 7 Power Cleans (60/42.5kg) · 7 Bar-Facing Burpees",type:"Hero WOD Vibes",emoji:"🫡"},
  {name:"Tabata",desc:"8 Rounds: 20s Max Effort Rowing · 10s Rest (Score = total cals)",type:"Sprint",emoji:"🚣"},
  {name:"Strong Saturday Special 🧡",desc:"In teams of 2: 100 Synchro Wall Balls · 80 Partner Deadlifts · 60 Synchro Box Jumps · 40 Partner KB Swings · 20 Rope Climbs",type:"Team WOD",emoji:"🤝"},
];
const scaled=["Half the reps, half the weight, full the pride.","Ring rows instead of pull-ups. We see you. We support you.","Box squats. Half weight. Extra smiles.","Cut the run to 200m. You showed up. That's enough.","30min cap. The clock is your friend today."];
const rx=["Add 10kg. Halve the rest. Double the suffering.","RX+ means you do it again immediately after.","No chalk. Wet hands. That's the real RX.","Time cap? There is no time cap for the brave.","RX is just the beginning. Real champs go for RX+2."];
function generateWOD(){
  const wod=wods[Math.floor(Math.random()*wods.length)];
  const d=document.getElementById('wodDisplay');d.style.opacity=0;
  setTimeout(()=>{d.textContent=`${wod.emoji} ${wod.name}: ${wod.desc}`;d.style.opacity=1},200);
  document.getElementById('wodMeta').innerHTML=`<span>Type:</span>${wod.type}`;
  document.getElementById('scaleBtn').style.display='inline-flex';
  document.getElementById('rxBtn').style.display='inline-flex';
  document.querySelector('.wod-btn.hot').textContent='🎲 Another One';
}
function scaleWOD(){document.getElementById('wodMeta').innerHTML=`<span>Scaled:</span>${scaled[Math.floor(Math.random()*scaled.length)]}`}
function rxWOD(){document.getElementById('wodMeta').innerHTML=`<span>RX Note:</span>${rx[Math.floor(Math.random()*rx.length)]}`}

// EXCUSE BUSTER
const excuses=[
  ["I'm too tired after work.","So are we. We come anyway. See you at 6am."],
  ["I don't know how to do CrossFit.","Nobody did. Now they deadlift twice their bodyweight. First class is free."],
  ["It's too expensive.","One EMI missed on that phone upgrade = 2 months of CrossFit. Think about it."],
  ["I need to get fit before I start.","That's like washing dishes before putting them in the dishwasher."],
  ["I'm scared of getting injured.","Sitting at a desk 9 hours a day is also an injury. Just slower."],
  ["My friends aren't into it.","They will be. After they see the transformation. Or they won't. Come alone."],
  ["I don't have time.","You have time for Instagram Reels. You have time. We're just saying."],
  ["I tried CrossFit and it was too hard.","Good. Hard things make you better. The second class is easier. DM us."],
  ["I'll start on Monday.","Classic. Monday called. It says stop using it as a scapegoat."],
  ["I'm not the gym type.","Neither was our athlete who arrived in office clothes. He coaches here now."],
];
function bustExcuse(){
  const [ex,reply]=excuses[Math.floor(Math.random()*excuses.length)];
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
