// ═══════════ DATA ═══════════
const HADITH_KEY='$2y$10$9oND1Jt5lsYvZ2fDgFRx3U4Eebrlxe6WaSiUsfBmwg4qcLKWTa';
const QURAN_API='https://quranapi.pages.dev/api/';
const MECCA={lat:21.4225,lng:39.8262};
const ADHAN_URLS=['https://audio.islamicfinder.org/audio/adhaan/Makkah.mp3','https://www.islamcan.com/audio/adhan/azan1.mp3'];

const SURAHS=[[1,'Al-Fatihah','الفاتحة','The Opening'],[2,'Al-Baqarah','البقرة','The Cow'],[3,"Ali 'Imran",'آل عمران','Family of Imran'],[4,'An-Nisa','النساء','The Women'],[5,"Al-Ma'idah",'المائدة','The Table Spread'],[6,"Al-An'am",'الأنعام','The Cattle'],[7,"Al-A'raf",'الأعراف','The Heights'],[8,'Al-Anfal','الأنفال','The Spoils of War'],[9,'At-Tawbah','التوبة','The Repentance'],[10,'Yunus','يونس','Jonah'],[11,'Hud','هود','Hud'],[12,'Yusuf','يوسف','Joseph'],[13,"Ar-Ra'd",'الرعد','The Thunder'],[14,'Ibrahim','إبراهيم','Abraham'],[15,'Al-Hijr','الحجر','The Rocky Tract'],[16,'An-Nahl','النحل','The Bee'],[17,"Al-Isra",'الإسراء','The Night Journey'],[18,'Al-Kahf','الكهف','The Cave'],[19,'Maryam','مريم','Mary'],[20,'Ta-Ha','طه','Ta-Ha'],[21,'Al-Anbiya','الأنبياء','The Prophets'],[22,'Al-Hajj','الحج','The Pilgrimage'],[23,"Al-Mu'minun",'المؤمنون','The Believers'],[24,'An-Nur','النور','The Light'],[25,'Al-Furqan','الفرقان','The Criterion'],[26,"Ash-Shu'ara",'الشعراء','The Poets'],[27,'An-Naml','النمل','The Ant'],[28,'Al-Qasas','القصص','The Stories'],[29,"Al-'Ankabut",'العنكبوت','The Spider'],[30,'Ar-Rum','الروم','The Romans'],[31,'Luqman','لقمان','Luqman'],[32,'As-Sajdah','السجدة','The Prostration'],[33,'Al-Ahzab','الأحزاب','The Combined Forces'],[34,'Saba','سبأ','Sheba'],[35,'Fatir','فاطر','Originator'],[36,'Ya-Sin','يس','Ya Sin'],[37,'As-Saffat','الصافات','Those Lined Up'],[38,'Sad','ص','The Letter Sad'],[39,'Az-Zumar','الزمر','The Troops'],[40,'Ghafir','غافر','The Forgiver'],[41,'Fussilat','فصلت','Explained in Detail'],[42,'Ash-Shura','الشورى','The Consultation'],[43,'Az-Zukhruf','الزخرف','The Ornaments of Gold'],[44,'Ad-Dukhan','الدخان','The Smoke'],[45,'Al-Jathiyah','الجاثية','The Crouching'],[46,'Al-Ahqaf','الأحقاف','The Wind-Curved Sandhills'],[47,'Muhammad','محمد','Muhammad'],[48,'Al-Fath','الفتح','The Victory'],[49,'Al-Hujurat','الحجرات','The Rooms'],[50,'Qaf','ق','The Letter Qaf'],[51,'Adh-Dhariyat','الذاريات','The Winnowing Winds'],[52,'At-Tur','الطور','The Mount'],[53,'An-Najm','النجم','The Star'],[54,'Al-Qamar','القمر','The Moon'],[55,'Ar-Rahman','الرحمن','The Beneficent'],[56,"Al-Waqi'ah",'الواقعة','The Inevitable'],[57,'Al-Hadid','الحديد','The Iron'],[58,'Al-Mujadila','المجادلة','The Pleading Woman'],[59,'Al-Hashr','الحشر','The Exile'],[60,'Al-Mumtahanah','الممتحنة','She That is to be Examined'],[61,'As-Saf','الصف','The Ranks'],[62,"Al-Jumu'ah",'الجمعة','The Congregation'],[63,'Al-Munafiqun','المنافقون','The Hypocrites'],[64,'At-Taghabun','التغابن','The Mutual Disillusion'],[65,'At-Talaq','الطلاق','The Divorce'],[66,'At-Tahrim','التحريم','The Prohibition'],[67,'Al-Mulk','الملك','The Sovereignty'],[68,'Al-Qalam','القلم','The Pen'],[69,'Al-Haqqah','الحاقة','The Reality'],[70,"Al-Ma'arij",'المعارج','The Ascending Stairways'],[71,'Nuh','نوح','Noah'],[72,'Al-Jinn','الجن','The Jinn'],[73,'Al-Muzzammil','المزمل','The Enshrouded One'],[74,'Al-Muddaththir','المدثر','The Cloaked One'],[75,'Al-Qiyamah','القيامة','The Resurrection'],[76,'Al-Insan','الإنسان','The Man'],[77,'Al-Mursalat','المرسلات','The Emissaries'],[78,"An-Naba",'النبأ','The Tidings'],[79,"An-Nazi'at",'النازعات','Those Who Drag Forth'],[80,"'Abasa",'عبس','He Frowned'],[81,'At-Takwir','التكوير','The Overthrowing'],[82,'Al-Infitar','الانفطار','The Cleaving'],[83,'Al-Mutaffifin','المطففين','The Defrauding'],[84,'Al-Inshiqaq','الانشقاق','The Sundering'],[85,'Al-Buruj','البروج','The Mansions of the Stars'],[86,'At-Tariq','الطارق','The Morning Star'],[87,"Al-A'la",'الأعلى','The Most High'],[88,'Al-Ghashiyah','الغاشية','The Overwhelming'],[89,'Al-Fajr','الفجر','The Dawn'],[90,'Al-Balad','البلد','The City'],[91,'Ash-Shams','الشمس','The Sun'],[92,'Al-Layl','الليل','The Night'],[93,'Ad-Duha','الضحى','The Morning Hours'],[94,'Ash-Sharh','الشرح','The Relief'],[95,'At-Tin','التين','The Fig'],[96,"Al-'Alaq",'العلق','The Clot'],[97,'Al-Qadr','القدر','The Power'],[98,'Al-Bayyinah','البينة','The Clear Proof'],[99,'Az-Zalzalah','الزلزلة','The Earthquake'],[100,"Al-'Adiyat",'العاديات','The Courser'],[101,"Al-Qari'ah",'القارعة','The Calamity'],[102,'At-Takathur','التكاثر','The Rivalry in World Increase'],[103,"Al-'Asr",'العصر','The Declining Day'],[104,'Al-Humazah','الهمزة','The Traducer'],[105,'Al-Fil','الفيل','The Elephant'],[106,'Quraysh','قريش','Quraysh'],[107,"Al-Ma'un",'الماعون','The Small Kindnesses'],[108,'Al-Kawthar','الكوثر','The Abundance'],[109,'Al-Kafirun','الكافرون','The Disbelievers'],[110,'An-Nasr','النصر','The Divine Support'],[111,'Al-Masad','المسد','The Palm Fibre'],[112,'Al-Ikhlas','الإخلاص','Sincerity'],[113,'Al-Falaq','الفلق','The Daybreak'],[114,'An-Nas','الناس','Mankind']];

