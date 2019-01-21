var express = require('express');
var avro = require('./avro-lib-v1.1.4');

module.exports.getBengali = function(englishText) {
    if(englishText != "") {
        return avro.OmicronLab.Avro.Phonetic.parse(englishText);
    }
    return "";
}