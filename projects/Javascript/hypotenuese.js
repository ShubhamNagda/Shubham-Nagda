
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

    document.getElementById("sq1").innerHTML = "Squre of Base " +  a  +" and Perpendicular " + b + " is ";
    document.getElementById("sq2").innerHTML = a*a + "+" + b*b + "=" + (a*a + b*b);
    document.getElementById("sq3").innerHTML = "squre root is √"+(a*a + b*b) +" = " + "√" + t + "+" + "√" + t ;
    document.getElementById("sq4").innerHTML = "Answer is = " + t
}

    
