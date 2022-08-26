
const icon = document.querySelector(".icon")
const body = document.querySelector("body")

icon.addEventListener("click", function () {
    body.classList.toggle("active")
})