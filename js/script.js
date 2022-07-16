$(document).ready(function(){
    var current = 0;
    
    $(".pg_button li").click(function(e){
        e.preventDefault();

        var i = $(this).index();
        $(".pg_button li").removeClass("on");
        $(".pg_button li").eq(i).addClass("on");

        move(i);
    });

    $("#subpg").on({
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });
     

    timer();
    function timer(){
       setIntervalId = setInterval(function(){
          var i = current + 1;
          if(i >= 4 ){
              i = 0;
          }
          move(i);

          $(".pg_button li").removeClass("on");
          $(".pg_button li").eq(i).addClass("on");
        }, 4000)
    }


    function move(n){
        if(current == n) return;

        var currentEl = $(".site li").eq(current);
        var nextEl = $(".site li").eq(n);

        currentEl.css({left:"0%"}).animate({left:"-100%"});
        nextEl.css({left:"100%"}).animate({left:"0%"});
         
        current = n;
    };



})