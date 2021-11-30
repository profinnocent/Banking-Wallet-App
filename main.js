const lgSubmit = document.querySelector('#lgsubmit');
const lgUser = document.querySelector('#lguser');
const lgPword = document.querySelector('#lgpword');
const lgPage = document.querySelector('.login');
const pPage = document.querySelector('.profile');
const tPage = document.querySelector('.transact');
const nPage = document.querySelector('.nav');
const fPage = document.querySelector('.footer');
const pgBtnTrs = document.querySelector('.pgbtntrs')
const pgBtnLgO = document.querySelector('.pgbtnlgo');
const welcome = document.querySelector('.welcome');
const pgDisAmt = document.querySelector('.pgdisamt');
const trsDisAmt = document.querySelector('.trsdisamt');
const witBtn = document.querySelector('.witbtn');
const depBtn = document.querySelector('.depbtn');
const bakBtn = document.querySelector('.bakbtn');
const trsAmtBox = document.querySelector('#trsamtbox');





let userName = '';
let passWord = '';
let acctBalance = 0;
acctBalance = acctBalance.toFixed(2);
let amount = 0;


//login button handler
lgSubmit.onclick = (e) =>{
  e.preventDefault();
  alert('Login successful');
  userName = lgUser.value;
  passWord = lgPword.value;
  lgUser.value= "";
  lgPword.value="";
  disPpage();
 
}

//Prodile page Transaction button handler
pgBtnTrs.onclick = () => {
  disTpage();
  
}

//Profilepapge Log out button handler
pgBtnLgO.onclick = () => {
  if(confirm('Are you sure you want to Log out')){
    disLpage();
  }
}

//Transapge withdraw button handler
witBtn.onclick = () => {
  if(trsAmtBox.value == ""){
    alert('Please enter an amount in the input box');
  }else{
    if(confirm('This transaction is not reversible! Are you sure you want to withdraw.')){
      acctBalance -= trsAmtBox.value;
      trsDisAmt.innerText = acctBalance;
      trsAmtBox.value="";
    }else{
      alert('You have cancelled the Transaction');
    }
  }    
}

//Transapge deposit button handler
depBtn.onclick = () => {
  if(trsAmtBox.value == ""){
    alert('Please enter an amount in the input box')
  }else{
    if(confirm('This transaction is not reversible! Are you sure you want to withdraw.')){
      acctBalance = parseFloat(acctBalance);
      acctBalance += parseFloat(trsAmtBox.value);
      trsDisAmt.innerText = parseFloat(acctBalance).toFixed(2);
      trsAmtBox.value="";
    }else{
      alert('You have cancelled the Transaction.');
    }
  }  
}

//Transaction page Back button handler
bakBtn.onclick = () => {
  disPpage();
}

disLpage =() => {
  nPage.style.display = 'block';
  lgPage.style.display = 'block';
  pPage.style.display = 'none';
  tPage.style.display = 'none';
  fPage.style.disPage = 'block';
  
};

disPpage = () => {
  nPage.style.display = 'none';
  lgPage.style.display = 'none';
  pPage.style.display = 'block';
  tPage.style.display = 'none';
  fPage.style.disPage = 'none';
  
  //Lood user data
  welcome.innerText = 'Welcome, ' + userName;
  pgDisAmt.innerText = acctBalance;

};

disTpage = () => {
  nPage.style.display = 'none';
  lgPage.style.display = 'none';
  pPage.style.display = 'none';
  tPage.style.display = 'block';
  fPage.style.disPage = 'none';
  
  //Lood user data
  trsDisAmt.innerText = acctBalance;


}
