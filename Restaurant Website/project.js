var image = $("i1");
var images = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg","images/img-4.jpg","images/img-5.jpg"];
var index = 0;
function updateImage() {
i1.src = images[index];
index = (index + 1) % images.length;
}
setInterval(updateImage, 2000);

$(".Download_button")[1].addEventListener("click",function(){
   alert("under construction");
});
$(".Download_button")[2].addEventListener("click",function(){
   alert("under construction");
})
