$(document).ready(function(){
    $("#mySingleLineText").focus(function(){
        $(this).css("background-color","yellow");
        $("#log").append("<br>User focused on the input.");
    });
    
    $("#myTextArea").focus(function(){
        $(this).css("border-color","blue");
    }).blur(function(){
        $(this).css("border-color","red");
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
    
    //review button for json
    $("#review").click(function(){
        var url = "http://NicoleMann.github.io/GitHub/final/json/final.json";
        $.getJSON(url, function(data){
            var html = "<table>" + "<tr><th>Title</th><th>Author</th><th>Reviews</th></tr>";
            $.each(data, function(index, item){
                html += "<tr>" + "<td>" + item.title + "</td>" + "<td>" + item.author + "</td>" + "<td>";
                $.each(item.reviews, function(ind, i){
                    html += "<div>" + i.username + "</div>" + "<div>" + i.comment + "</div>" + "<div>";
                    for(var j=1; j<=5: j++){
                        if(j<=i.stars){
                            html += "<img src='http://NicoleMann.github.io/Github/final/images/fullStar.png'/>";
                        }else{
                            html += "<img src='http://NicoleMann.github.io/Github/final/images/emptyStar.png'/>"
                        }
                    }
                    html += "</div>" + "</td>"
                })
                html += "</tr>"
            })
            html += "</table>";
            $("#data").append(html);
        })
    })
});