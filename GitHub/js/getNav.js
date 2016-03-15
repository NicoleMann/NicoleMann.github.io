$.get("http://NicoleMann.github.io/Github/partials/nav.html",function(data{
                                                                       $(document).ready(function(){
    var container = $(".container")
    if(container){
        container.prepend(data)
    }
});
                                                                       }));