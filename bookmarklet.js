// use http://mrcoles.com/bookmarklet/ to turn into a bookmarklet and gitraw.com to serve this file
function inject() {
var body = document.getElementsByTagName('body');
document.body.innerHTML += '<hr/>';     
document.body.innerHTML += '<button ' +      
    'onclick="' + 
    'var wizfill_selector=\'input[type^=text],input[type^=number],input:not([type])\';' + 
    'var lines = jQuery(\'#form_data\').val().split(\'\\n\');' +
    'console.log(lines);' +
    'jQuery(wizfill_selector).css(\'backgroundColor\', \'red\');' +
    'jQuery(wizfill_selector).attr(\'title\', function(index) { return \'wizfill field: \' + (index); });' +
    '">highlight fields</button>';     
document.body.innerHTML += '<button ' +      
    'onclick="' + 
    'var wizfill_selector=\'input[type^=text],input[type^=number],input:not([type])\';' + 
    'var lines = jQuery(\'#form_data\').val().split(\'\\n\');' +
    'console.log(lines);' +
    'jQuery(wizfill_selector).val(function( index, value ) {' +
    '    if (index<lines.length) {' +
    '        return lines[index];' +
    '    } else {' +
    '        return value;' +
    '    }' +
    '}); ' + 
    '">fill fields</button>';     

document.body.innerHTML += '<br/>';     
document.body.innerHTML += '<textarea style="width:100%; height:600px;" id="form_data"></textarea>';     
}
