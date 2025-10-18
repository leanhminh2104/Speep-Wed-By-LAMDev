// ==UserScript==
// @name         Speep Wed By LAMDev - Premium
// @namespace    http://tampermonkey.net/
// @version      3.2
// @description  Menu quản lý script tăng tốc timeout - có Speep video với giao diện đẹp và nhiều tính năng
// @author       LAMDev
// @match        *://*/*
// @grant        none
// @icon         https://i.pinimg.com/236x/26/fc/2f/26fc2faf0e4a6628341e1a6f975654e7.jpg
// ==/UserScript==

(function() {
  'use strict';
  
  // Kiểm tra tránh chạy nhiều lần
  if (window.hadesToggleScriptLoaded) return;
  window.hadesToggleScriptLoaded = true;

  // Thêm CSS tùy chỉnh
  const customCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    .hades-container {
      font-family: 'Poppins', sans-serif !important;
    }
    
    .hades-icon-btn {
      position: fixed !important;
      bottom: 30px !important;
      right: 30px !important;
      width: 60px !important;
      height: 60px !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      border-radius: 50% !important;
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5) !important;
      color: #fff !important;
      font-size: 28px !important;
      text-align: center !important;
      line-height: 60px !important;
      cursor: pointer !important;
      z-index: 10000 !important;
      backdrop-filter: blur(10px) !important;
      border: 2px solid rgba(255, 255, 255, 0.2) !important;
      transition: all 0.3s ease !important;
      user-select: none !important;
    }
    
    .hades-icon-btn:hover {
      transform: scale(1.1) rotate(10deg) !important;
      box-shadow: 0 12px 30px rgba(102, 126, 234, 0.7) !important;
    }
    
    .hades-menu {
      position: fixed !important;
      bottom: 100px !important;
      right: 30px !important;
      background: rgba(30, 35, 50, 0.98) !important;
      padding: 12px !important;
      border-radius: 16px !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
      color: #fff !important;
      z-index: 10000 !important;
      display: none !important;
      flex-direction: column !important;
      gap: 8px !important;
      width: 380px !important;
      max-height: 500px !important;
      overflow-y: auto !important;
      backdrop-filter: blur(15px) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      transition: all 0.3s ease !important;
    }
    
    .hades-menu.show {
      display: flex !important;
    }
    
    .hades-menu-header {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      margin-bottom: 5px !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      padding-bottom: 8px !important;
    }
    
    .hades-title {
      font-size: 16px !important;
      font-weight: 600 !important;
      background: linear-gradient(90deg, #ff8a00, #e52e71) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    .hades-btn {
      padding: 8px 12px !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      border: none !important;
      border-radius: 8px !important;
      cursor: pointer !important;
      font-size: 13px !important;
      color: white !important;
      font-weight: 500 !important;
      transition: all 0.2s ease !important;
      flex: 1 !important;
      text-align: center !important;
    }
    
    .hades-btn:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4) !important;
    }
    
    .hades-btn-danger {
      background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%) !important;
    }
    
    .hades-btn-success {
      background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%) !important;
    }
    
    .hades-btn-warning {
      background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%) !important;
    }
    
    .hades-btn-group {
      display: flex !important;
      gap: 6px !important;
      width: 100% !important;
    }
    
    .hades-speed-section {
      margin: 5px 0 !important;
    }
    
    .hades-speed-grid {
      display: grid !important;
      grid-template-columns: repeat(6, 1fr) !important;
      gap: 6px !important;
      margin-top: 5px !important;
    }
    
    .hades-speed-btn {
      padding: 6px 4px !important;
      background: rgba(255, 255, 255, 0.08) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 6px !important;
      cursor: pointer !important;
      font-size: 11px !important;
      color: white !important;
      transition: all 0.2s ease !important;
      text-align: center !important;
    }
    
    .hades-speed-btn:hover {
      background: rgba(102, 126, 234, 0.3) !important;
      transform: translateY(-1px) !important;
    }
    
    .hades-speed-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      box-shadow: 0 3px 8px rgba(102, 126, 234, 0.4) !important;
    }
    
    .hades-status {
      font-size: 12px !important;
      margin-top: 5px !important;
      color: #ccc !important;
      text-align: center !important;
      padding: 6px !important;
      background: rgba(255, 255, 255, 0.05) !important;
      border-radius: 6px !important;
    }
    
    .hades-slider-container {
      margin: 8px 0 !important;
    }
    
    .hades-slider {
      width: 100% !important;
      height: 5px !important;
      border-radius: 3px !important;
      background: rgba(255, 255, 255, 0.1) !important;
      outline: none !important;
      -webkit-appearance: none !important;
    }
    
    .hades-slider::-webkit-slider-thumb {
      -webkit-appearance: none !important;
      appearance: none !important;
      width: 16px !important;
      height: 16px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      cursor: pointer !important;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3) !important;
    }
    
    .hades-slider-value {
      text-align: center !important;
      font-size: 12px !important;
      margin-top: 4px !important;
      color: #ccc !important;
    }
    
    .hades-features-section {
      margin: 8px 0 !important;
    }
    
    .hades-features-grid {
      display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 6px !important;
      margin-top: 5px !important;
    }
    
    .hades-feature-btn {
      padding: 7px 4px !important;
      background: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      border-radius: 6px !important;
      cursor: pointer !important;
      font-size: 11px !important;
      color: white !important;
      transition: all 0.2s ease !important;
      text-align: center !important;
    }
    
    .hades-feature-btn:hover {
      background: rgba(102, 126, 234, 0.2) !important;
    }
    
    .hades-advanced-section {
      margin: 8px 0 !important;
    }
    
    .hades-advanced-grid {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 6px !important;
      margin-top: 5px !important;
    }
    
    .hades-footer {
      font-size: 10px !important;
      text-align: center !important;
      margin-top: 8px !important;
      color: #888 !important;
      border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      padding-top: 8px !important;
    }
    
    .hades-theme-toggle {
      position: absolute !important;
      top: 8px !important;
      right: 8px !important;
      width: 26px !important;
      height: 26px !important;
      border-radius: 50% !important;
      background: rgba(255, 255, 255, 0.1) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      cursor: pointer !important;
      font-size: 12px !important;
      transition: all 0.2s ease !important;
    }
    
    .hades-theme-toggle:hover {
      background: rgba(255, 255, 255, 0.2) !important;
    }
    
    .hades-section-title {
      font-size: 13px !important;
      font-weight: 500 !important;
      margin-bottom: 4px !important;
      color: #ccc !important;
      display: flex !important;
      align-items: center !important;
      gap: 5px !important;
    }
    
    .hades-section-title::before {
      content: "" !important;
      display: block !important;
      width: 3px !important;
      height: 12px !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      border-radius: 2px !important;
    }
    
    /* Toast notifications */
    #hades-toast-container {
      position: fixed !important;
      top: 20px !important;
      right: 20px !important;
      z-index: 10000 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }
    
    .hades-toast {
      display: flex !important;
      align-items: flex-start !important;
      gap: 10px !important;
      padding: 10px 14px !important;
      background: rgba(30, 35, 50, 0.95) !important;
      color: #fff !important;
      border-radius: 10px !important;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3) !important;
      font-family: 'Poppins', sans-serif !important;
      min-width: 260px !important;
      opacity: 0 !important;
      transform: translateX(100%) !important;
      transition: all 0.4s ease !important;
      backdrop-filter: blur(10px) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
    }
    
    .hades-toast.show {
      opacity: 1 !important;
      transform: translateX(0) !important;
    }
    
    .hades-toast.hide {
      opacity: 0 !important;
      transform: translateX(100%) !important;
    }
    
    .hades-toast-icon {
      font-size: 18px !important;
      flex-shrink: 0 !important;
    }
    
    .hades-toast-content {
      flex: 1 !important;
    }
    
    .hades-toast-title {
      font-weight: 600 !important;
      margin-bottom: 3px !important;
      font-size: 13px !important;
    }
    
    .hades-toast-text {
      font-size: 12px !important;
      color: #ccc !important;
    }
    
    .hades-toast-close {
      margin-left: auto !important;
      cursor: pointer !important;
      font-size: 16px !important;
      padding: 0 3px !important;
      color: #aaa !important;
      flex-shrink: 0 !important;
    }
    
    /* Light theme */
    .hades-menu.light {
      background: rgba(248, 250, 252, 0.98) !important;
      color: #333 !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
    }
    
    .hades-menu.light .hades-btn {
      color: white !important;
    }
    
    .hades-menu.light .hades-speed-btn {
      background: rgba(0, 0, 0, 0.05) !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      color: #333 !important;
    }
    
    .hades-menu.light .hades-speed-btn:hover {
      background: rgba(102, 126, 234, 0.2) !important;
    }
    
    .hades-menu.light .hades-speed-btn.active {
      color: white !important;
    }
    
    .hades-menu.light .hades-feature-btn {
      background: rgba(0, 0, 0, 0.03) !important;
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      color: #333 !important;
    }
    
    .hades-menu.light .hades-feature-btn:hover {
      background: rgba(102, 126, 234, 0.15) !important;
    }
    
    .hades-menu.light .hades-status {
      color: #666 !important;
      background: rgba(0, 0, 0, 0.03) !important;
    }
    
    .hades-menu.light .hades-section-title {
      color: #555 !important;
    }
    
    .hades-menu.light .hades-footer {
      color: #777 !important;
      border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
    }
    
    .hades-menu.light .hades-menu-header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
    }
  `;

  // Thêm CSS vào trang
  const style = document.createElement('style');
  style.textContent = customCSS;
  document.head.appendChild(style);

  // Cấu hình
  const SPEEDS = { 
    0.25: 0.25, 0.5: 0.5, 0.75: 0.75, 1: 1, 
    1.25: 1.25, 1.5: 1.5, 1.75: 1.75, 2: 2, 
    3: 3, 4: 4, 5: 5, 10: 10 
  };
  
  let currentMultiplier = parseFloat(localStorage.getItem('hadesSpeedMultiplier') || 1);
  let enabled = localStorage.getItem('hadesScriptEnabled') === 'true';
  let currentTheme = localStorage.getItem('hadesTheme') || 'dark';
  let menuVisible = false;
  let videoObserver = null;

  // Lưu các hàm gốc
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;

  // Tạo nút icon
  const iconBtn = document.createElement('div');
  iconBtn.className = 'hades-container hades-icon-btn';
  iconBtn.textContent = '⚡';
  iconBtn.title = 'Mở menu Speed Wed By LAMDev';

  // Tạo menu
  const menu = document.createElement('div');
  menu.className = `hades-container hades-menu ${currentTheme === 'light' ? 'light' : ''}`;

  // Header menu
  const menuHeader = document.createElement('div');
  menuHeader.className = 'hades-menu-header';
  
  const title = document.createElement('div');
  title.className = 'hades-title';
  title.textContent = 'Speep Wed Premium';
  
  const themeToggle = document.createElement('div');
  themeToggle.className = 'hades-theme-toggle';
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.title = 'Chuyển đổi chế độ sáng/tối';
  
  menuHeader.appendChild(title);
  menu.appendChild(menuHeader);

  // Nhóm nút chức năng chính
  const mainBtnGroup = document.createElement('div');
  mainBtnGroup.className = 'hades-btn-group';
  
  const toggleBtn = document.createElement('button');
  toggleBtn.className = enabled ? 'hades-btn hades-btn-success' : 'hades-btn hades-btn-danger';
  toggleBtn.textContent = enabled ? '🟢 Đang Bật' : '🔴 Đang Tắt';
  
  const clearCookieBtn = document.createElement('button');
  clearCookieBtn.className = 'hades-btn hades-btn-warning';
  clearCookieBtn.textContent = '🧼 Xóa Cookie';
  
  mainBtnGroup.appendChild(toggleBtn);
  mainBtnGroup.appendChild(clearCookieBtn);
  menu.appendChild(mainBtnGroup);

  // Nhóm nút chức năng phụ
  const secondaryBtnGroup = document.createElement('div');
  secondaryBtnGroup.className = 'hades-btn-group';
  
  const reloadBtn = document.createElement('button');
  reloadBtn.className = 'hades-btn';
  reloadBtn.textContent = '🔄 Tải Lại';
  
  const reportBtn = document.createElement('button');
  reportBtn.className = 'hades-btn';
  reportBtn.textContent = '📧 Báo Lỗi';
  
  secondaryBtnGroup.appendChild(reloadBtn);
  secondaryBtnGroup.appendChild(reportBtn);
  menu.appendChild(secondaryBtnGroup);

  // Thanh trượt tốc độ tùy chỉnh
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'hades-slider-container';
  
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.className = 'hades-slider';
  slider.min = '0.25';
  slider.max = '10';
  slider.step = '0.25';
  slider.value = currentMultiplier;
  
  const sliderValue = document.createElement('div');
  sliderValue.className = 'hades-slider-value';
  sliderValue.textContent = `Tốc độ hiện tại: x${currentMultiplier}`;
  
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(sliderValue);
  menu.appendChild(sliderContainer);

  // Section tốc độ nhanh
  const speedSection = document.createElement('div');
  speedSection.className = 'hades-speed-section';
  
  const speedLabel = document.createElement('div');
  speedLabel.className = 'hades-section-title';
  speedLabel.textContent = 'Tốc độ nhanh';
  
  const speedGrid = document.createElement('div');
  speedGrid.className = 'hades-speed-grid';
  
  Object.keys(SPEEDS).forEach(k => {
    const b = document.createElement('button');
    b.className = 'hades-speed-btn';
    if (parseFloat(k) === currentMultiplier) b.classList.add('active');
    b.textContent = 'X' + k;
    b.addEventListener('click', () => {
      currentMultiplier = SPEEDS[k];
      localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
      updateSpeedButtons();
      slider.value = currentMultiplier;
      sliderValue.textContent = `Tốc độ hiện tại: x${currentMultiplier}`;
      showStatus(`Đã đặt tốc độ: x${k}`);
      if (enabled) patchSpeed();
    });
    speedGrid.appendChild(b);
  });
  
  speedSection.appendChild(speedLabel);
  speedSection.appendChild(speedGrid);
  menu.appendChild(speedSection);

  // Section tính năng bổ sung
  const featuresSection = document.createElement('div');
  featuresSection.className = 'hades-features-section';
  
  const featuresLabel = document.createElement('div');
  featuresLabel.className = 'hades-section-title';
  featuresLabel.textContent = 'Tính năng chính';
  
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'hades-features-grid';
  
  const features = [
    { text: '🔍 Tìm video', action: () => findVideos() },
    { text: '📊 Thống kê', action: () => showStats() },
    { text: '🎬 Video Info', action: () => showVideoInfo() },
    { text: '⏱️ Timer Ctrl', action: () => showTimerControl() },
    { text: '⚙️ Cài đặt', action: () => showSettings() },
    { text: '💾 Xuất cài đặt', action: () => exportSettings() }
  ];
  
  features.forEach(feature => {
    const btn = document.createElement('button');
    btn.className = 'hades-feature-btn';
    btn.textContent = feature.text;
    btn.addEventListener('click', feature.action);
    featuresGrid.appendChild(btn);
  });
  
  featuresSection.appendChild(featuresLabel);
  featuresSection.appendChild(featuresGrid);
  menu.appendChild(featuresSection);

  // Section tính năng nâng cao
  const advancedSection = document.createElement('div');
  advancedSection.className = 'hades-advanced-section';
  
  const advancedLabel = document.createElement('div');
  advancedLabel.className = 'hades-section-title';
  advancedLabel.textContent = 'Tính năng nâng cao';
  
  const advancedGrid = document.createElement('div');
  advancedGrid.className = 'hades-advanced-grid';
  
  const advancedFeatures = [
    { text: '🔒 Khóa FPS', action: () => lockFPS() },
    { text: '🎚️ Tùy chỉnh nâng cao', action: () => showAdvancedSettings() }
  ];
  
  advancedFeatures.forEach(feature => {
    const btn = document.createElement('button');
    btn.className = 'hades-feature-btn';
    btn.textContent = feature.text;
    btn.addEventListener('click', feature.action);
    advancedGrid.appendChild(btn);
  });
  
  advancedSection.appendChild(advancedLabel);
  advancedSection.appendChild(advancedGrid);
  menu.appendChild(advancedSection);

  // Trạng thái
  const status = document.createElement('div');
  status.className = 'hades-status';
  updateStatusText();
  menu.appendChild(status);

  // Footer
  const footer = document.createElement('div');
  footer.className = 'hades-footer';
  footer.innerHTML = 'Speep Wed Premium v3.2 • By <b>LAMDev</b>';
  menu.appendChild(footer);

  // Thêm theme toggle vào menu (sau khi menu đã được tạo)
  menu.appendChild(themeToggle);

  // Thêm vào DOM
  document.body.appendChild(iconBtn);
  document.body.appendChild(menu);

  // Sự kiện
  iconBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Đóng menu khi click ra ngoài
  document.addEventListener('click', function(e) {
    if (menuVisible && !menu.contains(e.target) && !iconBtn.contains(e.target)) {
      hideMenu();
    }
  });

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('hadesTheme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    menu.className = `hades-container hades-menu ${currentTheme === 'light' ? 'light' : ''}`;
  });

  toggleBtn.addEventListener('click', () => {
    enabled = !enabled;
    localStorage.setItem('hadesScriptEnabled', enabled);
    toggleBtn.textContent = enabled ? '🟢 Đang Bật' : '🔴 Đang Tắt';
    toggleBtn.className = enabled ? 'hades-btn hades-btn-success' : 'hades-btn hades-btn-danger';
    updateStatusText();
    if (enabled) {
      applyPatch();
      showNotification({
        icon: '⚡',
        title: 'Speep Wed Đã Kích Hoạt!',
        text: `Tốc độ hiện tại: x${currentMultiplier}`,
        duration: 4000
      });
    } else {
      restoreOriginalFunctions();
      showNotification({
        icon: '⏸️',
        title: 'Speep Wed Đã Tắt',
        text: 'Tốc độ mặc định đã được khôi phục',
        duration: 3000
      });
    }
  });

  clearCookieBtn.addEventListener('click', () => {
    clearAllCookies();
    showNotification({
      icon: '🧼',
      title: 'Đã xóa cookie',
      text: 'Tất cả cookie của trang này đã bị xóa',
      duration: 3000
    });
  });

  reloadBtn.addEventListener('click', () => location.reload());

  reportBtn.addEventListener('click', () => {
    window.open('https://dichvusale.io.vn', '_blank');
  });

  slider.addEventListener('input', () => {
    currentMultiplier = parseFloat(slider.value);
    sliderValue.textContent = `Tốc độ hiện tại: x${currentMultiplier}`;
    updateSpeedButtons();
  });

  slider.addEventListener('change', () => {
    localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
    showStatus(`Đã đặt tốc độ: x${currentMultiplier}`);
    if (enabled) patchSpeed();
  });

  // Hàm hiển thị/ẩn menu
  function toggleMenu() {
    if (menuVisible) {
      hideMenu();
    } else {
      showMenu();
    }
  }

  function showMenu() {
    menu.classList.add('show');
    menuVisible = true;
  }

  function hideMenu() {
    menu.classList.remove('show');
    menuVisible = false;
  }

  // Cập nhật nút tốc độ
  function updateSpeedButtons() {
    const speedButtons = menu.querySelectorAll('.hades-speed-btn');
    speedButtons.forEach(btn => {
      btn.classList.remove('active');
      if (parseFloat(btn.textContent.substring(1)) === currentMultiplier) {
        btn.classList.add('active');
      }
    });
  }

  // Cập nhật trạng thái
  function updateStatusText() {
    status.textContent = `Trạng thái: ${enabled ? 'Đang hoạt động' : 'Đã tắt'} | Tốc độ: x${currentMultiplier}`;
  }

  // Hiển thị thông báo trạng thái
  function showStatus(msg) {
    status.textContent = msg;
    setTimeout(updateStatusText, 2000);
  }

  // Patch tốc độ
  function patchSpeed() {
    // Patch timer
    window.setTimeout = (fn, delay) => originalSetTimeout(fn, delay / currentMultiplier);
    window.setInterval = (fn, delay) => originalSetInterval(fn, delay / currentMultiplier);
    // Patch video playback
    patchVideoSpeed();
    // Patch requestAnimationFrame
    patchAnimationFrame();
  }

  // Khôi phục hàm gốc
  function restoreOriginalFunctions() {
    window.setTimeout = originalSetTimeout;
    window.setInterval = originalSetInterval;
    restoreVideoSpeed();
    restoreAnimationFrame();
  }

  // Patch tốc độ video
  function patchVideoSpeed() {
    document.querySelectorAll('video').forEach(video => {
      video.playbackRate = Number(currentMultiplier);
    });
  }

  // Khôi phục tốc độ video gốc
  function restoreVideoSpeed() {
    document.querySelectorAll('video').forEach(video => {
      video.playbackRate = 1;
    });
  }

  // Patch requestAnimationFrame để tăng tốc animation
  function patchAnimationFrame() {
    if (!window.originalRequestAnimationFrame) {
      window.originalRequestAnimationFrame = window.requestAnimationFrame;
    }
    
    window.requestAnimationFrame = function(callback) {
      return window.originalRequestAnimationFrame(function(timestamp) {
        callback(timestamp * currentMultiplier);
      });
    };
  }

  // Khôi phục requestAnimationFrame gốc
  function restoreAnimationFrame() {
    if (window.originalRequestAnimationFrame) {
      window.requestAnimationFrame = window.originalRequestAnimationFrame;
    }
  }

  // Áp dụng patch
  function applyPatch() {
    if (window.hadesFinalScriptLoaded) return;
    window.hadesFinalScriptLoaded = true;

    patchSpeed();
    
    // Theo dõi các video mới được thêm vào trang
    videoObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeName === 'VIDEO' || (node.querySelector && node.querySelector('video'))) {
            patchVideoSpeed();
          }
        });
      });
    });
    
    videoObserver.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // Kiểm tra lại mỗi 2 giây để đảm bảo tất cả video đều được patch
    setInterval(patchVideoSpeed, 2000);
  }

  // Xóa cookie
  function clearAllCookies() {
    const cookies = document.cookie.split(";");
    const domainParts = location.hostname.split(".");
    const domains = [];
    for (let i = 0; i < domainParts.length - 1; i++) {
      domains.push("." + domainParts.slice(i).join("."));
    }
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      domains.forEach(domain => {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${domain}`;
      });
    });
  }

  // Thông báo
  function showNotification({ icon = '', title = '', text = '', duration = 4000 } = {}) {
    if (!document.getElementById('hades-toast-container')) {
      const container = document.createElement('div');
      container.id = 'hades-toast-container';
      document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'hades-toast';
    
    const iconEl = document.createElement('div');
    iconEl.className = 'hades-toast-icon';
    iconEl.textContent = icon;
    
    const content = document.createElement('div');
    content.className = 'hades-toast-content';
    content.innerHTML = `<div class="hades-toast-title">${title}</div><div class="hades-toast-text">${text}</div>`;
    
    const close = document.createElement('div');
    close.className = 'hades-toast-close';
    close.textContent = '×';
    close.addEventListener('click', () => {
      hideToast(toast);
    });
    
    toast.appendChild(iconEl);
    toast.appendChild(content);
    toast.appendChild(close);
    document.getElementById('hades-toast-container').appendChild(toast);
    
    // Hiển thị toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Tự động ẩn sau thời gian chỉ định
    setTimeout(() => {
      hideToast(toast);
    }, duration);
  }

  function hideToast(toast) {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 400);
  }

  // Tính năng tìm video
  function findVideos() {
    const videos = document.querySelectorAll('video');
    if (videos.length > 0) {
      showNotification({
        icon: '🎬',
        title: 'Đã tìm thấy video',
        text: `Tìm thấy ${videos.length} video trên trang`,
        duration: 3000
      });
      
      // Highlight các video
      videos.forEach(video => {
        const originalBorder = video.style.border;
        video.style.border = '2px solid #ff8a00';
        setTimeout(() => {
          video.style.border = originalBorder;
        }, 2000);
      });
    } else {
      showNotification({
        icon: '🔍',
        title: 'Không tìm thấy video',
        text: 'Không có video nào được tìm thấy trên trang này',
        duration: 3000
      });
    }
  }

  // Tính năng thống kê
  function showStats() {
    const videos = document.querySelectorAll('video');
    const totalVideos = videos.length;
    const playingVideos = Array.from(videos).filter(v => !v.paused && !v.ended).length;
    const totalDuration = Array.from(videos).reduce((acc, video) => acc + (video.duration || 0), 0);
    
    showNotification({
      icon: '📊',
      title: 'Thống kê Video',
      text: `Tổng: ${totalVideos} | Đang phát: ${playingVideos} | Thời lượng: ${Math.round(totalDuration)}s`,
      duration: 5000
    });
  }

  // Thông tin video
  function showVideoInfo() {
    const videos = document.querySelectorAll('video');
    if (videos.length === 0) {
      showNotification({
        icon: '🎬',
        title: 'Không có video',
        text: 'Không tìm thấy video nào trên trang',
        duration: 3000
      });
      return;
    }
    
    let info = `Tìm thấy ${videos.length} video:\n\n`;
    videos.forEach((video, index) => {
      info += `Video ${index + 1}:\n`;
      info += `- Tốc độ: ${video.playbackRate}x\n`;
      info += `- Thời lượng: ${video.duration ? Math.round(video.duration) + 's' : 'Không xác định'}\n`;
      info += `- Trạng thái: ${video.paused ? 'Tạm dừng' : 'Đang phát'}\n`;
      info += `- Âm lượng: ${Math.round(video.volume * 100)}%\n\n`;
    });
    
    showNotification({
      icon: 'ℹ️',
      title: 'Thông tin Video',
      text: info,
      duration: 6000
    });
  }

  // Điều khiển timer
  function showTimerControl() {
    showNotification({
      icon: '⏱️',
      title: 'Điều khiển Timer',
      text: 'Tính năng đang phát triển...',
      duration: 3000
    });
  }

  // Cài đặt
  function showSettings() {
    showNotification({
      icon: '⚙️',
      title: 'Cài đặt',
      text: 'Tính năng đang phát triển...',
      duration: 3000
    });
  }

  // Khóa FPS
  function lockFPS() {
    showNotification({
      icon: '🔒',
      title: 'Khóa FPS',
      text: 'Tính năng đang phát triển...',
      duration: 3000
    });
  }

  // Cài đặt nâng cao
  function showAdvancedSettings() {
    showNotification({
      icon: '🎚️',
      title: 'Tùy chỉnh nâng cao',
      text: 'Tính năng đang phát triển...',
      duration: 3000
    });
  }

  // Tính năng xuất cài đặt
  function exportSettings() {
    const settings = {
      enabled: enabled,
      speed: currentMultiplier,
      theme: currentTheme,
      exportDate: new Date().toISOString()
    };
    
    const settingsString = JSON.stringify(settings, null, 2);
    const blob = new Blob([settingsString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'speep-wed-settings.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification({
      icon: '💾',
      title: 'Đã xuất cài đặt',
      text: 'Cài đặt đã được tải xuống',
      duration: 3000
    });
  }

  // Tự động kích hoạt nếu đã bật
  if (enabled) applyPatch();
})();
