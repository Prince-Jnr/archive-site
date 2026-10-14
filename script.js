
const IMG = {"i052": "images/i052.jpg", "i069": "images/i069.jpg", "i006": "images/i006.jpg", "i046": "images/i046.jpg", "i065": "images/i065.jpg", "i010": "images/i010.jpg", "i088": "images/i088.jpg", "i002": "images/i002.jpg", "i089": "images/i089.jpg", "i027": "images/i027.jpg", "i068": "images/i068.jpg", "i011": "images/i011.jpg", "i060": "images/i060.jpg", "i080": "images/i080.jpg", "i050": "images/i050.jpg", "i041": "images/i041.jpg", "i019": "images/i019.jpg", "i075": "images/i075.jpg", "i084": "images/i084.jpg", "i074": "images/i074.jpg", "i009": "images/i009.jpg", "i003": "images/i003.jpg", "i045": "images/i045.jpg", "i038": "images/i038.jpg", "i064": "images/i064.jpg", "i024": "images/i024.jpg", "i043": "images/i043.jpg", "i036": "images/i036.jpg", "i016": "images/i016.jpg", "i023": "images/i023.jpg", "i015": "images/i015.jpg", "i025": "images/i025.jpg", "i070": "images/i070.jpg", "i008": "images/i008.jpg", "i082": "images/i082.jpg", "i049": "images/i049.jpg", "i053": "images/i053.jpg", "i073": "images/i073.jpg", "i022": "images/i022.jpg", "i032": "images/i032.jpg", "i051": "images/i051.jpg", "i033": "images/i033.jpg", "i040": "images/i040.jpg", "flag": "images/flag.jpg", "i017": "images/i017.jpg", "i012": "images/i012.jpg", "i056": "images/i056.jpg", "i029": "images/i029.jpg", "i034": "images/i034.jpg", "i031": "images/i031.jpg", "i047": "images/i047.jpg", "i035": "images/i035.jpg", "i079": "images/i079.jpg", "i044": "images/i044.jpg", "i059": "images/i059.jpg", "i037": "images/i037.jpg", "i020": "images/i020.jpg", "i054": "images/i054.jpg", "i072": "images/i072.jpg", "i048": "images/i048.jpg", "i013": "images/i013.jpg", "i021": "images/i021.jpg", "i081": "images/i081.jpg", "i014": "images/i014.jpg"};
const SLOTS = {"hero": {"k": "i053", "cap": "Yoruba couple, studio portrait. Original credit not recorded.", "pos": "center 22%"}, "festac": {"k": "i046", "cap": "Nigeria's delegation sign at FESTAC '77. Via MoMA, The FESTAC '77 Mixtape.", "pos": "center 40%"}, "room-photography": {"k": "i021", "cap": "J.D. 'Okhai Ojeikere, Untitled (Modern Suku). The Metropolitan Museum of Art.", "pos": "center"}, "room-music": {"k": "i015", "cap": "Fela Kuti & Africa '70, Open & Close. Album cover.", "pos": "center"}, "room-fashion": {"k": "i069", "cap": "Indigo resist-dyed cloth. Original credit not recorded.", "pos": "center"}, "room-design": {"k": "i029", "cap": "The National Theatre, Lagos, seen from above. Original credit not recorded.", "pos": "center"}, "entry-0": {"k": "i009", "cap": "Chief Stephen Osita Osadebe, Osondi Owendi. Highlife album cover.", "fit": "contain"}, "entry-1": {"k": "flag", "cap": "Illustration: the flag of Nigeria, green-white-green, drawn to a 1:2 ratio for this page.", "pos": "center"}, "entry-2": {"k": "i056", "cap": "Shade Thomas-Fahm. Portrait; photographer not recorded.", "pos": "center 20%"}, "entry-3": {"k": "i050", "cap": "J.D. 'Okhai Ojeikere, from the Hairstyles series.", "pos": "center"}, "entry-4": {"k": "i047", "cap": "Old Central Bank of Nigeria naira notes. Original credit not recorded.", "pos": "center"}, "entry-5": {"k": "i012", "cap": "Fela Kuti on stage. Original credit not recorded.", "pos": "center 25%"}, "entry-6": {"k": "i080", "cap": "FESTAC '77 programme image. Printed by M.C.O. Ltd, Lagos.", "pos": "center 30%"}, "entry-7": {"k": "i019", "cap": "King Sunny Ad\u00e9. Original credit not recorded.", "pos": "center 30%"}, "entry-8": {"k": "i025", "cap": "Lagos Fashion Week 2019, via BN Style.", "pos": "center 30%"}};
const WALL = [{"k": "i002", "d": "photography", "t": "Three women, studio portrait", "c": "Original credit not recorded", "w": 450, "h": 572}, {"k": "i027", "d": "photography", "t": "Three women, Paramount Photographers Studio, Lagos", "c": "Jean Pigozzi Collection", "w": 653, "h": 653}, {"k": "i033", "d": "photography", "t": "A doorway on a Lagos street", "c": "Nigerian Nostalgia Project", "w": 401, "h": 581}, {"k": "i032", "d": "photography", "t": "Carrying cloth past a campaign poster", "c": "Nigerian Nostalgia Project", "w": 400, "h": 597}, {"k": "i052", "d": "photography", "t": "Yoruba couple, studio portrait", "c": "Original credit not recorded", "w": 397, "h": 612}, {"k": "i054", "d": "photography", "t": "Yoruba couple in the 1960s style", "c": "Original credit not recorded", "w": 340, "h": 600}, {"k": "i082", "d": "photography", "t": "Two women in white and wrapper, studio portrait", "c": "via @zaraaudu", "w": 640, "h": 791}, {"k": "i074", "d": "photography", "t": "Studio portrait of a woman", "c": "Original credit not recorded", "w": 648, "h": 1024}, {"k": "i075", "d": "photography", "t": "Portrait with a gele", "c": "Original credit not recorded", "w": 666, "h": 1080}, {"k": "i051", "d": "photography", "t": "Wedding portrait", "c": "Original credit not recorded", "w": 735, "h": 1139}, {"k": "i060", "d": "photography", "t": "Group portrait in beads and gele", "c": "Original credit not recorded", "w": 736, "h": 1108}, {"k": "i011", "d": "photography", "t": "Traffic in Lagos, earlier days", "c": "FABA Vintage", "w": 735, "h": 598}, {"k": "i010", "d": "photography", "t": "A danfo under the Lagos-Ibadan sign", "c": "Original credit not recorded", "w": 736, "h": 982}, {"k": "i044", "d": "photography", "t": "Awoyaya local market, Lagos", "c": "Original credit not recorded", "w": 736, "h": 981}, {"k": "i045", "d": "photography", "t": "Suns of Lagos", "c": "Original credit not recorded", "w": 735, "h": 980}, {"k": "i081", "d": "photography", "t": "Danfos at a Lagos junction", "c": "Original credit not recorded", "w": 650, "h": 1150}, {"k": "i088", "d": "photography", "t": "Lagos market pulse", "c": "Original credit not recorded", "w": 647, "h": 1150}, {"k": "i084", "d": "photography", "t": "Lagos in motion", "c": "Original credit not recorded", "w": 736, "h": 920}, {"k": "i048", "d": "photography", "t": "Victoria Island, Lagos", "c": "Tobbie Maguire, @f27arts", "w": 736, "h": 736}, {"k": "i068", "d": "photography", "t": "Masks at the windows of a bus", "c": "Original credit not recorded", "w": 735, "h": 925}, {"k": "i020", "d": "photography", "t": "Hairstyle, profile", "c": "J.D. 'Okhai Ojeikere", "w": 735, "h": 881}, {"k": "i022", "d": "photography", "t": "Hairstyle, back view", "c": "J.D. 'Okhai Ojeikere, via COEVAL", "w": 736, "h": 768}, {"k": "i023", "d": "photography", "t": "Smiling portrait, braided hair", "c": "J.D. 'Okhai Ojeikere", "w": 509, "h": 615}, {"k": "i040", "d": "photography", "t": "Hairstyle with looped braids", "c": "J.D. 'Okhai Ojeikere", "w": 595, "h": 596}, {"k": "i012", "d": "music", "t": "Fela Kuti on stage", "c": "Original credit not recorded", "w": 736, "h": 1019}, {"k": "i013", "d": "music", "t": "Fela Kuti, poster art", "c": "Original credit not recorded", "w": 736, "h": 943}, {"k": "i014", "d": "music", "t": "Fela Kuti, postage-stamp print", "c": "Original credit not recorded", "w": 736, "h": 1104}, {"k": "i016", "d": "music", "t": "Fela Ransome Kuti and his Africa '70", "c": "EMI single sleeve", "w": 575, "h": 600}, {"k": "i009", "d": "music", "t": "Stephen Osita Osadebe, Osondi Owendi", "c": "Album cover", "w": 580, "h": 580}, {"k": "i019", "d": "music", "t": "King Sunny Ad\u00e9", "c": "Original credit not recorded", "w": 640, "h": 640}, {"k": "i038", "d": "music", "t": "King Sunny Ad\u00e9 on guitar", "c": "Original credit not recorded", "w": 272, "h": 400}, {"k": "i024", "d": "music", "t": "King Sunny Ad\u00e9 on stage", "c": "Original credit not recorded", "w": 226, "h": 300}, {"k": "i049", "d": "music", "t": "Nigeria 70: Sweet Times", "c": "Compilation cover", "w": 736, "h": 731}, {"k": "i064", "d": "music", "t": "Wasiu Ayinde Barrister, Tiwa Dayo", "c": "Album cover", "w": 450, "h": 480}, {"k": "i065", "d": "music", "t": "Afrobeat cassette cover", "c": "Original credit not recorded", "w": 736, "h": 1028}, {"k": "i089", "d": "music", "t": "Ayanagalu Drum Festival 2025, Ile-Ife", "c": "Photo: @thesametoluwase", "w": 736, "h": 920}, {"k": "i025", "d": "fashion", "t": "Lagos Fashion Week 2019", "c": "BN Style", "w": 736, "h": 1104}, {"k": "i043", "d": "fashion", "t": "Shade Thomas-Fahm", "c": "Original credit not recorded", "w": 736, "h": 920}, {"k": "i069", "d": "fashion", "t": "Indigo resist-dyed cloth", "c": "Original credit not recorded", "w": 564, "h": 1150}, {"k": "i070", "d": "fashion", "t": "Mother and child in indigo cloth", "c": "Original credit not recorded", "w": 736, "h": 1024}, {"k": "i072", "d": "fashion", "t": "Choosing wax-print cloth", "c": "Original credit not recorded", "w": 736, "h": 724}, {"k": "i073", "d": "fashion", "t": "Friends in matching colour on a Lagos street", "c": "Original credit not recorded", "w": 735, "h": 910}, {"k": "i008", "d": "fashion", "t": "Igbo women at a ceremony", "c": "Original credit not recorded", "w": 736, "h": 1104}, {"k": "i006", "d": "fashion", "t": "Aso-oke strips", "c": "Design Indaba", "w": 700, "h": 811}, {"k": "i003", "d": "design", "t": "Brutalist building, UNILAG", "c": "A Memory of Walls", "w": 235, "h": 310}, {"k": "i017", "d": "design", "t": "National Theatre, Lagos", "c": "Original credit not recorded", "w": 736, "h": 471}, {"k": "i029", "d": "design", "t": "National Theatre from above", "c": "Original credit not recorded", "w": 736, "h": 414}, {"k": "i037", "d": "design", "t": "Old apartment block, Festac", "c": "Original credit not recorded", "w": 736, "h": 981}, {"k": "i034", "d": "design", "t": "One hundred naira note", "c": "Original credit not recorded", "w": 736, "h": 738}, {"k": "i036", "d": "design", "t": "Naira notes", "c": "Original credit not recorded", "w": 236, "h": 396}, {"k": "i079", "d": "design", "t": "Twenty naira note, front and back", "c": "Original credit not recorded", "w": 736, "h": 746}, {"k": "i059", "d": "design", "t": "FESTAC '77, poster art", "c": "Original credit not recorded", "w": 735, "h": 746}, {"k": "i031", "d": "design", "t": "1960, collage", "c": "Original credit not recorded", "w": 736, "h": 1004}, {"k": "i035", "d": "design", "t": "Portrait painting", "c": "Nka Igbo", "w": 527, "h": 601}, {"k": "i041", "d": "design", "t": "Nigerian stamp: role model for society", "c": "Original credit not recorded", "w": 736, "h": 1002}];

