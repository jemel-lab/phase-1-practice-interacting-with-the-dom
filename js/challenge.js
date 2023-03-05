//See the timer increment every second once the page has loaded.
document.addEventListener('DOMContentLoaded' , (e) => {
    let count = 0;
    let timerText = document.getElementById('counter');
    let intervalId = setInterval(function () {
        count += 1;
        timerText.textContent = count
     },1000);

     const minusBtn = document.getElementById('minus');

     minusBtn.addEventListener('click', () =>{
        count -= 1;
        timerText.textContent = count
    });
   let likesObj = {}
    const heartBtn = document.getElementById('heart');
    heartBtn.addEventListener('click', () =>{
        let timerText = document.getElementById('counter').textContent
        if (likesObj[timerText] ) {
            likesObj[timerText] +=1
        } else {
            likesObj [timerText] = 1
        } 
       let li = document.createElement("li")
       li.innerText = `${timerText} has been liked${likesObj[timerText]}times`
       let likesUL = document.querySelector(".likes")
       likesUL.appendChild(li)
    
    });
    const plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', () =>{
        count += 1;
        timerText.textContent = count
    });
    const submitBtn = document.getElementById('submit');
    submitBtn,addEventListener('click', () =>{

    })
    const pauseBtn = document.getElementById('pause');
    pauseBtn.addEventListener('click', () =>{
         if (pauseBtn.innerText === "resume") {
            pauseBtn.innerText = "pause"
            intervalId = setInterval(function () {
                count += 1;
                timerText.textContent = count
             },1000);
         } else {
            clearInterval(intervalId)
            pauseBtn.innerText = "resume"

         }
        minusBtn.disabled = !minusBtn.disabled
        plusBtn.disabled = !plusBtn.disabled
        heartBtn.disabled = !heartBtn.disabled
        submitBtn.disabled = !submitBtn.disabled
    });
    const commentForm = document.getElementById("comment-form");
    commentForm.addEventListener ('submit', (e) => {
        e.preventDefault()
        const list = document.getElementById ("list")
       let li = document.createElement('li')
       li.innerText = e.target[0].value
       list.appendChild(li)
       commentForm.reset()
}

)});