const NAMES_99=[
  ['الرَّحْمَنُ','Ar-Rahman','The Most Gracious'],['الرَّحِيمُ','Ar-Rahim','The Most Merciful'],['الْمَلِكُ','Al-Malik','The King, The Sovereign'],['الْقُدُّوسُ','Al-Quddus','The Most Holy'],['السَّلَامُ','As-Salam','The Source of Peace'],['الْمُؤْمِنُ','Al-Mu\'min','The Guardian of Faith'],['الْمُهَيْمِنُ','Al-Muhaymin','The Protector'],['الْعَزِيزُ','Al-Aziz','The Almighty'],['الْجَبَّارُ','Al-Jabbar','The Compeller'],['الْمُتَكَبِّرُ','Al-Mutakabbir','The Majestic'],['الْخَالِقُ','Al-Khaliq','The Creator'],['الْبَارِئُ','Al-Bari\'','The Evolver'],['الْمُصَوِّرُ','Al-Musawwir','The Fashioner'],['الْغَفَّارُ','Al-Ghaffar','The Repeatedly Forgiving'],['الْقَهَّارُ','Al-Qahhar','The Subduer'],['الْوَهَّابُ','Al-Wahhab','The Bestower'],['الرَّزَّاقُ','Ar-Razzaq','The Provider'],['الْفَتَّاحُ','Al-Fattah','The Opener'],['الْعَلِيمُ','Al-\'Alim','The All-Knowing'],['الْقَابِضُ','Al-Qabid','The Withholder'],['الْبَاسِطُ','Al-Basit','The Extender'],['الْخَافِضُ','Al-Khafid','The Reducer'],['الرَّافِعُ','Ar-Rafi\'','The Exalter'],['الْمُعِزُّ','Al-Mu\'izz','The Honourer'],['الْمُذِلُّ','Al-Mudhill','The Dishonourer'],['السَّمِيعُ','As-Sami\'','The All-Hearing'],['الْبَصِيرُ','Al-Basir','The All-Seeing'],['الْحَكَمُ','Al-Hakam','The Judge'],['الْعَدْلُ','Al-\'Adl','The Just'],['اللَّطِيفُ','Al-Latif','The Subtle One'],['الْخَبِيرُ','Al-Khabir','The All-Aware'],['الْحَلِيمُ','Al-Halim','The Forbearing'],['الْعَظِيمُ','Al-\'Azim','The Magnificent'],['الْغَفُورُ','Al-Ghafur','The Forgiving'],['الشَّكُورُ','Ash-Shakur','The Appreciative'],['الْعَلِيُّ','Al-\'Ali','The Most High'],['الْكَبِيرُ','Al-Kabir','The Most Great'],['الْحَفِيظُ','Al-Hafiz','The Preserver'],['الْمُقِيتُ','Al-Muqit','The Nourisher'],['الْحَسِيبُ','Al-Hasib','The Reckoner'],['الْجَلِيلُ','Al-Jalil','The Majestic'],['الْكَرِيمُ','Al-Karim','The Most Generous'],['الرَّقِيبُ','Ar-Raqib','The Watchful'],['الْمُجِيبُ','Al-Mujib','The Responsive'],['الْوَاسِعُ','Al-Wasi\'','The All-Encompassing'],['الْحَكِيمُ','Al-Hakim','The All-Wise'],['الْوَدُودُ','Al-Wadud','The Loving'],['الْمَجِيدُ','Al-Majid','The Glorious'],['الْبَاعِثُ','Al-Ba\'ith','The Resurrector'],['الشَّهِيدُ','Ash-Shahid','The Witness'],['الْحَقُّ','Al-Haqq','The Truth'],['الْوَكِيلُ','Al-Wakil','The Trustee'],['الْقَوِيُّ','Al-Qawiyy','The Most Strong'],['الْمَتِينُ','Al-Matin','The Firm'],['الْوَلِيُّ','Al-Waliyy','The Protecting Friend'],['الْحَمِيدُ','Al-Hamid','The Praiseworthy'],['الْمُحْصِي','Al-Muhsi','The Counter'],['الْمُبْدِئُ','Al-Mubdi\'','The Originator'],['الْمُعِيدُ','Al-Mu\'id','The Restorer'],['الْمُحْيِي','Al-Muhyi','The Giver of Life'],['الْمُمِيتُ','Al-Mumit','The Taker of Life'],['الْحَيُّ','Al-Hayy','The Ever-Living'],['الْقَيُّومُ','Al-Qayyum','The Self-Subsisting'],['الْوَاجِدُ','Al-Wajid','The Finder'],['الْمَاجِدُ','Al-Majid','The Noble'],['الْوَاحِدُ','Al-Wahid','The One'],['الْأَحَدُ','Al-Ahad','The Unique'],['الصَّمَدُ','As-Samad','The Eternal'],['الْقَادِرُ','Al-Qadir','The Able'],['الْمُقْتَدِرُ','Al-Muqtadir','The Powerful'],['الْمُقَدِّمُ','Al-Muqaddim','The Expediter'],['الْمُؤَخِّرُ','Al-Mu\'akhkhir','The Delayer'],['الْأَوَّلُ','Al-Awwal','The First'],['الْآخِرُ','Al-Akhir','The Last'],['الظَّاهِرُ','Az-Zahir','The Manifest'],['الْبَاطِنُ','Al-Batin','The Hidden'],['الْوَالِي','Al-Wali','The Governor'],['الْمُتَعَالِي','Al-Muta\'ali','The Self Exalted'],['الْبَرُّ','Al-Barr','The Source of All Goodness'],['التَّوَّابُ','At-Tawwab','The Acceptor of Repentance'],['الْمُنْتَقِمُ','Al-Muntaqim','The Avenger'],['الْعَفُوُّ','Al-\'Afuww','The Pardoner'],['الرَّؤُوفُ','Ar-Ra\'uf','The Most Kind'],['مَالِكُ الْمُلْكِ','Malik-ul-Mulk','The Owner of all Sovereignty'],['ذُو الْجَلَالِ وَالْإِكْرَامِ','Dhul-Jalal wal-Ikram','The Lord of Majesty and Generosity'],['الْمُقْسِطُ','Al-Muqsit','The Equitable'],['الْجَامِعُ','Al-Jami\'','The Gatherer'],['الْغَنِيُّ','Al-Ghani','The Self-Sufficient'],['الْمُغْنِي','Al-Mughni','The Enricher'],['الْمَانِعُ','Al-Mani\'','The Withholder'],['الضَّارُّ','Ad-Darr','The Distresser'],['النَّافِعُ','An-Nafi\'','The Propitious'],['النُّورُ','An-Nur','The Light'],['الْهَادِي','Al-Hadi','The Guide'],['الْبَدِيعُ','Al-Badi\'','The Incomparable Originator'],['الْبَاقِي','Al-Baqi','The Everlasting'],['الْوَارِثُ','Al-Warith','The Inheritor'],['الرَّشِيدُ','Ar-Rashid','The Guide to the Right Path'],['الصَّبُورُ','As-Sabur','The Patient']
];