/* ---------- content ---------- */
const ENTRIES = [
  {y:"1950",d:"music",tag:"Music",t:"Highlife fills the dance halls",p:"Highlife bands pack the clubs of Lagos and the sound of Nigerian popular music begins to take shape. Brass, guitar and a groove built for dancing."},
  {y:"1960",d:"design",tag:"Design",t:"A student draws the flag",p:"In 1959, student Michael Taiwo Akinkunmi won a national competition with a plain green, white and green design. It was raised on 1 October 1960."},
  {y:"1960s",d:"fashion",tag:"Fashion",t:"Maami Fashions opens in Lagos",p:"Shade Thomas-Fahm is often cited as the first Nigerian designer to build a fashion house, dressing Lagos in cuts and cloth that looked like home."},
  {y:"1968",d:"photography",tag:"Photography",t:"Hairstyles, frame by frame",p:"J.D. 'Okhai Ojeikere starts photographing the hairstyles of Nigerian women, a black-and-white series he kept adding to for decades."},
  {y:"1973",d:"design",tag:"Design",t:"The naira arrives",p:"On 1 January 1973 Nigeria replaces the pound with the naira. A new national currency has to be drawn, printed and trusted."},
  {y:"1976",d:"music",tag:"Music",t:"Zombie",p:"Fela Kuti releases Zombie, an Afrobeat record that turns military obedience into a joke the whole country understands."},
  {y:"1977",d:"all",tag:"All four rooms",t:"FESTAC '77",p:"Lagos hosts the Second World Black and African Festival of Arts and Culture. The National Theatre rises to hold it."},
  {y:"1982",d:"music",tag:"Music",t:"Juju goes global",p:"Bandleader King Sunny Adé carries a shimmering sound of layered guitars and talking drums from Nigerian parties to international stages."},
  {y:"2011",d:"fashion",tag:"Fashion",t:"Lagos Fashion Week begins",p:"A runway opens at home. A generation of Nigerian designers no longer has to leave to be seen."}
];
const ROOMS = [
  {id:"photography",name:"Photography",one:"Faces, streets and the studios that made them.",
   h:"People looked straight at the camera.",
   p:"From studio portraits to documentary series, this room holds the images that let a country see itself: weddings, markets, new buildings and old hairstyles, all in sharp black and white.",
   objs:[["Studio portraits, Lagos and Ibadan","1950s"],["The Hairstyles series","from 1968"],["Street and market frames","1970s"]]},
  {id:"music",name:"Music",one:"Highlife, juju, Afrobeat and what came next.",
   h:"Press play on a whole country.",
   p:"Listen to the bands that filled the dance halls, the records that argued with governments, and the sounds that crossed oceans. Every sleeve is scanned front and back.",
   objs:[["Highlife dance-band records","1950s"],["Zombie, Fela Kuti","1976"],["Juju and talking-drum sessions","1980s"]]},
  {id:"fashion",name:"Fashion",one:"Cloth, cut and the art of being seen.",
   h:"Dressed for the occasion, always.",
   p:"Adire indigo, aso-oke weave, tailored lace and the first runways. This room follows how Nigerians dressed for weddings, independence, church, the office and the street.",
   objs:[["Adire indigo-resist cloth","Yoruba tradition"],["Maami Fashions, Lagos","1960s"],["Lagos Fashion Week","2011"]]},
  {id:"design",name:"Design",one:"Flags, notes, buildings, posters.",
   h:"Everything you touched was designed.",
   p:"Money in your pocket, a flag over a school, a theatre in the skyline. This room is for the objects people made to be lived with, and the designers who drew them.",
   objs:[["The national flag","1960"],["The naira","1973"],["The National Theatre, Lagos","1976"]]}
];
const LABEL={photography:"Photography",music:"Music",fashion:"Fashion",design:"Design"};

