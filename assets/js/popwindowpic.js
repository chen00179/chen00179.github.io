// get window
var modal = document.getElementById('myModal');
 
// get picture and insert into window - use "alt" attribute
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
 
// get <span> element，set close button
var span = document.getElementsByClassName("close")[0];
 
// when clicked (x), close window
span.onclick = function() { 
  modal.style.display = "none";
}