const TASBEEH_PRESETS=[
  {ar:'سُبْحَانَ اللَّهِ',en:'SubhanAllah — Glory be to Allah',target:33,icon:'✨'},
  {ar:'الْحَمْدُ لِلَّهِ',en:'Alhamdulillah — Praise be to Allah',target:33,icon:'🌿'},
  {ar:'اللَّهُ أَكْبَرُ',en:'Allahu Akbar — Allah is the Greatest',target:34,icon:'🌙'},
  {ar:'أَسْتَغْفِرُ اللَّهَ',en:'Astaghfirullah — I seek Allah\'s forgiveness',target:100,icon:'💧'},
  {ar:'لَا إِلَٰهَ إِلَّا اللَّهُ',en:'La Ilaha IllAllah — There is no god but Allah',target:100,icon:'☪️'},
  {ar:'صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ',en:'Salawat — Blessings on the Prophet ﷺ',target:100,icon:'🕌'},
];

const ADHKAR_MORNING=[
  {title:'Ayat Al-Kursi',ar:'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',tr:'Allahu la ilaha illa huwa al-Hayyul-Qayyum…',en:'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep.',repeat:1},
  {title:'Morning Supplication',ar:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ',tr:'Asbahna wa asbahal-mulku lillah, walhamdu lillah',en:'We have reached the morning and at this very time the dominion belongs to Allah, and all praise is for Allah.',repeat:1},
  {title:'Protection Morning',ar:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',tr:'Bismillahil-ladhi la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'i wa huwas-Sami\'ul-\'Alim',en:'In the name of Allah with whose name nothing is harmed on earth nor in the heavens, and He is the All-Hearing, All-Knowing.',repeat:3},
  {title:'Contentment',ar:'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا',tr:'Raditu billahi Rabba, wa bil-Islami dina, wa bi-Muhammadin Nabiyya',en:'I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad ﷺ as my Prophet.',repeat:3},
  {title:'Sayyid Al-Istighfar',ar:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ',tr:'Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana abduka',en:'O Allah, You are my Lord, there is no god but You. You created me and I am Your servant.',repeat:1},
];
const ADHKAR_EVENING=[
  {title:'Evening Remembrance',ar:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ',tr:'Amsayna wa amsal-mulku lillah, walhamdu lillah',en:'We have reached the evening and at this very time the dominion belongs to Allah, and all praise is for Allah.',repeat:1},
  {title:'Evening Protection',ar:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ',tr:'Bismillahil-ladhi la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'',en:'In the name of Allah with whose name nothing is harmed on earth nor in the heavens.',repeat:3},
  {title:'Seeking Forgiveness',ar:'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',tr:'Astaghfirullaha wa atubu ilayh',en:'I seek the forgiveness of Allah and repent to Him.',repeat:100},
  {title:'Praise & Glory',ar:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',tr:'Subhanallahi wa bihamdihi',en:'Glory be to Allah and all praise is for Him.',repeat:100},
  {title:'Night Protection',ar:'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ',tr:'Allahumma bika amsayna wa bika asbahna wa bika nahya wa bika namutu wa ilaykal-masir',en:'O Allah, by You we enter the evening and by You we enter the morning, by You we live and die, and to You is the return.',repeat:1},
];

const PM={Fajr:{ar:'الفجر',icon:'🌙',rk:'2+2 Rakat',d:.1},Dhuhr:{ar:'الظهر',icon:'☀️',rk:'4+4+2+2',d:.2},Asr:{ar:'العصر',icon:'🌤️',rk:'4+4 Rakat',d:.3},Maghrib:{ar:'المغرب',icon:'🌅',rk:'3+2+2',d:.4},Isha:{ar:'العشاء',icon:'🌃',rk:'4+4+2+2',d:.5}};
const ARAB_P={Fajr:'الفجر',Dhuhr:'الظهر',Asr:'العصر',Maghrib:'المغرب',Isha:'العشاء'};
const DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MF=['January','February','March','April','May','June','July','August','September','October','November','December'];

let S={md:{},lat:null,lng:null,city:'',yr:new Date().getFullYear(),mo:new Date().getMonth()+1,di:0,timer:null,adhanPlayed:{},adhanIdx:0,currentSurah:1,nameIdx:0,tasbIdx:0,tasbCount:0,tasbTotal:0,qiblaAngle:null,deviceOrient:null,compassListener:null};

// ═══════════ VISUAL ═══════════
function createStars(){const c=document.getElementById('stars');for(let i=0;i<90;i++){const s=document.createElement('div');s.className='star';const sz=Math.random()*2.3+.4;s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;--dur:${(Math.random()*4+2).toFixed(1)}s;--del:${(Math.random()*5).toFixed(1)}s;--op:${(Math.random()*.6+.2).toFixed(2)}`;c.appendChild(s);}}
function initCanvas(){const cv=document.getElementById('geo-canvas'),ctx=cv.getContext('2d');let W,H,t=0;function r(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}r();window.addEventListener('resize',r);function draw(){ctx.clearRect(0,0,W,H);ctx.strokeStyle='#c9a84c';ctx.lineWidth=.5;const sp=120,cr=sp*.55;ctx.globalAlpha=.36;for(let r=-1;r<=Math.ceil(H/sp)+1;r++)for(let c=-1;c<=Math.ceil(W/sp)+1;c++){ctx.beginPath();ctx.arc(c*sp+(r%2?sp/2:0),r*sp,cr,0,Math.PI*2);ctx.stroke();}ctx.globalAlpha=.58;const st=(cx,cy,r,n,rot)=>{ctx.beginPath();for(let i=0;i<n*2;i++){const a=i*Math.PI/n+rot,rr=i%2?r*.42:r;i===0?ctx.moveTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr):ctx.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr);}ctx.closePath();ctx.stroke();};[{cx:W*.05,cy:H*.1,r:46},{cx:W*.95,cy:H*.15,r:38},{cx:W*.5,cy:H*.02,r:26}].forEach(s=>{st(s.cx,s.cy,s.r,8,t*.003);st(s.cx,s.cy,s.r*.65,8,-t*.003+Math.PI/8);});ctx.globalAlpha=1;t++;requestAnimationFrame(draw);}draw();}

// ═══════════ TAB SWITCHING ═══════════
function switchTab(name,btn){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('sec-'+name).classList.add('active');
  btn.classList.add('active');
  if(name==='quran'){buildSurahDD(S.currentSurah);if(!document.getElementById('quran-content').querySelector('.surah-header'))loadDailySurah();}
  if(name==='hadith'&&!document.getElementById('hcard').querySelector('.hcard-hdr'))loadHadith();
  if(name==='dhikr')initDhikr();
  if(name==='qibla')initQibla();
}
function switchDhikr(panel,btn){
  document.querySelectorAll('.dhikr-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.dstab').forEach(b=>b.classList.remove('active'));
  document.getElementById('panel-'+panel).classList.add('active');
  btn.classList.add('active');
  if(panel==='names')renderName(S.nameIdx);
}

// ═══════════ LOCATION ═══════════
function showManual(){document.getElementById('manual-wrap').style.display='block';document.getElementById('city-input').focus();}
function setErr(m){document.getElementById('loc-err').textContent=m;}
function requestLoc(){
  setErr('');
  if(!navigator.geolocation){setErr('Geolocation not supported.');showManual();return;}
  navigator.geolocation.getCurrentPosition(
    async p=>{S.lat=p.coords.latitude;S.lng=p.coords.longitude;showLoader('Locating city…');hideLoc();await revGeo();await loadMonth(S.yr,S.mo);},
    e=>{setErr({1:'Location denied.',2:'Unavailable.',3:'Timed out.'}[e.code]||'Error.');showManual();},{timeout:10000}
  );
}
async function fetchByCity(){const v=document.getElementById('city-input').value.trim();if(!v){setErr('Enter a city name.');return;}setErr('');S.city=v;S.lat=null;S.lng=null;showLoader('Fetching…');hideLoc();await loadMonth(S.yr,S.mo,v);}
async function revGeo(){setLdMsg('Finding city…');try{const r=await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${S.lat}&lon=${S.lng}&format=json`);const d=await r.json();const a=d.address;S.city=[a.city||a.town||a.village||a.county||'',a.state||'',a.country||''].filter(Boolean).join(', ');}catch{S.city=`${S.lat?.toFixed(3)||''},${S.lng?.toFixed(3)||''}`;}}
function resetLoc(){S.md={};S.lat=null;S.lng=null;S.city='';document.getElementById('app').style.display='none';document.getElementById('tab-nav').style.display='none';document.getElementById('loc-screen').classList.remove('hidden');document.getElementById('city-input').value='';document.getElementById('manual-wrap').style.display='none';setErr('');if(S.timer)clearInterval(S.timer);stopCompass();}

// ═══════════ PRAYER API ═══════════
function ck(y,m){const id=(S.city||'').replace(/[^a-zA-Z0-9]/g,'_').toLowerCase().slice(0,30);return`nz_${id}_${y}_${String(m).padStart(2,'0')}`;}
async function loadMonth(y,m,city){
  const k=ck(y,m);
  if(S.md[k]){onReady(y,m);return;}
  const c=localStorage.getItem(k),ts=localStorage.getItem(k+'_ts');
  if(c&&ts&&Date.now()-parseInt(ts)<86400000){S.md[k]=JSON.parse(c);onReady(y,m);return;}
  setLdMsg(`Loading ${MF[m-1]} ${y}…`);
  const addr=encodeURIComponent(city||S.city);
  const url=S.lat&&S.lng&&!city?`https://api.aladhan.com/v1/calendar/${y}/${m}?latitude=${S.lat}&longitude=${S.lng}&method=1&school=1`:`https://api.aladhan.com/v1/calendarByAddress/${y}/${m}?address=${addr}&method=1&school=1`;
  try{const r=await fetch(url);if(!r.ok)throw new Error('API '+r.status);const j=await r.json();if(j.code!==200)throw new Error('Bad');S.md[k]=j.data;localStorage.setItem(k,JSON.stringify(j.data));localStorage.setItem(k+'_ts',Date.now()+'');onReady(y,m);}catch(e){showErr(e.message);}
}
function onReady(y,m){
  S.yr=y;S.mo=m;const k=ck(y,m),data=S.md[k];
  const t=new Date(),cur=t.getFullYear()===y&&t.getMonth()+1===m;
  S.di=cur?t.getDate()-1:0;
  updMNav();renderCal(data);renderTable(data);renderDay(data[S.di]);updLocD();
  hideLoader();document.getElementById('app').style.display='block';document.getElementById('tab-nav').style.display='flex';
  setTimeout(()=>{loadDailySurah();loadHadith();initDhikr();},500);
}

// ═══════════ TIME UTILS ═══════════
const ct=t=>t?t.replace(/\s*\(.*?\)/g,''):'—';
function to12(t){if(!t)return'—';const[h,m]=ct(t).split(':').map(Number);return`${h%12||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`;}
function msUntil(t){const[h,m]=ct(t).split(':').map(Number);const n=new Date(),g=new Date();g.setHours(h,m,0,0);let d=g-n;if(d<0)d+=86400000;return d;}
function fmtMs(ms){const s=Math.floor(ms/1000);return[Math.floor(s/3600),Math.floor(s%3600/60),s%60].map(n=>String(n).padStart(2,'0')).join(':');}
function isToday(dd){const g=dd.date.gregorian,t=new Date();return+g.day===t.getDate()&&+g.month.number-1===t.getMonth()&&+g.year===t.getFullYear();}

// ═══════════ HIJRI DATE (Maghrib rollover) ═══════════
function getHijriDisplay(dayData,maghribTime){
  const now=new Date();
  if(isToday(dayData)&&maghribTime){
    const[h,m]=ct(maghribTime).split(':').map(Number);
    const mag=new Date();mag.setHours(h,m,0,0);
    if(now>=mag){
      // After Maghrib → show next day's Hijri date
      const k=ck(S.yr,S.mo),data=S.md[k];
      const nextIdx=S.di+0;
      if(nextIdx<data.length){
        const nH=data[nextIdx].date.hijri;
        return{hij:nH,afterMaghrib:true};
      }
      // Last day of month — increment manually
      const hij={...dayData.date.hijri,day:String(parseInt(dayData.date.hijri.day)+1)};
      return{hij,afterMaghrib:true};
    }
  }
  return{hij:dayData.date.hijri,afterMaghrib:false};
}

// ═══════════ RENDER DAY ═══════════
function renderDay(dd){
  const T=dd.timings,G=dd.date.gregorian;
  const{hij,afterMaghrib}=getHijriDisplay(dd,T.Maghrib);
  document.getElementById('chip-greg').textContent=`${G.weekday.en}, ${G.day} ${G.month.en} ${G.year}`;
  const hijChip=document.getElementById('chip-hij');
  hijChip.textContent=`${hij.day} ${hij.month.en} ${hij.year} AH${afterMaghrib?' 🌙':''}`;
  const hijWrap=document.getElementById('chip-hij-wrap');
  hijWrap.className=afterMaghrib?'chip hijri-after-maghrib':'chip';
  if(afterMaghrib)hijWrap.title='Islamic date has changed after Maghrib';
  document.getElementById('chip-meth').textContent=(dd.meta?.method?.name||'Karachi').split(',')[0];
  document.getElementById('d-dis').textContent=`${G.weekday.en}, ${G.day} ${MS[+G.month.number-1]} ${G.year}`;
  document.getElementById('cal-title').textContent=`${MF[S.mo-1]} ${S.yr} — Calendar`;
  document.getElementById('tbl-title').textContent=`${MF[S.mo-1]} ${S.yr} — Schedule`;
  updateNext(T,dd);if(S.timer)clearInterval(S.timer);
  S.timer=setInterval(()=>updateNext(T,dd),1000);
  const MAIN=['Fajr','Dhuhr','Asr','Maghrib','Isha'],now=new Date().getHours()*60+new Date().getMinutes();
  const g=document.getElementById('pgrid');g.innerHTML='';
  MAIN.forEach(k=>{
    const inf=PM[k],ts=ct(T[k]),pts=ts.split(':').map(Number),mins=pts[0]*60+pts[1];
    const nx=MAIN[MAIN.indexOf(k)+1],nm=nx?(p=>p[0]*60+p[1])(ct(T[nx]).split(':').map(Number)):1440;
    const act=isToday(dd)&&now>=mins&&now<nm;
    const c=document.createElement('div');c.className=`pcard${act?' active':''}`;c.style.animationDelay=inf.d+'s';
    c.innerHTML=`<span class="p-icon">${inf.icon}</span><span class="p-ar">${inf.ar}</span><span class="p-name">${k}</span><span class="p-time">${ts}</span><span class="p-12">${to12(T[k])}</span><span class="rakats">${inf.rk}</span>`;
    g.appendChild(c);
  });
  const EX=[{k:'Sunrise',l:'Sunrise',i:'🌄'},{k:'Sunset',l:'Sunset',i:'🌇'},{k:'Imsak',l:'Imsak',i:'🍽️'},{k:'Midnight',l:'Midnight',i:'🌌'},{k:'Lastthird',l:'Last Third',i:'🕯️'},{k:'Firstthird',l:'First Third',i:'⭐'}];
  const eg=document.getElementById('exgrid');eg.innerHTML='';
  EX.forEach((x,i)=>{if(!T[x.k])return;const c=document.createElement('div');c.className='excard';c.style.animationDelay=(.07+i*.06)+'s';c.innerHTML=`<span class="ex-lbl">${x.i} ${x.l}</span><span class="ex-time">${ct(T[x.k])}</span>`;eg.appendChild(c);});
}
function updateNext(T,dd){
  const MAIN=['Fajr','Dhuhr','Asr','Maghrib','Isha'];
  if(!isToday(dd)){document.getElementById('nx-name').textContent=MAIN[0];document.getElementById('nx-ar').textContent=ARAB_P[MAIN[0]];document.getElementById('cdown').textContent=ct(T[MAIN[0]]);return;}
  let best=null,bms=Infinity;MAIN.forEach(k=>{const ms=msUntil(T[k]);if(ms<bms){bms=ms;best=k;}});
  document.getElementById('nx-name').textContent=best;document.getElementById('nx-ar').textContent=ARAB_P[best]||'';document.getElementById('cdown').textContent=fmtMs(bms);
  const tk=new Date().toDateString()+'_'+best;
  if(bms<30000&&!S.adhanPlayed[tk]){S.adhanPlayed[tk]=true;triggerAdhan(best);}
}

// ═══════════ CALENDAR + TABLE ═══════════
function renderCal(data){
  const strip=document.getElementById('cal-strip');strip.innerHTML='';
  data.forEach((dd,i)=>{const G=dd.date.gregorian,H=dd.date.hijri,d=new Date(+G.year,+G.month.number-1,+G.day);const el=document.createElement('div');el.className=`cday${i===S.di?' sel':''}${isToday(dd)?' tdy':''}`;el.innerHTML=`<span class="cd-num">${G.day}</span><span class="cd-day">${DAYS[d.getDay()]}</span><span class="cd-hij">${H.day}</span>`;el.onclick=()=>selDay(i);strip.appendChild(el);});
  strip.children[Math.max(0,S.di-3)]?.scrollIntoView({inline:'start',behavior:'smooth'});
}
function renderTable(data){
  const tb=document.getElementById('tbdy');tb.innerHTML='';
  data.forEach((dd,i)=>{const G=dd.date.gregorian,T=dd.timings,d=new Date(+G.year,+G.month.number-1,+G.day);const row=document.createElement('tr');if(isToday(dd)||i===S.di)row.classList.add('trow');row.innerHTML=`<td class="td-date">${DAYS[d.getDay()]} ${G.day}</td><td>${ct(T.Fajr)}</td><td>${ct(T.Sunrise)}</td><td>${ct(T.Dhuhr)}</td><td>${ct(T.Asr)}</td><td>${ct(T.Maghrib)}</td><td>${ct(T.Isha)}</td><td>${ct(T.Midnight)||'—'}</td>`;row.onclick=()=>selDay(i);tb.appendChild(row);});
}
function selDay(i){S.di=i;const k=ck(S.yr,S.mo);renderDay(S.md[k][i]);document.querySelectorAll('.cday').forEach((el,j)=>el.classList.toggle('sel',j===i));document.querySelectorAll('#tbdy tr').forEach((r,j)=>{r.classList.toggle('trow',j===i||isToday(S.md[ck(S.yr,S.mo)][j]));});}
function changeDay(d){const k=ck(S.yr,S.mo),len=S.md[k]?.length||0,n=S.di+d;if(n>=0&&n<len)selDay(n);else if(n<0)changeMonth(-1);else changeMonth(1);}
function updMNav(){document.getElementById('m-dis').textContent=`${MF[S.mo-1]} ${S.yr}`;document.getElementById('btn-pm').disabled=S.yr<new Date().getFullYear()-1;document.getElementById('btn-nm').disabled=S.yr>new Date().getFullYear()+2;}
async function changeMonth(d){let m=S.mo+d,y=S.yr;if(m>12){m=1;y++;}if(m<1){m=12;y--;}showLoader(`Loading ${MF[m-1]} ${y}…`);await loadMonth(y,m);}

// ═══════════ ADHAN ═══════════
function triggerAdhan(n){const t=document.getElementById('adhan-toast');document.getElementById('at-prayer').textContent=n;document.getElementById('at-ar').textContent=ARAB_P[n]||'';t.classList.add('show');const a=document.getElementById('adhan-audio');a.src=ADHAN_URLS[0];a.play().then(()=>{document.getElementById('adhan-play-btn').textContent='⏸ Playing…';}).catch(()=>{});}
function playAdhan(){const a=document.getElementById('adhan-audio');if(a.paused){a.src=ADHAN_URLS[S.adhanIdx%ADHAN_URLS.length];a.play().catch(()=>{S.adhanIdx++;if(S.adhanIdx<ADHAN_URLS.length){a.src=ADHAN_URLS[S.adhanIdx];a.play().catch(()=>{})}});document.getElementById('adhan-play-btn').textContent='⏸ Playing…';}else{a.pause();a.currentTime=0;document.getElementById('adhan-play-btn').textContent='▶ Play Adhan';}}
function closeAdhan(){document.getElementById('adhan-toast').classList.remove('show');const a=document.getElementById('adhan-audio');a.pause();a.currentTime=0;}

// ═══════════ QIBLA ═══════════
function calcQibla(lat,lng){
  const lat1=lat*Math.PI/180,lat2=MECCA.lat*Math.PI/180,dLng=(MECCA.lng-lng)*Math.PI/180;
  const y=Math.sin(dLng)*Math.cos(lat2),x=Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLng);
  return((Math.atan2(y,x)*180/Math.PI)+360)%360;
}
function calcDistance(lat,lng){
  const R=6371,dLat=(MECCA.lat-lat)*Math.PI/180,dLng=(MECCA.lng-lng)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat*Math.PI/180)*Math.cos(MECCA.lat*Math.PI/180)*Math.sin(dLng/2)**2;
  return Math.round(R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)));
}
function buildCompassUI(qibla,distance){
  const body=document.getElementById('qibla-body');
  // Build 72 ticks (every 5 degrees)
  let ticks='';
  for(let i=0;i<72;i++){const isMaj=i%9===0;ticks+=`<div class="tick${isMaj?' major':' minor'}" style="transform:rotate(${i*5}deg) translateX(-50%)"></div>`;}
  body.innerHTML=`
    <div style="padding:1.2rem 1.2rem .5rem">
      <div class="compass-wrap">
        <div class="compass-ring" id="compass-ring">
          <div class="compass-ticks">${ticks}</div>
          <span class="c-s">S</span><span class="c-e">E</span><span class="c-w">W</span>
          <div class="needle-wrap" id="needle-wrap" style="transform:rotate(${qibla}deg)">
            <div class="needle" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">
              <div class="needle-up"><span class="kaaba-tip">🕋</span></div>
              <div class="needle-center"></div>
              <div class="needle-down"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="qibla-info">
      <div class="qibla-degree">${Math.round(qibla)}°</div>
      <div class="qibla-degree-sub">From North · Clockwise</div>
      <div class="qibla-city" id="qibla-city-txt">📍 ${S.city||'Your Location'} → 🕋 Mecca</div>
      <div class="qibla-distance">Distance to Mecca: <strong style="color:var(--gold-l)">${distance.toLocaleString()} km</strong></div>
      <div style="font-size:.66rem;color:var(--dim);margin-top:.5rem" id="compass-status">Point your phone flat • Face the gold needle toward Qibla</div>
    </div>`;
  S.qiblaAngle=qibla;
}
function initQibla(){
  if(!S.lat||!S.lng){document.getElementById('qibla-body').innerHTML=`<div class="qibla-permission-msg"><span class="qpm-icon">📍</span><div style="font-family:'Cinzel',serif;font-size:.88rem;color:var(--gold-l);margin-bottom:.5rem">Location Required</div><div style="font-size:.76rem;line-height:1.6;color:var(--dim)">Please use GPS location<br>for Qibla direction.</div></div>`;return;}
  const qibla=calcQibla(S.lat,S.lng);
  const dist=calcDistance(S.lat,S.lng);
  buildCompassUI(qibla,dist);
  startCompass();
}
function startCompass(){
  if(typeof DeviceOrientationEvent==='undefined')return;
  // iOS 13+ requires permission
  if(typeof DeviceOrientationEvent.requestPermission==='function'){
    DeviceOrientationEvent.requestPermission().then(r=>{if(r==='granted')listenCompass();}).catch(()=>{});
  }else{listenCompass();}
}
function listenCompass(){
  if(S.compassListener)return;
  S.compassListener=e=>{
    let heading=e.webkitCompassHeading||e.alpha;
    if(heading==null)return;
    // webkitCompassHeading is degrees from north clockwise
    // alpha is counterclockwise, so convert
    if(!e.webkitCompassHeading&&e.alpha!==null)heading=(360-e.alpha)%360;
    const needleRotation=(S.qiblaAngle-heading+360)%360;
    const wrap=document.getElementById('needle-wrap');
    if(wrap)wrap.style.transform=`rotate(${needleRotation}deg)`;
    const st=document.getElementById('compass-status');
    if(st)st.textContent=`Device heading: ${Math.round(heading)}° · Qibla: ${Math.round(S.qiblaAngle)}° from North`;
  };
  window.addEventListener('deviceorientationabsolute',S.compassListener,true);
  window.addEventListener('deviceorientation',S.compassListener,true);
}
function stopCompass(){if(S.compassListener){window.removeEventListener('deviceorientationabsolute',S.compassListener,true);window.removeEventListener('deviceorientation',S.compassListener,true);S.compassListener=null;}}

