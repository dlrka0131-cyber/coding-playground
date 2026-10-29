/* 엔트리 퀴즈 공용 데이터: 블록, 단계별 문제, 완성 미리보기
   (엔트리 퀴즈대회 연습 / 엔트리 퀴즈대회 실전이 같이 써요) */

// 블록 글자와 색은 엔트리 그대로. 코딩 놀이터 '엔트리 코드'의 초급 항목과 같아요.
const BL = {
    start:  {c:'start', t:'시작하기 버튼을 클릭했을 때'},
    click:  {c:'start', t:'오브젝트를 클릭했을 때'},
    mclick: {c:'start', t:'마우스를 클릭했을 때'},
    key:    {c:'start', t:'스페이스 키를 눌렀을 때'},
    loop:   {c:'flow',  t:'계속 반복하기'},
    times4: {c:'flow',  t:'4번 반복하기'},
    times5: {c:'flow',  t:'5번 반복하기'},
    times10:{c:'flow',  t:'10번 반복하기'},
    wait:   {c:'flow',  t:'0.1초 기다리기'},
    wait1:  {c:'flow',  t:'1초 기다리기'},
    wait05a:{c:'flow',  t:'0.5초 기다리기'},
    wait05b:{c:'flow',  t:'0.5초 기다리기'},
    next:   {c:'looks', t:'다음 모양으로 바꾸기'},
    grow:   {c:'looks', t:'크기를 10만큼 바꾸기'},
    hide:   {c:'looks', t:'모양 숨기기'},
    show:   {c:'looks', t:'모양 보이기'},
    hue:    {c:'looks', t:'색깔 효과를 10만큼 주기'},
    fade:   {c:'looks', t:'투명도 효과를 10만큼 주기'},
    hi:     {c:'looks', t:'안녕! 을(를) 2초 동안 말하기'},
    me:     {c:'looks', t:'나는 엔트리봇이야 을(를) 2초 동안 말하기'},
    s3:     {c:'looks', t:'3 을(를) 1초 동안 말하기'},
    s2:     {c:'looks', t:'2 을(를) 1초 동안 말하기'},
    s1:     {c:'looks', t:'1 을(를) 1초 동안 말하기'},
    go:     {c:'looks', t:'출발! 을(를) 1초 동안 말하기'},
    spin:   {c:'move',  t:'방향을 10만큼 회전하기'},
    rot5:   {c:'move',  t:'방향을 5만큼 회전하기'},
    rot90:  {c:'move',  t:'방향을 90만큼 회전하기'},
    rot144: {c:'move',  t:'방향을 144만큼 회전하기'},
    follow: {c:'move',  t:'마우스포인터 위치로 이동하기'},
    move:   {c:'move',  t:'이동 방향으로 5만큼 움직이기'},
    move60: {c:'move',  t:'이동 방향으로 60만큼 움직이기'},
    move100:{c:'move',  t:'이동 방향으로 100만큼 움직이기'},
    bounce: {c:'move',  t:'화면 끝에 닿으면 튕기기'},
    rnd:    {c:'move',  t:'x: 무작위 수  y: 무작위 수  위치로 이동하기'},
    dx5:    {c:'move',  t:'x 좌표를 5만큼 바꾸기'},
    dy5:    {c:'move',  t:'y 좌표를 5만큼 바꾸기'},
    glide:  {c:'move',  t:'2초 동안 x: 0 y: 100 위치로 이동하기'},
    fly:    {c:'move',  t:'2초 동안 x: 0 y: 300 만큼 움직이기'},
    stamp:  {c:'brush', t:'도장 찍기'},
    pen:    {c:'brush', t:'그리기 시작하기'},
    // 3단계: 만약, 변수
    ifspace:{c:'flow',  t:'만약 스페이스 키가 눌러져 있는가? (이)라면'},
    iftouch:{c:'flow',  t:'만약 엔트리봇에 닿았는가? (이)라면'},
    ifstar: {c:'flow',  t:'만약 별에 닿았는가? (이)라면'},
    times10b:{c:'flow', t:'10번 반복하기'},
    dx10:   {c:'move',  t:'x 좌표를 10만큼 바꾸기'},
    dyp10:  {c:'move',  t:'y 좌표를 10만큼 바꾸기'},
    dym10:  {c:'move',  t:'y 좌표를 -10만큼 바꾸기'},
    dyp2:   {c:'move',  t:'y 좌표를 2만큼 바꾸기'},
    dym2:   {c:'move',  t:'y 좌표를 -2만큼 바꾸기'},
    growp:  {c:'looks', t:'크기를 5만큼 바꾸기'},
    growm:  {c:'looks', t:'크기를 -5만큼 바꾸기'},
    score0: {c:'data',  t:'점수를 0으로 정하기'},
    scoreAdd:{c:'data', t:'점수에 1만큼 더하기'},
    sayScore:{c:'looks',t:'점수 값 을(를) 2초 동안 말하기'},
    time10: {c:'data',  t:'시간을 10으로 정하기'},
    timeSub:{c:'data',  t:'시간에 -1만큼 더하기'},
};
const CONT = ['loop', 'times4', 'times5', 'times10', 'times10b'];   // 이 블록 아래에 놓인 블록은 안쪽으로 들어가 보여요
const FRAMES = ['🥚', '🐣', '🐥'];

