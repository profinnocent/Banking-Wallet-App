const lgSubmit = document.querySelector("#lgsubmit");
const lgUser = document.querySelector("#lguser");
const lgPword = document.querySelector("#lgpword");
const lgPage = document.querySelector(".login");
const pPage = document.querySelector(".profile");
const tPage = document.querySelector(".transact");
const nPage = document.querySelector(".nav");
const fPage = document.querySelector(".footer");
const pgBtnTrs = document.querySelector(".pgbtntrs");
const pgBtnLgO = document.querySelector(".pgbtnlgo");
const welcome = document.querySelector(".welcome");
const pgDisAmt = document.querySelector(".pgdisamt");
const trsDisAmt = document.querySelector(".trsdisamt");
const witBtn = document.querySelector(".witbtn");
const depBtn = document.querySelector(".depbtn");
const bakBtn = document.querySelector(".bakbtn");
const trsAmtBox = document.querySelector("#trsamtbox");
const historyUl = document.querySelector(".history ul");


let userName = "";
let passWord = "";
let acctBalance = 0;
acctBalance = acctBalance.toFixed(2);
let amount = 0;
let transType = "";

//login button handler
lgSubmit.onclick = (e) => {
  e.preventDefault();

  //Validate input
  if(lgUser.value == ""){
    alert("Please fill in the username")
  }
  else{
  alert("Login successful");
  userName = lgUser.value;
  passWord = lgPword.value;
  lgUser.value = "";
  lgPword.value = "";
  disPpage();
  }
};

//Prodile page Transaction button handler
pgBtnTrs.onclick = () => {
  disTpage();
};

//Profilepapge Log out button handler
pgBtnLgO.onclick = () => {
  if (confirm("Are you sure you want to Log out")) {
    disLpage();
  }
};

//Transapge withdraw button handler
witBtn.onclick = () => {
  if (trsAmtBox.value == "") {
    alert("Please enter an amount in the input box");
  } 
  else {
    if (acctBalance < trsAmtBox.value) {
      alert("You don't have sufficient Balance to make this witdrawal");
      trsAmtBox.value = "";
    } 
    else {
      if (confirm("This transaction is not reversible! Are you sure you want to withdraw.")
      ) {
        acctBalance -= trsAmtBox.value;
        trsDisAmt.innerText = acctBalance;
        transType = "withdrawal";

        //Add to transaction history
        updateTransHistory();
      } else {
        alert("You have cancelled the Transaction");
        trsAmtBox.value = "";
      }
    }
  }
};

//Transapge deposit button handler
depBtn.onclick = () => {
  if (trsAmtBox.value == "") {
    alert("Please enter an amount in the input box");
  } else {
    if (
      confirm(
        "This transaction is not reversible! Are you sure you want to Deposit."
      )
    ) {
      acctBalance = parseFloat(acctBalance);
      acctBalance += parseFloat(trsAmtBox.value);
      trsDisAmt.innerText = parseFloat(acctBalance).toFixed(2);
      transType = "deposit";

        //Add to transaction history
        updateTransHistory();
    } else {
      alert("You have cancelled the Transaction.");
    }
  }
};


//Add to transaction history
updateTransHistory = () => {
  let d = new Date();
  let day = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear().toString().substring(2,4);;
    historyUl.innerHTML += `<div class="title"><span>${day}</span><Span>${transType}</Span><span>${trsAmtBox.value}</span> <span>${acctBalance}</span> </div>`;


    trsAmtBox.value = "";
    transType = "";
}        



//Transaction page Back button handler
bakBtn.onclick = () => {
  disPpage();
};

disLpage = () => {
  nPage.style.display = "block";
  lgPage.style.display = "block";
  pPage.style.display = "none";
  tPage.style.display = "none";
  fPage.style.disPage = "block";
};

disPpage = () => {
  nPage.style.display = "none";
  lgPage.style.display = "none";
  pPage.style.display = "block";
  tPage.style.display = "none";
  fPage.style.disPage = "none";

  //Lood user data
  welcome.innerText = "Welcome, " + userName;
  pgDisAmt.innerText = acctBalance.toLocaleString();
};

disTpage = () => {
  nPage.style.display = "none";
  lgPage.style.display = "none";
  pPage.style.display = "none";
  tPage.style.display = "block";
  fPage.style.disPage = "none";

  //Lood user data
  trsDisAmt.innerText = acctBalance.toLocaleString();
};
