function get1(){
var input=[];
for (i=1; i<=6;i++){
    input.push(document.getElementById("div1_ibox"+ i).value);
}
document.getElementById("show_paragraph_1").innerHTML=input.join(".");
}

function get2(){
    var input=[];
    for (i=1; i<=6;i++){
        input.push(document.getElementById("div2_ibox"+ i).value);
    }
    document.getElementById("show_paragraph_2").innerHTML=input.join(".");
    }