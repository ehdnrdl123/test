    
$(document).ready(function(){         
    $(".menu1 a").on("click",function(){
        $("#modal").addClass("active");
    });
    $(".body1 .button").on("click",function(){
        $("#modal").removeClass("active");
    });
});