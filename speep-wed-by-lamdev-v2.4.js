// ==UserScript==
// @name         Speep Wed By LAMDev
// @namespace    http://tampermonkey.net/
// @version      2.4
// @description  Menu quản lý script tăng tốc timeout - có Speep video
// @author       LAMDev
// @match        *://*/*
// @grant        none
// @icon         https://i.pinimg.com/236x/26/fc/2f/26fc2faf0e4a6628341e1a6f975654e7.jpg
// ==/UserScript==

(function() {
  'use strict';
  const devtools = /./;
  devtools.toString = function() {
    console.log(
      "%cF12 làm cái chó gì Trộm Code à đm mày",
      "color: rgb(14, 240, 29); background: linear-gradient(270deg,rgb(246, 14, 14),rgb(145, 148, 0), #8695e6, #986fee); padding:8px 15px; border-radius:8px; font-weight:bold; font-size:14px;"
    );


    console.log(
      `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⠿⠿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣾⣿⣶⣶⣤⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠘⢿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠈⠻⣿⣿⣿⣿⣆⠀⠀⠀⢀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⣀⣤⣶⣶⣌⠻⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⠁⣰⣿⣿⣿⣿⣿⣦⣙⢿⣿⣿⣿⠄⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣦⣹⣟⣫⣼⣿⣿⣶⣿⣿⣿⣿⣿⣿⣯⡉⠉⠉⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠐⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⡆⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡇⠀⢻⣿⣿⣿⣿⣿⡇⠀⠀⠈⠉⠉⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠀⠀⠀⠀⠀⠀⠀
⠀⣠⣴⣶⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⡇⠀⠸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠹⢿⣿⣿⢿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢰⣶⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣧⣄⣐⣀⣀⣀⣀⣀⡀
⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠉⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠁⠛⠛⠛⠛⠛⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀
`
      );


    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠆⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠋⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⠐⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀⡼⠇⠀⠀⠀⠘⡆⠀⠀⠐⠀⠀⠀⢀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠓⠢⢼⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⣠⠎⠀⠀⠀⠀⠀⠀⠸⡄⠀⠀⠀⠀⠀⠈⣇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⡰⠃⠀⠀⠀⠀⠀⠀⢀⡼⡇⠀⠀⠀⠀⠀⠀⢸⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⢠⠞⠀⢹⡄⠀⠀⠀⠀⠀⠘⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⣰⠁⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⢹⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⠋⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⡴⠃⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⢸⡇
⠀⠀⠀⠀⠀⠀⠀⢰⠋⠀⠀⠀⠀⠀⠀⢀⡾⠀⠀⠀⠀⠛⠀⠀⠀⠀⠀⢸⡁⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⢸⡇
⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⡿⣯⡷⡴⢦⣤⡠⣶⡶⠀⢷⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⡾⠀
⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⣼⣥⣤⣤⣤⣤⣤⣤⣤⣀⣀⣀⣀⠀⠈⢧⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⢀⡇⠀
⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠉⠙⠻⢿⣿⣿⣿⣿⣿⣿⠛⢦⠀⠀⢸⡇⠀⠀⠀⠀⠀⢸⡇⠀
⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⠳⠀⢳⡀⢹⡇⠀⠀⠀⠀⠀⡾⡇⠀
⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⡿⠘⠀⠀⠹⣼⡇⠀⠀⠀⠀⢠⠇⠀⠀
⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡿⠁⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⡾⠀⠀⠀
⠀⠀⢠⡏⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠁⠀⠀⠀⠀⠀⠀⠸⡄⠀⠀⢸⠁⠀⠀⠀
⠀⠀⡾⠀⠀⠀⠀⠀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⡟⠀⠀⠀⠀
⠀⣴⠓⣾⣳⣀⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇⠃⠀⠀⠀⠀⠀⠀⢸⡇⢀⠇⠀⠀⠀⠀
⣾⠃⠀⠀⠀⠑⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠈⡇⢸⠀⠀⠀⠀⠀
⠹⡀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣾⠀⠀⠀⠀⠀
⠀⢳⡄⠀⠀⠀⠀⠘⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⣿⠀⠀⠀⠀⠀
⠀⠀⣷⡄⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⡏⠀⠀⠀⠀⠀
⠀⢀⡇⢹⣄⠀⠀⠀⠀⣀⠉⠓⠶⢄⡀⠀⠀⠀⠀⠀⢀⣠⠴⠋⠣⣄⠀⠀⠀⠀⠀⠀⠀⠀⢠⠟⣸⣧⠀⠀⠀⠀⠀
⠀⣴⣿⠋⠘⣆⠀⢰⠶⠤⢍⣛⣶⠤⠿⣷⣦⡀⠒⠚⡟⠀⠀⠀⠀⠈⠛⠢⠤⡄⠀⠀⢀⡴⢯⠴⣳⠇⠀⠀⠀⠀⠀
⠀⠀⠉⠀⠀⠘⢦⡈⠻⣖⠤⣤⣉⣉⣹⣯⣭⠉⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠛⣫⣼⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠑⣄⠉⢦⡀⠀⠀⠈⠉⠁⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⢿⣷⢚⡝⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢶⣷⠇⠀⠀⠀⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠷⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`
      );


    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡟⣯⡿⣝⣯⠿⣽⢯⣟⡿⣻⣟⣿⣿⣿⢿⣿⣿⣿⣿⣻⣿⣶⣾⣷⣬⡁⠈⢀⣀⣵⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡰⢌
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⢯⣽⢯⣟⢾⣵⣻⡽⣾⡽⣽⣳⢯⣟⣿⣿⣯⣿⢾⣿⣿⣟⡾⣯⢿⣿⣿⣿⣷⣤⣿⡇⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠠⠁⠊⠀⠁⠀⠀⠀⠀⠀⠂⠘⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣏⣿⢯⣿⢾⣟⡾⣳⣟⣳⣟⡷⣯⣟⣾⣿⣿⣿⢾⣿⣟⡾⣿⣿⣽⣿⣿⣏⣿⣿⣿⣿⣷⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡳⣞⣿⣿⡯⣿⢾⣽⣳⢯⡷⣯⣟⣷⣻⣽⣿⣿⣿⣿⡽⣯⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⢀⣀⣄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢯⣗⣻⣿⣟⡾⣽⢿⣛⣾⡽⣯⢟⣷⣻⢾⣽⣿⣿⣞⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣶⠿⣻⠿⠛⢹⣿⢿⠟⠛⠉⠐⣌⢻⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⣝⣾⣿⡟⣼⣻⣏⣿⣹⢺⣟⣵⣫⣶⡿⣾⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡄⢀⣠⣴⡾⢋⣽⣿⣯⣿⠋⡔⠉⣼⣿⠇⠀⠀⠀⠣⢌⣻⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⣽⣿⣟⢾⣿⡵⣯⢾⣱⣯⣿⣷⢯⣷⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣴⣿⣿⣿⣿⠃⢌⠀⢰⣿⡏⠀⠀⠀⠀⠱⢨⠼⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣻⣿⣿⣯⢿⣿⣟⣯⣿⣯⣿⣿⣿⣯⣿⣟⣿⣿⣳⣿⣿⣿⣈⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢳⣿⢣⠘⣀⡞⢸⣿⠁⠀⠀⠀⠀⢀⠃⢾⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣻⣽⣿⣿⣯⢿⣿⣻⣾⢿⣿⣽⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣴⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣧⣿⢋⢆⠃⣾⠀⣸⡟⠀⠀⠀⠀⠀⠀⠎⡽⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⣽⣿⣿⣿⣯⣿⣿⣏⣿⣿⢿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡟⢯⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⡿⢿⡿⢣⢍⣢⣭⡇⢀⣿⢃⠀⠀⠀⠀⠀⢈⢒⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⡟⢰⣿⢾⣿⣯⣷⣿⣿⣿⣞⣿⣿⣿⣿⣦⣛⢿⣿⣿⣿⣿⣿⣿⣽⠏⠉⠗⣚⣩⣾⠟⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⣿⣿⣿⣿⣷⣿⡏⢠⠃⢸⡟⠰⠀⠀⠀⠀⠀⢌⣺⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⡿⠀⣾⡏⣿⣿⡷⣿⣿⣿⣿⣧⣧⣼⣿⣿⣿⣿⣶⡹⢿⣿⣿⣿⣿⡸⢄⠉⠉⡙⣉⠡⣚⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣇⡞⠀⣼⠁⠁⠀⠀⠀⠀⠈⡴⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠁⢸⡟⠀⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣟⠻⢾⣫⣼⠗⠀⠙⢟⡻⣿⣷⡂⠀⠀⠐⠀⠂⢡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⠃⣿⣿⠟⠀⢠⡇⠀⠀⠀⠀⠀⠀⣘⡾⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡇⢀⣿⠁⠀⣿⣿⣳⣿⣿⣿⣿⣿⣿⣿⣬⠉⡒⠋⠁⠀⠀⠀⣤⠙⠌⠻⢆⡀⠀⠀⢀⣰⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⠋⠀⠀⣸⠁⠀⠀⠀⠀⠀⠐⣼⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⢀⣾⠏⠀⢰⡿⣿⣳⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⢡⣁⡀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠤⠚⢱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣸⠇⠀⠀⢠⠇⠀⠀⠀⠀⠀⢀⣹⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⣾⠟⠀⢀⣾⣟⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡻⢎⣀⣀⠄⠀⠀⣤⣠⣤⡀⠀⠀⠀⣠⡿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⠏⠀⠀⢠⠏⠀⠀⠀⠀⠀⠠⣜⡾⣷⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣟⡞⠀⠀⣼⣿⣞⡿⣾⣿⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⣀⠀⠀⠀⠀⠉⠉⠀⠀⢀⡼⢏⣵⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠣⠋⠀⢀⣴⠏⠀⡄⠀⠀⠀⣀⢳⡞⠀⢿⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣴⣟⣷⣇⢀⣼⠏⢸⢾⡿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⡲⢤⣄⣀⣠⠖⣏⣱⣾⣿⣿⣿⣿⠇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠓⢶⣾⠟⠁⠀⡜⠀⠀⠀⡰⣬⠟⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀
⠀⢠⣾⡳⠋⢸⢾⡾⡟⠀⣾⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢷⣃⢎⠲⣁⠏⣴⣿⡿⢻⢽⣿⣿⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⠈⣆⠀⠀⠀⣠⠞⠀⠀⢀⡰⣳⠋⠀⠀⠀⠀⠘⠆⠀⠀⠀⠀⠀
⣰⣻⠞⠀⢀⣼⣿⣿⠀⢰⣟⣾⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢋⡜⣻⣆⠣⠜⡒⢼⡿⣈⠗⣚⣏⠿⣼⣿⡿⣿⣿⣿⢿⣙⢮⡿⠃⠀⠈⠒⠶⠾⠋⠀⠀⢀⢦⡟⠁⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⠀⠀
⡗⠁⠀⣠⡾⢃⣽⡾⣧⡾⣽⣯⣿⣿⣿⣿⣿⡿⠻⠿⠿⣿⣿⣿⣿⣿⣿⣯⣇⠎⡴⢡⢎⠳⡜⢺⣄⢛⣦⢙⡴⢪⠜⣆⣛⣷⣿⣿⣟⢣⠎⠻⠁⠀⠀⠀⠀⠀⠀⠀⠀⡄⣯⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣧⠀⠀⠀
⠀⢀⣾⢋⣴⠟⠁⠻⣽⡿⣿⣾⣿⣿⡟⠉⠉⢿⣄⠀⡸⠛⢉⠛⣿⣿⣿⣷⣮⣛⠍⠲⢌⠣⡜⡄⠛⡷⢏⠲⡌⣧⣻⠞⣋⢶⣿⣿⣏⠆⠁⠀⠀⠀⠀⠀⠀⠀⠀⡄⣳⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀
⣴⣿⣵⠟⠁⠀⢀⣼⣿⣿⢷⣿⣿⡟⠀⠀⠀⠀⠙⣏⠀⠁⢢⡀⠸⣿⣿⣿⣿⠿⣿⣷⡾⠶⢶⣌⢓⡰⢊⣕⡾⢛⠤⡙⡔⢺⣿⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⡄⣣⣼⡏⢽⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀
⠟⢏⠀⠀⠀⢀⣾⣿⣟⣿⣿⣿⣿⡁⠀⠀⠀⠀⠀⠸⡄⠀⠀⠈⠂⣿⣿⣿⣿⣿⣷⣤⡙⣷⣬⡘⠳⠐⢃⠌⡰⢉⠆⡱⢈⣽⣿⡎⢿⡆⠰⣇⠀⡀⢄⠢⣍⣶⣿⣿⡅⢺⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⠀⠀
⠀⠀⠉⠒⢀⡾⠛⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⢱⠀⠀⠀⢠⣿⣿⣿⣇⢻⣿⣿⢿⣾⣿⣷⠀⠁⠂⠌⢀⠁⠂⠁⢰⣿⣿⣷⡈⢻⡄⢹⡖⣈⠦⡿⣾⣿⣿⣿⣿⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣟⠀⠀
⡰⢪⡕⡴⠃⢠⣾⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⢿⣄⡀⣼⣿⠟⣹⠇⠀⢿⣿⠀⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠘⠆⣻⣿⣿⣦⣽⣾⣧⣝⣾⣷⢻⣿⣿⣿⣿⣷⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠇⠀⠀
⢡⣣⠞⠀⣰⣿⣿⢋⣿⣿⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⡿⠟⠊⠁⠀⣠⣿⣏⣾⣿⣾⡿⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⡞⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⣠⣾⡿⠀⠀⠀
⠚⠁⠀⢀⣿⣷⠏⣼⣿⣿⣿⣿⣟⠀⠀⠀⠀⠀⠀⢀⣠⣶⢿⡟⠀⠀⢀⠄⢊⣿⣿⣿⣿⠟⠛⠉⠁⠀⠀⠰⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⢿⣿⣿⣷⡀⠀⠀⠀⠀⠒⠛⠛⠁⠀⠀⠀⠀
⠀⠀⢀⣼⣿⣟⣴⣿⣿⣿⣿⣿⡏⠀⠀⠀⣀⣤⣾⣿⠟⣉⢾⠇⠀⠐⣁⢶⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⡆⠈⢻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⣾⣟⣾⣿⣿⣿⣿⣿⣿⣿⠇⢀⣤⠾⠛⠋⠁⠀⠈⡔⣾⠖⢀⠜⣠⡾⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢙⢄⡀⠻⣿⠙⠳⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀
⡴⣟⡷⣯⣿⢿⣿⣿⡿⣿⣿⣿⡴⠋⠀⠀⠀⠀⠀⠀⠐⣸⡿⠀⠘⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⢿⣷⡀⠀⠻⡷⣄⠀⠀⠀⠀⠀⠀
⡸⠋⠉⠙⢣⣿⣿⣿⣇⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⠁⠀⢰⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡝⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡖⣦⡘⣧⡀⠀⠉⢌⠳⡀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⢾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠁⠀⠀⠘⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⣿⠌⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⡛⠁⢣⠀⠀⠀⠡⡘⢆⠀⠀⠀
⣦⣀⣀⣤⢾⣿⣻⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⣠⢴⣲⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢽⡚⡌⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⠘⢸⠀⠀⠀⠀⠐⣌⡆⠀⠀
⢿⡟⠏⠻⢿⣷⣻⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠻⠟⠗⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⡝⡔⠁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⣼⡇⠀⠀⠀⠀⢸⡷⠀⠀
⡏⠀⠀⠀⠀⠙⢿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠠⢁⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⡹⢬⡁⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⡇⠀⠀⠀⢀⣾⣿⠀⠀
⢇⡀⠂⠀⠀⠀⠈⠙⠿⣯⠀⠀⠀⠀⠀⠀⢀⠑⡂⣯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡘⣽⡝⢦⡃⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣺⣿⣿⣷⣄⠀⢀⣾⣿⡇⠀⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⣄⠀⠀⠀⠀⠠⢃⡕⢺⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡑⢼⡟⡼⣩⠿⣦⡡⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠰⣌⣷⣿⣿⣿⣿⣿⣶⣿⣿⣿⠁⠀⠀
⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⡈⢳⡄⠀⢠⠡⢣⠜⣹⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⠣⣹⢾⡙⠶⡡⢞⡩⢷⣯⡰⠡⢄⠠⣀⠀⡄⢠⢂⡜⣬⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀
⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⢄⢻⡄⢣⠜⣡⢞⣿⣿⣷⡆⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠘⢤⡷⢏⢧⡙⣣⠕⡪⠜⡡⢞⡹⠿⣮⣵⣦⣹⣬⣷⣾⣾⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀
⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠐⡈⢦⡙⢦⡙⢦⣻⢡⣿⣿⣿⣦⣐⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠰⣈⣦⢽⢫⠜⡩⢆⡱⢢⠙⠄⠃⠁⠊⠔⢫⠔⢦⠣⣝⢲⣿⠿⣿⡅⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⣿⣿⣿⣇⢤⠀⠀⠀⠀⠀⠀⠀⢈⠒⡜⢦⣹⣳⣿⣿⣿⣿⣿⡿⢠⣷⠶⢤⣤⣀⣀⣀⣄⣠⣤⣬⠶⢓⢋⠆⢣⠊⠌⠑⡀⠂⠁⠈⠀⠀⠀⠀⠈⠐⣊⠦⡙⢦⣿⣿⣨⣿⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀
⣿⣿⣿⣿⣿⣶⢄⡀⠀⠀⠀⠀⠠⢩⢜⣣⢷⢃⣿⣿⣿⣿⣿⣇⣿⣿⣧⠀⠀⠈⠉⠉⠈⠁⠀⠀⠐⠈⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⢎⣹⣿⣿⢿⣿⣿⢿⣿⣿⣿⣿⣿⣿⠙⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣧⣿⣦⣿⣥⣤⣀⣀⠂⡇⣞⣼⣿⣿⣿⣿⣿⢿⣿⣿⣿⡿⠛⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣨⡿⢻⣿⣿⠏⠀⣸⣿⣿⣿⣿⣿⡿⠀⣿⢿⣿⣿⣿⣿⣿⣿
⡇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠙⣾⣾⣿⣯⣿⣿⣿⣏⣼⡿⠛⠙⠁⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠱⣿⣿⣿⡿⣏⠀⣰⣿⣿⣿⣿⣿⣿⡇⠀⡿⢸⣿⣿⣿⣿⣿⣟
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢰⣿⡿⠟⠛⢫⡹⠖⠉⠁⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢻⣿⡿⢻⡇⠉⣹⣿⣿⣿⡟⣿⣿⡿⢀⣼⣡⣿⣿⣿⣿⣿⣿⣯
⡿⢿⠟⣿⣿⣿⣿⣿⣿⣿⡿⠟⢋⣁⡤⠒⣠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢲⣿⣿⡀⠘⢛⣿⣿⣿⣿⡟⢀⣿⣿⣅⣾⣿⣿⣿⣿⣿⣿⣿⣿⣧
⣿⣿⢰⣿⣿⣿⣿⣿⠛⢣⠐⢌⣖⠡⠔⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡰⠂⠀⠀⠀⠀⠀⠀⠀⠀⢨⡟⠙⢿⡿⠿⣻⣿⣿⣿⠟⣠⣿⡿⣻⣿⣿⢟⣋⣱⣿⣿⣿⣿⣿⣿
⣿⢿⢿⣿⣭⡿⠃⠄⠀⡠⠈⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠀⠀⠀⣹⣾⣿⣿⣿⣿⣾⠿⠋⠀⠹⡸⣏⡉⠉⣿⣿⣿⣿⣿⣿⠋
⡟⠁⢸⡾⠋⠀⢡⡤⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⢽⠂⢀⣼⣿⠟⠉⠉⠋⠉⠀⠀⠀⣆⣠⠇⠀⠀⣼⣿⣿⣿⣿⣿⣧⡀
⣇⠀⠋⠀⠀⠀⡺⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡃⢻⡇⢸⣿⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⡿⠏⠉⠉
⣿⡀⠀⠀⠀⠠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠌⡑⣇⠘⣿⠈⢆⡀⠀⠀⠀⣀⠀⠀⣀⠤⣊⡽⢟⠿⠛⠉⠁⠐⠠⠀⠀
`
      );


    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⢀⡠⠤⠒⠒⠒⠙⠒⠒⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠊⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢷⡦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡼⠅⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣌⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⠁⠀⠀⢣⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⡄⢹⡄⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣀⣀⣀⣀⠿⠀⠀⠀⠈⠷⠤⣄⣀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⡇⠐⡇⠀⠀⠀⣠⠊⢠⡀⠉⠲⡄⠀⠀⠀⠀⠀⠀
⠘⢯⡉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣉⣒⣦⣄⠀⠈⢦⡀⠀⠀⠀⠀⣇⢰⠇⠀⠀⡜⠁⣴⣿⣿⣶⡄⠘⢦⠀⠀⠀⠀⠀
⠀⠀⠉⠲⢄⣀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣟⠛⣿⣿⣿⣿⣦⡀⠳⡀⠀⠀⠀⣿⡟⠀⠀⠀⠸⡀⠙⢻⣿⡿⠀⠀⣸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⣿⡷⠖⠀⠀⠀⠀⠀⢚⠻⣿⣿⡿⣿⠏⠘⢷⣶⣷⡄⠀⢸⡟⠁⠀⠀⠀⠀⠱⡀⠈⠛⠀⠀⡠⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠾⣏⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠂⠀⠀⠀⠈⠙⣏⢀⣤⣾⡴⢻⠂⠀⠀⠀⠈⠉⠒⠤⠤⠊⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢻⣻⡉⠉⣽⠃⠀⠀⠀⠲⠀⣀⣠⡄⠀⠤⠤⠄⠈⣡⣾⠟⠁⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣿⠹⣤⡧⠤⠶⢾⣍⣉⠍⠀⣰⠧⣤⣤⡤⣶⠿⢋⣡⣄⡞⢁⣠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠣⣌⠑⢢⣤⡤⠤⣖⣠⡜⠁⠀⢻⣧⣍⣉⣉⣭⣶⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢉⡟⠁⠀⠀⠀⠀⠉⠉⠁⠺⢿⣿⣁⣴⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣷⣼⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⠟⠉⠉⠁⠒⣒⠤⢄⣀⠀⠀⠀⠀⠀⣠⣴⡶⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢯⡀⠀⠀⠀⠀⠀⠀⢠⡀⠈⠑⠢⢄⠀⠀⠋⣹⣆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⡀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⢹⣆⠀⠙⣿⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⡞⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠙⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⢿⣧⡀⠉⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡒⠤⣷⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠀⠀⠀⠀⠀⠀⠈⠶⠼⢿⣷⡆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡄⠐⡇⠀⠀⠐⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⢹⠀⠀⠀⠀⠀⠀⠳⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⡏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡈⢣⡀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠀⠑⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⢀⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⠙⠲⣤⣀⣀⣀⣀⣀⣀⣤⣾⣿⠛⣧⡉⠓⢶⣤⣤⢤⡴⣶⡎⠁⠀⢴⠟⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠘⢦⡈⠙⠛⢻⠉⠀⣼⠟⠀⡇⠈⠓⠤⣀⠀⠀⢣⣼⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠀⠉⠉⢁⣧⠀⠀⠀⠀⠀⠙⢦⡀⠸⠀⣸⣇⠈⠀⡇⠀⠀⠀⠈⠑⠦⣈⡏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡴⠊⠁⠀⠀⠀⢀⠞⠁⠘⡆⠀⠀⠀⠀⠀⠀⠈⠓⠚⠁⠈⢳⠀⡇⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⠔⠁⠀⠀⠀⠀⠀⠰⠁⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣧⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      `
      );


    console.log(
      "%c🌳 Name：LAMDev | Bio：Sayy Hello | Url：https://www.dichvusale.io.vn",
      "font-family: ;color:rgb(199, 240, 14); background: linear-gradient(270deg,rgb(4, 70, 253),rgb(7, 152, 50), #8695e6, #986fee); padding: 8px 15px; border-radius: 8px"
    );
  };

  // Trigger để hiển thị cảnh báo
  console.log(devtools);
  if (window.hadesToggleScriptLoaded) return;
  window.hadesToggleScriptLoaded = true;
  
  const SPEEDS = { 0.25: 0.25, 0.5: 0.5, 0.75: 0.75, 1: 1, 1.25: 1.25, 1.5: 1.5, 1.75: 1.75, 2: 2, 3: 3, 4: 4, 5: 5, 10: 10, 100: 100 };
  let currentMultiplier = localStorage.getItem('hadesSpeedMultiplier') || 1;
  let enabled = localStorage.getItem('hadesScriptEnabled') === 'true';

  const iconBtn = document.createElement('div');
  iconBtn.textContent = '⚡';
  iconBtn.title = 'Mở menu Speed Wed By LAMDev';
  iconBtn.style = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    background: rgba(30,35,50,0.7);
    border-radius: 50%;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    color: #fff;
    font-size: 28px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    z-index: 999999;
    backdrop-filter: blur(6px);
  `;

  const menu = document.createElement('div');
  menu.style = `
    position: fixed;
    bottom: 85px;
    right: 30px;
    background: rgba(30,35,50,0.95);
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    color: #fff;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    z-index: 999999;
    display: none;
    flex-direction: column;
    gap: 8px;
    min-width: 260px;
  `;

  const headerRow = document.createElement('div');
  headerRow.style = "display: flex; justify-content: space-between; gap:5px;";

  const toggleBtn = document.createElement('button');
  toggleBtn.style = baseBtnStyle();
  toggleBtn.textContent = enabled ? 'Tắt Script' : 'Bật Script';

  const clearCookieBtn = document.createElement('button');
  clearCookieBtn.style = baseBtnStyle();
  clearCookieBtn.textContent = 'Xóa Cookie';

  const closeBtn = document.createElement('button');
  closeBtn.style = baseBtnStyle();
  closeBtn.textContent = '×';
  closeBtn.style.background = '#ff5555';

  headerRow.appendChild(toggleBtn);
  headerRow.appendChild(clearCookieBtn);
  headerRow.appendChild(closeBtn);

  const secondRow = document.createElement('div');
  secondRow.style = "display: flex; gap:5px;";

  const reloadBtn = document.createElement('button');
  reloadBtn.style = baseBtnStyle();
  reloadBtn.textContent = 'Tải Lại Trang';

  const reportBtn = document.createElement('button');
  reportBtn.style = baseBtnStyle();
  reportBtn.textContent = 'Báo Lỗi';

  secondRow.appendChild(reloadBtn);
  secondRow.appendChild(reportBtn);

  const speedRow = document.createElement('div');
  speedRow.style = "display: flex; flex-wrap: wrap; gap:5px;";

  Object.keys(SPEEDS).forEach(k => {
    const b = document.createElement('button');
    b.style = baseBtnStyle();
    b.textContent = 'X' + k;
    b.addEventListener('click', () => {
      currentMultiplier = SPEEDS[k];
      localStorage.setItem('hadesSpeedMultiplier', currentMultiplier);
      showStatus(`Tốc độ đặt: x${k}`);
      if (enabled) patchSpeed();
    });
    speedRow.appendChild(b);
  });

  const status = document.createElement('div');
  status.style = "font-size:13px; margin-top:6px; color:#ccc;";
  updateStatusText();

  menu.appendChild(headerRow);
  menu.appendChild(secondRow);
  menu.appendChild(speedRow);
  menu.appendChild(status);

  document.body.appendChild(iconBtn);
  document.body.appendChild(menu);

  iconBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
  });

  toggleBtn.addEventListener('click', () => {
    enabled = !enabled;
    localStorage.setItem('hadesScriptEnabled', enabled);
    toggleBtn.textContent = enabled ? 'Tắt Script' : 'Bật Script';
    updateStatusText();
    if (enabled) applyPatch();
  });

  clearCookieBtn.addEventListener('click', () => {
    clearAllCookies();
    showNotification({
      icon: '🧼',
      title: 'Đã xóa cookie domain hiện tại',
      text: '',
      duration: 3000
    });
  });

  reloadBtn.addEventListener('click', () => location.reload());

  reportBtn.addEventListener('click', () => {
    window.open('https://dichvusale.io.vn', '_blank');
  });

  function baseBtnStyle() {
    return `
      padding:5px 8px;
      background:#a955ff;
      border:none;
      border-radius:4px;
      cursor:pointer;
      font-size:13px;
    `;
  }

  function updateStatusText() {
    status.textContent = 'Script Đang: ' + (enabled ? 'Bật' : 'Tắt') + ` | Tốc độ x${currentMultiplier}`;
  }

  function showStatus(msg) {
    status.textContent = msg;
    setTimeout(updateStatusText, 2000);
  }

  function patchSpeed() {
    // Patch timer
    window.setTimeout = (fn, delay) => originalSetTimeout(fn, delay / currentMultiplier);
    window.setInterval = (fn, delay) => originalSetInterval(fn, delay / currentMultiplier);
    // Patch video playback
    patchVideoSpeed();
  }

  function patchVideoSpeed() {
    document.querySelectorAll('video').forEach(video => {
      video.playbackRate = Number(currentMultiplier);
    });
  }

  function applyPatch() {
    if (window.hadesFinalScriptLoaded) return;
    window.hadesFinalScriptLoaded = true;

    patchSpeed();
    showNotification({
      icon: '⚡',
      title: 'HadesBypass đã kích hoạt!',
      text: `Tốc độ x${currentMultiplier}`,
      duration: 4000
    });

    const observer = new MutationObserver(patchVideoSpeed);
    observer.observe(document.body, { childList: true, subtree: true });

    setInterval(patchSpeed, 500);
  }

  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;

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

  function showNotification({ icon = '', title = '', text = '', duration = 4000 } = {}) {
    if (!document.getElementById('hades-toast-container')) {
      const container = document.createElement('div');
      container.id = 'hades-toast-container';
      container.style = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 999999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `;
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.style = `
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 12px 16px;
      background: rgba(30,35,50,0.95);
      color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      font-family: 'Segoe UI', 'Roboto', sans-serif;
      min-width: 220px;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.4s ease;
    `;
    const iconEl = document.createElement('div');
    iconEl.textContent = icon;
    iconEl.style = `font-size: 20px;`;
    const content = document.createElement('div');
    content.innerHTML = `<div style="font-weight:600;">${title}</div><div style="font-size:13px;color:#ccc;">${text}</div>`;
    const close = document.createElement('div');
    close.textContent = '×';
    close.style = `
      margin-left:auto;
      cursor:pointer;
      font-size:18px;
      padding:0 4px;
      color:#aaa;
    `;
    close.addEventListener('click', () => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    });
    toast.appendChild(iconEl);
    toast.appendChild(content);
    toast.appendChild(close);
    document.getElementById('hades-toast-container').appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    }, 50);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  if (enabled) applyPatch();
})();

