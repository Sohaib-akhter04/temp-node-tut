const {readFileSync,writeFileSync, write} =require('fs');
console.log('starting');
const first=readFileSync('./content/first.txt','utf-8');

const second=readFileSync('./content/second.txt','utf-8');



console.log(first);
console.log(second);
const app="appended text";
// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result:${first}, ${second}`);



// for appending results

writeFileSync(
    './content/result-sync.txt',
    `here is the result:${app}`,
    {flag: 'a'}
    );
console.log('done with this one');