/* ---------- placeholder art (shown for any slot without an image) ---------- */
function art(kind){
  const s=[];
  if(kind==="photography"){
    s.push('<rect x="22" y="22" width="156" height="206" fill="none" stroke="currentColor" stroke-width="1.2"/>');
    s.push('<circle cx="100" cy="112" r="38" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="100" cy="112" r="6" fill="currentColor"/>');
    s.push('<path d="M100 40v144M28 112h144" stroke="currentColor" stroke-width=".8" stroke-dasharray="3 5"/>');
  }
  if(kind==="music"){
    for(let r=20;r<=104;r+=5)s.push('<circle cx="100" cy="125" r="'+r+'" fill="none" stroke="currentColor" stroke-width="'+(r%15===0?1.4:.7)+'"/>');
    s.push('<circle cx="100" cy="125" r="16" fill="currentColor"/>');
  }
  if(kind==="fashion"){
    for(let i=-6;i<=14;i++){
      s.push('<path d="M'+(i*20)+' 0L'+(i*20+250)+' 250" stroke="currentColor" stroke-width=".9" fill="none"/>');
      s.push('<path d="M'+(i*20+250)+' 0L'+(i*20)+' 250" stroke="currentColor" stroke-width=".9" fill="none"/>');
    }
  }
  if(kind==="design"){
    for(let x=0;x<4;x++)for(let y=0;y<5;y++){
      const rot=((x*3+y*5)%4)*90, cx=25+x*50, cy=25+y*50;
      s.push('<g transform="rotate('+rot+' '+cx+' '+cy+')"><path d="M'+(cx-25)+' '+(cy+25)+'A50 50 0 0 1 '+(cx+25)+' '+(cy-25)+'" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M'+(cx-25)+' '+(cy+25)+'A25 25 0 0 1 '+cx+' '+cy+'" fill="none" stroke="currentColor" stroke-width="1.4"/></g>');
    }
  }
  return '<svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">'+s.join("")+'</svg>';
}
const KIND={photography:"photography",music:"music",fashion:"fashion",design:"design",all:"fashion"};

