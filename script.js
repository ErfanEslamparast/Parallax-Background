$(document).ready(function () {
   let docWidth = $(document).width();
   
   $(document).mousemove(function (e) { 
      let moveBird= (e.pageX /docWidth)*50;
      $(".layer7").css("transform",`translateX(${moveBird}px)`)
      $(".layer3").css("transform",`translateX(${-moveBird}px)`)
   });
});