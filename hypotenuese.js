
var p;
var q;
function hypo(p, q) {
    function squre(x) {
        return x * x;
    }
    var s = Math.sqrt(squre(p) + squre(q))
    return s;
}

function ans() {
    var a = parseFloat(document.getElementById("base").value)
    var b = parseFloat(document.getElementById("per").value)
    var t = hypo(a, b)
    document.getElementById("ans").innerHTML = "Hypo = " + t;
}
