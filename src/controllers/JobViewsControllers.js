var jenkinsapi = require('jenkins-api');


const _hostname = "localhost:8080";
const _username = "root";
const _password = "root";

const _url = 'http://' + _username + ":" + _password + "@" + _hostname;

module.exports = {
    async viewPistolagemLog(req, res){
        const { job, number } = req.params;
        var jenkins = jenkinsapi.init(_url);
        //jenkins = Jenkins({ baseUrl:  _url , crumbIssuer: true });    
        

        jenkins.build_info("/" + job, number, function(err, data){
            if (!err){
                if(data.building){
                    return res.json({jobName: job, result: data.result, actions: data.actions, building: data.building, progress: Math.round((new Date().getTime() - data.timestamp) / data.estimatedDuration * 100)});
                }else if(data.result == 'SUCCESS'){
                    return res.json({jobName: job, result: data.result, actions: data.actions, building: data.building, progress: 100});
                }else{
                    return res.json({jobName: job, result: data.result, actions: data.actions, building: data.building, progress: 1});
                }
            }else{
                return err;
            }

        });
      
    }

};