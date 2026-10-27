const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://'+__dirname+'/revizuno.html');
for(const t of process.argv.slice(3)){await p.evaluate(t=>setT(t),+t);await p.screenshot({path:`${process.argv[2]}/p${t}.jpg`,type:'jpeg',quality:70});}
console.log(errs);await b.close()})();
