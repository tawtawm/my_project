// JS simple باش like toggle
document.addEventListener('DOMContentLoaded', function() {
    const likeIcons = document.querySelectorAll('.post-actions span:first-child');

    likeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            icon.classList.toggle('liked');
            const likesText = icon.closest('.post').querySelector('.post-likes');
            let likesNumber = parseInt(likesText.textContent);
            if(icon.classList.contains('liked')) {
                likesNumber += 1;
            } else {
                likesNumber -= 1;
            }
            likesText.textContent = likesNumber + ' likes';
        });
    });
});
