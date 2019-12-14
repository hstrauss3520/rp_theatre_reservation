$(function() {
    transferText("Anastasia Fall Musical",document.getElementById("anastasia").innerHTML);
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $("#reserveButton").click(function(){
        $("#reserveModal").modal("hide");
        $("#confirmModal").modal("show");


    });

    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });

    $("#proceedButton").click(function(){
        $("#reserveModal").modal("show");
    });

    $("#button_anastasia").click(function(){
        
        transferText("Anastasia Fall Musical",document.getElementById("anastasia").innerHTML);
    });

    $("#button_lesmiserables").click(function(){
        
        transferText("Les Miserables Winter Musical",document.getElementById("les-miserables").innerHTML);
    });
    
    $("#button_annie").click(function(){
        
        transferText("Annie Spring Musical",document.getElementById("annie").innerHTML);
    });
    
    
    function transferText(header,txt){
        document.getElementById("main_description").innerHTML="<h4>"+header+"</h4>"+txt;

    }
});