/* ---------- plates (image slots) ---------- */
const dropped={};
function setCap(slot,text){document.querySelectorAll('[data-cap-for="'+slot+'"]').forEach(el=>el.textContent=text||"");}
function paint(plate){
  const slot=plate.dataset.slot, kind=plate.dataset.kind;
  plate.classList.remove("filled");
  plate.innerHTML=art(kind)+'<span class="slot">Image: '+slot+'</span>';
  let src="",o={};
  if(dropped[slot]){src=dropped[slot];setCap(slot,"");if(plate.id==="e-plate")document.getElementById("e-cap").textContent="";}
  else if(SLOTS[slot]){o=SLOTS[slot];src=IMG[o.k];setCap(slot,o.cap);if(plate.id==="e-plate")document.getElementById("e-cap").textContent=o.cap;}
  else{setCap(slot,"");if(plate.id==="e-plate")document.getElementById("e-cap").textContent="";}
  if(!src)return;
  const img=new Image(); img.alt=plate.getAttribute("aria-label")||""; img.decoding="async";
  img.style.objectFit=o.fit||"cover"; img.style.objectPosition=o.pos||"center 30%";
  img.onload=()=>plate.classList.add("filled");
  img.onerror=()=>img.remove();
  img.src=src;
  plate.insertBefore(img,plate.querySelector(".slot"));
}
function initPlate(plate){
  paint(plate);
  plate.addEventListener("dragover",e=>{e.preventDefault();plate.classList.add("drag");});
  plate.addEventListener("dragleave",()=>plate.classList.remove("drag"));
  plate.addEventListener("drop",e=>{
    e.preventDefault();plate.classList.remove("drag");
    const f=e.dataTransfer.files[0]; if(!f||!f.type.startsWith("image/"))return;
    const r=new FileReader(); r.onload=()=>{dropped[plate.dataset.slot]=r.result;paint(plate);}; r.readAsDataURL(f);
  });
}

