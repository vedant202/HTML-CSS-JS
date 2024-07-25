console.log("Hii");

const dataModalOpen = document.querySelectorAll("[data-modal-target]");
const dataModalClose = document.querySelectorAll("[data-modal-close]");
const overlay = document.querySelector("#overlay");
console.log(dataModalClose)

dataModalOpen.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        const modal=document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
});

dataModalClose.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log("close modal")
        const modal=button.closest("#modal");
        closeModal(modal);
    })
})

overlay.addEventListener("click",(e)=>{
    document.querySelectorAll(".modal.active").forEach(m=>{
        closeModal(m);
    })

});

function closeModal(modal){
    if(modal==null) return;
    console.log(modal.classList)
    console.log(overlay.classList);
    modal.classList.remove("active");
    overlay.classList.remove("active")

}

function openModal(modal){
    if(modal==null) return;

    modal.classList.add("active");
    overlay.classList.add("active")

}