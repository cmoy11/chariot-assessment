console.log("js is properly linked")

document.querySelector("#copy").addEventListener("click", function() {
    var text = document.querySelector("#ein");
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log("copy button clicked");
})

document.querySelector("#open").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "block"
})

document.querySelector("#cancel").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "none"
})