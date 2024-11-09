// featuredData.js와 videoData.js를 불러옵니다.
const featuredItems = [
    {
        title: "사랑의 불시착",
        artist: "오리지널 사운드트랙",
        cover: "https://example.com/image1.jpg" // 실제 이미지 URL로 변경
    },
    {
        title: "너의 이름은",
        artist: "RADWIMPS",
        cover: "https://example.com/image2.jpg"
    },
    {
        title: "이 별",
        artist: "이문세",
        cover: "https://example.com/image3.jpg"
    },
    {
        title: "비 오는 날의 수채화",
        artist: "김현식",
        cover: "https://example.com/image4.jpg"
    },
    // 추가 항목을 여기에 넣을 수 있습니다.
];

const videoUrl = "https://www.youtube.com/embed/VIDEO_ID"; // 실제 유튜브 비디오 ID로 변경

// 추천 콘텐츠를 리스트에 추가하는 함수
function loadFeaturedItems() {
    const featuredList = document.getElementById('featured-list');
    featuredItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.cover}" alt="${item.title} 앨범 커버" class="album-cover">
            <span>${item.title} - ${item.artist}</span>
        `;
        featuredList.appendChild(li);
    });
}

// 비디오 URL을 로드하는 함수
function loadVideo() {
    const videoFrame = document.getElementById('video-frame');
    videoFrame.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="${videoUrl}" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    `;
}

// 페이지가 로드될 때 데이터 로드
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedItems();
    loadVideo();
});
