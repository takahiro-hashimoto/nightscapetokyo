/**
 * Luminar Neo シミュレーター v3（7問構成・Proツール対応）
 */

document.addEventListener("DOMContentLoaded", function() {
  const host = document.getElementById('ln-sim-host');
  const template = document.getElementById('ln-sim-template');
  
  if (host && template && !host.shadowRoot) {
    const shadow = host.attachShadow({ mode: 'open' });
    
    // Font Awesome
    const faLink = document.createElement('link');
    faLink.setAttribute('rel', 'stylesheet');
    faLink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
    shadow.appendChild(faLink);
    
    // HTML注入
    shadow.appendChild(template.content.cloneNode(true));
    
    // 空pタグ削除
    shadow.querySelectorAll('p').forEach(p => {
      if (p.textContent.trim() === '' && p.children.length === 0) p.remove();
    });
    
    // CSS読み込み
    const cssUrl = host.getAttribute('data-css');
    if (cssUrl) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', cssUrl);
      link.onload = function() {
        setTimeout(() => {
          const loader = shadow.getElementById('lnLoader');
          if (loader) loader.style.display = 'none';
          const sim = shadow.getElementById('lnSim');
          if (sim) {
            sim.style.display = 'block';
            requestAnimationFrame(() => { sim.style.opacity = '1'; });
          }
          host.style.backgroundColor = 'transparent';
          host.style.minHeight = '0';
        }, 300);
      };
      shadow.appendChild(link);
    } else {
      const loader = shadow.getElementById('lnLoader');
      if (loader) loader.style.display = 'none';
      const sim = shadow.getElementById('lnSim');
      if (sim) { sim.style.display = 'block'; sim.style.opacity = '1'; }
      host.style.backgroundColor = 'transparent';
    }
    
    initLuminarSimulator(shadow);
  }
});