/* ---------- wordmark ---------- */
const wm=document.getElementById("wordmark");
"ARCHIVE".split("").forEach((c,i)=>{const s=document.createElement("span");s.setAttribute("aria-hidden","true");s.innerHTML='<i style="--i:'+i+'">'+c+'</i>';wm.appendChild(s);});

/* ---------- dial ---------- */
const dial=document.getElementById("dial"),yearEl=document.getElementById("year"),tagT=document.getElementById("tag-t"),
  eTitle=document.getElementById("e-title"),eText=document.getElementById("e-text"),ePlate=document.getElementById("e-plate"),
  range=document.getElementById("range"),prev=document.getElementById("prev"),next=document.getElementById("next"),yearsEl=document.getElementById("years");
let cur=-1;
ENTRIES.forEach((e,i)=>{
  const b=document.createElement("button");b.type="button";b.className="d-"+e.d;b.setAttribute("aria-pressed","false");
  b.innerHTML="<i></i>"+e.y;b.addEventListener("click",()=>show(i));yearsEl.appendChild(b);
});
function show(i){
  i=Math.max(0,Math.min(ENTRIES.length-1,i)); if(i===cur)return;
  const first=cur===-1; cur=i; const e=ENTRIES[i];
  dial.className="sec dial d-"+e.d;
  yearEl.textContent=e.y; tagT.textContent=e.tag; eTitle.textContent=e.t; eText.textContent=e.p;
  range.value=i; prev.disabled=i===0; next.disabled=i===ENTRIES.length-1;
  [...yearsEl.children].forEach((b,j)=>b.setAttribute("aria-pressed",j===i?"true":"false"));
  const pressed=yearsEl.children[i]; if(!first&&pressed.scrollIntoView) pressed.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"});
  ePlate.dataset.slot="entry-"+i; ePlate.dataset.kind=KIND[e.d];
  ePlate.setAttribute("aria-label",e.t);
  paint(ePlate);
  ePlate.classList.remove("swap"); void ePlate.offsetWidth; ePlate.classList.add("swap");
}
range.addEventListener("input",()=>show(+range.value));
prev.addEventListener("click",()=>show(cur-1));
next.addEventListener("click",()=>show(cur+1));
show(0);

