function cadastrarPistolagem(dados){
    $.ajax({
        type: "POST",
        url:"/cadastrarOrdem/dados",
         dataType: "json",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(dados),
        success: function(response) {
             $('#formulario_pistolagem').each (function(){
                this.reset();
             });
            $("#alert-success-pistolagem").slideDown(500).delay(2000).slideUp(500, function() {
                $("#alert-success-pistolagem").delay(2000).slideUp(500);
            });
            $("#gravar_pistolagem").fadeOut(500);
            $("#executar_pistolagem").fadeIn(100);
        },
         error: function(response){
            $("#alert-failed-pistolagem").slideDown(500).delay(2000).slideUp(500, function() {
            $("#alert-failed-pistolagem").delay(2000).slideUp(500);
         });
        },
    });
}


function executarPistolagem(){
    var dados = "sap";
    $.ajax({
        type: "POST",
        url:"/executarJob/" + dados,
        dataType: "json",
        contentType:"application/json; charset=utf-8",
        success: function(response) {
            let res = JSON.stringify(response)
            let resp  = res.split(":")
            window.localStorage.setItem("job", resp[1].replace('"', ""));
            $("#executar_pistolagem").fadeOut(500);
            $("#visualizar_log_pistolagem").fadeIn(100);
         },
         error: function(response){
            $("#alert-failed-pistolagem").slideDown(500).delay(2000).slideUp(500, function() {
                $("#alert-failed-pistolagem").delay(2000).slideUp(500);
            });
        },
    });
}

function viewJobProgress(job, number){

    $.ajax({
        type: "GET",
        url:"/viewJob/" + job + "/" + number,
        dataType: "json",
        contentType:"application/json; charset=utf-8",
        success: function(response) {
            window.localStorage.setItem("log", JSON.stringify(response));
            window.localStorage.setItem("progress", response.progress);

           
        },
        error: function(response){
            window.localStorage.setItem("log", response);

        }
    });


}
