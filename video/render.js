const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+__dirname+'/revizuno.html');require('fs').mkdirSync(process.argv[2],{recursive:true});
for(let f=0;f<600;f++){await p.evaluate(t=>setT(t),f/30);await p.screenshot({path:`${process.argv[2]}/f${String(f).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}await b.close()})();
