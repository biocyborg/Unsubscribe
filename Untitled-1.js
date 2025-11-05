// 获取目标按钮
const buttons = Array.from(document.querySelectorAll(
  '.cta.offer-tooltip__target.offer__connect-cta.cta_accent'
)).filter(btn => {
  const text = btn.textContent.trim();
  const disabled = btn.disabled || btn.classList.contains('disabled');
  return text === 'Apply for moderation' && !disabled;
});

console.log('找到符合条件的按钮数量:', buttons.length);

async function clickButtonsSequentially(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    console.log(`准备点击第 ${i + 1} 个按钮:`, btn);

    // 模拟点击
    btn.click();
    console.log(`✅ 已点击第 ${i + 1} 个`);

    // 随机延迟 1~6 秒
    const delay = Math.floor(Math.random() * 5000) + 1000;
    console.log(`⏳ 等待 ${delay / 1000} 秒后点击下一个...`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  console.log('🎯 所有按钮已点击完成');
}

clickButtonsSequentially(buttons);



// Join

// 获取目标按钮
const buttons2 = Array.from(document.querySelectorAll(
  '.cta.offer-tooltip__target.offer__connect-cta.cta_primary'
)).filter(btn => {
  const text = btn.textContent.trim();
  const disabled = btn.disabled || btn.classList.contains('disabled');
  return text === 'Join' && !disabled;
});

console.log('找到符合条件的按钮数量:', buttons2.length);

async function clickButtonsSequentially(buttons2) {
  for (let i = 0; i < buttons2.length; i++) {
    const btn = buttons2[i];
    console.log(`准备点击第 ${i + 1} 个按钮:`, btn);

    // 模拟点击
    btn.click();
    console.log(`✅ 已点击第 ${i + 1} 个`);

    // 随机延迟 1~6 秒
    const delay = Math.floor(Math.random() * 5000) + 1000;
    console.log(`⏳ 等待 ${delay / 1000} 秒后点击下一个...`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  console.log('🎯 所有按钮已点击完成');
}

clickButtonsSequentially(buttons2);