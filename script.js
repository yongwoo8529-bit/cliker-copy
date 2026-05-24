function handleFeature(name) {
    if (name === '전문적인 시스템') {
        openSystemModal();
    } else {
        alert(`'${name}'에 대해 더 알고 싶으시다면 상담을 신청해 주세요.`);
    }
}

function openSystemModal() {
    const modal = document.getElementById('system-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-page').scrollTop = 0;
}

function closeSystemModal() {
    const modal = document.getElementById('system-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('상담 신청해 주셔서 감사합니다.\n빠른 시간 내에 연락드리겠습니다.');
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSystemModal();
});
