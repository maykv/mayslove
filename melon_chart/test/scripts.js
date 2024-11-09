const chartElement = document.getElementById('chart');
chartData.forEach((item) => {
    const listItem = document.createElement('li');
    const changeSymbol = item.change > 0 ? `▲${item.change}` : item.change < 0 ? `▼${Math.abs(item.change)}` : '--';

    listItem.innerHTML = `
        <span class="rank">${item.rank}</span>
        <span class="change ${item.change > 0 ? 'up' : item.change < 0 ? 'down' : 'no-change'}">
            ${changeSymbol}
        </span>
        <img src="${item.cover}" alt="${item.title}" class="album-cover">
        <div class="info">
            <div class="title">${item.title}</div>
            <div class="artist">${item.artist}</div>
        </div>
        <button onclick="playVideo('${item.rank}')">재생</button>
    `;
    chartElement.appendChild(listItem);
});

function playVideo(rank) {
    const videoContainer = document.getElementById('video-frame');
    const videoId = videoUrls[rank]; // 고유 번호 가져오기
    const url = `https://www.youtube.com/embed/${videoId}`; // 전체 URL 생성

    if (videoId) {
        videoContainer.innerHTML = `<iframe width="100%" height="100%" src="${url}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        alert("영상을 찾을 수 없습니다. 다시 시도해보세요. 이러한 문제가 반복된다면 오류 신고 부탁드립니다.");
    }
}
