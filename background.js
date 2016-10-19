chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.windows.create( {
      url: 'video.html?video=' + request.videoUrl,
      width: request.windowWidth,
      height: request.windowHeight,
      top: request.topOffset,
      left: request.leftOffset,
    });
});
