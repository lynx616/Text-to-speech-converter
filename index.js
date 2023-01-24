const textarea = document.querySelector("textarea"),
voiceList = document.querySelector("select"),
speechBtn = document.querySelector("button");

let synth = speechSynthesis;

function voices(){
    for(let voice of synth.getVoices()){
        //seecting Google US Engish voice as default
        let selected = voice.name === "Google हिन्दी" ? "selected" : "";
        console.log(selected, voice.name);
        //creating an option tag 
        let option = `<option class="opt" value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);//inserting option tag beforeend of select tag
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);//repesents a speech request
    for(let voice of synth.getVoices()){
        //if the available device voice name is equal to the user selected voice name the change the voice to the selected.

        if(voice.name === voiceList.value){
                utternance.voice=voice;
        }
    }
    speechSynthesis.speak(utternance);  
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    //jodi text area faka nah thake tahole ei function ta chlabe
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
});