/* ---------- rooms ---------- */
const list=document.getElementById("room-list");
ROOMS.forEach((r)=>{
  const el=document.createElement("div");el.className="room d-"+r.id;el.id="room-"+r.id;
  el.innerHTML=
   '<h3 style="margin:0;font-size:inherit"><button class="room-btn" aria-expanded="false" aria-controls="p-'+r.id+'">'+
     '<span class="name">'+r.name+'</span><span class="one">'+r.one+'</span><span class="plus" aria-hidden="true">+</span></button></h3>'+
   '<div class="panel" id="p-'+r.id+'" role="region" aria-label="'+r.name+'"><div class="panel-in"><div class="panel-grid">'+
     '<figure><div class="plate" data-slot="room-'+r.id+'" data-kind="'+r.id+'" role="img" aria-label="'+r.name+' room"></div><figcaption class="caption" data-cap-for="room-'+r.id+'"></figcaption></figure>'+
     '<div><h3>'+r.h+'</h3><p>'+r.p+'</p><ul class="objs">'+r.objs.map(o=>'<li><span>'+o[0]+'</span><span>'+o[1]+'</span></li>').join("")+'</ul></div>'+
   '</div></div></div>';
  list.appendChild(el);
  el.querySelector(".room-btn").addEventListener("click",()=>toggle(el));
});
function toggle(el,force){
  const open=force!==undefined?force:!el.classList.contains("open");
  document.querySelectorAll(".room").forEach(o=>{o.classList.remove("open");o.querySelector(".room-btn").setAttribute("aria-expanded","false");});
  if(open){el.classList.add("open");el.querySelector(".room-btn").setAttribute("aria-expanded","true");}
}
toggle(document.getElementById("room-photography"),true);
document.querySelectorAll("[data-open]").forEach(a=>a.addEventListener("click",()=>toggle(document.getElementById("room-"+a.dataset.open),true)));

