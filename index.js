var shout = (text) => { return text.toUpperCase(); }
var whisper = (text) => { return text.toLowerCase(); }
var logShout = (text) => { console.log(text.toUpperCase()); }
var logWhisper = (text) => { console.log(text.toLowerCase()); }
var sayHiToGrandma = (text) => { 
  let temp = text.toLowerCase();
  if (text === temp) {
    return "I can't hear you!"
  }
}

