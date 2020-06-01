const Jenkins = require('jenkins');

const _hostname = "localhost:8080";
const _username = "root";
const _password = "root";

const _url = 'http://' + _username + ":" + _password + "@" + _hostname;


module.exports = {
    async pistolagem(req, res){
        const { job } = req.params;
        jenkins = Jenkins({ baseUrl:  _url , crumbIssuer: true });    

        //Iniciando o build do Job do Jenkins
        jenkins.job.build(job, function (err, data){
            if(err){ 
                return res.json("Ocorreu um erro ao iniciar o job: " + err);
            }else{
                jenkins.job.get(job, function(err, data) {
                    
                    if(!err){
                        return res.json("O Build foi executado com sucesso. Número:" +  data.nextBuildNumber);
                    }else{
                        return res.json("Ocorreu um erro ao capturar o número do Build");
                    }
   
                });
                
            }
        });
    }
    
};