const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, idx) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn')
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - idx
      }, 500)
    } else {
      pageTurn.classList.add('turn')
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + idx
      }, 500)
    }

  }
})