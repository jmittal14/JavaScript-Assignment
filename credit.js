function validateCreditCard(inputtxt)
{
  var cardno = /^(?:3[47][0-9]{13})$/;
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid credit card number!");
        return false;
        }
}