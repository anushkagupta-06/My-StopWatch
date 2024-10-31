let reset=document.querySelector(".reset");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");

// reset.addEventListener("click",()=>{
//     let hr=document.querySelector(".hr");
//     let min=document.querySelector(".min");
//     let sec=document.querySelector(".sec");
//     hr.innerText=00;
//     min.innerText=00;
//     sec.innerText=00;
//     clearInterval(id);
// })

start.addEventListener("click",()=>{
    let hr=document.querySelector(".hr");
    let min=document.querySelector(".min");
    let sec=document.querySelector(".sec");

    let h=0; let m=0; let s=0;

    let id=setInterval(()=>{
            s++;
            sec.innerText=s;
            if(s==60){
                m++;
                s=0;
                sec.innerText=s;
                min.innerText=m;
                if(m==60){
                    h++;
                    m=0;
                    s=0;
                    sec.innerText=s;
                    min.innerText=m;
                    hr.innerText=h;
                }
            }
    
        },1000);
    reset.addEventListener("click",()=>{
        clearInterval(id);
        let hr=document.querySelector(".hr");
        let min=document.querySelector(".min");
        let sec=document.querySelector(".sec");
        hr.innerText=00;
        min.innerText=00;
        sec.innerText=00;
    })
    stop.addEventListener("click",()=>{
        clearInterval(id);
    })
})

