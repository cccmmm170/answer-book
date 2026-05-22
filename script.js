let currentAnswer = null;
let lastAnswerKey = '';
let audioCtx = null;
let masterGain = null;
let delayNode = null;
let feedbackGain = null;
let musicNodes = [];
let musicTimer = null;
let shimmerTimer = null;
let isMusicPlaying = false;
let userStoppedMusic = false;

function getAllAnswers() {
  const all = [];
  for (const [category, items] of Object.entries(answersDB)) {
    items.forEach((item, idx) => {
      all.push({ ...item, category, key: `${category}-${idx}` });
    });
  }
  return all;
}

function getRandomAnswer() {
  const all = getAllAnswers();
  let answer;
  do {
    answer = all[Math.floor(Math.random() * all.length)];
  } while (answer.key === lastAnswerKey && all.length > 1);
  lastAnswerKey = answer.key;
  currentAnswer = answer;
  return answer;
}

function getTotalCount() {
  return getAllAnswers().length;
}

function createIntroParticles() {
  const container = document.getElementById('introParticles');
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'intro-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 3 + 's';
    p.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(p);
  }
}

function createAnswerParticles() {
  const container = document.getElementById('answerParticles');
  container.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'answer-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 5 + 's';
    p.style.animationDuration = (Math.random() * 5 + 6) + 's';
    container.appendChild(p);
  }
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function startMeditation() {
  showScreen('meditationScreen');
  const texts = ['闭上眼睛', '在心中默念你的问题', '集中注意力...', '答案即将揭晓'];
  const textEl = document.getElementById('meditationText');
  const hintEl = document.querySelector('.meditation-hint');
  let step = 0;
  textEl.style.opacity = '1';
  hintEl.style.opacity = '0';

  function nextStep() {
    if (step < texts.length) {
      textEl.style.transition = 'opacity 0.3s ease';
      textEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = texts[step];
        textEl.style.opacity = '1';
        if (step === 1) {
          hintEl.style.transition = 'opacity 0.5s ease';
          hintEl.style.opacity = '1';
        }
        step++;
        if (step < texts.length) {
          setTimeout(nextStep, 1800);
        } else {
          setTimeout(revealAnswer, 1500);
        }
      }, 300);
    }
  }
  nextStep();
}

function updateAnswerView(answer) {
  const total = getTotalCount();
  const index = getAllAnswers().findIndex(a => a.key === answer.key) + 1;

  document.getElementById('answerCategory').textContent = '— 命运给你的这一页 —';
  document.getElementById('answerText').textContent = answer.zh;
  document.getElementById('answerMessage').textContent = answer.msg || '请相信此刻出现的文字，它并不是命令，而是一束照向内心的光。';
  document.getElementById('answerEnglish').textContent = answer.en;
  document.getElementById('cardNumber').textContent = `No.${String(index).padStart(3, '0')} / ${total}`;
}

function revealAnswer() {
  const answer = getRandomAnswer();
  updateAnswerView(answer);

  createAnswerParticles();
  showScreen('answerScreen');

  const card = document.getElementById('answerCard');
  card.classList.remove('refreshing', 'fade-out', 'fade-in');
  card.style.animation = 'none';
  void card.offsetHeight;
  card.style.animation = '';
}

function askAgain() {
  const card = document.getElementById('answerCard');
  const againBtn = document.getElementById('btnAgain');
  againBtn.disabled = true;
  card.classList.add('refreshing', 'is-changing');

  setTimeout(() => {
    card.classList.add('fade-out');
  }, 120);

  setTimeout(() => {
    const answer = getRandomAnswer();
    updateAnswerView(answer);

    card.classList.remove('fade-out', 'is-changing');
    card.classList.add('fade-in');

    setTimeout(() => {
      card.classList.remove('fade-in');
      againBtn.disabled = false;
    }, 520);
  }, 760);
}

