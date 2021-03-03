var fullName ="Aseel Zuhair EL-Najjar";
var skills = "E-business II – business & Technical Skills";
function length() {
    var i = fullName.length;
    return i;
}
function fullN() {
    var x = fullName.slice(0);
    return x;
}
function firstName() {
    var x = fullName.slice(0,5);
    return x;
}
function lastName() {
    var x = fullName.slice(-9);
    return x;
}
function secName() {
    var x = fullName.slice(6,12);
    return x;
}
function replace() {
    var repl = skills.replace(/business/gi, "Business");
    return repl;
}
function lower() {
    var low = skills.toLowerCase();
    return low;
}
function noSpace() {
    var no = alert(fullName.trim());
    return no;
}
function fChar() {
    // var fC = fullName.charAt(0);
    // or
    var char = fullName.slice(0,1);
    return char;
}
console.log(fullN());
