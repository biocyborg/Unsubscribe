

// 获取所有符合条件的对话框
const dialogs = Array.from(document.querySelectorAll(
  '.admitad-dialog.admitad-dialog_size_m.admitad-dialog_align_center.admitad-dialog-custom'
));

// 遍历每个对话框
dialogs.forEach(dialog => {
  // 找到关闭按钮
  const closeButton = dialog.querySelector('button.admitad-dialog__close.ng-star-inserted');
  if (closeButton) {
    closeButton.click(); // 触发点击
    console.log('按钮已点击');
  } else {
    console.log('未找到关闭按钮');
  }
});