document.querySelector(".button__accept").addEventListener('click', function(){
    hideBackdrop();
    hideCookiesWarning();
})

function hideBackdrop(){
    let backdrop = document.querySelector(".backdrop");
    backdrop.classList.add("input-hidden");
}

function hideCookiesWarning(){
    let cookiesWarning = document.querySelector(".cookies-warning");
    cookiesWarning.classList.add("input-hidden");
}   

