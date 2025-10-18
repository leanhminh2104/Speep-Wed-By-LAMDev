// ==UserScript==
// @name         Speep Wed By LAMDev - Tua Chi Tiết
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  Menu tua video chi tiết với thanh trượt mượt mà - giao diện siêu gọn
// @author       LAMDev
// @match        *://*/*
// @grant        none
// @icon         https://i.pinimg.com/236x/26/fc/2f/26fc2faf0e4a6628341e1a6f975654e7.jpg
// ==/UserScript==

(function() {
  'use strict';
  
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
      bottom: 20px !important;
      right: 20px !important;
      width: 50px !important;
      height: 50px !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      border-radius: 50% !important;
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5) !important;
      color: #fff !important;
      font-size: 24px !important;
      text-align: center !important;
      line-height: 50px !important;
      cursor: pointer !important;
      z-index: 10000 !important;
      backdrop-filter: blur(10px) !important;
      border: 2px solid rgba(255, 255, 255, 0.2) !important;
      transition: all 0.3s ease !important;
      user-select: none !important;
    }
    
    .hades-icon-btn:hover {
      transform: scale(1.1) rotate(10deg) !important;
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.7) !important;
    }
    
    .hades-menu {
      position: fixed !important;
      bottom: 80px !important;
      right: 20px !important;
      background: rgba(30, 35, 50, 0.98) !important;
      padding: 12px !important;
      border-radius: 14px !important;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4) !important;
      color: #fff !important;
      z-index: 10000 !important;
      display: none !important;
      flex-direction: column !important;
      gap: 8px !important;
      width: 320px !important;
      max-height: 380px !important;
      overflow-y: auto !important;
      backdrop-filter: blur(15px) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      transition: all 0.3s ease !important;
    }
    
    /* Responsive design */
    @media (max-width: 480px) {
      .hades-menu {
        width: 280px !important;
        right: 10px !important;
        bottom: 70px !important;
      }
      
      .hades-icon-btn {
        right: 10px !important;
        bottom: 10px !important;
      }
    }
    
    @media (max-width: 360px) {
      .hades-menu {
        width: 260px !important;
        right: 5px !important;
        left: 5px !important;
        bottom: 65px !important;
      }
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
      font-size: 14px !important;
      font-weight: 600 !important;
      background: linear-gradient(90deg, #ff8a00, #e52e71) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    
    .hades-btn {
      padding: 6px 10px !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      border: none !important;
      border-radius: 6px !important;
      cursor: pointer !important;
      font-size: 11px !important;
      color: white !important;
      font-weight: 500 !important;
      transition: all 0.2s ease !important;
      flex: 1 !important;
      text-align: center !important;
    }
    
    .hades-btn:hover {
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4) !important;
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
      gap: 5px !important;
      width: 100% !important;
    }
    
    .hades-speed-display {
      text-align: center !important;
      font-size: 24px !important;
      font-weight: 700 !important;
      margin: 5px 0 !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      text-shadow: 0 2px 10px rgba(102, 126, 234, 0.3) !important;
    }
    
    .hades-speed-label {
      text-align: center !important;
      font-size: 11px !important;
      color: #ccc !important;
      margin-bottom: 5px !important;
    }
    
    .hades-slider-container {
      margin: 8px 0 !important;
      position: relative !important;
    }
    
    .hades-slider {
      width: 100% !important;
      height: 6px !important;
      border-radius: 3px !important;
      background: linear-gradient(90deg, #ff416c 0%, #ff4b2b 50%, #00b09b 100%) !important;
      outline: none !important;
      -webkit-appearance: none !important;
      z-index: 1 !important;
    }
    
    .hades-slider::-webkit-slider-thumb {
      -webkit-appearance: none !important;
      appearance: none !important;
      width: 18px !important;
      height: 18px !important;
      border-radius: 50% !important;
      background: #fff !important;
      cursor: pointer !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
      border: 2px solid #667eea !important;
      transition: all 0.2s ease !important;
    }
    
    .hades-slider::-webkit-slider-thumb:hover {
      transform: scale(1.2) !important;
      box-shadow: 0 3px 12px rgba(102, 126, 234, 0.6) !important;
    }
    
    .hades-speed-markers {
      display: flex !important;
      justify-content: space-between !important;
      margin-top: 4px !important;
      padding: 0 5px !important;
    }
    
    .hades-speed-marker {
      font-size: 9px !important;
      color: #888 !important;
      text-align: center !important;
    }
    
    .hades-speed-marker.main {
      color: #ccc !important;
      font-weight: 600 !important;
    }
    
    .hades-mode-toggle {
      display: flex !important;
      background: rgba(255, 255, 255, 0.1) !important;
      border-radius: 6px !important;
      padding: 2px !important;
      margin: 5px 0 !important;
    }
    
    .hades-mode-btn {
      flex: 1 !important;
      padding: 4px 8px !important;
      text-align: center !important;
      font-size: 10px !important;
      cursor: pointer !important;
      border-radius: 4px !important;
      transition: all 0.2s ease !important;
    }
    
    .hades-mode-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      color: white !important;
    }
    
    .hades-status {
      font-size: 10px !important;
      margin-top: 4px !important;
      color: #ccc !important;
      text-align: center !important;
      padding: 5px !important;
      background: rgba(255, 255, 255, 0.05) !important;
      border-radius: 4px !important;
    }
    
    .hades-features-section {
      margin: 8px 0 !important;
    }
    
    .hades-features-grid {
      display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 4px !important;
      margin-top: 4px !important;
    }
    
    .hades-feature-btn {
      padding: 5px 2px !important;
      background: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      border-radius: 4px !important;
      cursor: pointer !important;
      font-size: 9px !important;
      color: white !important;
      transition: all 0.2s ease !important;
      text-align: center !important;
    }
    
    .hades-feature-btn:hover {
      background: rgba(102, 126, 234, 0.2) !important;
    }
    
    .hades-footer {
      font-size: 8px !important;
      text-align: center !important;
      margin-top: 6px !important;
      color: #888 !important;
      border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      padding-top: 6px !important;
    }
    
    .hades-theme-toggle {
      position: absolute !important;
      top: 8px !important;
      right: 8px !important;
      width: 22px !important;
      height: 22px !important;
      border-radius: 50% !important;
      background: rgba(255, 255, 255, 0.1) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      cursor: pointer !important;
      font-size: 10px !important;
      transition: all 0.2s ease !important;
    }
    
    .hades-theme-toggle:hover {
      background: rgba(255, 255, 255, 0.2) !important;
    }
    
    .hades-section-title {
      font-size: 11px !important;
      font-weight: 500 !important;
      margin-bottom: 3px !important;
      color: #ccc !important;
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
    }
    
    .hades-section-title::before {
      content: "" !important;
      display: block !important;
      width: 2px !important;
      height: 10px !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      border-radius: 1px !important;
    }
    
    /* Toast notifications */
    #hades-toast-container {
      position: fixed !important;
      top: 15px !important;
      right: 15px !important;
      z-index: 10000 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 6px !important;
    }
    
    .hades-toast {
      display: flex !important;
      align-items: flex-start !important;
      gap: 8px !important;
      padding: 8px 12px !important;
      background: rgba(30, 35, 50, 0.95) !important;
      color: #fff !important;
      border-radius: 8px !important;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3) !important;
      font-family: 'Poppins', sans-serif !important;
      min-width: 240px !important;
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
      font-size: 16px !important;
      flex-shrink: 0 !important;
    }
    
    .hades-toast-content {
      flex: 1 !important;
    }
    
    .hades-toast-title {
      font-weight: 600 !important;
      margin-bottom: 2px !important;
      font-size: 11px !important;
    }
    
    .hades-toast-text {
      font-size: 10px !important;
      color: #ccc !important;
    }
    
    .hades-toast-close {
      margin-left: auto !important;
      cursor: pointer !important;
      font-size: 14px !important;
      padding: 0 2px !important;
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
    
    .hades-menu.light .hades-mode-toggle {
      background: rgba(0, 0, 0, 0.05) !important;
    }
  `;

  const style = document.createElement('style');
  style.textContent = customCSS;
  document.head.appendChild(style);

  // Cấu hình
  let currentMultiplier = parseFloat(localStorage.getItem('hadesSpeedMultiplier') || 1);
  let enabled = localStorage.getItem('hadesScriptEnabled') === 'true';
  let currentTheme = localStorage.getItem('hadesTheme') || 'dark';
  let speedMode = localStorage.getItem('hadesSpeedMode') || 'precise'; // 'precise' or 'stepped'
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
  title.textContent = 'Tua Video Chi Tiết';
  
  menuHeader.appendChild(title);
  menu.appendChild(menuHeader);

  // Theme toggle
  const themeToggle = document.createElement('div');
  themeToggle.className = 'hades-theme-toggle';
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.title = 'Chuyển đổi chế độ sáng/tối';

  // Hiển thị tốc độ hiện tại
  const speedDisplay = document.createElement('div');
  speedDisplay.className = 'hades-speed-display';
  speedDisplay.textContent = `x${currentMultiplier}`;
  menu.appendChild(speedDisplay);

  const speedLabel = document.createElement('div');
  speedLabel.className = 'hades-speed-label';
  speedLabel.textContent = 'Tốc độ hiện tại';
  menu.appendChild(speedLabel);

  // Toggle chế độ tua
  const modeToggle = document.createElement('div');
  modeToggle.className = 'hades-mode-toggle';
  
  const preciseModeBtn = document.createElement('div');
  preciseModeBtn.className = `hades-mode-btn ${speedMode === 'precise' ? 'active' : ''}`;
  preciseModeBtn.textContent = 'Chi Tiết';
  preciseModeBtn.title = 'Chế độ tua chi tiết (0.1x - 10x)';
  
  const steppedModeBtn = document.createElement('div');
  steppedModeBtn.className = `hades-mode-btn ${speedMode === 'stepped' ? 'active' : ''}`;
  steppedModeBtn.textContent = 'Nhanh';
  steppedModeBtn.title = 'Chế độ tua nhanh (các mức cố định)';
  
  modeToggle.appendChild(preciseModeBtn);
  modeToggle.appendChild(steppedModeBtn);
  menu.appendChild(modeToggle);

  // Thanh trượt tốc độ chi tiết
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'hades-slider-container';
  
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.className = 'hades-slider';
  
  if (speedMode === 'precise') {
    slider.min = '0.1';
    slider.max = '10';
    slider.step = '0.1';
    slider.value = currentMultiplier;
  } else {
    slider.min = '0';
    slider.max = '15';
    slider.step = '1';
    slider.value = getSteppedValue(currentMultiplier);
  }
  
  // Marker cho thanh trượt
  const speedMarkers = document.createElement('div');
  speedMarkers.className = 'hades-speed-markers';
  
  if (speedMode === 'precise') {
    const markers = ['0.1x', '0.5x', '1x', '2x', '5x', '10x'];
    markers.forEach((marker, index) => {
      const markerEl = document.createElement('div');
      markerEl.className = `hades-speed-marker ${index === 2 || index === 4 ? 'main' : ''}`;
      markerEl.textContent = marker;
      speedMarkers.appendChild(markerEl);
    });
  } else {
    const markers = ['0.1x', '0.25x', '0.5x', '0.75x', '1x', '1.25x', '1.5x', '2x', '3x', '5x', '10x', '16x'];
    markers.forEach((marker, index) => {
      const markerEl = document.createElement('div');
      markerEl.className = `hades-speed-marker ${index === 4 ? 'main' : ''}`;
      markerEl.textContent = marker;
      speedMarkers.appendChild(markerEl);
    });
  }
  
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(speedMarkers);
  menu.appendChild(sliderContainer);

  // Nhóm nút chức năng chính
  const mainBtnGroup = document.createElement('div');
  mainBtnGroup.className = 'hades-btn-group';
  
  const toggleBtn = document.createElement('button');
  toggleBtn.className = enabled ? 'hades-btn hades-btn-success' : 'hades-btn hades-btn-danger';
  toggleBtn.textContent = enabled ? '🟢 Đang Bật' : '🔴 Đang Tắt';
  
  const resetBtn = document.createElement('button');
  resetBtn.className = 'hades-btn hades-btn-warning';
  resetBtn.textContent = '🔄 Mặc Định';
  
  mainBtnGroup.appendChild(toggleBtn);
  mainBtnGroup.appendChild(resetBtn);
  menu.appendChild(mainBtnGroup);

  // Section tính năng bổ sung
  const featuresSection = document.createElement('div');
  featuresSection.className = 'hades-features-section';
  
  const featuresLabel = document.createElement('div');
  featuresLabel.className = 'hades-section-title';
  featuresLabel.textContent = 'Tính năng';
  
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'hades-features-grid';
  
  const features = [
    { text: '🔍 Tìm Video', action: () => findVideos() },
    { text: '📊 Thống Kê', action: () => showStats() },
    { text: 'ℹ️ Thông Tin', action: () => showVideoInfo() },
    { text: '🎬 Tua Đến', action: () => seekToTime() },
    { text: '💾 Lưu Cài Đặt', action: () => exportSettings() },
    { text: '⚙️ Cài Đặt', action: () => showSettings() }
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

  // Trạng thái
  const status = document.createElement('div');
  status.className = 'hades-status';
  updateStatusText();
  menu.appendChild(status);

  // Footer
  const footer = document.createElement('div');
  footer.className = 'hades-footer';
  footer.innerHTML = 'Speep Wed Tua Chi Tiết v5.0 • <b>LAMDev</b>';
  menu.appendChild(footer);

  // Thêm theme toggle vào menu
  menu.appendChild(themeToggle);

  // Thêm vào DOM
  document.body.appendChild(iconBtn);
  document.body.appendChild(menu);

  // Hàm chuyển đổi giá trị cho chế độ stepped
  function getSteppedValue(value) {
    const steppedValues = [0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 5, 10, 16];
    const index = steppedValues.findIndex(v => v >= value);
    return index >= 0 ? index : steppedValues.length - 1;
  }

  function getValueFromStepped(index) {
    const steppedValues = [0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 5, 10, 16];
    return steppedValues[index] || 1;
  }

  // Sự kiện
  iconBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

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

  preciseModeBtn.addEventListener('click', () => {
    speedMode = 'precise';
    localStorage.setItem('hadesSpeedMode', speedMode);
    preciseModeBtn.classList.add('active');
    steppedModeBtn.classList.remove('active');
    
    slider.min = '0.1';
    slider.max = '10';
    slider.step = '0.1';
    slider.value = currentMultiplier;
    
    // Cập nhật markers
    speedMarkers.innerHTML = '';
    const markers = ['0.1x', '0.5x', '1x', '2x', '5x', '10x'];
    markers.forEach((marker, index) => {
      const markerEl = document.createElement('div');
      markerEl.className = `hades-speed-marker ${index === 2 || index === 4 ? 'main' : ''}`;
      markerEl.textContent = marker;
      speedMarkers.appendChild(markerEl);
    });
    
    showNotification({
      icon: '🎛️',
      title: 'Chế độ chi tiết',
      text: 'Tua chi tiết từ 0.1x đến 10x',
      duration: 2000
    });
  });

  steppedModeBtn.addEventListener('click', () => {
    speedMode = 'stepped';
    localStorage.setItem('hadesSpeedMode', speedMode);
    steppedModeBtn.classList.add('active');
    preciseModeBtn.classList.remove('active');
    
    slider.min = '0';
    slider.max = '11';
    slider.step = '1';
    slider.value = getSteppedValue(currentMultiplier);
    
    // Cập nhật markers
    speedMarkers.innerHTML = '';
    const markers = ['0.1x', '0.25x', '0.5x', '0.75x', '1x', '1.25x', '1.5x', '2x', '3x', '5x', '10x', '16x'];
    markers.forEach((marker, index) => {
      const markerEl = document.createElement('div');
      markerEl.className = `hades-speed-marker ${index === 4 ? 'main' : ''}`;
      markerEl.textContent = marker;
      speedMarkers.appendChild(markerEl);
    });
    
    showNotification({
      icon: '⚡',
      title: 'Chế độ nhanh',
      text: 'Tua nhanh với các mức cố định',
      duration: 2000
    });
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
        title: 'Đã kích hoạt tua!',
        text: `Tốc độ: x${currentMultiplier}`,
        duration: 3000
      });
    } else {
      restoreOriginalFunctions();
      showNotification({
        icon: '⏸️',
        title: 'Đã tắt tua',
        text: 'Khôi phục tốc độ mặc định',
        duration: 2000
      });
    }
  });

  resetBtn.addEventListener('click', () => {
    currentMultiplier = 1;
    localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
    
    if (speedMode === 'precise') {
      slider.value = 1;
    } else {
      slider.value = getSteppedValue(1);
    }
    
    speedDisplay.textContent = 'x1.0';
    updateStatusText();
    
    if (enabled) {
      patchSpeed();
    }
    
    showNotification({
      icon: '🔄',
      title: 'Đặt lại tốc độ',
      text: 'Tốc độ mặc định: x1.0',
      duration: 2000
    });
  });

  slider.addEventListener('input', () => {
    if (speedMode === 'precise') {
      currentMultiplier = parseFloat(slider.value);
    } else {
      currentMultiplier = getValueFromStepped(parseInt(slider.value));
    }
    
    speedDisplay.textContent = `x${currentMultiplier.toFixed(speedMode === 'precise' ? 1 : 2)}`;
    
    if (enabled) {
      patchSpeed();
    }
  });

  slider.addEventListener('change', () => {
    localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
    showStatus(`Đã đặt tốc độ: x${currentMultiplier.toFixed(speedMode === 'precise' ? 1 : 2)}`);
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

  // Cập nhật trạng thái
  function updateStatusText() {
    status.textContent = `${enabled ? '🟢 Đang chạy' : '🔴 Đã tắt'} | Chế độ: ${speedMode === 'precise' ? 'Chi tiết' : 'Nhanh'} | Tốc độ: x${currentMultiplier.toFixed(speedMode === 'precise' ? 1 : 2)}`;
  }

  function showStatus(msg) {
    status.textContent = msg;
    setTimeout(updateStatusText, 2000);
  }

  // Patch tốc độ
  function patchSpeed() {
    window.setTimeout = (fn, delay) => originalSetTimeout(fn, delay / currentMultiplier);
    window.setInterval = (fn, delay) => originalSetInterval(fn, delay / currentMultiplier);
    patchVideoSpeed();
    patchAnimationFrame();
  }

  function restoreOriginalFunctions() {
    window.setTimeout = originalSetTimeout;
    window.setInterval = originalSetInterval;
    restoreVideoSpeed();
    restoreAnimationFrame();
  }

  function patchVideoSpeed() {
    document.querySelectorAll('video').forEach(video => {
      video.playbackRate = Number(currentMultiplier);
    });
  }

  function restoreVideoSpeed() {
    document.querySelectorAll('video').forEach(video => {
      video.playbackRate = 1;
    });
  }

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

  function restoreAnimationFrame() {
    if (window.originalRequestAnimationFrame) {
      window.requestAnimationFrame = window.originalRequestAnimationFrame;
    }
  }

  function applyPatch() {
    if (window.hadesFinalScriptLoaded) return;
    window.hadesFinalScriptLoaded = true;

    patchSpeed();
    
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

    setInterval(patchVideoSpeed, 2000);
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
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
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

  // Các hàm tính năng
  function findVideos() {
    const videos = document.querySelectorAll('video');
    if (videos.length > 0) {
      showNotification({
        icon: '🎬',
        title: 'Tìm thấy video',
        text: `${videos.length} video trên trang`,
        duration: 2000
      });
      
      videos.forEach(video => {
        const originalBorder = video.style.border;
        video.style.border = '2px solid #ff8a00';
        setTimeout(() => {
          video.style.border = originalBorder;
        }, 1500);
      });
    } else {
      showNotification({
        icon: '🔍',
        title: 'Không có video',
        text: 'Không tìm thấy video nào',
        duration: 2000
      });
    }
  }

  function showStats() {
    const videos = document.querySelectorAll('video');
    const totalVideos = videos.length;
    const playingVideos = Array.from(videos).filter(v => !v.paused && !v.ended).length;
    
    showNotification({
      icon: '📊',
      title: 'Thống kê',
      text: `Tổng: ${totalVideos} video | Đang phát: ${playingVideos}`,
      duration: 3000
    });
  }

  function showVideoInfo() {
    const videos = document.querySelectorAll('video');
    if (videos.length === 0) {
      showNotification({
        icon: '🎬',
        title: 'Không có video',
        text: 'Không tìm thấy video nào',
        duration: 2000
      });
      return;
    }
    
    let info = `${videos.length} video:\n`;
    videos.forEach((video, index) => {
      info += `#${index + 1}: ${video.playbackRate.toFixed(1)}x | `;
      info += video.paused ? '⏸️' : '▶️';
      info += ` | ${Math.round(video.volume * 100)}%\n`;
    });
    
    showNotification({
      icon: 'ℹ️',
      title: 'Thông tin video',
      text: info,
      duration: 4000
    });
  }

  function seekToTime() {
    const time = prompt('Tua đến giây:', '0');
    if (time !== null) {
      const seconds = parseFloat(time);
      if (!isNaN(seconds)) {
        document.querySelectorAll('video').forEach(video => {
          video.currentTime = seconds;
        });
        showNotification({
          icon: '⏩',
          title: 'Đã tua video',
          text: `Tua đến giây thứ ${seconds}`,
          duration: 2000
        });
      }
    }
  }

  function showSettings() {
    showNotification({
      icon: '⚙️',
      title: 'Cài đặt',
      text: 'Tính năng đang phát triển',
      duration: 2000
    });
  }

  function exportSettings() {
    const settings = {
      enabled: enabled,
      speed: currentMultiplier,
      theme: currentTheme,
      mode: speedMode,
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
      text: 'Tải xuống hoàn tất',
      duration: 2000
    });
  }

  // Tự động kích hoạt nếu đã bật
  if (enabled) applyPatch();
})();
