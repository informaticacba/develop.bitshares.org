var fs=require("fs"),path=require("path");const md5File=require("md5-file"),http=require("https");var extract=require("extract-zip");function getMD5Digest(t){return md5File.sync(t).toUpperCase()}var outputFileName="charting_library.17.025.02b61a1c.zip",outputFilePath=path.join(__dirname,outputFileName);const outputFile=fs.createWriteStream(outputFilePath);http.get("https://bitshares.org/assets/"+outputFileName,(t=>{t.pipe(outputFile)})).on("error",(t=>{throw console.error("Failed to download charting_library archive"),console.error(t),t})),outputFile.on("finish",(()=>{const t=getMD5Digest(outputFilePath),e=fs.readFileSync(outputFilePath+".md5").toString().trim();if(t!==e)throw fs.unlinkSync(outputFilePath),new Error("MD5 of downloaded file ("+t+") not matches expected ("+e+")");console.log("MD5 digest validated, extracting library..."),extract(outputFilePath,{dir:__dirname},(function(t){t&&console.error("Decompress error!",t)}))}));