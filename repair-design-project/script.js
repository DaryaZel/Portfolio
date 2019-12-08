let mobile=document.querySelector('.mobile'),
back=document.querySelector('.back'),
mobile_version=document.querySelector('#mobile-version'),
desktop_version=document.querySelector('#desktop-version')
mobile.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Mobile') {
      e.target.innerHTML = "Desktop"
      mobile_version.classList.add('show');
      desktop_version.classList.add('hide');
    }
    else {
      e.target.innerHTML = "Mobile"
      mobile_version.classList.remove('show');
      desktop_version.classList.remove('hide');
    }
})