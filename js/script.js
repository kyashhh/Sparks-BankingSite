var preloader = document.getElementById("loading");
    function loader() {
      preloader.style.display = 'none';
    }

let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
function sendMoney() {
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > myAccountBalance) {
      alert("Insufficient Balance. Please check balance and try again.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Transaction Successful!  
      Amount of ₹${enterAmount} is tranferred to ${enterName}@email.com.
      Thank you for banking with us`)

      // Transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
