const csv=require('csvtojson')
const csvFilePath = "../Calls_for_Service_2019.csv"
var i = 0
const start = Date.now()

csv({
    noheader: false,
    output: "csv"
})
.fromFile(csvFilePath)
.then((csvRow) => {
	for (row in csvRow) {
    	i = i + 1		
	}
	const elapsed = Date.now() - start
	console.log("Read " + i + " rows in " + elapsed + "ms")

})