/* ---------- the wall ---------- */
const wallEl=document.getElementById("wall-grid"),filtersEl=document.getElementById("filters"),countEl=document.getElementById("wall-count");
let filter="all", shown=[];
const FILTERS=[["all","All"],["photography","Photography"],["music","Music"],["fashion","Fashion"],["design","Design"]];
FILTERS.forEach(([k,l])=>{
  const n=k==="all"?WALL.length:WALL.filter(w=>w.d===k).length;
  const b=document.createElement("button");b.type="button";b.className="d-"+(k==="all"?"all":k);
  b.setAttribute("aria-pressed",k==="all"?"true":"false");b.innerHTML="<i></i>"+l+" ("+n+")";
  b.addEventListener("click",()=>{filter=k;[...filtersEl.children].forEach(c=>c.setAttribute("aria-pressed",c===b?"true":"false"));renderWall();});
  filtersEl.appendChild(b);
});
function renderWall(){
  wallEl.innerHTML=""; shown=WALL.filter(w=>filter==="all"||w.d===filter);
  countEl.textContent="Showing "+shown.length+" of "+WALL.length+" pieces.";
  shown.forEach((w,i)=>{
    const f=document.createElement("figure");f.className="tile d-"+w.d;
    const b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Open: "+w.t);
    const img=new Image();img.width=w.w;img.height=w.h;img.src=IMG[w.k];img.alt=w.t;
    b.appendChild(img);b.addEventListener("click",()=>openLB(i));
    const c=document.createElement("figcaption");c.textContent=w.t;
    f.appendChild(b);f.appendChild(c);wallEl.appendChild(f);
  });
}
renderWall();

/* ---------- lightbox ---------- */
const lb=document.getElementById("lb"),lbImg=document.getElementById("lb-img"),lbT=document.getElementById("lb-t"),lbC=document.getElementById("lb-c"),lbD=document.getElementById("lb-d");
let li=0, lastFocus=null;
function fillLB(){
  const w=shown[li];lbImg.src=IMG[w.k];lbImg.alt=w.t;lbT.textContent=w.t;lbC.textContent="Credit: "+w.c;lbD.textContent=LABEL[w.d]+" · "+(li+1)+" of "+shown.length;
}
function openLB(i){lastFocus=document.activeElement;li=i;fillLB();if(lb.showModal)lb.showModal();else lb.setAttribute("open","");}
document.getElementById("lb-x").addEventListener("click",()=>lb.close());
document.getElementById("lb-prev").addEventListener("click",()=>{li=(li-1+shown.length)%shown.length;fillLB();});
document.getElementById("lb-next").addEventListener("click",()=>{li=(li+1)%shown.length;fillLB();});
lb.addEventListener("click",e=>{if(e.target===lb)lb.close();});
lb.addEventListener("close",()=>{if(lastFocus&&lastFocus.focus)lastFocus.focus();});
lb.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight")document.getElementById("lb-next").click();
  if(e.key==="ArrowLeft")document.getElementById("lb-prev").click();
});

/* ---------- init plates ---------- */
document.querySelectorAll(".plate").forEach(initPlate);

