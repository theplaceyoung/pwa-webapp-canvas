// 스크롤 잠금 상태 관리 변수
let scrollLocked = false;

/**
 * 스크롤 잠금 상태를 토글하고 현재 상태를 반환합니다.
 * @returns {boolean} 현재 잠금 상태
 */
export function toggleScrollLock() {
    scrollLocked = !scrollLocked;

    if (scrollLocked) {
        document.body.classList.add('scroll-locked'); // 스크롤 잠금 활성화
    } else {
        document.body.classList.remove('scroll-locked'); // 스크롤 잠금 해제
    }

    return scrollLocked; // 현재 상태 반환
}

/**
 * 스크롤 잠금 UI를 업데이트합니다.
 * @param {boolean} isLocked - 스크롤 잠금 상태
 */
export function updateScrollLockUI(isLocked) {
    const scrollLockButton = document.getElementById('scroll-lock');
    const scrollLockIcon = document.getElementById('scroll-lock-icon');

    if (!scrollLockButton || !scrollLockIcon) {
        console.error("Scroll Lock Button/Icon not found in DOM.");
        return;
    }

    if (isLocked) {
        // 잠금 상태
        scrollLockButton.classList.add('active');
        scrollLockIcon.src = 'icons/lock-16x16.svg'; // 잠금 아이콘
        scrollLockIcon.alt = 'Lock';
    } else {
        // 해제 상태
        scrollLockButton.classList.remove('active');
        scrollLockIcon.src = 'icons/unlock-16x16.svg'; // 해제 아이콘
        scrollLockIcon.alt = 'Unlock';
    }
}

// DOMContentLoaded 이벤트를 통해 초기화
document.addEventListener('DOMContentLoaded', () => {
    const scrollLockButton = document.getElementById('scroll-lock');

    if (!scrollLockButton) {
        console.error("Scroll Lock Button not found in DOM.");
        return;
    }

    // 초기 UI 상태 업데이트
    updateScrollLockUI(scrollLocked);

    // 클릭 이벤트 리스너 등록
    scrollLockButton.addEventListener('click', () => {
        const isLocked = toggleScrollLock();
        updateScrollLockUI(isLocked);
    });
});
