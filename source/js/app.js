function showNav() {
  var x = document.getElementById("responsive-nav");
  if(x.className === "responsive-nav") {
    x.className += " unfold";
  } else {
    x.className = "responsive-nav";
  }
}


window.sr = ScrollReveal();
sr.reveal('#header article.main-article', {
  duration: 300
});
sr.reveal('#header img.img-phone', {
  delay: 300,
  duration: 300,
  origin: 'bottom',
  distance: '100px'
});

sr.reveal('#features .car', {
  delay: 300,
  duration: 300,
  origin: 'left',
  distance: '100px'
});

sr.reveal('#features .shoe', {
  delay: 400,
  duration: 300,
  origin: 'left',
  distance: '100px'
});

sr.reveal('#features .device', {
  delay: 500,
  duration: 300,
  origin: 'left',
  distance: '100px'
});

sr.reveal('#discount .icon-twoPhones', {
  delay: 600,
  duration: 300,
  origin: 'left',
  distance: '200px'
});

sr.reveal('#discount .offer', {
  delay: 600,
  duration: 300,
  origin: 'right',
  distance: '200px'
});
