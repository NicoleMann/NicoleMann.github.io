$(document).ready(function(){
    console.log( 'jQuery started' );
    
    //create a div for overlay
    var overlay = $( '<div id="overlay"></div>' );
    $( 'body' ).append( overlay );
    overlay.hide();
    overlay.click(function(){
        overlay.animate({
            opacity : 0
        },{
            duration : 333,
            queue : false,
            complete : function(){
                overlay.hide();
            }
        });
        $( 'article.open' ).removeClass( 'open' );
        $( '#youtube' ).hide();
        $( '#youtube' ).attr( 'src', 'about:blank' );
    });
    
    //duplicate header into info box
   $( '.movie' ).each(function(){
        var h3copy = $( this ).find( 'h3' ).clone();
        $( this ).find( '.extended-info' ).prepend( h3copy );
    });
    
     $( '.basic-info h3' ).hide();

   $( '.basic-info img' ).hover(function(){ 
        // what happens when mouse enters poster
        /* 'this' refers to the single element you've selected.  ex: one poster instead of all posters
        'prev' refers to the element above the one you've selected in the code */
        $( this ).prev().show();
        // move heading up out of view
        $( this ).prev().css( 'top', -200 );
        // slides heading into view
        $( this ).prev().animate({
            top : 0,
            opacity : 1
        },{
            queue : false,
            duration : 500
        });
    },function(){
        //what happens when mouse leaves poster
        $( this ).prev().animate({
            top: 450,
            opacity: 0
        },{
            queue : false,
            duration : 300,
            complete : function(){
                $( this ).hide();
            }
        });
    }); 
   
    //open info box
    $( '.basic-info img' ).click(function(){
        $( this ).parent().parent().addClass( 'open' );
        overlay.show();
        overlay.animate({
            opacity : 1
        },{
            duration : 666,
            queue : false
        });
    });
    
    $( '.extended-info a' ).click(function( e ){
        e.preventDefault();
        $( '#youtube' ).show();
        $( 'article.open' ).removeClass( 'open' );
        var url = $( this ).attr( 'href' );
        var videoCode = url.split( '=' ).pop();
        var embedURL = 'http://www.youtube.com/embed/' + videoCode;
        $('#youtube').attr( 'src', embedURL );
    });
});