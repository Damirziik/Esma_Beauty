
    // Открытие модалки
    document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-modal');
        const modal = document.getElementById(targetId);
        if (modal) modal.style.display = 'block';
    });
});

    // Закрытие модалки
    document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

    // Клик вне модалки
    window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
}
});

        const links = document.querySelectorAll('.more-link');
        const modal = document.getElementById('info-modal');
        const modalText = document.getElementById('modal-text');
        const closeBtn = modal.querySelector('.close');

        links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const info = link.getAttribute('data-info');
            modalText.textContent = info;
            modal.style.display = 'block';
        });
    });

        closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

        window.addEventListener('click', (e) => {
        if (e.target === modal) {
        modal.style.display = 'none';
    }
    });


