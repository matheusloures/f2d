#!/usr/bin/env node
const fs = require('fs')
const { exec } = require('child_process');
const homeDir = require('os').homedir();
const desktopDir = `${homeDir}/Desktop/`;

var filename = process.argv[2]
var fileextension = process.argv[4]
var filecontent = process.argv[3]

if(filename===undefined){
    var randomNumber = Math.floor(Math.random() * 1999);
    filename = 'f2d_'+randomNumber
}

if(fileextension===undefined){
    fileextension = 'txt'
}

if(filecontent===undefined){
    filecontent='delete_this_to_start'
}


fs.writeFileSync(desktopDir+filename+'.'+fileextension, filecontent);

try {

    setTimeout(() => {
 
        exec('code . '+desktopDir+filename+'.'+fileextension, (err, stdout, stderr) => {
            if (err) {
              // node couldn't execute the command
              return;
            }
          });
    
    }, 1200);
    
} catch (error) {
    console.log(error)
}