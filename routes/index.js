var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();


var fs = require('fs');
var logger = fs.createWriteStream('resultLog.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
});

// Set Avro Engine
var avro = require('./avro/avro-lib-v1.1.4.js');

var resultDict = new Array();

/**
 * Get database object
 */
function getDatabase() {
  return new sqlite3.Database('./storage/database.db', sqlite3.OPEN_READONLY, (err) => {
    if(err) {
      console.error(err.message);
    } else {
      console.log('Connected to DB in READONLY mode');
    }
  });
}

/**
 * Close database
 * @param {Database} db 
 */
function closeDatabase(db) {
  db.close((err) => {
    if(err) {
      console.log(err.message)
    }
    else {
      console.log('Closed the database connection');
    }
  });
}

/**
 * Get Name 
 * @param {Database} db 
 */
function getAllNames(db) {
  var sql =  `SELECT DISTINCT name FROM geonames_bd`;
  db.all(sql, [], (err, rows) => {
    if(err) {
      throw err;
    }
    rows.forEach((row) => {
      var text = avro.OmicronLab.Avro.Phonetic.parse(row.name);
      resultDict.push(text);
      logger.write(text + '\n');
    });
  });
}



/* GET home page. */
router.get('/', function(req, res, next) {

  var text = avro.OmicronLab.Avro.Phonetic.parse('Ami Banglay Gan Gai');
  var database = getDatabase();
  getAllNames(database);
  closeDatabase(database);
  

  res.render('index', { title: text });
});



module.exports = router;