function generateShareImage() {
  if (!currentAnswer) return;
  const canvas = document.getElementById('shareCanvas');
  const ctx = canvas.getContext('2d');
  const w = 750, h = 1000;
  canvas.width = w;
  canvas.height = h;

  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, '#1a1a2e');
  gradient.addColorStop(1, '#0a0a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  const cardX = 75, cardY = 120, cardW = 600, cardH = 700;
  ctx.fillStyle = '#fdf6e3';
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardW, cardH, 12);
  ctx.fill();

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
  ctx.lineWidth = 1.5;
  const cs = 50, m = 30;
  [[cardX+m, cardY+m+cs, cardX+m, cardY+m, cardX+m+cs, cardY+m],
   [cardX+cardW-m-cs, cardY+m, cardX+cardW-m, cardY+m, cardX+cardW-m, cardY+m+cs],
   [cardX+m, cardY+cardH-m-cs, cardX+m, cardY+cardH-m, cardX+m+cs, cardY+cardH-m],
   [cardX+cardW-m-cs, cardY+cardH-m, cardX+cardW-m, cardY+cardH-m, cardX+cardW-m, cardY+cardH-m-cs]
  ].forEach(([x1,y1,x2,y2,x3,y3]) => {
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3); ctx.stroke();
  });

  ctx.fillStyle = '#d4af37';
  ctx.font = '24px serif';
  ctx.textAlign = 'center';
  ctx.fillText('— 命运给你的这一页 —', w/2, cardY + 200);

  ctx.fillStyle = '#1a1a2e';
  ctx.font = 'bold 48px serif';
  const lines = wrapText(ctx, currentAnswer.zh, cardW - 120);
  const lh = 66;
  const startY = cardY + 325 - (lines.length - 1) * lh / 2;
  lines.forEach((line, i) => ctx.fillText(line, w/2, startY + i*lh));

  ctx.fillStyle = 'rgba(26, 26, 46, 0.68)';
  ctx.font = '26px serif';
  const msgLines = wrapText(ctx, currentAnswer.msg || '', cardW - 150).slice(0, 4);
  msgLines.forEach((line, i) => ctx.fillText(line, w/2, cardY + 500 + i * 42));

  ctx.fillStyle = 'rgba(26, 26, 46, 0.5)';
  ctx.font = 'italic 22px serif';
  ctx.fillText(currentAnswer.en, w/2, cardY + cardH - 105);

  ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
  ctx.font = '18px serif';
  ctx.fillText('ANSWER BOOK', w/2, h - 50);

  const modal = document.getElementById('shareModal');
  const preview = document.getElementById('sharePreview');
  const img = new Image();
  img.src = canvas.toDataURL('image/png');
  preview.innerHTML = '';
  preview.appendChild(img);
  modal.classList.add('active');
}

function createTone(frequency, volume, type = 'sine') {
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.value = volume;
  oscillator.connect(gain);
  gain.connect(delayNode);
  gain.connect(masterGain);
  oscillator.start();
  musicNodes.push({ oscillator, gain });
}

function createMagicMusicGraph() {
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  delayNode = audioCtx.createDelay(3.6);
  feedbackGain = audioCtx.createGain();
  delayNode.delayTime.value = 0.86;
  feedbackGain.gain.value = 0.42;
  masterGain.gain.value = 0.52;
  delayNode.connect(feedbackGain);
  feedbackGain.connect(delayNode);
  delayNode.connect(masterGain);
  masterGain.connect(audioCtx.destination);
}

function ensureMusicGraph() {
  if (!audioCtx || audioCtx.state === 'closed' || !masterGain || !delayNode) {
    createMagicMusicGraph();
  } else {
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    masterGain.gain.setTargetAtTime(0.52, audioCtx.currentTime, 0.12);
  }
}

function playBellTone() {
  if (!audioCtx || !isMusicPlaying) return;
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const scale = [146.83, 174.61, 220.00, 261.63, 293.66, 349.23, 392.00];
  oscillator.type = 'sine';
  oscillator.frequency.value = scale[Math.floor(Math.random() * scale.length)];
  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.13, audioCtx.currentTime + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.8);
  oscillator.connect(gain);
  gain.connect(delayNode);
  gain.connect(masterGain);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 5);
}

