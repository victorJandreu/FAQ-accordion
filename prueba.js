
document.body.addEventListener("click", toggle)

function toggle(a){
    if(!a.target.closest(".btn")) {
        return
    }

    //look for the specific parraft
    const fatherDiv = a.target.closest(".question")
    const childrenDiv = fatherDiv.children;
    const lookingParragraf = fatherDiv.querySelector(".answer")
    let answerP

    for(let i = 0; i < childrenDiv.length; i++){
        if(childrenDiv[i] === lookingParragraf){
            answerP = childrenDiv[i]
        }
    }

    //look for the specific svgs
    const plus = fatherDiv.querySelector('.plus')
    const minus = fatherDiv.querySelector('.minus')

    //making the toggle
    if(answerP.classList.contains("isShow")) {
        answerP.classList.remove("isShow")
        plus.classList.add("isShow")
        minus.classList.remove("isShow")

    } else {
        answerP.classList.add("isShow")
        minus.classList.add("isShow")
        plus.classList.remove("isShow")
    }
    

}