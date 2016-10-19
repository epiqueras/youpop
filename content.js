var popVideo = function popThisVideo() {
  var player = document.getElementById('player-api').getBoundingClientRect();
  chrome.runtime.sendMessage({
    videoUrl: window.location.href,
    windowWidth: player.width,
    windowHeight: player.height + 74,
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
document.getElementsByClassName('ytp-right-controls')[0].appendChild(popButton);
