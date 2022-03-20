var unirest = require('unirest')
console.log("A")
var req = unirest("GET","https://api.json-generator.com/templates/wGysGoLobZxt/data")
req.headers({
    "cache-control":"no-cach",
    'Authorization': 'Bearer ubln5bvgtp6jri6lyy5407fyrr4malqcxd23l7oz'
})
console.log("B")

req.end(function(res){
    if(res.err) throw new Error(res.error)
    console.log("Data Table");
    console.table(req.body);

    console.log("=============================");

    console.log("Print 10 Premiry");
    for(let i=0 ; i<=10;i++){
        console.log(i);
        console.table(res.body[i]);
    }
    console.log("=============================");

    console.log("Print Contient M");
    console.table(res.body.filter(x=> x.usernam = "m"))

    console.log(res.body.length)
})