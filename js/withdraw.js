document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawAmoun =  getInputFieldValueById('getWithdrawAmount');
    if(isNaN(newWithdrawAmoun)){
        alert('Please Taka Den')
        return;
      }
    const previweWithdrawAmount = getElementValueById('withdraw')
    const totalNewWithdraw = previweWithdrawAmount + newWithdrawAmoun;

    const blance = getElementValueById('blance')
    if(blance <= newWithdrawAmoun){
        alert("Tomar Baper Eto Taka nai Taka Nai")
        return;
    }
    const currentBlance = blance - newWithdrawAmoun;

    setInnerTextValue('withdraw',totalNewWithdraw);
    setInnerTextValue('blance',currentBlance);
 })