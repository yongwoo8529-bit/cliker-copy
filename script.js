function handleFeature(name) {
    alert(`'${name}'에 대해 더 알고 싶으시다면 상담을 신청해 주세요.`);
}

document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('상담 신청해 주셔서 감사합니다.\n빠른 시간 내에 연락드리겠습니다.');
});
