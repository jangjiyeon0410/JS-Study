const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
console.log(btnShowModal);

const showModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};
const hiddenModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
	btnShowModal[i].addEventListener('click', showModal);
}

closeModal.addEventListener('click', hiddenModal);
overlay.addEventListener('click', hiddenModal);

document.addEventListener('keydown', function (e) {
	// console.log(e);
	if (e.key === 'Escape') {
		hiddenModal();
	}
});