// 문제: fixed = 맨 앞에서부터 정해진 순서, any = 그 뒤 블록들(순서가 바뀌어도 같은 동작이면 둘 다 정답)
const LEVELS = [
    { name:'1단계', probs:[
        { title:'클릭하면 커지기', desc:'친구를 클릭할 때마다 쑥! 커지게 만들어요.',
          ids:['click','grow'], fixed:['click','grow'], any:[], preview:'grow', cap:'클릭했을 때 크기를 바꾸면 쑥쑥 커져요!' },
        { title:'말하기', desc:'엔트리봇이 인사를 하고, 이어서 자기소개를 하게 만들어요.',
          ids:['start','hi','me'], fixed:['start','hi','me'], any:[], preview:'talk', cap:'위에서 아래로 차례대로 말해요!' },
        { title:'빙글빙글 돌기', desc:'별이 방향을 조금씩 계속 돌려서 빙글빙글 돌게 만들어요.',
          ids:['start','loop','spin'], fixed:['start','loop','spin'], any:[], preview:'spin', cap:'계속 반복하는 안에서 조금씩 돌리면 빙글빙글!' },
        { title:'마우스 따라가기', desc:'마우스가 가는 곳으로 졸졸 따라오게 만들어요.',
          ids:['start','loop','follow'], fixed:['start','loop','follow'], any:[], preview:'follow', cap:'계속 반복하면서 마우스 위치로 이동해요!' },
        { title:'도장 찍기', desc:'마우스를 클릭하면 그 자리에 발자국 도장이 찍히게 만들어요.',
          ids:['mclick','follow','stamp'], fixed:['mclick','follow','stamp'], any:[], preview:'stamp', cap:'먼저 마우스 자리로 가고, 그다음 도장을 찍어요!' },
        { title:'애니메이션 만들기', desc:'그림(모양)을 빠르게 바꿔서 알이 병아리로 크는 애니메이션을 만들어요.',
          ids:['start','loop','next','wait'], fixed:['start','loop'], any:['next','wait'], preview:'frames', cap:'모양을 하나씩 빠르게 바꾸면 움직이는 것처럼 보여요!' },
        { title:'벽에 튕기기', desc:'공이 계속 앞으로 가다가, 벽에 닿으면 튕겨서 돌아오게 만들어요.',
          ids:['start','loop','move','bounce'], fixed:['start','loop'], any:['move','bounce'], preview:'bounce', cap:'계속 반복하는 안에서 움직이고 튕기면 벽 사이를 오가요!' },
        { title:'순간이동', desc:'토끼가 1초마다 아무 곳으로 뿅! 하고 나타나게 만들어요.',
          ids:['start','loop','rnd','wait1'], fixed:['start','loop'], any:['rnd','wait1'], preview:'teleport', cap:'무작위 위치로 이동하고 1초 쉬기를 계속 반복해요!' },
        { title:'카운트다운', desc:'3, 2, 1을 세고 "출발!"을 말하게 만들어요.',
          ids:['start','s3','s2','s1','go'], fixed:['start','s3','s2','s1','go'], any:[], preview:'count', cap:'숫자를 차례대로 말하고 출발!' },
        { title:'네모 그리기', desc:'붓으로 네모를 그려요. 네 번 반복하면서 가고, 돌아요.',
          ids:['start','pen','times4','move100','rot90'], fixed:['start','pen','times4'], any:['move100','rot90'], preview:'draw', cap:'가고 90도 돌기를 4번 하면 네모가 돼요!' },
    ]},
    { name:'2단계', probs:[
        { title:'부드럽게 날아가기', desc:'친구를 클릭하면 2초 동안 위로 스르르 날아가게 만들어요.',
          ids:['click','glide'], fixed:['click','glide'], any:[], preview:'glide', cap:'클릭하면 2초 동안 스르르 날아가요!' },
        { title:'대각선으로 날기', desc:'x와 y를 같이 바꿔서 비스듬히 날아가게 만들어요.',
          ids:['start','loop','dx5','dy5'], fixed:['start','loop'], any:['dx5','dy5'], preview:'diag', cap:'x와 y를 함께 바꾸면 비스듬히 날아가요!' },
        { title:'무지개 색 바꾸기', desc:'색깔이 알록달록 계속 바뀌게 만들어요.',
          ids:['start','loop','hue','wait'], fixed:['start','loop'], any:['hue','wait']
          , preview:'hue', cap:'색깔 효과를 조금씩 계속 주면 색이 바뀌어요!' },
        { title:'스르르 사라지기', desc:'10번 반복하면서 조금씩 투명해져 사라지게 만들어요.',
          ids:['start','times10','fade','wait'], fixed:['start','times10'], any:['fade','wait'], preview:'fade', cap:'투명도를 조금씩 올리면 스르르 사라져요!' },
        { title:'동그랗게 날기', desc:'조금 가고 조금 돌면서 동그라미를 그리며 날게 만들어요.',
          ids:['start','loop','move','rot5'], fixed:['start','loop'], any:['move','rot5'], preview:'orbit', cap:'조금 가고 조금 돌면 동그라미가 돼요!' },
        { title:'마우스로 그림 그리기', desc:'마우스를 따라다니며 선을 그리게 만들어요.',
          ids:['start','pen','loop','follow'], fixed:['start','pen','loop','follow'], any:[], preview:'paint', cap:'붓을 켜 두고 마우스 위치로 계속 이동해요!' },
        { title:'별 그리기', desc:'붓으로 별을 그려요. 다섯 번 반복하면서 가고, 돌아요.',
          ids:['start','pen','times5','move60','rot144'], fixed:['start','pen','times5'], any:['move60','rot144'], preview:'star', cap:'가고 144도 돌기를 5번 하면 별이 돼요!' },
        { title:'숨바꼭질', desc:'나타났다 사라졌다를 반복하는 유령을 만들어요.',
          ids:['start','loop','hide','wait05a','show','wait05b'], fixed:['start','loop','hide','wait05a','show','wait05b'], any:[], preview:'blink', cap:'숨기고 쉬고, 보이고 쉬기를 계속 반복해요!' },
        { title:'로켓 발사', desc:'3, 2, 1, 출발!을 말하고 하늘로 슝 날아가게 만들어요.',
          ids:['start','s3','s2','s1','go','fly'], fixed:['start','s3','s2','s1','go','fly'], any:[], preview:'count', cap:'숫자를 세고, 출발! 한 뒤에 날아가요!' },
        { title:'동그랗게 날며 그리기', desc:'날면서 동그라미 선을 그리게 만들어요.',
          ids:['start','pen','loop','move','rot5'], fixed:['start','pen','loop'], any:['move','rot5'], preview:'circledraw', cap:'붓을 켜고, 조금 가고 조금 돌면 동그라미가 그려져요!' },
    ]},
    { name:'3단계', probs:[
        { title:'점수 정하기', desc:'게임을 시작하면 점수를 0으로 정하고, 바로 1점을 올려요.',
          ids:['start','score0','scoreAdd'], fixed:['start','score0','scoreAdd'], any:[], preview:'seq', seq:['점수 0','점수 1'], cap:'먼저 0으로 정하고, 그다음에 1을 더해요!' },
        { title:'클릭하면 점수 올리기', desc:'클릭할 때마다 점수가 1점 오르고, 그 점수를 말하게 만들어요.',
          ids:['click','scoreAdd','sayScore'], fixed:['click','scoreAdd','sayScore'], any:[], preview:'seq', seq:['점수 1','점수 2','점수 3'], cap:'점수를 올린 다음에 말해야 올라간 점수를 말해요!' },
        { title:'키를 누르면 움직이기', desc:'스페이스 키를 누르고 있는 동안에만 오른쪽으로 가게 만들어요.',
          ids:['start','loop','ifspace','dx10'], fixed:['start','loop','ifspace','dx10'], any:[], indent:[0,0,1,2], preview:'bounce', emoji:'🐧', cap:'계속 확인하다가, 키가 눌러져 있으면 움직여요!' },
        { title:'닿으면 숨기기', desc:'사과가 엔트리봇에 닿으면 사라지게 만들어요.',
          ids:['start','loop','iftouch','hide'], fixed:['start','loop','iftouch','hide'], any:[], indent:[0,0,1,2], preview:'blink', emoji:'🍎', cap:'계속 확인하다가, 닿았으면 숨겨요!' },
        { title:'5번 세기', desc:'점수를 0으로 정하고, 5번 올린 다음, 점수를 말하게 만들어요.',
          ids:['start','score0','times5','scoreAdd','sayScore'], fixed:['start','score0','times5','scoreAdd','sayScore'], any:[], indent:[0,0,0,1,0], preview:'seq', seq:['점수 1','점수 2','점수 3','점수 4','점수 5'], cap:'반복 안에서 1씩 올리고, 끝난 뒤에 말해요!' },
        { title:'점프하기', desc:'스페이스 키를 누르면 위로 10번 올라갔다가 아래로 10번 내려오게 만들어요.',
          ids:['key','times10','dyp10','times10b','dym10'], fixed:['key','times10','dyp10','times10b','dym10'], any:[], indent:[0,0,1,0,1], preview:'jump', cap:'올라가기를 10번, 내려오기를 10번 하면 폴짝!' },
        { title:'별 모으기', desc:'별에 닿을 때마다 점수가 올라가게 만들어요.',
          ids:['start','score0','loop','ifstar','scoreAdd'], fixed:['start','score0','loop','ifstar','scoreAdd'], any:[], indent:[0,0,0,1,2], preview:'seq', seq:['점수 0','점수 1','점수 2','점수 3'], cap:'점수는 처음에 한 번만 정하고, 반복 안에서 확인해요!' },
        { title:'시간 줄이기', desc:'시간을 10으로 정하고, 1초마다 1씩 줄어들게 만들어요.',
          ids:['start','time10','times10','timeSub','wait1'], fixed:['start','time10','times10'], any:['timeSub','wait1'], indent:[0,0,0,1,1], preview:'seq', seq:['10','9','8','7','6','5','4','3','2','1','0'], speed:700, cap:'-1씩 더하면 숫자가 1씩 줄어들어요!' },
        { title:'둥실둥실', desc:'구름이 위로 조금씩 올라갔다가 아래로 내려오기를 계속하게 만들어요.',
          ids:['start','loop','times10','dyp2','times10b','dym2'], fixed:['start','loop','times10','dyp2','times10b','dym2'], any:[], indent:[0,0,1,2,1,2], preview:'float', cap:'올라가기와 내려오기를 계속 반복해요!' },
        { title:'커졌다 작아지기', desc:'풍선이 점점 커졌다가 점점 작아지기를 계속하게 만들어요.',
          ids:['start','loop','times10','growp','times10b','growm'], fixed:['start','loop','times10','growp','times10b','growm'], any:[], indent:[0,0,1,2,1,2], preview:'grow', cap:'크기를 10번 키우고, 10번 줄이기를 반복해요!' },
    ]}
];

