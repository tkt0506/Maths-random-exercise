function complete(){ 
 var z = x * y; 
 try{
   if(document.asshole.answer.value != z ){
   throw"answerError"
 }else if(typeof z !== 'undefined') {
   throw"varError"
}else{
   alert("you are right")

}
}catch(showError){
  if(showError=="answerError"){
    alert("wrong answer, -5 marks!")
  }
  if(showError=="varError"){
    alert("a bug has appeared , reload the website!")
    location.reload();
  }
}
}
 

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function login(){
try{
  if(document.myform.uname.value!="tkt0506"){
    throw"unameError"
  }else if(document.myform.psw.value!="pkps1213076"){
    throw"pswError"
  }else{
    alert("pass!Now you can change the color and show the answer")
  }
}catch(showError){
  if(showError=="unameError"){
    alert("username is not correct")
    document.getElementById("hihi").innerHTML="you have no permission to open the administrator mode!"
    var myobj = document.getElementById("mango");
  myobj.remove();
  }
  if(showError=="pswError"){
    alert("password is not correct")
    document.getElementById("hihi").innerHTML="you have no permission to open the administrator mode!"
    var myobj = document.getElementById("mango");
  myobj.remove();
  }
}
}
