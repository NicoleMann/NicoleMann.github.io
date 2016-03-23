$.get("http://NicoleMann.github.io/GitHub/partials/nav.html",function(data){
    $(document).ready(function(){
        $(".container").prepend(data);
        $(".container").fadeIn();
    });
});