// ---------- 정답 확인: 블록 글자가 같으면 같은 블록으로 봐요 (0.5초 기다리기 두 개 등) ----------
const _t = id => BL[id].t;
function eqCorrect(b, P) {
    const f = P.fixed.length;
    return b.length === P.ids.length && P.fixed.every((x, i) => _t(b[i]) === _t(x)) &&
        b.slice(f).map(_t).sort().join('|') === P.any.map(_t).sort().join('|');
}
// 틀린 칸 번호들
function eqBadIdx(b, P) {
    const tail = P.any.map(_t), bad = [];
    b.forEach((id, i) => {
        if (i < P.fixed.length) { if (_t(id) !== _t(P.fixed[i])) bad.push(i); }
        else { const k = tail.indexOf(_t(id)); if (k < 0) bad.push(i); else tail.splice(k, 1); }
    });
    return bad;
}

// ---------- 완성 미리보기 (st = 무대 요소). 끝낼 때 부르는 함수를 돌려줘요 ----------
(function () {
    const css = document.createElement('style');
    css.textContent = `
    .stage.play .obj.glide { animation: glidey 3s ease-in-out infinite; }
    @keyframes glidey { 0% { bottom: 8%; } 60%, 100% { bottom: 62%; } }
    .stage.play .obj.diag { animation: diagm 2.4s linear infinite; }
    @keyframes diagm { 0% { left: 8%; bottom: 10%; } 100% { left: 78%; bottom: 66%; } }
    .stage.play .obj.hue { animation: huer 2s linear infinite; }
    @keyframes huer { to { filter: hue-rotate(360deg); } }
    .stage.play .obj.fade { animation: fadeo 2s ease-in infinite; }
    @keyframes fadeo { 0% { opacity: 1; } 100% { opacity: 0; } }
    .stage.play .obj.blink { animation: blinkk 1.2s steps(1) infinite; }
    @keyframes blinkk { 0% { opacity: 1; } 50% { opacity: 0; } }
    .stage svg path, .stage svg circle { fill: none; stroke: #e5594a; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round;
        stroke-dasharray: 1; stroke-dashoffset: 1; animation: drw1 3s linear infinite; }
    @keyframes drw1 { 0% { stroke-dashoffset: 1; } 80%, 100% { stroke-dashoffset: 0; } }
    .data { --c: #e05fd0; }
    .blk.in2 { margin-left: calc(2 * clamp(18px, 4vh, 34px)); }
    .stage.play .obj.jump { animation: jumpy .7s ease-in-out infinite alternate; }
    @keyframes jumpy { from { bottom: 8%; } to { bottom: 58%; } }
    .stage.play .obj.float { animation: floaty 2.4s ease-in-out infinite alternate; }
    @keyframes floaty { from { bottom: 30%; } to { bottom: 58%; } }`;
    document.head.appendChild(css);
})();

