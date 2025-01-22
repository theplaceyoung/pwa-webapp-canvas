let scrollLocked = false;

function toggleScrollLock() {
    scrollLocked = !scrollLocked;
    // const scrollLockButton = document.getElementById('scroll-lock');
    
    if (scrollLocked) {
        scrollLockButton.classList.add('scroll-locked');
    } else {
        scrollLockButton.classList.remove('scroll-locked');
    }

    return scrollLocked;
}

// document.getElementById('scroll-lock').addEventListener('click', toggleScrollLock);