// ═══════════ QURAN ═══════════
function dailySurahNum(){const d=new Date();return((d.getDate()*31+d.getMonth()*7+d.getFullYear())%114)+1;}
function buildSurahDD(sel){const dd=document.getElementById('surah-dd');if(!dd||dd.options.length>0)return;SURAHS.forEach(([n,en,ar])=>{const o=document.createElement('option');o.value=n;o.textContent=`${n}. ${ar} — ${en}`;if(n===sel)o.selected=true;dd.appendChild(o);});}
function syncDD(num){const dd=document.getElementById('surah-dd');if(dd)dd.value=num;document.getElementById('btn-ps').disabled=num<=1;document.getElementById('btn-ns').disabled=num>=114;}
function navSurah(d){fetchSurah(Math.max(1,Math.min(114,S.currentSurah+d)));}
async function loadDailySurah(){S.currentSurah=dailySurahNum();buildSurahDD(S.currentSurah);await fetchSurah(S.currentSurah);}
async function loadRandomSurah(){S.currentSurah=Math.floor(Math.random()*114)+1;buildSurahDD(S.currentSurah);await fetchSurah(S.currentSurah);}
async function fetchSurah(num){
  S.currentSurah=num;buildSurahDD(num);syncDD(num);
  const qc=document.getElementById('quran-content');
  const cached=localStorage.getItem('qs_'+num);
  if(!cached&&qc)qc.innerHTML=`<div class="hcard" style="padding:1.8rem 1.2rem"><div class="skel-line" style="width:50%;margin:0 auto 14px"></div><div class="skel-line" style="width:90%"></div><div class="skel-line" style="width:78%"></div></div>`;
  let data=null;
  if(cached)data=JSON.parse(cached);
  else{try{const r=await fetch(QURAN_API+num+'.json');if(!r.ok)throw 0;data=await r.json();localStorage.setItem('qs_'+num,JSON.stringify(data));}catch{renderQuranErr();return;}}
  renderQuran(data);
}
function renderQuran(d){
  const qc=document.getElementById('quran-content');
  const reciters=d.audio?Object.entries(d.audio).map(([k,v])=>`<option value="${v.url}">${v.reciter}</option>`).join(''):'';
  const fa=d.audio?Object.values(d.audio)[0]?.url:'';
  qc.innerHTML=`<div class="surah-header">
    <div class="surah-banner">
      <div class="surah-meta"><span class="sbadge">📖 Surah ${d.surahNo}</span><span class="sbadge">${d.revelationPlace||''}</span><span class="sbadge teal">${d.totalAyah} Ayahs</span></div>
    </div>
    <div class="surah-title-wrap">
      <span class="surah-name-ar">${d.surahNameArabicLong||d.surahNameArabic}</span>
      <span class="surah-name-en">${d.surahName}</span>
      <span class="surah-name-tr">"${d.surahNameTranslation}"</span>
    </div>
    ${d.surahNo!==1?'<div class="bismillah-txt">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>':''}
    ${reciters?`<div class="audio-player"><select class="reciter-sel" id="reciter-sel" onchange="changeReciter(this.value)">${reciters}</select><button class="play-btn" id="play-btn" onclick="toggleAudio()">▶ Play</button></div><audio id="surah-audio" src="${fa}" preload="none" onended="resetPlayBtn()"></audio>`:''}
    <div class="ayah-tabs">
      <button class="atab active" onclick="qtab(event,'qa-ar')">العربية</button>
      <button class="atab" onclick="qtab(event,'qa-en')">English</button>
      ${d.urdu?`<button class="atab" onclick="qtab(event,'qa-ur')">اردو</button>`:''}
    </div>
    <div class="ayah-content active" id="qa-ar">${(d.arabic1||[]).map((a,i)=>`<div class="ayah-row"><span class="ayah-num">${i+1}</span><div class="ayah-ar">${a}</div></div>`).join('')}</div>
    <div class="ayah-content" id="qa-en">${(d.english||[]).map((a,i)=>`<div class="ayah-row"><span class="ayah-num">${i+1}</span><div class="ayah-en">${a}</div></div>`).join('')}</div>
    ${d.urdu?`<div class="ayah-content" id="qa-ur">${d.urdu.map((a,i)=>`<div class="ayah-row"><span class="ayah-num">${i+1}</span><div class="ayah-ur">${a}</div></div>`).join('')}</div>`:''}
  </div>`;
}
function qtab(e,id){document.querySelectorAll('.atab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.ayah-content').forEach(t=>t.classList.remove('active'));e.target.classList.add('active');document.getElementById(id)?.classList.add('active');}
function changeReciter(url){const a=document.getElementById('surah-audio');if(!a)return;const was=!a.paused;a.src=url;if(was)a.play();}
function toggleAudio(){const a=document.getElementById('surah-audio'),b=document.getElementById('play-btn');if(!a||!b)return;if(a.paused){a.play().then(()=>{b.classList.add('playing');b.textContent='⏸ Pause';}).catch(()=>{b.textContent='▶ Tap to Play';});}else{a.pause();b.classList.remove('playing');b.textContent='▶ Play';}}
function resetPlayBtn(){const b=document.getElementById('play-btn');if(b){b.classList.remove('playing');b.textContent='▶ Play';}}
function renderQuranErr(){document.getElementById('quran-content').innerHTML=`<div class="hcard" style="padding:1.5rem;text-align:center;color:var(--dim)"><div style="font-size:1.8rem;margin-bottom:.5rem">📖</div><div style="font-size:.8rem;margin-bottom:.8rem">Could not load Surah.</div><button onclick="loadDailySurah()" style="background:rgba(201,168,76,.12);border:1px solid var(--bdr);color:var(--gold);padding:.4rem .95rem;border-radius:17px;cursor:pointer;font-size:.73rem">Retry</button></div>`;}