function eqStage(st, P, play) {
    st.classList.toggle('play', play); st.innerHTML = '';
    let timer = null;
    const O = (cls, ch, style = '') => `<div class="obj ${cls}" style="${style}">${ch}</div>`;
    const mid = 'left:calc(50% - .5em);top:calc(50% - .5em)';
    const svg = inner => `<svg viewBox="0 0 100 100">${inner}</svg>`;
    const pencil = '<div class="cnt">✏️</div>';
    switch (P.preview) {
        case 'frames':
            st.textContent = FRAMES[0];
            if (play) { let k = 0; timer = setInterval(() => { k = (k + 1) % FRAMES.length; st.textContent = FRAMES[k]; }, 400); }
            break;
        case 'bounce': st.innerHTML = '<div class="ground"></div>' + O('bounce', P.emoji || '⚽', 'left:6%;bottom:14%'); break;
        case 'spin': st.innerHTML = O('spin', '⭐', mid); break;
        case 'grow': st.innerHTML = O('grow', '🍄', mid); break;
        case 'follow': st.innerHTML = O('wander', '🐭', 'left:15%;top:25%'); break;
        case 'paint': st.innerHTML = O('wander', '🖍️', 'left:15%;top:25%'); break;
        case 'glide': st.innerHTML = '<div class="ground"></div>' + O('glide', '🛸', 'left:calc(50% - .5em);bottom:8%'); break;
        case 'diag': st.innerHTML = O('diag', '🦅', 'left:8%;bottom:10%'); break;
        case 'hue': st.innerHTML = O('hue', '🦄', mid); break;
        case 'fade': st.innerHTML = O('fade', '🧚', mid); break;
        case 'blink': st.innerHTML = O('blink', P.emoji || '👻', mid); break;
        case 'orbit': st.innerHTML = '<div class="ground"></div>' + O('orbit', '🦋', 'left:calc(50% - .5em);top:calc(50% - .6em)'); break;
        case 'talk':
            st.innerHTML = O('', '🤖', 'left:calc(50% - .5em);bottom:6%') + '<div class="bubble" id="eqbub">…</div>';
            if (play) { const L = ['안녕!', '나는 엔트리봇이야']; let k = 0; st.querySelector('#eqbub').textContent = L[0];
                timer = setInterval(() => { k = (k + 1) % 2; st.querySelector('#eqbub').textContent = L[k]; }, 1400); }
            break;
        case 'stamp':
            st.innerHTML = O('', '🐾', mid + ';opacity:.35');
            if (play) { let n = 0; timer = setInterval(() => { if (n >= 7) { st.innerHTML = ''; n = 0; } const d = document.createElement('div'); d.className = 'obj';
                d.style.cssText = `left:${8 + Math.random() * 70}%;top:${8 + Math.random() * 60}%;font-size:clamp(24px,5vh,44px)`; d.textContent = '🐾'; st.appendChild(d); n++; }, 500); }
            break;
        case 'teleport':
            st.innerHTML = O('tp', '🐰', 'left:45%;top:40%');
            if (play) timer = setInterval(() => { const o = st.querySelector('.tp'); if (!o) return; o.style.left = (5 + Math.random() * 75) + '%'; o.style.top = (5 + Math.random() * 65) + '%'; }, 1000);
            break;
        case 'count':
            st.innerHTML = '<div class="cnt" id="eqcnt">🚀</div>';
            if (play) { const seq = ['3', '2', '1', '출발!', '🚀 슝~']; let k = 0; st.querySelector('#eqcnt').textContent = seq[0];
                timer = setInterval(() => { k = (k + 1) % seq.length; st.querySelector('#eqcnt').textContent = seq[k]; }, 900); }
            break;
        case 'seq':
            st.innerHTML = `<div class="cnt" id="eqseq">${P.seq[0]}</div>`;
            if (play) { let k = 0; timer = setInterval(() => { k = (k + 1) % P.seq.length; const e = st.querySelector('#eqseq'); if (e) e.textContent = P.seq[k]; }, P.speed || 900); }
            break;
        case 'jump': st.innerHTML = '<div class="ground"></div>' + O('jump', '🐸', 'left:calc(50% - .5em);bottom:8%'); break;
        case 'float': st.innerHTML = O('float', '☁️', 'left:calc(50% - .5em);bottom:30%'); break;
        case 'draw':
            st.innerHTML = play ? svg('<path pathLength="1" d="M20 80 V20 H80 V80 H20 Z"/>') : pencil; break;
        case 'star':
            st.innerHTML = play ? svg('<path pathLength="1" d="M50 6 L82 94 L8 38 L92 38 L18 94 Z"/>') : pencil; break;
        case 'circledraw':
            st.innerHTML = play ? svg('<circle pathLength="1" cx="50" cy="50" r="38" transform="rotate(-90 50 50)"/>') : pencil; break;
    }
    return () => clearInterval(timer);
}
