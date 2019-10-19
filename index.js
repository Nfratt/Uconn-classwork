// const input = process.argv[2];
// const output = [];
// const func = function func(input) {
//     for (var i = 0; i < input.length; i++) {
//         output.push(input * 2);
//     }
//     console.log(Output: ${ output });
// } 

function operate(arr,func){
    return arr.map(func);
}
console.log(operate([1,2,3],(n)=>n*2));
console.log(operate([1,2,3],(n)=>{
return n+2;
}));
console.log(operate([1,2,3],function(n){
    return n /2;
}));