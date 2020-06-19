module.exports = getTimePassed = function (d1,d2) {
    var diff = (d2 - d1); 
    let res = [];
    res["days"] = Math.floor(diff / (1000*60*60*24));//  ---------------------------------------------  days
    res["hours"] =  Math.floor((diff % (1000*60*60*24) ) / (1000*60*60));//  -------------------------  hours
    res["minutes"] = Math.round(((diff % (1000*60*60*24) ) % (1000*60*60)) / (1000*60));//  ----------  minutes
    res["seconds"] = Math.round( (((diff % (1000*60*60*24) ) % (1000*60*60)) / (1000*60)) / 1000 ) ;//  seconds
    return res;    
}


