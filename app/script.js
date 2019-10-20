/* function to retrieve unicode from characters */
function get_unicodes(chars) {
  var cout = [];
  var unilinks = [];
  var unicodes = [];
  var url = "http://www.fileformat.info/info/unicode/char/";
  for (var i=0, c; c=chars[i]; i++) {
    var charcode = c.charCodeAt();
    if (
      (charcode >= 768 && charcode <= 879) || 
      (charcode >= 6832 && charcode <= 6911) ||
      (charcode >= 7616 && charcode <= 7679) || 
      (charcode >= 8400 && charcode <= 8447) ||
      (charcode >= 65056 && charcode <= 65071)
    ) {
      var character = '◌'+c;
    }
    else if (c == ' ') {
      var character = 'SPACE';
    }
    else {
      var character = c;
    }
    var unicode = '000'+charcode.toString(16);
    unicode = unicode.slice(unicode.length-4, unicode.length);
    var unilink = `<a href="${url}${unicode}/index.htm">U+${unicode}</a>`;
    cout.push(''+character+'');
    unilinks.push(unilink);
    unicodes.push(unicodes);
  }
  return [cout, unilinks, unicodes];
}




