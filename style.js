(() => {
    const refs = {
      openModalBtn: document.querySelector('.icon-menu'),
      closeModalBtn: document.querySelector('.icon-close'),
      headerButton: document.querySelector('.header__button'),
      headerMenu: document.querySelector('.header__menu'),
      heroButton: document.querySelector('.hero__button'),
      backdrop: document.querySelector('.backdrop'),
      closeBackdrop: document.querySelector('.close')
    };
  
    refs.headerButton.addEventListener('click', toggleModal);

    refs.heroButton.addEventListener('click', toogleBack);

    
    refs.closeBackdrop.addEventListener('click', toogleBack);

    function toggleModal() {
      refs.openModalBtn.classList.toggle('open');
      refs.closeModalBtn.classList.toggle('open');
      refs.headerMenu.classList.toggle('open');
      
    }
    function toogleBack() {
      refs.backdrop.classList.toggle('open');
    }
  })()
