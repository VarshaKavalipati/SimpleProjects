let red=document.getElementById('id1');
let green=document.getElementById('id2');
let blue=document.getElementById('id3');
/*let r=0;
let b=0;
let g=0;
red.onclick=()=>{
    r++;
    red.innerText=r;
}
blue.onclick=()=>{
    b++;
    blue.innerText=b;
}
green.onclick=()=>{
    g++;
    green.innerText=g;
}*/

let ob={'r':0,'b':0,'g':0};
let clArr=document.querySelectorAll('.box');
//console.log(clArr);
clArr.forEach(x=>{
    x.onclick=()=>{
        ob[x.value]+=1;
        x.innerText=ob[x.value];
    }
});

function clearScore(){
    //console.log("hi");
    clArr.forEach(x=>{
            ob[x.value]=0;
            x.innerText=' ';
    });
    
}
