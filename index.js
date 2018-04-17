var shout = (text) => { return text.toUpperCase(); }
var whisper = (text) => { return text.toLowerCase(); }
var logShout = (text) => { console.log(text.toUpperCase()); }
var logWhisper = (text) => { console.log(text.toLowerCase()); }
var sayHiToGrandma = (text) => { 
  let lower = text.toLowerCase();
  let upper = text.toUpperCase();
  if (text === lower) {
    return "I can't hear you!"
  }

  if (text === upper) {
    return "YES INDEED!";
  }
  
  return text === "I love you, Grandma.".toLowerCase() ? "I love you, too." : "";
}

