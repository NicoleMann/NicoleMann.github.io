$(document).ready(function(){
    $("#getClients").click(function(){
        var url = "../jsonDatabase/clients.json";
        $.getJSON(url, function(data){
            var html = "<table>" + "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";
            $.each(data, function(index, item){
                html += "<tr>" + "<td>" + item.name + "</td>" + "<td>" + item.email + "</td>" + "<td>" + item.company + "</td>" + "</tr>";
            })
            html += "</table>";
            $("#data").append(html);
        })
    })
});