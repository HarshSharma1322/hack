const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
// const SpeechRecognitionEvent =
//   window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = true;
let rounds = [];
let finalSpeech = "";
let started = false;
let intervalId;
const StartTimer = () => setTimeout(() => preparation());

const handleStartButton = () => {
  finalSpeech="";
  started = false;
  timerHelper();
  recognition.start();
  StartTimer();
};

recognition.onstart = () => {
  console.log("Song recognised...");
};

recognition.stop = () => {
    console.log("Speech didn't start");
}
function getVoices() {
  let voices = speechSynthesis.getVoices();
  if (!voices.length) {
    // some time the voice will not be initialized so we can call spaek with empty string
    // this will initialize the voices
    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
  }
  return voices;
}

function speak(text, voice, rate, pitch, volume) {
  // create a SpeechSynthesisUtterance to configure the how text to be spoken
  let speakData = new SpeechSynthesisUtterance();
  speakData.volume = volume; // From 0 to 1
  speakData.rate = rate; // From 0.1 to 10
  speakData.pitch = pitch; // From 0 to 2
  speakData.text = text;
  speakData.lang = "en";
  speakData.voice = voice;

  // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking
  speechSynthesis.speak(speakData);
}

recognition.onspeechend = () => {
  console.log("Speech Ended...");
  console.log("finalSpeech ", finalSpeech);
  let lastWord = finalSpeech.split(" ");
  if ("speechSynthesis" in window) {
    let voices = getVoices();
    let rate = 1,
      pitch = 2,
      volume = 1;
    let text = lastWord[lastWord.length - 1];

    speak(text, voices[5], rate, pitch, volume);
    finalSpeech = "";
  } else {
    console.log(" Speech Synthesis Not Supported 😞");
  }
};

const btn = document.getElementById("start-button");
btn.onclick = handleStartButton;

recognition.onresult = (event) => {
  if (!started)
  {
    clearInterval(intervalId);
  }
  started = true;
  console.log("event -> ", event.results[0][0].transcript);
  finalSpeech = "";
  finalSpeech = event.results[0][0].transcript;
  rounds.push(finalSpeech);
};

function getSongHint()
{
  finalSpeech="I";
  let songLyrics="";
  if (finalSpeech == null || finalSpeech.length ==0)
  {
      return songLyrics;
  }
  switch (finalSpeech) {
    case "I":
      songLyrics = "I Believe (When I Fall in Love It Will Be Forever)";
      break;
    case "You":
      songLyrics = "You & I (Nobody In The World)";
      break;
    case "Love":
      songLyrics = "Lost in Love";
      break;
    case "Baby":
      songLyrics = "Baby It's Cold Outside";
      break;
    case "We":
      songLyrics = "We Came to Rock";
      break;
    case "Die":
      songLyrics = "	If I Die Young";
      break;
    default:
  }
  return songLyrics;
}

function preparation()
{
  var count=0;
   document.getElementById("timer").innerHTML = count;
   if (count <= 0) {
      document.getElementById("timer").innerHTML = "Time's Up";
      let hint = getSongHint();
      if (hint.length !=0)
      {
          document.getElementById("hint").style.visibility ="visible"; 
      }
      else
      {
        document.getElementById("hint").style.display ="hidden"; 
      }
      //clearInterval(counter);
     return;
   }
}

function timerHelper() {
  intervalId = setInterval(timer, 30000); 
   setTimeout(getWords, 30000);
}

function getWords() {
   const cars = ["I", "You", "Hello", "Love", "Baby", "We", "Die"];
var word = cars[Math.floor(Math.random() * cars.length)];
document.getElementById("word").innerHTML = "Your word is: "+word;
}