function initLuminarSimulator(root) {
  
  const CONFIG = {
    exchangeRate: 150,
    cvLink: 'https://skylum.evyy.net/mO9BEa',
    prices: {
      desktop: { jpy: 15980 },
      crossDevice: { jpy: 19980 },
      max: { jpy: 21980 },
      upgradePass: { usd: 49 },
      ecosystemPass: { usd: 69 }
    }
  };
  
  const upgradePassJpy = Math.round(CONFIG.prices.upgradePass.usd * CONFIG.exchangeRate / 100) * 100;
  const ecosystemPassJpy = Math.round(CONFIG.prices.ecosystemPass.usd * CONFIG.exchangeRate / 100) * 100;
  
  const answers = {};
  let currentQ = 1;
  const totalQ = 7;
  
  // --- 選択肢クリック ---
  root.querySelectorAll('.ln-sim-option').forEach(option => {
    option.addEventListener('click', function() {
      const question = this.closest('.ln-sim-question');
      const qNum = parseInt(question.dataset.q);
      const value = this.dataset.value;
      
      answers[qNum] = value;
      
      const currentStep = root.querySelector(`.ln-sim-progress-step[data-step="${qNum}"]`);
      if (currentStep) {
        currentStep.classList.remove('active');
        currentStep.classList.add('done');
      }
      
      let nextQ = qNum + 1;
      
      // Q2でPCを選んだらQ3をスキップ
      if (qNum === 2 && value === 'pc') {
        answers[3] = 'pc-only';
        const step3 = root.querySelector(`.ln-sim-progress-step[data-step="3"]`);
        if (step3) step3.classList.add('done');
        nextQ = 4;
      }
      
      // Q6の後、Q1がbasicならQ7をスキップ（Proツール不要なので）
      // Q1がgenaiの場合もQ7をスキップ（生成AIは毎年パス必要なので選択の余地なし）
      if (qNum === 6) {
        const editing = answers[1];
        if (editing === 'basic' || editing === 'genai') {
          answers[7] = editing === 'basic' ? 'skip' : 'continue';
          const step7 = root.querySelector(`.ln-sim-progress-step[data-step="7"]`);
          if (step7) step7.classList.add('done');
          question.classList.remove('active');
          showResult();
          return;
        }
      }
      
      if (nextQ <= totalQ) {
        question.classList.remove('active');
        const nextQuestionEl = root.querySelector(`.ln-sim-question[data-q="${nextQ}"]`);
        const nextStepEl = root.querySelector(`.ln-sim-progress-step[data-step="${nextQ}"]`);
        if (nextQuestionEl) nextQuestionEl.classList.add('active');
        if (nextStepEl) nextStepEl.classList.add('active');
        currentQ = nextQ;
      } else {
        question.classList.remove('active');
        showResult();
      }
    });
  });
  
  // --- イベントデリゲーション ---
  root.addEventListener('click', function(e) {
    if (e.target.closest('.ln-sim-details-toggle')) toggleDetails();
    if (e.target.closest('.ln-sim-restart')) restartSim();
  });
  
  // --- 結果表示 ---
  function showResult() {
    const result = calcResult();
    const resultEl = root.getElementById('lnSimResult');
    
    let costHtml = '';
    
    if (result.noFutureCost) {
      costHtml = `
        <div class="ln-sim-cost-free">
          <span class="ln-sim-cost-free-badge"><i class="fa-solid fa-check"></i> 追加費用なし</span>
          <div class="ln-sim-cost-free-price">¥${result.totalJpy.toLocaleString()}</div>
          <div class="ln-sim-cost-free-note">${result.costNote}</div>
        </div>
      `;
    } else if (result.passOnceOnly) {
      // Proツールのみ永続（パス1年だけ）
      costHtml = `
        <div class="ln-sim-cost-once">
          <span class="ln-sim-cost-once-badge"><i class="fa-solid fa-star"></i> コスパ最強</span>
          <table class="ln-sim-cost-table">
            <tr>
              <td>初期費用<span class="u-sp-block">（${result.plan.name}）</span></td>
              <td>¥${result.plan.jpy.toLocaleString()}</td>
            </tr>
            <tr>
              <td>＋パス1年<span class="u-sp-block">（${result.passName}）</span></td>
              <td>
                約¥${result.passJpy.toLocaleString()}
                <span class="sub-price">$${result.passUsd}×${CONFIG.exchangeRate}円換算</span>
              </td>
            </tr>
            <tr class="total">
              <td>合計（Proツール永続）</td>
              <td>約¥${result.totalJpy.toLocaleString()}</td>
            </tr>
          </table>
          <div class="ln-sim-cost-once-note">
            <i class="fa-solid fa-circle-info"></i>
            一度パスを購入すれば、<strong>Proツールは永続的に使えます</strong>。<br>
            2年目以降のパス更新は任意です（生成AI機能を継続したい場合のみ）。
          </div>
        </div>
      `;
    } else {
      costHtml = `
        <table class="ln-sim-cost-table">
          <tr>
            <td>初期費用<span class="u-sp-block">（${result.plan.name}）</span></td>
            <td>¥${result.plan.jpy.toLocaleString()}</td>
          </tr>
          <tr>
            <td>2年目以降<span class="u-sp-block">（${result.passName}）</span></td>
            <td>
              約¥${result.passJpy.toLocaleString()} / 年
              <span class="sub-price">$${result.passUsd}×${CONFIG.exchangeRate}円換算</span>
            </td>
          </tr>
          <tr class="total">
            <td>${result.years}年間の合計</td>
            <td>約¥${result.totalJpy.toLocaleString()}</td>
          </tr>
        </table>
      `;
    }
    
    const html = `
      <div class="ln-sim-conclusion">
        <div class="ln-sim-conclusion-icon">
          <i class="${result.iconClass}"></i>
        </div>
        <div class="ln-sim-conclusion-headline">${result.headline}</div>
        
        <div class="ln-sim-conclusion-license-label">▼ 最初に買うべきライセンス ▼</div>
        <div class="ln-sim-conclusion-license-name">${result.plan.name}</div>
        <div class="ln-sim-conclusion-license-price">¥${result.plan.jpy.toLocaleString()}</div>
        ${result.needsPass ? `<div class="ln-sim-conclusion-pass-note">＋${result.passName}（約¥${result.passJpy.toLocaleString()}）</div>` : ''}
        
        <div class="ln-sim-conclusion-message">${result.message}</div>
        
        <a href="${CONFIG.cvLink}" target="_blank" rel="noopener" class="ln-sim-cta">
          Luminar Neo を購入する <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      
      <div class="ln-sim-cost">
        <div class="ln-sim-cost-title"><i class="fa-solid fa-coins"></i> コストまとめ</div>
        ${costHtml}
      </div>
      
      <div class="ln-sim-details" id="lnSimDetails">
        <button class="ln-sim-details-toggle">
          <span>Proツールとパスについて詳しく</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="ln-sim-details-content">
          <div class="ln-sim-details-intro">
            <strong>【重要】Proツールは買い切りプランに含まれていません</strong><br>
            Proツール（Noiseless AI、HDR Mergeなど8種）を使うには、パスの購入が必要です。<br>
            ただし、<span class="highlight">一度パスを購入すれば、Proツールは永続的に使えます</span>。
          </div>
          <table class="ln-sim-compare-table">
            <thead>
              <tr>
                <th></th>
                <th>買い切りのみ</th>
                <th>＋パス1年<br><small>（コスパ◎）</small></th>
                <th>＋パス毎年</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>基本機能<br><small>Sky AI、補正AI、電線除去など</small></td>
                <td class="circle">○<br><small>永続</small></td>
                <td class="circle">○<br><small>永続</small></td>
                <td class="circle">○<br><small>永続</small></td>
              </tr>
              <tr>
                <td>Proツール<br><small>Noiseless AI、HDR Mergeなど8種</small></td>
                <td class="cross">×</td>
                <td class="circle">○<br><small>永続</small></td>
                <td class="circle">○<br><small>永続</small></td>
              </tr>
              <tr>
                <td>生成AI機能<br><small>GenErase、GenSwap、GenExpand</small></td>
                <td class="triangle">△<br><small>1年のみ</small></td>
                <td class="triangle">△<br><small>1年延長</small></td>
                <td class="circle">○<br><small>継続</small></td>
              </tr>
              <tr>
                <td>最新アップデート</td>
                <td class="cross">×</td>
                <td class="triangle">△<br><small>1年のみ</small></td>
                <td class="circle">○<br><small>継続</small></td>
              </tr>
              <tr>
                <td>価格（税込目安）</td>
                <td>¥15,980〜</td>
                <td>約¥23,380〜</td>
                <td>約¥23,380〜<br><small>＋¥${upgradePassJpy.toLocaleString()}/年</small></td>
              </tr>
            </tbody>
          </table>
          <div class="ln-sim-details-note">
            ※アップグレードパス：約¥${upgradePassJpy.toLocaleString()}/年（$${CONFIG.prices.upgradePass.usd}）<br>
            ※エコシステムパス：約¥${ecosystemPassJpy.toLocaleString()}/年（$${CONFIG.prices.ecosystemPass.usd}）- モバイルアプリ付き
          </div>
        </div>
      </div>
      
      <button class="ln-sim-restart">
        <i class="fa-solid fa-arrow-rotate-left"></i>
        もう一度シミュレーションする
      </button>
    `;
    
    resultEl.innerHTML = html;
    resultEl.classList.add('active');
    
    const progressEl = root.querySelector('.ln-sim-progress');
    if (progressEl) progressEl.style.display = 'none';
    
    const headerEl = root.querySelector('.ln-sim-header');
    if (headerEl) {
      headerEl.innerHTML = `<div class="ln-sim-title">シミュレーション結果</div>`;
    }
  }
  
  // --- 計算ロジック ---
  function calcResult() {
    const editing = answers[1];      // basic / pro / genai
    const device = answers[2];       // pc / multi
    const mobileAfter = answers[3];  // pc-only / mobile-continue
    const frequency = answers[4];    // low / mid / high
    const wantExtras = answers[5];   // no / yes
    const years = parseInt(answers[6]);
    const proUsage = answers[7];     // once / continue / skip
    
    let plan, passName, passUsd, passJpy, totalJpy, headline, message, iconClass;
    let noFutureCost = false;
    let passOnceOnly = false;
    let needsPass = false;
    let costNote = '';
    
    // ライセンス決定
    if (wantExtras === 'yes') {
      plan = { name: 'Maxライセンス', jpy: CONFIG.prices.max.jpy };
    } else if (device === 'multi') {
      plan = { name: 'クロスデバイスライセンス', jpy: CONFIG.prices.crossDevice.jpy };
    } else {
      plan = { name: 'デスクトップライセンス', jpy: CONFIG.prices.desktop.jpy };
    }
    
    // パス決定
    if (device === 'multi' && mobileAfter === 'mobile-continue') {
      passName = 'エコシステムパス';
      passUsd = CONFIG.prices.ecosystemPass.usd;
      passJpy = ecosystemPassJpy;
    } else {
      passName = 'アップグレードパス';
      passUsd = CONFIG.prices.upgradePass.usd;
      passJpy = upgradePassJpy;
    }
    
    // 頻度テキスト
    const freqText = {
      low: '趣味ペースで楽しむ',
      mid: '週1〜2回しっかり編集する',
      high: '本格的に取り組む'
    };
    
    // ケース分岐
    if (editing === 'basic') {
      // 基本機能のみ → パス不要
      noFutureCost = true;
      totalJpy = plan.jpy;
      costNote = `初期費用のみ・${years}年間ずっとこの価格`;
      iconClass = 'fa-solid fa-circle-check';
      headline = '追加費用なしでずっと使える！';
      message = `${freqText[frequency]}あなたが使いたい基本機能（Sky AI、補正AI、電線除去など）は、すべて<strong>買い切りプラン</strong>に含まれています。追加費用なしで永続的に使えます！`;
      
    } else if (editing === 'pro' && proUsage === 'once') {
      // Proツールのみ永続（パス1年だけ）
      passOnceOnly = true;
      needsPass = true;
      totalJpy = plan.jpy + passJpy;
      iconClass = 'fa-solid fa-star';
      headline = 'コスパ最強の買い方！';
      message = `${freqText[frequency]}あなたには、<strong>買い切り＋パス1年だけ</strong>がおすすめ。一度パスを購入すれば、<strong>Proツール（Noiseless AI、HDR Mergeなど）は永続的に使えます</strong>。2年目以降の追加費用は不要です！`;
      
    } else if (editing === 'pro' && proUsage === 'continue') {
      // Proツール＋生成AI継続
      needsPass = true;
      totalJpy = plan.jpy + passJpy * years;
      const monthlyApprox = Math.round(totalJpy / (years * 12));
      iconClass = 'fa-solid fa-rocket';
      headline = '全機能フル活用プラン';
      message = `${freqText[frequency]}あなたには、<strong>Proツール＋生成AI機能</strong>をフル活用するプランがおすすめ。${years}年間で約¥${totalJpy.toLocaleString()}、月換算で<strong>約¥${monthlyApprox.toLocaleString()}</strong>です。`;
      
    } else if (editing === 'genai' && years === 1) {
      // 生成AI希望・1年のみ
      noFutureCost = true;
      totalJpy = plan.jpy;
      costNote = '初年度は生成AI含め全機能が使い放題';
      iconClass = 'fa-solid fa-lightbulb';
      headline = 'まずは1年、試してみよう！';
      message = `初年度は<strong>生成AI含め全機能が使い放題</strong>。${freqText[frequency]}あなたも、まずは1年じっくり試して、継続はその時に判断しましょう。`;
      
    } else if (editing === 'genai') {
      // 生成AI希望・複数年
      needsPass = true;
      totalJpy = plan.jpy + passJpy * (years - 1);
      const monthlyApprox = Math.round(totalJpy / (years * 12));
      iconClass = 'fa-solid fa-wand-magic-sparkles';
      headline = '生成AIをフル活用！';
      message = `${freqText[frequency]}あなたには、<strong>生成AI機能</strong>を継続的に使えるプランがおすすめ。2年目以降は<strong>${passName}</strong>で継続できます。${years}年間で約¥${totalJpy.toLocaleString()}、月換算で<strong>約¥${monthlyApprox.toLocaleString()}</strong>です。`;
    }
    
    // デバイス・講座によるメッセージ補足
    if (device === 'multi' && mobileAfter === 'mobile-continue' && !noFutureCost && !passOnceOnly) {
      message += `<br><br>モバイル連携を続けるには<strong>エコシステムパス</strong>が必要です。`;
    }
    
    if (wantExtras === 'yes' && editing === 'basic') {
      iconClass = 'fa-solid fa-graduation-cap';
      headline = '効率よく上達したいあなたへ';
      message = `${freqText[frequency]}あなたには、<strong>動画講座＆プリセット100個以上付き</strong>のMaxライセンスがおすすめ。基本機能は永久に使えるので、買い切りだけでOKです。`;
    }
    
    return { 
      plan, passName, passUsd, passJpy, totalJpy, 
      headline, message, iconClass, 
      noFutureCost, passOnceOnly, needsPass, 
      years, costNote 
    };
  }
  
  // --- 詳細トグル ---
  function toggleDetails() {
    const detailsEl = root.getElementById('lnSimDetails');
    if (detailsEl) detailsEl.classList.toggle('open');
  }
  
  // --- リスタート ---
  function restartSim() {
    Object.keys(answers).forEach(k => delete answers[k]);
    currentQ = 1;
    
    root.querySelectorAll('.ln-sim-question').forEach(q => q.classList.remove('active'));
    const q1 = root.querySelector('.ln-sim-question[data-q="1"]');
    if (q1) q1.classList.add('active');
    
    const resultEl = root.getElementById('lnSimResult');
    if (resultEl) { resultEl.classList.remove('active'); resultEl.innerHTML = ''; }
    
    root.querySelectorAll('.ln-sim-progress-step').forEach(step => {
      step.classList.remove('active', 'done');
    });
    const step1 = root.querySelector('.ln-sim-progress-step[data-step="1"]');
    if (step1) step1.classList.add('active');
    
    const progressEl = root.querySelector('.ln-sim-progress');
    if (progressEl) progressEl.style.display = 'flex';
    
    const headerEl = root.querySelector('.ln-sim-header');
    if (headerEl) {
      headerEl.innerHTML = `
        <div class="ln-sim-title">Luminar Neo <span class="u-sp-block">料金シミュレーター</span></div>
        <div class="ln-sim-subtitle">7つの質問で最適プランと将来コストを算出</div>
      `;
    }
    
    const host = document.getElementById('ln-sim-host');
    if (host) {
      host.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}