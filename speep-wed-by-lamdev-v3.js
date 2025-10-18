// ==UserScript==
// @name         Speep Wed By LAMDev - Ultimate
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Menu tua video với đầy đủ tính năng: tua nhanh/chậm, điều khiển thời gian, chặn quảng cáo
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
      width: 340px !important;
      max-height: 480px !important;
      overflow-y: auto !important;
      backdrop-filter: blur(15px) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      transition: all 0.3s ease !important;
    }
    
    /* Responsive design */
    @media (max-width: 480px) {
      .hades-menu {
        width: 300px !important;
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
        width: 280px !important;
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
    
    .hades-controls-section {
      margin: 8px 0 !important;
    }
    
    .hades-controls-grid {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr) !important;
      gap: 4px !important;
      margin-top: 4px !important;
    }
    
    .hades-control-btn {
      padding: 6px 4px !important;
      background: rgba(255, 255, 255, 0.08) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 4px !important;
      cursor: pointer !important;
      font-size: 10px !important;
      color: white !important;
      transition: all 0.2s ease !important;
      text-align: center !important;
    }
    
    .hades-control-btn:hover {
      background: rgba(102, 126, 234, 0.3) !important;
      transform: translateY(-1px) !important;
    }
    
    .hades-time-control {
      display: flex !important;
      gap: 5px !important;
      margin: 8px 0 !important;
      align-items: center !important;
    }
    
    .hades-time-input {
      flex: 1 !important;
      padding: 4px 6px !important;
      background: rgba(255, 255, 255, 0.1) !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
      border-radius: 4px !important;
      color: white !important;
      font-size: 11px !important;
      text-align: center !important;
    }
    
    .hades-time-input::placeholder {
      color: #aaa !important;
    }
    
    .hades-time-separator {
      color: #ccc !important;
      font-size: 12px !important;
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
    
    .hades-feature-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
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
    
    .hades-menu.light .hades-control-btn,
    .hades-menu.light .hades-feature-btn {
      background: rgba(0, 0, 0, 0.03) !important;
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      color: #333 !important;
    }
    
    .hades-menu.light .hades-control-btn:hover,
    .hades-menu.light .hades-feature-btn:hover {
      background: rgba(102, 126, 234, 0.15) !important;
    }
    
    .hades-menu.light .hades-time-input {
      background: rgba(0, 0, 0, 0.05) !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      color: #333 !important;
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

  const style = document.createElement('style');
  style.textContent = customCSS;
  document.head.appendChild(style);

  // Cấu hình
  let currentMultiplier = parseFloat(localStorage.getItem('hadesSpeedMultiplier') || 1);
  let enabled = localStorage.getItem('hadesScriptEnabled') === 'true';
  let currentTheme = localStorage.getItem('hadesTheme') || 'dark';
  let blockAds = localStorage.getItem('hadesBlockAds') === 'true';
  let menuVisible = false;
  let videoObserver = null;
  let adBlockerObserver = null;

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
  title.textContent = 'Speep Wed Ultimate';
  
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
  speedDisplay.textContent = `x${currentMultiplier.toFixed(1)}`;
  menu.appendChild(speedDisplay);

  const speedLabel = document.createElement('div');
  speedLabel.className = 'hades-speed-label';
  speedLabel.textContent = 'Tốc độ hiện tại';
  menu.appendChild(speedLabel);

  // Thanh trượt tốc độ chi tiết
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'hades-slider-container';
  
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.className = 'hades-slider';
  slider.min = '0.1';
  slider.max = '5';
  slider.step = '0.1';
  slider.value = currentMultiplier;
  
  // Marker cho thanh trượt
  const speedMarkers = document.createElement('div');
  speedMarkers.className = 'hades-speed-markers';
  
  const markers = ['0.1x', '0.5x', '1x', '2x', '5x'];
  markers.forEach((marker, index) => {
    const markerEl = document.createElement('div');
    markerEl.className = `hades-speed-marker ${index === 2 ? 'main' : ''}`;
    markerEl.textContent = marker;
    speedMarkers.appendChild(markerEl);
  });
  
  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(speedMarkers);
  menu.appendChild(sliderContainer);

  // Nút điều khiển tốc độ
  const speedControls = document.createElement('div');
  speedControls.className = 'hades-btn-group';
  
  const decreaseSpeedBtn = document.createElement('button');
  decreaseSpeedBtn.className = 'hades-btn';
  decreaseSpeedBtn.textContent = '➖ Giảm 0.2x';
  
  const increaseSpeedBtn = document.createElement('button');
  increaseSpeedBtn.className = 'hades-btn';
  increaseSpeedBtn.textContent = '➕ Tăng 0.2x';
  
  speedControls.appendChild(decreaseSpeedBtn);
  speedControls.appendChild(increaseSpeedBtn);
  menu.appendChild(speedControls);

  // Section điều khiển video
  const controlsSection = document.createElement('div');
  controlsSection.className = 'hades-controls-section';
  
  const controlsLabel = document.createElement('div');
  controlsLabel.className = 'hades-section-title';
  controlsLabel.textContent = 'Điều khiển Video';
  
  const controlsGrid = document.createElement('div');
  controlsGrid.className = 'hades-controls-grid';
  
  const controls = [
    { text: '⏪ 10s', action: () => seekVideo(-10) },
    { text: '⏩ 10s', action: () => seekVideo(10) },
    { text: '⏪ 30s', action: () => seekVideo(-30) },
    { text: '⏩ 30s', action: () => seekVideo(30) },
    { text: '⏸️ Tạm dừng', action: () => togglePlayPause() },
    { text: '▶️ Phát', action: () => playVideo() },
    { text: '⏹️ Dừng', action: () => stopVideo() },
    { text: '🔊 Âm lượng', action: () => toggleMute() }
  ];
  
  controls.forEach(control => {
    const btn = document.createElement('button');
    btn.className = 'hades-control-btn';
    btn.textContent = control.text;
    btn.addEventListener('click', control.action);
    controlsGrid.appendChild(btn);
  });
  
  controlsSection.appendChild(controlsLabel);
  controlsSection.appendChild(controlsGrid);
  menu.appendChild(controlsSection);

  // Nhập thời gian để tua đến
  const timeControl = document.createElement('div');
  timeControl.className = 'hades-time-control';
  
  const minutesInput = document.createElement('input');
  minutesInput.type = 'number';
  minutesInput.className = 'hades-time-input';
  minutesInput.placeholder = 'Phút';
  minutesInput.min = '0';
  
  const timeSeparator = document.createElement('div');
  timeSeparator.className = 'hades-time-separator';
  timeSeparator.textContent = ':';
  
  const secondsInput = document.createElement('input');
  secondsInput.type = 'number';
  secondsInput.className = 'hades-time-input';
  secondsInput.placeholder = 'Giây';
  secondsInput.min = '0';
  secondsInput.max = '59';
  
  const seekToBtn = document.createElement('button');
  seekToBtn.className = 'hades-control-btn';
  seekToBtn.textContent = 'Tua đến';
  seekToBtn.style.flex = '1.5';
  
  timeControl.appendChild(minutesInput);
  timeControl.appendChild(timeSeparator);
  timeControl.appendChild(secondsInput);
  timeControl.appendChild(seekToBtn);
  menu.appendChild(timeControl);

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
    { text: '🚫 Chặn QC', action: () => toggleAdBlock(), active: blockAds },
    { text: '💾 Lưu CĐ', action: () => exportSettings() },
    { text: '⚙️ Cài Đặt', action: () => showSettings() }
  ];
  
  features.forEach(feature => {
    const btn = document.createElement('button');
    btn.className = 'hades-feature-btn';
    if (feature.active) btn.classList.add('active');
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
  footer.innerHTML = 'Speep Wed Ultimate v6.0 • <b>LAMDev</b>';
  menu.appendChild(footer);

  // Thêm theme toggle vào menu
  menu.appendChild(themeToggle);

  // Thêm vào DOM
  document.body.appendChild(iconBtn);
  document.body.appendChild(menu);

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
        text: `Tốc độ: x${currentMultiplier.toFixed(1)}`,
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
    slider.value = 1;
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
    currentMultiplier = parseFloat(slider.value);
    speedDisplay.textContent = `x${currentMultiplier.toFixed(1)}`;
    
    if (enabled) {
      patchSpeed();
    }
  });

  slider.addEventListener('change', () => {
    localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
    showStatus(`Đã đặt tốc độ: x${currentMultiplier.toFixed(1)}`);
  });

  decreaseSpeedBtn.addEventListener('click', () => {
    currentMultiplier = Math.max(0.1, currentMultiplier - 0.2);
    slider.value = currentMultiplier;
    speedDisplay.textContent = `x${currentMultiplier.toFixed(1)}`;
    localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
    
    if (enabled) {
      patchSpeed();
    }
    
    showNotification({
      icon: '➖',
      title: 'Giảm tốc độ',
      text: `Tốc độ: x${currentMultiplier.toFixed(1)}`,
      duration: 1500
    });
  });

  increaseSpeedBtn.addEventListener('click', () => {
    currentMultiplier = Math.min(5, currentMultiplier + 0.2);
    slider.value = currentMultiplier;
    speedDisplay.textContent = `x${currentMultiplier.toFixed(1)}`;
    localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
    
    if (enabled) {
      patchSpeed();
    }
    
    showNotification({
      icon: '➕',
      title: 'Tăng tốc độ',
      text: `Tốc độ: x${currentMultiplier.toFixed(1)}`,
      duration: 1500
    });
  });

  seekToBtn.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const totalSeconds = minutes * 60 + seconds;
    
    if (totalSeconds >= 0) {
      seekToTime(totalSeconds);
    } else {
      showNotification({
        icon: '⚠️',
        title: 'Thời gian không hợp lệ',
        text: 'Vui lòng nhập số phút và giây hợp lệ',
        duration: 2000
      });
    }
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
    status.textContent = `${enabled ? '🟢 Đang chạy' : '🔴 Đã tắt'} | Tốc độ: x${currentMultiplier.toFixed(1)} | Chặn QC: ${blockAds ? 'Bật' : 'Tắt'}`;
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

  // Chặn quảng cáo
  function setupAdBlocker() {
    if (!blockAds) return;
    
    // Chặn các request quảng cáo phổ biến
    const adKeywords = [
      'ads', 'advertisement', 'doubleclick', 'googleads', 'googlesyndication',
      'facebook.com/ads', 'adsystem', 'adserver', 'adservice', 'adnxs',
      'adsafeprotected', 'advertising', 'tracking', 'analytics'
    ];
    
    // Chặn fetch request
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const url = args[0];
      if (typeof url === 'string' && adKeywords.some(keyword => url.includes(keyword))) {
        return Promise.reject(new Error('Blocked by ad blocker'));
      }
      return originalFetch.apply(this, args);
    };
    
    // Chặn XMLHttpRequest
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      if (typeof url === 'string' && adKeywords.some(keyword => url.includes(keyword))) {
        this._blocked = true;
        return;
      }
      return originalXHROpen.call(this, method, url, ...args);
    };
    
    // Observer để xóa quảng cáo mới
    adBlockerObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            // Xóa các phần tử có class/id chứa từ khóa quảng cáo
            const adSelectors = [
              '[class*="ad"]', '[id*="ad"]', '[class*="ads"]', '[id*="ads"]',
              '[class*="banner"]', '[id*="banner"]', '[class*="sponsor"]', '[id*="sponsor"]'
            ];
            
            adSelectors.forEach(selector => {
              try {
                const elements = node.querySelectorAll ? node.querySelectorAll(selector) : [];
                elements.forEach(el => {
                  if (el.offsetHeight > 0 || el.offsetWidth > 0) {
                    el.style.display = 'none';
                    el.remove();
                  }
                });
              } catch(e) {}
            });
            
            // Xóa iframe quảng cáo
            if (node.tagName === 'IFRAME') {
              const src = node.src || '';
              if (adKeywords.some(keyword => src.includes(keyword))) {
                node.style.display = 'none';
                node.remove();
              }
            }
          }
        });
      });
    });
    
    adBlockerObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Xóa quảng cáo hiện có
    setTimeout(removeExistingAds, 1000);
  }
  
  function removeExistingAds() {
    const adSelectors = [
      '[class*="ad"]', '[id*="ad"]', '[class*="ads"]', '[id*="ads"]',
      '[class*="banner"]', '[id*="banner"]', '[class*="sponsor"]', '[id*="sponsor"]'
    ];
    
    adSelectors.forEach(selector => {
      try {
        document.querySelectorAll(selector).forEach(el => {
          if (el.offsetHeight > 0 || el.offsetWidth > 0) {
            el.style.display = 'none';
            el.remove();
          }
        });
      } catch(e) {}
    });
    
    // Xóa iframe quảng cáo
    document.querySelectorAll('iframe').forEach(iframe => {
      const src = iframe.src || '';
      const adKeywords = ['ads', 'advertisement', 'doubleclick', 'googleads'];
      if (adKeywords.some(keyword => src.includes(keyword))) {
        iframe.style.display = 'none';
        iframe.remove();
      }
    });
  }
  
  function disableAdBlocker() {
    if (adBlockerObserver) {
      adBlockerObserver.disconnect();
      adBlockerObserver = null;
    }
    
    // Khôi phục fetch và XMLHttpRequest
    if (window.originalFetch) {
      window.fetch = window.originalFetch;
    }
    
    if (window.originalXHROpen) {
      XMLHttpRequest.prototype.open = window.originalXHROpen;
    }
  }

  function toggleAdBlock() {
    blockAds = !blockAds;
    localStorage.setItem('hadesBlockAds', blockAds);
    
    // Cập nhật nút
    const adBlockBtn = document.querySelector('.hades-feature-btn:nth-child(4)');
    if (adBlockBtn) {
      if (blockAds) {
        adBlockBtn.classList.add('active');
      } else {
        adBlockBtn.classList.remove('active');
      }
    }
    
    if (blockAds) {
      setupAdBlocker();
      showNotification({
        icon: '🚫',
        title: 'Đã bật chặn quảng cáo',
        text: 'Quảng cáo sẽ bị chặn trên trang này',
        duration: 3000
      });
    } else {
      disableAdBlocker();
      showNotification({
        icon: '✅',
        title: 'Đã tắt chặn quảng cáo',
        text: 'Quảng cáo sẽ hiển thị bình thường',
        duration: 3000
      });
    }
    
    updateStatusText();
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

  // Các hàm điều khiển video
  function seekVideo(seconds) {
    document.querySelectorAll('video').forEach(video => {
      video.currentTime += seconds;
    });
    
    const direction = seconds > 0 ? 'trước' : 'sau';
    showNotification({
      icon: seconds > 0 ? '⏩' : '⏪',
      title: `Đã tua ${Math.abs(seconds)} giây ${direction}`,
      text: '',
      duration: 1500
    });
  }

  function seekToTime(totalSeconds) {
    document.querySelectorAll('video').forEach(video => {
      video.currentTime = totalSeconds;
    });
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    
    showNotification({
      icon: '🎯',
      title: 'Đã tua đến',
      text: `${minutes}:${seconds.toString().padStart(2, '0')}`,
      duration: 2000
    });
  }

  function togglePlayPause() {
    const videos = document.querySelectorAll('video');
    let anyPlaying = false;
    
    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
        anyPlaying = true;
      }
    });
    
    if (!anyPlaying) {
      videos.forEach(video => {
        video.play();
      });
    }
    
    showNotification({
      icon: anyPlaying ? '⏸️' : '▶️',
      title: anyPlaying ? 'Đã tạm dừng' : 'Đã phát',
      text: '',
      duration: 1500
    });
  }

  function playVideo() {
    document.querySelectorAll('video').forEach(video => {
      video.play();
    });
    
    showNotification({
      icon: '▶️',
      title: 'Đã phát video',
      text: '',
      duration: 1500
    });
  }

  function stopVideo() {
    document.querySelectorAll('video').forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
    
    showNotification({
      icon: '⏹️',
      title: 'Đã dừng video',
      text: '',
      duration: 1500
    });
  }

  function toggleMute() {
    const videos = document.querySelectorAll('video');
    let anyMuted = false;
    
    videos.forEach(video => {
      if (!video.muted) {
        video.muted = true;
        anyMuted = true;
      }
    });
    
    if (!anyMuted) {
      videos.forEach(video => {
        video.muted = false;
      });
    }
    
    showNotification({
      icon: anyMuted ? '🔇' : '🔊',
      title: anyMuted ? 'Đã tắt tiếng' : 'Đã bật tiếng',
      text: '',
      duration: 1500
    });
  }

  // Các hàm tính năng khác
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
      const time = `${Math.floor(video.currentTime / 60)}:${Math.floor(video.currentTime % 60).toString().padStart(2, '0')}`;
      const duration = `${Math.floor(video.duration / 60)}:${Math.floor(video.duration % 60).toString().padStart(2, '0')}`;
      
      info += `#${index + 1}: ${video.playbackRate.toFixed(1)}x | `;
      info += video.paused ? '⏸️' : '▶️';
      info += ` | ${time}/${duration} | ${Math.round(video.volume * 100)}%\n`;
    });
    
    showNotification({
      icon: 'ℹ️',
      title: 'Thông tin video',
      text: info,
      duration: 4000
    });
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
      blockAds: blockAds,
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

  // Khởi tạo
  if (enabled) {
    applyPatch();
  }
  
  if (blockAds) {
    setupAdBlocker();
  }
})();
