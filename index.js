const contentsContainer = document.querySelector(".main-cont")
const contents = document.querySelectorAll(".content")
const title = document.querySelectorAll(".title")
const audio = document.querySelector("audio")
const searchBtn = document.getElementById("searchBtn")
const searchIn = document.getElementById("searchIn")
const containerCont = document.querySelector(".main-cont")
const stopbtn = document.querySelector(".stop")

function  run(src){
    audio.currentTime = 0
    audio.src = src
    audio.load()
    audio.play()

}

function stop(){
    audio.src = ""
    audio.pause()
}

contents.forEach((content)=>{
    content.setAttribute("tabindex" , "0")
    content.addEventListener("click" , (e)=>{
        contents.forEach(content=>{
            content.classList.remove("active")
            stop()
        })
        content.classList.add("active")
        if(content.dataset.id === "dorimi"){
            run("audios/تحميل اغنية - دو ري مي - محمد سعيد - MP3.mp3")

        }
        else if(content.dataset.id === "taht"){
            run("audios/A5rass - Tahet Amrak  (Official Lyric Video) _ الاخرس - تحت أمرك.mp3")

        }else if(content.dataset.id === "malket"){
            run("audios/Tamer Hosny & Al Shami - Maleket Gamal El Kon (Official Video) _ تامر حسني والشامي - ملكة جمال الكون.mp3")

        }
        else if(content.dataset.id === "mahkemt"){
            run("audios/Siilawy - Mahkamt El Deni (Official Music Video) _ محكمة الدني.mp3")

        }
        else if(content.dataset.id === "ala"){
            run("audios/تحميل اغنية علي بالي - مسلم MP3 - مطبعه دوت كوم.mp3")

        }
        else if(content.dataset.id === "yama"){
            run("audios/ياما ليالي وانت مش معايا _ سارة هيثم _ الاغنية كاملة Yama layaly w enta msh m3aya - Sara Haitham - Exclusive Music.mp3")

        }
    })
})

stopbtn.addEventListener("click" , ()=>{
    stop()
    contents.forEach(c=>{
        c.classList.remove("active")
    })
})

function search(){
    let h1 = document.querySelector(".warning")
    h1.style.display = "none"
    title.forEach((title , index,arr)=>{
        if(title.textContent.toLowerCase().includes(searchIn.value.toLowerCase()) ){
            title.parentElement.parentElement.style.display = ""
        }
        else if (!title.textContent.toLowerCase().includes(searchIn.value.toLowerCase()) ){
            title.parentElement.parentElement.style.display = "none"
        }
        let arr2 = Array.from(arr)
        let trueFalse = arr2.every(el=>{
            return el.parentElement.parentElement.style.display === "none"
        })

        if (trueFalse){
            h1.style.display = "block"
        }else{
            h1.style.display = "none"
        }
        
        
    })
    searchIn.value = ""
}

searchBtn.addEventListener("click",search)