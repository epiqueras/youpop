window.onload = function onWindowLoad() {
  var videoUrl = window.location.href.split('=');
  videoUrl = videoUrl[1] + videoUrl[2];
  var videoIFrame = document.createElement('iframe');
  videoIFrame.width = "100%";
  videoIFrame.height = "100%";
  videoIFrame.src = videoUrl.replace('watch?v', 'embed/');
  videoIFrame.setAttribute('allowfullscreen', 'true');
  document.body.appendChild(videoIFrame);
}
