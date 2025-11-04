const acceptButtons = Array.from(
  document.querySelectorAll('button.cta.cta_primary.ng-star-inserted')
).filter(btn => btn.textContent.trim() === 'Accept');

console.log('找到 Accept 按钮数量:', acceptButtons.length);

async function clickAcceptButtons(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    console.log(`准备点击第 ${i + 1} 个 Accept 按钮`);
    btn.click();
    console.log(`✅ 已点击第 ${i + 1} 个`);

    // 随机延迟 1–4 秒
    const delay = Math.floor(Math.random() * 10000) + 3000;
    console.log(`⏳ 等待 ${delay / 1000} 秒后继续...`);
    await new Promise(r => setTimeout(r, delay));
  }
  console.log('🎯 所有 Accept 按钮已处理完成');
}

clickAcceptButtons(acceptButtons);