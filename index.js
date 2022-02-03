alphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
function convert(){
    var x = document.getElementById("pt")
    var k = document.getElementById("key").value | 0;
    var s = x.value.toLowerCase();
    var res = "";
    str = []
    for(i=0; i<s.length; i++){
        str.push(s.charCodeAt(i)-97);
        p = (((str[i]|0+k|0)/26) | 0);
        res +=  String.fromCharCode((str[i]+k - p*26)+97);
    }
    console.log(str)
    console.log(res)
    var r = document.getElementById("ct");
    r.textContent = res;
}
