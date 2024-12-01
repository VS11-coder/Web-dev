const input = [1,2,3,4,5];
const ans = input.map( function (i) {
    return i * 2;
})
console.log(ans);
const ans2 = input.filter( function (n) {
    if ( n%2==0 ) return true;
    return false;
})
console.log(ans2);
