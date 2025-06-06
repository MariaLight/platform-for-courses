const btns = document.querySelectorAll('[data-modal]');
const body = document.querySelector('body');
const btnClose = document.querySelectorAll('[data-modal-close]');
const modalsAll = document.querySelectorAll('.modal');


btns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        closeAllModals(modalsAll);
        const modalId = e.target.closest('[data-modal]').getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('modal--active');
            body.style.overflowY = 'hidden';
            html.classList.add('modal-open');

            addModalEventListeners(modal);
        }
    });
});
function closeAllModals(modals) {
    modals.forEach(modal => {
        closeModal(modal);
    });
}
btnClose.forEach(close => {
    close.addEventListener('click', e => {
        const modal = e.target.closest('.modal');
        if (modal) {
            closeModal(modal);
        }
    });
});

function addModalEventListeners(modal) {
    modal.addEventListener('keydown', onModalKeyDown);
    modal.addEventListener('click', onModalClick);
}

function removeModalEventListeners(modal) {
    modal.removeEventListener('keydown', onModalKeyDown);
    modal.removeEventListener('click', onModalClick);
}

function closeModal(modal) {
    modal.classList.remove('modal--active');
    body.style.overflowY = '';
    // html.classList.remove('modal-open');

    removeModalEventListeners(modal);
}

function onModalKeyDown(e) {
    const modal = e.currentTarget;
    if (e.key === 'Escape') {
        closeModal(modal);
    }
}

function onModalClick(e) {
    const modalContent = e.currentTarget.querySelector('.modal__content');
    if (!modalContent.contains(e.target)) {
        closeModal(e.currentTarget);
    }
}