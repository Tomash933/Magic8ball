const imgBtn=document.querySelector(".ball-img img")
const input=document.querySelector(".question-area input")
const answer=document.querySelector(".answer")
const error=document.querySelector(".error")

// const answerArray=["It is certain","You may rely on it","Most likely","Yes","Ask again later","No","Don’t count on it","My reply is no"]


const animationOn=()=>{
    imgBtn.classList.add("shake-animation");
    

}
const animationOff=()=>{
    imgBtn.classList.remove("shake-animation");
    

}

const ShowAnswer=()=>{
    // let answerNumber= Math.floor(Math.random() * (8 - 0));
    // answer.textContent=answerArray[answerNumber]
    let params = encodeURIComponent(input.value);
let uri = "https://8ball.delegator.com/magic/JSON/" + params;
fetch(uri)
  .then(response => response.json())
  .then(json => {
    answer.textContent=json.magic.answer;
  });
}

const checkConditions=()=>{
    if(input.value===""){
        error.textContent="Musisz wpisać jakieś pytanie"
    }else if 
        (input.value.slice(-1)!=="?"){
            error.textContent="Pytanie musi kończyć się nakiem ?"
        }
        else{
            error.textContent=""
            ShowAnswer();
            input.value=""
        }
    
}

const checkAnswer=()=>{
    animationOn();
    setTimeout(animationOff,1000)
    setTimeout(checkConditions,1000)
}





imgBtn.addEventListener("click",checkAnswer)