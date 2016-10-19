window.onload = function onWindowLoad() {
  // Wait for a video to load
  function waitForElementToDisplay(selector, time) {
    // Video loaded, insert button
    if(document.querySelector(selector) != null) {
      var popVideo = function popThisVideo() {
        var player = document.getElementById('player-api').getBoundingClientRect();
        chrome.runtime.sendMessage({
          videoUrl: window.location.href,
          windowWidth: player.width,
          windowHeight: player.height,
          topOffset: window.screenY + player.top,
          leftOffset: window.screenX + player.left,
        });
      }
      var popButton = document.createElement('button');
      popButton.className = 'ytp-button';
      popButton.setAttribute('title', 'Pop video');
      popButton.style.float = 'left';
      popButton.innerHTML = 'Pop';
      popButton.onclick = popVideo;
      var controls = document.getElementsByClassName('ytp-right-controls')[0];
      controls.insertBefore(popButton, controls.firstChild);
      return;
    }
    // Video not loaded yet set a timeout and call the function again
    else {
      setTimeout(function timeoutFunction() {
        waitForElementToDisplay(selector, time);
      }, time);
    }
  }
  // Initial function call
  waitForElementToDisplay('.ytp-right-controls', 5000)
}
