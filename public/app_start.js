var gCanvas = {
    User: {}
};
var gUserJson = {
    User: {}
};

var gWalkCount = {};

function logThis(s) {

    console.log('==== ' + s + ' ====');

}

function walk(obj, desc) {
    if (desc === undefined) {
        desc = 'object'                 ;
    }
    logThis("start walk of " + desc);
    doWalk(obj);
    logThis("ehd walk");
}
//
function doWalk(obj, pad) {
    if (pad === undefined) {
        pad = "-";
    } else {
        pad = pad + "-";
    }
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var val = obj[key];
            console.log(pad + key + ' -- ' + val);
            if (typeof(val ) !== "string") {
                doWalk(val, pad);
            }
        }
    }
}














