
var qr = require('qr-image');
function test1(path){
    var qr_svg = qr.image(path, { type: 'svg' });
    qr_svg.pipe(require('fs').createWriteStream('sample1.svg'));
    var svg_string = qr.imageSync(path, { type: 'svg' });
}
module.exports = {
    test1 : test1,
}