// ═══════════ TASBEEH ═══════════
function initDhikr(){
  // Build preset row once
  const pr=document.getElementById('preset-row');
  if(pr&&pr.children.length===0){
    TASBEEH_PRESETS.forEach((p,i)=>{
      const b=document.createElement('button');b.className='tpreset'+(i===0?' active':'');
      b.innerHTML=`<span class="tpreset-ar">${p.icon}</span><span>${p.ar.split(' ')[0]}</span>`;
      b.onclick=()=>selectPreset(i,b);pr.appendChild(b);
    });
  }
  renderTasbeehPreset();
  // Build adhkar
  if(!document.getElementById('adhkar-morning').children.length)buildAdhkar();
  // Render first name
  renderName(S.nameIdx);
  buildNamesDots();
}
function selectPreset(i,btn){S.tasbIdx=i;S.tasbCount=0;document.querySelectorAll('.tpreset').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderTasbeehPreset();updateTasbUI();}
function renderTasbeehPreset(){const p=TASBEEH_PRESETS[S.tasbIdx];if(!p)return;document.getElementById('tasb-ar').textContent=p.ar;document.getElementById('tasb-en').textContent=p.en;document.getElementById('tasb-target').textContent=`Target: ${p.target}`;updateTasbUI();}
function tapTasbeeh(){
  S.tasbCount++;S.tasbTotal++;
  const p=TASBEEH_PRESETS[S.tasbIdx];
  updateTasbUI();
  // Haptic
  if(navigator.vibrate)navigator.vibrate(20);
  // Milestone
  const milestones=[33,66,99,100];
  if(milestones.includes(S.tasbCount)){showMilestone(p,S.tasbCount);}
  // Auto-reset after target
  if(S.tasbCount>p.target*2)S.tasbCount=0;
}
function updateTasbUI(){
  const p=TASBEEH_PRESETS[S.tasbIdx];
  document.getElementById('tasb-count').textContent=S.tasbCount;
  document.getElementById('tasb-total-btn').textContent=`Total: ${S.tasbTotal}`;
  const pct=Math.min(100,(S.tasbCount/p.target)*100);
  document.getElementById('tasb-prog').style.width=pct+'%';
}
function resetTasbeeh(){S.tasbCount=0;updateTasbUI();}
function showMilestone(p,count){
  const mp=document.getElementById('milestone-pop');
  const emojis={33:'✨',66:'🌙',99:'⭐',100:'🌟'};
  document.getElementById('ms-emoji').textContent=emojis[count]||'✨';
  document.getElementById('ms-text').textContent=p.ar.split('،')[0];
  document.getElementById('ms-sub').textContent=`${count}× completed! SubhanAllah 🤲`;
  mp.classList.add('show');if(navigator.vibrate)navigator.vibrate([50,30,80]);
  setTimeout(()=>mp.classList.remove('show'),2500);
}

