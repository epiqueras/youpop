chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.windows.create( {
      url: 'video.html?video=' + request.videoUrl,
      width: request.windowWidth,
      height: request.windowHeight + 22,
      top: request.topOffset + 52,
      left: request.leftOffset,
      type: 'popup',
    });
});
