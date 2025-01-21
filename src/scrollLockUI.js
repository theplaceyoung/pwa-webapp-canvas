import toggleScrollLock from './toggleScrollLock.js';

const scrollLockButton = document.getElementById('scroll-lock');
const scrollLockIcon = document.getElementById('scroll-lock-icon');
let scrollLocked = false;

function updateScrollLockUI() {
    if (scrollLocked) {
        scrollLockButton.classList.add('active');
        scrollLockIcon.src = 'icons/lock-16x16.svg';
        scrollLockIcon.alt = 'Lock';
    } else {
        scrollLockButton.classList.remove('active');
        scrollLockIcon.src = 'icons/unlock-16x16.svg';
        scrollLockIcon.alt = 'Unlock';
    }
}

scrollLockButton.addEventListener('click', () => {
    scrollLocked = !scrollLocked;
    toggleScrollLock(scrollLocked);
    updateScrollLockUI();
});

updateScrollLockUI(); // 초기 상태 업데이트
