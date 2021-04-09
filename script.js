'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}



for (let i = 0; i < btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal);
       // removes class on click. can be multiple classes ('hidden'), ('bla');
        

        // modal.style.display = 'block'; ----> to change its class to from none to block
  
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


// KeyWord EVENTS
// keydown for any key. to press any key.

document.addEventListener('keydown', function (e) {
    // ! stand for NOT, if Modal doesnt have hidden class, then modal will be closed.
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});