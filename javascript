var images=[
  "https://www.lasepa.gov.ng/wp-content/uploads/2020/06/forest-trees-perspective-bright-957024.jpeg",
  "https://www.muralswallpaper.com/app/uploads/green-oak-forest-mural-wallpaper-plain.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVQ1U6juOj6hsYFTj9pCh3qBIf7qaLIz30g&usqp=CAU",
  "https://img.as-creation.com/s0/4706451.jpg"
];
var reasons=[
  "Trees Provide Shade", "Trees help in retaining the Rainwater", "Trees Provide fruits", "Trees are natural medicines"  
];
var i=0;
function next(){
  document.getElementById("IMAGES").src=images[i];
  document.getElementById("reason").innerHTML=reasons[i];
  i++;
}