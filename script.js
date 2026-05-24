function handleFeature(name) {
    if (name === '전문적인 시스템') {
        openSystemModal();
    } else if (name === '안정적인 수익 구조') {
        openIncomeModal();
    } else if (name === '따뜻한 커뮤니티') {
        openCommunityModal();
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

function openIncomeModal() {
    const modal = document.getElementById('income-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-page').scrollTop = 0;
}

function closeIncomeModal() {
    const modal = document.getElementById('income-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function openCommunityModal() {
    const modal = document.getElementById('community-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-page').scrollTop = 0;
}

function closeCommunityModal() {
    const modal = document.getElementById('community-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSystemModal();
        closeIncomeModal();
        closeCommunityModal();
    }
});