// ═══════════ 99 NAMES ═══════════
function renderName(idx){
  const n=NAMES_99[idx];if(!n)return;
  const card=document.getElementById('name-card');
  if(!card)return;
  card.innerHTML=`<div class="name-num-badge">${idx+1} / 99</div><span class="name-arabic">${n[0]}</span><div class="name-translit">${n[1]}</div><div class="name-meaning">${n[2]}</div>`;
  card.style.animation='none';requestAnimationFrame(()=>{card.style.animation='nameFlip .35s ease both';});
  document.getElementById('name-counter').textContent=`${idx+1} / 99`;
  document.getElementById('name-prev').disabled=idx<=0;
  document.getElementById('name-next').disabled=idx>=98;
  // Update dots
  document.querySelectorAll('.ndot').forEach((d,i)=>d.classList.toggle('active',i===idx));
}
function navName(d){
  if(d==='random'){S.nameIdx=Math.floor(Math.random()*99);}
  else{S.nameIdx=Math.max(0,Math.min(98,S.nameIdx+d));}
  renderName(S.nameIdx);
}
function buildNamesDots(){
  const c=document.getElementById('names-dots');if(!c||c.children.length>0)return;
  NAMES_99.forEach((_,i)=>{const d=document.createElement('div');d.className='ndot'+(i===0?' active':'');d.onclick=()=>{S.nameIdx=i;renderName(i);};c.appendChild(d);});
}

