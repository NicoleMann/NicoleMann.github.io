$(document).ready(function() {
   console.log( 'testing 123' );
    
    var fade = $("<div id='fade'></div>");
    $("body").append(fade);
    fade.hide();
    fade.click(function(){
        fade.animate({
            opacity:0
        },{
            duration:666,
            queue:false,
            complete:function(){
                fade.hide();
            }
        });
        $("article.open").removeClass("open");
    });
    
    $(".interest h3").hide();
    $(".interest img").hover(function(){
        $(this).prev().show();
        $(this).prev().css('top',-200);
        $(this).prev().animate({
            top:0,
            opacity:1
        },{
            queue:false,
            duration:500
        });
    },function(){
        $(this).prev().animate({
            top:450,
            opacity:0
        },{
            queue:false,
            duration:300,
            complete:function(){
                $(this).hide();
            }
        });
    });
    
    $(".interest img").click(function(){
        $(this).parent().parent().addClass("open");
        fade.show();
        fade.animate({
            opacity:1
        },{
            duration:333,
            queue:false
        });
    });
});