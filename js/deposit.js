document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmoun = getInputFieldValueById("getDepositAmount");
  if (isNaN(newDepositAmoun)) {
    alert("Please Taka Den");
    return;
  }
  const previweDepositAmount = getElementValueById("deposit");
  const totalNewDeposit = previweDepositAmount + newDepositAmoun;

  const blance = getElementValueById("blance");
  const currentBlance = blance + totalNewDeposit;

  setInnerTextValue("deposit", totalNewDeposit);
  setInnerTextValue("blance", currentBlance);
});
