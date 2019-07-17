var video = document.getElementById("video");
var button = document.getElementById("button");

button.addEventListener("click", function(e) {
	video.currentTime = video.duration;
  $(".burntpaper-1").css({"animation-delay":"0s"});
  $(".burntpaper-2").css({"animation-delay":"0s"});
  $(".burntpaper-3").css({"animation-delay":"0s"});
  $("#frame1").css({"animation-delay":"0s"});
  $("#frame2").css({"animation-delay":"0s"});
  $("#frame3").css({"animation-delay":"0s"});
  $(".wrinkledpaper").css({"animation-delay":"0s"});
  $(".content-header-1").css({"animation-delay":"0s"});
  $(".content-header-2").css({"animation-delay":"0s"});
  $(".content-header-3").css({"animation-delay":"0s"});
  $(".pages").css({"animation-delay":"0s"});
  $(".Im").css({"animation-delay":"0s"});
  $(".header").css({"animation-delay":"0s"});
  $("#img-1").css({"animation-delay":"0s"});
  $("#img-2").css({"animation-delay":"0s"});
  $("#img-3").css({"animation-delay":"0s"});
  $("#Layer_1").css({"animation-delay":"0s"});
	$(".directions").css({"animation-delay":"0s"});
	$("button").css({"filter": "opacity(0)"})
})

video.addEventListener("timeupdate", myfunc);

function myfunc(){
	if(video.currentTime > video.duration-3) {
		$("button").css({"filter": "opacity(0)"});
	}
};
