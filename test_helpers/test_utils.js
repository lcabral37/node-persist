
var fs = require("fs");

exports.connect = function(persist, callback) {
  fs.unlink('test.db', function() {
    persist.connect({
      driver: 'sqlite3',
      filename: 'test.db'
    }, callback);
  });
}