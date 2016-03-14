$(document).ready(function(){
    
    //overlay div to fade out screen
	var overlay = $( '<div id="overlay"></div>' );
	$( 'body' ).append( overlay );
	overlay.hide();
	overlay.click(function(){
		overlay.animate({
			opacity:0
		},{
			duration: 666,
			queue:false,
			complete:function(){
				overlay.hide();
			}
		});
        $( 'article.open' ).removeClass( 'open' );
    });
    
    //activate title when mouse hovers
	$( '.cover h3' ).hide();
	$( '.cover img' ).hover(function(){
		$( this ).prev().show();
		$( this ).prev().css( 'top',-200 );
		$( this ).prev().animate({
			top: 0,
			opacity:1
		},{
			queue:false,
			duration:500
		});
	},function(){
		$( this ).prev().animate({
			top:450,
			opacity:0
		},{
			queue:false,
			duration:300,
			complete:function(){
				$( this ).hide();
			}
		});
	});
    
    //activate overlay
	$( '.cover img' ).click(function(){
		$( this ).parent().parent().addClass( 'open' );
		overlay.show();
		overlay.animate({
			opacity:1
		},{
			duration: 333,
			queue:false
		});
	});
    
    $("#mySingleLineText").focus(function(){
        $(this).css("background-color","yellow");
        $("#log").append("<br>User focused on the input.");
    });
    
    $("#myTextArea").focus(function(){
        $(this).css("background-color","blue");
    }).blur(function(){
        $(this).css("background-color","red");
        $("#log").append("<br>User blurred the text area.");
    });
    
    $("#myButton").mouseenter(function(){
        $(this).text("Are you finished your order?");
        $("#log").append("<br>User moused over the button.");
    }).mouseleave(function(){
        $(this).text("Purchase!");
    });
    
    $("#mySelect").change(function(){
        var val = $(this).val();
        $("#mySelectMessage").html(val + " is your selection.");
        $("#log").append("<br>User changed the selection.");
    });
    
    $("#myButton").click(function(){
        var myInput = $("#mySingleLineText").val();
        var myText = $("#myTextArea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='delivery']:checked").val();
        var myChecked = [];
        $("[name='rewardCard']:checked").each(function(){
            myChecked.push($(this).val());
        });
        $("#log").append("<br>User clicked the button");
        $("#log").append("<br>Value of input is " + myInput);
        $("#log").append("<br>Value of text area is " + myText);
        $("#log").append("<br>Value of select is " + mySelect);
        $("#log").append("<br>Value of radio is " + myRadio);
        $("#log").append("<br>Value of checkboxes is " + myChecked.join());
    });
});