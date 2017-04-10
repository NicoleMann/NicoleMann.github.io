$.get("nav.html",function(data){
    $(document).ready(function(){
        $("#site-header").append(data);
        $("#site-header").fadeIn();
    });
});