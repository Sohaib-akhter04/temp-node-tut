// local dependancy- use it only in this particular project
// npm i<package name>

// global dependancy-use it in any project
// npm install -g <packageName>
//  sudo npm install -g <packageName> (mac)
const _=require('lodash');
const items=[1,[2,[3,[4]]]];
const newItems=_.flattenDeep(items);
console.log(newItems);