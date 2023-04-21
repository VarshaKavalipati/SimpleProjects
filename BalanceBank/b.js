class Bank{
    constructor(bal){
        this.bal=bal;
    }
    withdraw(amt){
        if(this.bal>amt){
            this.bal-=amt;
        }
    }
    deposit(amt){
        this.bal+=amt;
    }
}
const bl=document.getElementById('srch');
const w=document.getElementById('withdraw');
const d=document.getElementById('deposit');
const final=document.getElementById('bal');

function search(){
    const b=new Bank(Number(bl.value));
    if(w.value){
        b.withdraw(Number(w.value));
        console.log('hello');
    }
    if(d.value){
        b.deposit(Number(d.value));
        console.log('bye');
    }
    final.innerText=Number(b.bal);
}
/*document.addEventListener('keydown',function(e){
    if(e.key=='1')
    this.body.style.backgroundColor='red';
    else
    this.body.style.backgroundColor='#C0C0C0';
})*/