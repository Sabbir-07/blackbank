//step-1 add even listener to the deposit butto
document.getElementById("btn-deposit").addEventListener("click",function(){
   
//step-2 get the value input-feild
//fot Input use .value to the value inside the input feild 
const depositFeild=document.getElementById("deposit-feild");
const newdepositAmountstring=depositFeild.value;
const newdepositAmount=parseFloat(newdepositAmountstring);

//step-3 get the current deposit total
//for non-input (element ther than input,textare) use innerText to get the text
const depositTotalElemnet=document.getElementById("deposit-total");
const previousdepositTotalstring=depositTotalElemnet.innerText;
const previousdepositTotal=parseFloat(previousdepositTotalstring);

// step-4 add numbers to the total deposit
const totalDepositTotal=newdepositAmount+previousdepositTotal;

//set the deposit total
depositTotalElemnet.innerText=totalDepositTotal;
//step-5 get balance current total
const balaneTotalElement=document.getElementById('balance-total');
const previousbalanceTotalstring=balaneTotalElement.innerText;
const prevoiusbalance=parseFloat(previousbalanceTotalstring);

//step-6 calculate current balance
const currentBalanceTotal=newdepositAmount+prevoiusbalance;

//set the deposit total

balaneTotalElement.innerText=currentBalanceTotal;

//step-4 clear the deposit feild
depositFeild.value="";

})