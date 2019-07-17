$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $("video").css({"opacity":"0.12"})
      $(".portfolio .header").css({"opacity":"0"})
      $(".arrow").css({"opacity":"0"})
      $(".pages").css({"top":"755px"})
      $(".copies-1").css({"top":"1690px"})
      $(".copies-2").css({"top":"2685px"})
      $(".copies-1 #home").css({"bottom":"0px"})
      $(".copies-2 #home").css({"bottom":"0px"})
      $(".pages #home").css({"bottom":"0px"})
      $(".pages").css({"left":"-175px"})
      $(".copies-1").css({"left":"-175px"})
      $(".copies-2").css({"left":"-175px"})
      $(".copies-1").css({"transform": "scale(0.8)"})
      $(".copies-1").css({"font-family": "'Titillium Web', sans-serif"})
      $(".copies-2").css({"transform": "scale(0.8)"})
      $(".copies-2").css({"font-family": "'Titillium Web', sans-serif"})
      $(".pages").css({"transform": "scale(0.8)"})
      $(".pages").css({"font-family": "'Titillium Web', sans-serif"})
      $(".copies-1").css({"word-spacing":"9px"})
      $(".copies-2").css({"word-spacing":"9px"})
      $(".pages").css({"word-spacing":"9px"})
      $(".portfolio .sun img").css({"bottom":"460px"})
      $(".portfolio .sun img").css({"left":"460px"})
      $(".portfolio .sun img").css({"transform":"scale(0.4)"})
      $(".portfolio .sun img").css({"border": "0px solid white"})
    }
    else{
      $("video").css({"opacity": "1"})
      $(".portfolio .header").css({"opacity": "1"})
      $(".arrow").css({"opacity":"1"})
      $(".pages").css({"font-family": "'Playfair Display', serif"})
      $(".pages").css({"opacity":"1"})
      $(".pages").css({"left":"0"})
      $(".pages").css({"top":"445px"})
      $(".pages #home").css({"bottom": "230px"})
      $(".pages").css({"transform": "scale(1)"})
      $(".copies-1").css({"opacity":"1"})
      $(".copies-1").css({"left":"0"})
      $(".copies-1").css({"top":"445px"})
      $(".copies-1").css({"font-family": "'Playfair Display', serif"})
      $(".copies-1 #home").css({"bottom": "230px"})
      $(".copies-1").css({"transform": "scale(1)"})
      $(".copies-2").css({"font-family": "'Playfair Display', serif"})
      $(".copies-2").css({"opacity":"1"})
      $(".copies-2").css({"left":"0"})
      $(".copies-2").css({"top":"445px"})
      $(".copies-2 #home").css({"bottom": "230px"})
      $(".copies-2").css({"transform": "scale(1)"})
      $(".copies-1").css({"word-spacing":"5px"})
      $(".copies-2").css({"word-spacing":"5px"})
      $(".pages").css({"word-spacing":"5px"})
      $(".portfolio .sun img").css({"bottom":"195px"})
      $(".portfolio .sun img").css({"left":"-105px"})
      $(".portfolio .sun img").css({"transform":"scale(1)"})
      $(".portfolio .sun img").css({"border": "1px solid white"})
    }
  })
})
