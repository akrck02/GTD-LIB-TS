const fs = require('fs');


console.log("-----------------------------------------------------");
console.log("  TEST CHECKER SCRIPT  ");
console.log("-----------------------------------------------------");

const data = fs.readFileSync(__dirname + '/res/mocha-tests.json', 'utf8');
const logs = fs.readFileSync(__dirname + '/res/mocha-tests.log', 'utf8');
const object = JSON.parse(data);

console.log(logs);
console.log("\n------------------ FINAL RESULTS --------------------");

let failedTitle;
for (const title in object) {
    const element = object[title];
    console.log(element.passed ? "✅" : "❌",title, element.duration +"ms");

    if (failedTitle !== undefined && element.passed === false) {
        failedTitle = title;
    }
    
}

if(failedTitle !== undefined) {
    throw new Error(`${failedTitle} failed`);
}
