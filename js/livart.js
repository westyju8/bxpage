$(document).ready(function() {



  // 언어 설정
  $("header> span button").click(function(){ //language setting
    $("header> span span").slideToggle();
  });

  //slide
  let ii = 0;
  setInterval(slide , 2900);
  function slide(){
    $("#slide> div").animate({left : "-1750px"},1800,function(){
      $("#slide> div").append( $("#slide> div> img").eq(0) );
      $("#slide> div").css("left",0);
	   ii++;
	   if(ii==3){
		  ii=0;
	   }
	   $("#slide span img").eq(ii).addClass("active").siblings().removeClass("active");
    });
  }

  // NOTE: menu click - move scrollTop

  $("header> div> nav a").eq(0).click(function(){
  	     $("html").animate({scrollTop : 1000}, 400);
  });
  $("header> div> nav a").eq(1).click(function(){
         $("html").animate({scrollTop : 2500}, 400);
  });
  $("header> div> nav a").eq(2).click(function(){
         $("html").animate({scrollTop : 3660}, 400);
  });
  $("header> div> nav a").eq(3).click(function(){
         $("html").animate({scrollTop : 5250}, 400);
  });



  // About 마우스 오버
  $("#about> div> div> div").hover(
    function(){
    $(this).css('cursor','pointer');
    $(this).addClass("ho");
    } ,
    function(){
    $(this).removeClass("ho");
    }
  );

  // NOTE: about - onlineshop 연결

  $("#onlineshop").click(function(){
    window.open("https://www.hyundailivart.co.kr/index");
  });


//  //마우스이동에 따라 이미지 이동
//  $('.background').parallaxBackground({
//     event: 'mouse_move',
//     animation_type: 'rotate',
//     animate_duration: 1,
//     zoom: 70,
//     rotate_perspective: 1000
// });

// NOTE: about 나타나기

if( $(window).width()> 600 ){
  $(window).scroll(function(){
    if( $(window).scrollTop()>600 ){
      $("#about").eq(0).addClass("act");
    }
  });
}


// NOTE:  new 나타나기

if( $(window).width()> 600 ){
  $(window).scroll(function(){
    if( $(window).scrollTop()>2000 ){
      $("#new_sec").addClass("act");
    }
  });
}

if( $(window).width()> 600){
  $(window).scroll(function(){
    if( $(window).scrollTop()>2100){
      $("#new_zoom").addClass("act");
    }
  });
}

// NOTE: everywhere 나타나기

if( $(window).width()> 600 ){
  $(window).scroll(function(){
    if( $(window).scrollTop()>3300 ){
      $("#everywhere").eq(0).addClass("act");
    }
  });
}

// NOTE: everywhere mouseover

$("#everywhere section img").mouseenter(function(){
  $(this).addClass("hover");
});
$("#everywhere section img").mouseleave(function(){
  $(this).removeClass("hover");
});

// NOTE: evertwhere pop-up

$("#everywhere> div> section").click(function(){
  const x = $(this).children("img").attr("src");
  const y = x.substr(-4);// ".jpg" 또는 ".png"...
  const z = x.slice(0,-4);//예_ "images/event-1"부분
  const zz = z + "_big" + y;
  $("#popup img").attr("src" , zz);
  const txt = $(this).children("img").attr("alt");
  $("#popup").fadeIn();
  $("#popup img").attr("alt", txt);  //alt속성값 부여
  $("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
  $("body").css("overflow","hidden");
});
//팝업 큰이미지 닫기
$("#popup img").click(function(){
  $("#popup").fadeOut();
  $("body").css("overflow","auto");
});






// NOTE: review 배경색 바뀌기

if( $(window).width()> 600 ){
  $(window).scroll(function(){
    if( $(window).scrollTop()<5000 ){
      $("#review").css("background","white");
    }
    if( $(window).scrollTop()>5000 ){
      $("#review").css("background","#737373");
    }
  });
}





}); //end
