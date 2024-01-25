// Popup for full-sized maps
function initializePopup() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Get all image-popups
    var images = document.getElementsByClassName("image-popup");

    for (var i = 0; i < images.length; i++)
    {
        var img = images[i];
        img.onclick = function()
        {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // Get span that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Close the modal when span is clicked
    span.onclick = function()
    { 
        modal.style.display = "none";
    }
}

window.onload = initializePopup;