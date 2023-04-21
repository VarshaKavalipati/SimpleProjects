const billtot=document.getElementById('bill');
const tiptot=document.getElementById('tp');
const per=document.getElementById('per');
const val=document.getElementById('out');
let k=Number(per.innerText);
function incr(){
    k++;
    per.innerText=k;
    cal();
}
function decr(){
    if(k>1){
        k--;
        per.innerText=k;
        cal();
    }
}
function cal(){
 const bill=Number(billtot.value);
 const tip=Number(tiptot.value)/100;
 const tipA=bill*tip;
 const total=tipA+bill;
 const perp=total/k;
 val.innerText=`${perp.toFixed(2)}`;
}
