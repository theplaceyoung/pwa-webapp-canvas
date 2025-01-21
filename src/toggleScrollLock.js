let scrollLocked = false;

function toggleScrollLock() {
    scrollLocked = !scrollLocked;
    const scrollLockButton = document.getElementById('scroll-lock');
    
    if (scrollLocked) {
        scrollLockButton.classList.add('active');
    } else {
        scrollLockButton.classList.remove('active');
    }
}

document.getElementById('scroll-lock').addEventListener('click', toggleScrollLock);
