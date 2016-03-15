$.get("http://NicoleMann.github.io/Github/partials/nav.html",function(data){
                                                                       $(document).ready(function(){
    $(".container").prepend(data)
});
                                                                       }));