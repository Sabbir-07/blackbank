

document.getElementById("btn-reset").addEventListener("click",function(){
    console.log("click reset");
    
    //step-1 : deposit null
    const depositBalance=document.getElementById("deposit-total");
    depositBalance.innerText='00';

    //step-2 : Withdraw null

    document.getElementById("withdraw-total").innerText="00";

    //step-2 : Balance null 
    document.getElementById("balance-total").innerText="00";
    
    


})