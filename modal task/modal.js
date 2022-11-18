var modal = document.getElementById("modal"); 
var button = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {   // When user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
if(localStorage.getItem("count_timer")){   //checking if the key is active 
  var count_timer = localStorage.getItem("count_timer");
} else {
  var count_timer = 60*3; 
}
var minutes = parseInt(count_timer/60);
var seconds = parseInt(count_timer%60);
function countDownTimer(){
  if(seconds < 10){
      seconds= "0"+ seconds ;
  }if(minutes < 10){
      minutes= "0"+ minutes ;
  }
  
  document.getElementById("time-left").innerHTML = "Timeout:"+minutes+":"+seconds;
  if(count_timer <= 0){
       localStorage.clear("count_timer"); // When timer comes to zero, key gets deleted 
  } else {
      count_timer = count_timer -1 ;
      minutes = parseInt (count_timer/60); // parseInt to get only the first integer
      seconds = parseInt(count_timer%60);
      localStorage.setItem("count_timer",count_timer);
      setTimeout("countDownTimer()",1000);
  }
}
setTimeout("countDownTimer()",1000);