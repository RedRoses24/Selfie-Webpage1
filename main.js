var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("text-box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var text=event.results[0][0].transcript;
    console.log(text);
    document.getElementById("text-box").innerHTML=text;
}