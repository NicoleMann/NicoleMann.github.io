$(document).ready(function(){
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
    }).mouseleave(function(){
        $(this).text("Purchase!");
        $("#log").append("<br>User moused over the button.");
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