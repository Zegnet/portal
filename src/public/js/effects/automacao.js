$(document).ready(function(){

    window.localStorage.setItem("jobName", "");
    window.localStorage.setItem("job", "");
    window.localStorage.setItem("progress", 0);
    window.localStorage.setItem("log", "");

    $("#gravar_pistolagem").click(function(){

        var mandante = $("#mandante_sap").val();
        var usuario = $("#usuario_sap").val();
        var senha = $("#senha_sap").val();
        var ordem = $("#ordem_venda").val();  

        if(mandante == "0"){
            $("#mandante_sap").removeClass("form-control").addClass("form-control is-invalid");
        }else if(usuario == ""){
            $("#usuario_sap").removeClass("form-control").addClass("form-control is-invalid");
        }else if(senha == ""){
            $("#senha_sap").removeClass("form-control").addClass("form-control is-invalid");
        }else if(ordem == ""){
            if($('#msg').length) $('#msg').remove();
            $('#ordem_venda_error').append("<p id='msg'>Por favor insira a ordem de venda.</p>");
            $("#ordem_venda").removeClass("form-control").addClass("form-control is-invalid");
        }else if(!Number.isInteger(parseInt(ordem))){
            if($('#msg').length) $('#msg').remove();
            $('#ordem_venda_error').append("<p id='msg'>O número da ordem só deve possuir números.</p>");
            $("#ordem_venda").removeClass("form-control").addClass("form-control is-invalid");
        }
        else{
            if($('#msg').length){
                $('#msg').remove();     
            } 

            $("#mandante_sap").removeClass("form-control is-invalid").addClass("form-control");
            $("#usuario_sap").removeClass("form-control is-invalid").addClass("form-control");
            $("#senha_sap").removeClass("form-control is-invalid").addClass("form-control");
            $("#ordem_venda").removeClass("form-control is-invalid").addClass("form-control");

            var dados = {'mandante':mandante, 'usuario': usuario, 'senha': senha, 'num_ordem': ordem };
            window.localStorage.setItem("jobName", "sap");
            cadastrarPistolagem(dados);
            
        }
    });
    
    $("#executar_pistolagem").click(function(){
        $("#formulario_pistolagem").fadeOut(800);
        $("#view_progress_sap_close").fadeIn(800);
        executarPistolagem();
    });   

    $("#visualizar_log_pistolagem").click(function(){
        var jobname = window.localStorage.getItem("jobName");
        var jobnumber = window.localStorage.getItem("job");
        var monitor = 0;
        $("#view_progress_sap_open").fadeIn(1200);


        var progress = window.setInterval(function(){
            viewJobProgress(jobname, jobnumber);            
            monitor = window.localStorage.getItem('progress');
            
            if(monitor < 100){
                $('.progress-bar').css('width',  + monitor + '%');
                $('.progress-bar').text(monitor + '%'); 
                progress;   
            }else if(monitor == 100){
                window.clearInterval(progress);
                $('.progress-bar').css('width',  '100%');
                $('.progress-bar').text('100%');
            }
        }, 1000);

        progress;

    });         

});