// ═══════════ ADHKAR ═══════════
function buildAdhkar(){
  buildAdhkarSection('adhkar-morning',ADHKAR_MORNING);
  buildAdhkarSection('adhkar-evening',ADHKAR_EVENING);
}
function buildAdhkarSection(id,list){
  const c=document.getElementById(id);if(!c)return;
  c.innerHTML=list.map((d,i)=>`
    <div class="dua-card" style="animation-delay:${i*.07}s">
      <div class="dua-title">${d.title}</div>
      <div class="dua-arabic">${d.ar}</div>
      <div class="dua-transliteration">${d.tr}</div>
      <div class="dua-translation">${d.en}</div>
      <div><span class="dua-repeat">🔄 ${d.repeat}×</span></div>
    </div>`).join('');
}
function switchAdhkar(panel,btn){
  document.querySelectorAll('.adhkar-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.adhkar-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById('adhkar-'+panel).classList.add('active');btn.classList.add('active');
}

// ═══════════ HADITH ═══════════
async function loadHadith(){
  const c=localStorage.getItem('hz_h'),ts=localStorage.getItem('hz_ts');
  if(c&&ts&&Date.now()-parseInt(ts)<21600000){drawHadith(JSON.parse(c));return;}
  const pg=Math.floor(Math.random()*1619)+1;
  try{const r=await fetch(`https://hadithapi.com/public/api/hadiths?apiKey=${HADITH_KEY}&page=${pg}&paginate=25`);if(!r.ok)throw 0;const j=await r.json();const list=j?.hadiths?.data;if(!list?.length)throw 0;const h=list[Math.floor(Math.random()*list.length)];localStorage.setItem('hz_h',JSON.stringify(h));localStorage.setItem('hz_ts',Date.now()+'');drawHadith(h);}catch{drawHadithErr();}
}
function drawHadith(h){
  const book=h.book?.bookName||'Sahih Bukhari',chap=h.chapter?.chapterEnglish||'';
  document.getElementById('hcard').innerHTML=`<div class="hcard-hdr"><div class="hmeta"><span class="hbadge">📖 ${book}</span>${chap?`<span class="hbadge">${chap.length>26?chap.slice(0,26)+'…':chap}</span>`:''}<span class="hbadge g">✓ ${h.status||'Sahih'}</span></div><button class="rfbtn" id="rfbtn" onclick="refreshHadith()">↻</button></div>
  <div class="htabs"><button class="htab active" onclick="htab(event,'ht-en')">English</button><button class="htab" onclick="htab(event,'ht-ar')">العربية</button><button class="htab" onclick="htab(event,'ht-ur')">اردو</button></div>
  <div class="hbody"><div class="htab-c active" id="ht-en">${h.englishNarrator?`<div class="h-narr">${h.englishNarrator}</div>`:''}<div class="h-eng">${h.hadithEnglish||'—'}</div></div><div class="htab-c" id="ht-ar">${h.hadithArabic?`<div class="h-arabic">${h.hadithArabic}</div>`:'<div style="color:var(--dim);text-align:center;padding:1rem;font-size:.8rem">Arabic unavailable</div>'}</div><div class="htab-c" id="ht-ur">${h.hadithUrdu?`<div class="h-urdu">${h.hadithUrdu}</div>`:'<div style="color:var(--dim);text-align:center;padding:1rem;font-size:.8rem">Urdu unavailable</div>'}</div></div>
  <div class="hfooter"><span class="h-src">${book}${h.volume?' · Vol.'+h.volume:''}</span><span class="h-num">Hadith #${h.hadithNumber||'—'}</span></div>`;
}
function htab(e,id){document.querySelectorAll('.htab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.htab-c').forEach(t=>t.classList.remove('active'));e.target.classList.add('active');document.getElementById(id)?.classList.add('active');}
async function refreshHadith(){const b=document.getElementById('rfbtn');if(b){b.classList.add('spinning');b.disabled=true;}localStorage.removeItem('hz_h');localStorage.removeItem('hz_ts');await loadHadith();if(b){b.classList.remove('spinning');b.disabled=false;}}
function drawHadithErr(){document.getElementById('hcard').innerHTML=`<div style="padding:1.5rem;text-align:center;color:var(--dim)"><div style="font-size:1.8rem;margin-bottom:.5rem">📚</div><div style="font-size:.8rem;margin-bottom:.8rem">Could not load Hadith.</div><button onclick="refreshHadith()" style="background:rgba(201,168,76,.12);border:1px solid var(--bdr);color:var(--gold);padding:.4rem .95rem;border-radius:17px;cursor:pointer;font-size:.73rem">Try Again</button></div>`;}

// ═══════════ UTILS ═══════════
function updLocD(){const n=S.city||'Your Location';document.getElementById('loc-display').textContent=n;document.getElementById('chip-loc').textContent=n;}
function showLoader(m){document.getElementById('loader').classList.remove('hidden');setLdMsg(m||'Loading…');}
function hideLoader(){document.getElementById('loader').classList.add('hidden');}
function setLdMsg(m){const e=document.getElementById('loader-msg');if(e)e.textContent=m;}
function hideLoc(){document.getElementById('loc-screen').classList.add('hidden');}
function showErr(m){hideLoader();document.getElementById('loader').classList.remove('hidden');document.getElementById('loader').innerHTML=`<div style="text-align:center;padding:2rem"><div style="font-size:2rem;margin-bottom:.8rem">⚠️</div><h2 style="font-family:Cinzel,serif;color:var(--gold);margin-bottom:.5rem">Could Not Load</h2><p style="color:var(--dim);font-size:.78rem;margin-bottom:1rem">${m}</p><button onclick="location.reload()" style="padding:.45rem 1.1rem;background:rgba(201,168,76,.14);border:1px solid rgba(201,168,76,.4);color:var(--gold);border-radius:8px;cursor:pointer;font-family:Cinzel,serif">Retry</button></div>`;}

// ═══════════ INIT ═══════════
createStars();initCanvas();
(function restore(){const s=localStorage.getItem('nms_sess');if(s)try{const p=JSON.parse(s);if(p.city){S.city=p.city;S.lat=p.lat;S.lng=p.lng;showLoader('Restoring…');hideLoc();loadMonth(S.yr,S.mo);return;}}catch(e){}})();
window.addEventListener('pagehide',()=>{if(S.city)localStorage.setItem('nms_sess',JSON.stringify({city:S.city,lat:S.lat,lng:S.lng}));});