function playMelody() {
  if (!audioCtx || !isMusicPlaying) return;
  const now = audioCtx.currentTime;
  const melody = [220.00, 261.63, 246.94, 196.00, 174.61];
  melody.forEach((frequency, index) => {
    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now + index * 0.95);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.994, now + index * 0.95 + 0.84);
    gain.gain.setValueAtTime(0.0001, now + index * 0.95);
    gain.gain.exponentialRampToValueAtTime(0.055, now + index * 0.95 + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.95 + 1.45);
    oscillator.connect(gain);
    gain.connect(delayNode);
    gain.connect(masterGain);
    oscillator.start(now + index * 0.95);
    oscillator.stop(now + index * 0.95 + 1.6);
  });
}

function playShimmer() {
  if (!audioCtx || !isMusicPlaying) return;
  const now = audioCtx.currentTime;
  [523.25, 659.25, 783.99].forEach((frequency, index) => {
    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, now + index * 0.16);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.988, now + 2.2 + index * 0.16);
    gain.gain.setValueAtTime(0.0001, now + index * 0.16);
    gain.gain.exponentialRampToValueAtTime(0.035, now + 0.34 + index * 0.16);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 + index * 0.16);
    oscillator.connect(gain);
    gain.connect(delayNode);
    gain.connect(masterGain);
    oscillator.start(now + index * 0.16);
    oscillator.stop(now + 3.4 + index * 0.16);
  });
}

async function startMusic(auto = false) {
  if (isMusicPlaying) return;
  try {
    ensureMusicGraph();
    if (audioCtx.state === 'suspended') await audioCtx.resume();
    isMusicPlaying = true;
    createTone(32.70, 0.045, 'sine');
    createTone(49.00, 0.034, 'sine');
    createTone(98.00, 0.022, 'triangle');
    createTone(146.83, 0.014, 'sine');
    playBellTone();
    playMelody();
    playShimmer();
    musicTimer = setInterval(() => {
      playBellTone();
      playMelody();
    }, 9200);
    shimmerTimer = setInterval(playShimmer, 12800);
    setMusicButtonsActive(true);
  } catch (error) {
    if (!auto) console.warn('音乐播放失败，请检查浏览器权限。', error);
  }
}

function setMusicButtonsActive(active) {
  document.getElementById('btnMusic')?.classList.toggle('active', active);
  document.getElementById('btnMusicIntro')?.classList.toggle('active', active);
}

function stopMusic() {
  userStoppedMusic = true;
  isMusicPlaying = false;
  if (musicTimer) clearInterval(musicTimer);
  if (shimmerTimer) clearInterval(shimmerTimer);
  musicTimer = null;
  shimmerTimer = null;
  if (audioCtx && masterGain) masterGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.18);
  musicNodes.forEach(({ oscillator, gain }) => {
    if (audioCtx) gain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.12);
    setTimeout(() => {
      try { oscillator.stop(); } catch (error) { return; }
    }, 420);
  });
  musicNodes = [];
  setMusicButtonsActive(false);
}

function toggleMusic() {
  if (isMusicPlaying) {
    stopMusic();
  } else {
    userStoppedMusic = false;
    startMusic(false);
  }
}

function autoStartMusic() {
  startMusic(true);
  const unlock = () => {
    if (!isMusicPlaying && !userStoppedMusic) startMusic(true);
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('touchstart', unlock);
    window.removeEventListener('keydown', unlock);
  };
  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('touchstart', unlock, { once: true });
  window.addEventListener('keydown', unlock, { once: true });
}

function wrapText(ctx, text, maxWidth) {
  const chars = text.split('');
  const lines = [];
  let line = '';
  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth) {
      lines.push(line);
      line = char;
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);
  return lines;
}

document.addEventListener('DOMContentLoaded', () => {
  createIntroParticles();
  autoStartMusic();
  document.getElementById('btnStart').addEventListener('click', startMeditation);
  document.getElementById('btnMusicIntro').addEventListener('click', toggleMusic);
  document.getElementById('btnMusic').addEventListener('click', toggleMusic);
  document.getElementById('btnAgain').addEventListener('click', askAgain);
  document.getElementById('btnShare').addEventListener('click', generateShareImage);
  document.getElementById('btnCloseShare').addEventListener('click', () => {
    document.getElementById('shareModal').classList.remove('active');
  });
  document.getElementById('shareModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
  });
});
