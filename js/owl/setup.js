$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
})

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) =>{
    if(e.target.id == modalID || e.target.className == 'fechar') {
        modal.classList.remove('mostrar');
    }
    });
}
}
const informacao = document.querySelector('.informacao');
informacao.addEventListener('click', () => iniciaModal('modal-informacao'));

const assistir = document.querySelector('.assistir');
assistir.addEventListener('click', () => iniciaModal('modal-play'));