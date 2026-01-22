// 导航项交互效果
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // 移除所有active类
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        // 为当前点击的项添加active类
        this.classList.add('active');
    });
});

// 搜索功能
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm.trim()) {
        alert(`Searching for: "${searchTerm}" - This would normally perform a site search.`);
    } else {
        alert('Please enter a search term.');
    }
});

document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});

// 视频按钮点击效果
document.querySelector('.view-video-btn').addEventListener('click', function() {
    alert('This would open the meeting video player. In a real implementation, this could open a modal or redirect to a video page.');
});

// 动态星空效果
function createStars() {
    const starsContainer = document.querySelector('.stars');
    
    // 创建星星
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
        starsContainer.appendChild(star);
    }
}

// 页面加载完成后创建星星
window.addEventListener('load', function() {
    createStars();
    
    // 添加加载完成后的淡入效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 鼠标移动时背景微动效果
document.addEventListener('mousemove', function(e) {
    const stars = document.querySelector('.stars');
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;
    
    stars.style.transform = `translate(${x}px, ${y}px)`;
});