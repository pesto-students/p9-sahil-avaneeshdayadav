const fs = require('fs');

function logReqRes(filename){
  return (req, res, next) => {
    fs.appendFile(
      filename,
      'Message',
      (err,data)=>{
        next();
      }
    );
  };
};

module.exports = {
  logReqRes,
};