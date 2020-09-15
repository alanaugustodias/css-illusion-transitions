const illusionContainer = document.getElementById('illusion-container');

window.setupDebugMode = function setupDebugMode() {
  setInterval(() => {
    if (illusionContainer.classList.contains('debug-mode')) {
      illusionContainer.classList.remove('debug-mode');
    }
    else {
      illusionContainer.classList.add('debug-mode');
    }
  }, 10000);
}
