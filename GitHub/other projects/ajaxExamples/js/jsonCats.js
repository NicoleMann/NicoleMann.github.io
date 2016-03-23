$(document).ready(function(){
    $.getJSON("jsonDatabase/cat.json",function(data){
        console.dir(data);
        var html = "";
        $.each(data, function(index,item){
            html += '<div class="col-md-4">' + '<div class="catName">' + item.name + '</div>' + '<div class="catType"><small>type </small>' + item.type + '</div>' + '<div class="catGender"><small>type </small>' + item.gender + '</div>' + '<div class="catImage" src="' + item.image + '"/>' + '<div class="panel panel-default">' + '<div class="panel-heading">Renter Comments</div>';
            $.each(item.comments, function(ind,i){
                html += '<div class="panel-body">' + '<div class="renterName">' + i.username + '</div>' + '<div class="renterComment">' + i.comment + '</div>' + '<div class="renterStars">';
                for(var j=1; j<=5; j++){
                    if(j<=i.stars){
                        html += '<img src="images/fullStar.png"/>';
                    }else{
                        html += '<img src="images/emptyStar.png"/>';
                    }
                }
                html += '</div>' + '</div>';
            })
            html += '</div>' + '</div>';
        })
        $("#catData").append(html);
    })
});