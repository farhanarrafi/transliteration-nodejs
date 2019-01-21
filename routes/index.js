var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();


var fs = require('fs');
var logger = fs.createWriteStream('resultLog.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
});

// Set Avro Engine
var avro = require('../engines/avro/avroEngine.js');

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
    return rows;
  });
}


function getAvroPhonetic() {
  //var text = avro.OmicronLab.Avro.Phonetic.parse('Ami Banglay Gan Gai');
  var database = getDatabase();
  var namesList = getAllNames(database);
  namesList.forEach((row) => {
    var text = avro.getBengali(row.name);
    resultDict.push(text);
    logger.write(text + '\n');
  });
  closeDatabase(database);
}


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { transliterated_text: 'Hello', enword: '' });
});

router.post('/', function(req, res, next) {

  res.render('index', { transliterated_text: 'Hello', enword: req.body.enword });
});



module.exports = router;
