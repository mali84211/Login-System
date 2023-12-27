var supName = document.getElementById('signupName')  
var supEmail = document.getElementById('signupEmail')
var supPassword = document.getElementById('signupPassword') 
var inEmail = document.getElementById('signinEmail')
var inPassword = document.getElementById('signinPassword') 

var box =[] ;


function signUp() {
  if(supName.value !== "" && supEmail.value !=="" && supPassword.value !=="" ){
    var data = {
      pname:supName.value,  
      pemail: supEmail.value,
      pass: supPassword.value
    } 
    box.push(data);
    localStorage.setItem("item",JSON.stringify(box)) ;
    console.log(box);  
    document.getElementById('exist').innerHTML="sucess"

  } else {
    document.getElementById('exist').innerHTML="All inputs is required"
  }
} 
  
var box2 = JSON.parse(localStorage.getItem("item")) ;

function login(){
    for(var i=0;i<box2.length;i++){
     if(box2[i].pemail === inEmail.value && box2[i].pass === inPassword.value) {
    console.log('match');
    localStorage.setItem('name',JSON.stringify(box2[i].pname))
    window.location.href='./welcome.html' 
    console.log(box2[i].pname);
     }else{
      document.getElementById('incorrect').innerHTML ='incorrect email or password'
    }

    }
}     


function welcome(){
    document.getElementById('welcome').innerHTML=`welcome ${JSON.parse(localStorage.getItem('name'))}`;

}  