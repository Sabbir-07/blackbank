/*
1.add event handler with the withdraw button
2.get the withdraw amount from the withdraw input feild
3. get the previous total
4.calculate total Withdraw amount
5.set total withdraw amount
6.get the amount of balance and set the balance
7.total balance

step-last- clear the input feild
*/

//step-1
document.getElementById("withdraw-button").addEventListener("click",function(){

    //step-2
    const withdrawFeild=document.getElementById("withdraw-feild");
    const newWidthrawAmountString=withdrawFeild.value;
    const newWithdrawAmount=parseFloat(newWidthrawAmountString);
   
    
    //step-3
    const withdrawTotalElemnet=document.getElementById("withdraw-total");
    const previousWithdrawTotalString=withdrawTotalElemnet.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
   

    // //step-4
    const currentWithdrawTotal=newWithdrawAmount+previousWithdrawTotal;
    

    // //step-5
    withdrawTotalElemnet.innerText=currentWithdrawTotal;

    // //step-6 get the amount of balance feild
    const balanceTotalElement=document.getElementById("balance-total");
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
   
    
    if(newWithdrawAmount>previousBalanceTotal)
    {
        alert("Sabbir er Bank Ato Taka Nai");
        return;
    }

    // //step-7
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal;


//step-last
withdrawFeild.value="";

});