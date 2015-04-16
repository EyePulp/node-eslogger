// create a connection to a ES we can reuse in other plugins

var prefix = "thefoobar"

// var es = require('./lib/eslogger')({
var settings = {
    // debug : true,
    prefix : prefix,
    hosts : [
        { host: 'cuspidor-gateway-1.vpn.local',port: 9200},
        { host: 'cuspidor-gateway-2.vpn.local',port: 9200},
        { host: 'cuspidor-gateway-3.vpn.local',port: 9200},
    ],
    mapping : {
        "template" : prefix + "-*",
        "order": 0,
        "settings": {},
        "mappings": {
            "health": {
                "properties": {
                    "id": {
                        "index": "not_analyzed",
                        "type": "string"
                    },
                    "server":{
                        "index": "not_analyzed",
                        "type": "string"
                    }
                }
            }
        },
        "aliases": {}
    }
// });
};
// es.mapping();
// console.log('just testing');
// es.log('health',{'foo':'bar'});
console.log('settings',settings);
var async = require('async');
async.forEach(settings,function(s,cb){
    console.log(s);
    return cb();
},function(){
    console.log('done');
});
// process.exit();
