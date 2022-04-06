jQuery(document).ready($ => {
  $('.site-header .menu-principal .menu').slicknav({
    label: '',
    appendTo: '.site-header'
  });

  //Agregar Slider
  if($('.listado-testimoniales').length > 0) {
    $('.listado-testimoniales').bxSlider({
      auto: true,
      mode: 'fade',
      controls: false
    });
  }

  //Mapa de leaflet
  var map = L.map('mapa').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
});

//Agregar posicion fija en el header al hacer scroll
window.onscroll = () => {
  const scroll = window.scrollY;

  const headerNav = document.querySelector('.barra-navegacion');
  const documentBody = document.querySelector('.body');

  //Si el scroll es mayor a, se añade clase
  if(scroll > 300) {
    headerNav.classList.add('fixed-top');
    documentBody.classList.add('ft-activo');
  } else {
    headerNav.classList.remove('fixed-top');
    documentBody.classList.remove('ft-activo');
  }
}