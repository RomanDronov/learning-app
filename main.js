
/*Comments by cmd+/ or multiline by cmd+shift+/*/
let num=5;
let str=String(num);
console.log(typeof (str));
console.log('test');
console.log(null===null);
console.log(undefined===undefined);
console.log(undefined==false);
showPrimes(5);
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;

    console.log(i); // 1, затем 3, 5, 7, 9
}
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
console.log('i'+i);
        for (let j = 2; j < i; j++) {
            console.log('j'+j);
            if (i % j == 0) continue nextPrime;
        }

        console.log( i ); // простое
    }
}
/** Setting dynamic name**/
let name='objName';
let obj={
    [name]:5,
}
console.log(obj.objName);
/** Merging obj methods into 1 **/
let objRules={
    canEdit:true,
    canView:true,
}
let objDate={
    date:new Date(),
}
let user={
    name:"alex",
}
Object.assign(user,objRules,objDate);
console.log(user);
/** deleting trash from obj**/
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});
delete family.father;
delete family.mother.husband;
console.log(family);
/** symbols as keys**/
let id = Symbol('2123');
let importedObj={
    name:'John',
}
importedObj[id]='12342';
console.log(importedObj[id]);
