const config = require('../config.js')
const request = require('request')
const fs = require('fs');
const key = config.key
const cert = config.cert

const getCerts = {
        uri: config.scmsuri,
        json: true,
        agentOptions: {
        key: fs.readFileSync(config.key),
        cert: fs.readFileSync(config.cert)
        }
}

request.get(getCerts, function(err, res, body){
        if (err){
                console.log('this is the error ' + err)
        }
        if (body.length === 181){
        console.log('Primary SCMS is Down');
        } else{
                // console.log('There are ' +body.length + ' Records in The Revocation Database')
                console.log(body)
                console.log('===== Revocation List Updated ====='+'\n'+'===== There Are ' +body.length +' Records in the Revocation Database =====')

        }
})

