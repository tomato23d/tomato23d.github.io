

var topics = ["Be Positive", "Exercise", "Dream", "Work"];
console.log(topics[0]);
console.log(topics[1]);

for (const top of topics) {console.log(top)};

function listT() {for(var x = 0; x < topics.length; x++) {console.log(topics[x]);}};
function selectT() {if (topics[0] === 'Dream') {console.log ("lets dream");} 
                    else if (topics[5] ==='Work') {console.log ("lets work");}
                    else {console.log('foo');} };

var randomt = topics[Math.floor(Math.random()*topics.length)];
function selectTR() {if     (randomt === 'Be Positive') {console.log ("no checks");}
                    else if (randomt === 'Exercise') {console.log ("eat well");}
                    else if (randomt === 'Dream') {console.log ("lets dream");} 
                    else if (randomt ==='Work') {console.log ("lets work");}
                    else {console.log('foo');} };




    
