function getInputFieldValueById(inputId) {
  const inputValue = document.getElementById(inputId);
  const getNuumberByinputFiled = parseFloat(inputValue.value);
  inputValue.value = "";
  return getNuumberByinputFiled;
}

function getElementValueById(inputId) {
  const getElementValue = document.getElementById(inputId);
  const getElementNumberValue = parseFloat(getElementValue.innerText);
  return getElementNumberValue;
}

function setInnerTextValue(element, value) {
  const element1 = document.getElementById(element);
  element1.innerText = value;
}
