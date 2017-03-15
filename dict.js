const fs = require('fs')
const path = require('path')
const CsvReader = require('promised-csv')
const reader = new CsvReader()
const tokenize = require("kuromojin")
const yaml = require('js-yaml')
const csvDir = path.join(__dirname, 'csv');
const dictDir = path.join(__dirname, 'dict');

function readdirPromise(dir){
  return new Promise(function(resolve, reject){
    fs.readdir(dir, function(err, files){
      if (err){
        reject(err);
      }
      resolve(files);
    });
  });
}

function createEntry(file){
  return reader.read(file, function (data) {
    let entry = {
      fix_form: data[4],
      supplemental: null,
      tokens: []
    };

    entry.tokens[0] = {
      surface_form: data[5],
      pos:          data[9],
      pos_detail_1: data[10],
      pos_detail_2: data[11],
      pos_detail_3: data[12],
      conjugated_type: data[13],
      conjugated_form: data[14],
      basic_form:   data[15],
      reading:      data[16],
      pronunciation: data[17]
    };

    return entry;
  });
};

readdirPromise(csvDir)
  .then(function(files){
  	Promise.all(files.map(function(file){
  	  let filePath = path.join(csvDir, file);
  	  return createEntry(filePath);
  	})).then(function(results){

  	  let dictData = {
  	  	message: "ひらがなで表記したほうが読みやすい補助動詞",
  	  	dict:  []
  	  };

  	  results.forEach(function(result){
  	  	if(result.length > 0) {
  	  	  dictData.dict = dictData.dict.concat(result);
  	  	}
  	  });
  	  fs.writeFileSync(path.join(dictDir, 'hojodoushi.yml'), yaml.safeDump(dictData));

  	});
  });
