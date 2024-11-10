document.addEventListener("DOMContentLoaded", function() {
    const albums = [
        {
            title: "Don't You Worry Baby (I'm Only Swimming)",
            artist: "검정치마",
            year: "2011",
            description: "어쿠스틱 락 중에서는 가장 명반인 것 같다.",
            recommendation: "Love Shine<br>\"내일이면 나를 버릴 사람들\", 이 가사를 통해 더 많이 공감할 수 있었다.",
            cover: "https://image.bugsm.co.kr/album/images/1500/2931/293114.jpg?version=20211216024523.0",
            link: "./tbd.html"
        },
        {
            title: "Palette",
            artist: "아이유 (IU)",
            year: "2017",
            description: "가장 감성적이고 아름다운 앨범, 아이유는 대중 음악계에 새로운 판도를 제시했으며 이 앨범에서 그 면이 더욱 더 부각되는 것 같다.",
            recommendation: "마침표<br>역설적인 가사가 인상적이었다. 조용하지만 좋은 사운드를 가진 피아노와 그 아래에서 감동을 주는 스트링 사운드가 좋았다.",
            cover: "https://image.bugsm.co.kr/album/images/3000/200941/20094140.jpg?version=20220720042039.0",
            link: "./pallete/index.html"
        },
        {
            title: "Zip",
            artist: "Zion.T",
            year: "2023",
            description: "자이언티 특유의 몽환적인 감성이 더더욱 부각되는 것 같다.",
            recommendation: "V (Peace)<br>신나는데 슬프기도 한 이상한 노래.",
            cover: "https://image.bugsm.co.kr/album/images/3000/40938/4093857.jpg?version=20231209004531.0",
            link: "./tbd.html"
        },
        {
            title: "J RABBIT CHRISTMAS ALBUM",
            artist: "제이레빗 (J Rabbit)",
            year: "2023",
            description: "전설은 죽지 않는다라는 말이 가장 어울리는 앨범.",
            recommendation: "Joy To The World<br>피아노 미쳤어??? 이렇게 좋으면 사기임.",
            cover: "https://image.bugsm.co.kr/album/images/3000/206093/20609380.jpg?version=20231211173020.0",
            link: "./tbd.html"
        },
        {
            title: "The Velvet - The 2nd Mini Album",
            artist: "Red Velvet",
            year: "2016",
            description: "자이언티 특유의 몽환적인 감성이 더더욱 부각되는 것 같다.",
            recommendation: "처음인가요<br>7월 7일은 너무 어둡기도 하고 해서 아마 가장 여기서 대중적인 건 이게 아닐까 해서 추천한다.",
            cover: "https://image.bugsm.co.kr/album/images/1500/200261/20026112.jpg?version=20230601001152.0",
            link: "./tbd.html"
        },
        {
            title: "LILAC",
            artist: "아이유 (IU)",
            year: "2021",
            description: "20대의 마지막에 대해 화려한 ‘인사'를 예고했던 아이유가 봄 내음과 함께 다섯 번째 정규앨범 [LILAC]으로 돌아왔다. 4년 만에 선보이는 정규앨범 [LILAC]은 스무 살의 솔직하고 풋풋한 감성을 담아 발표했던 20대의 첫 앨범 [스무 살의 봄]과는 달리, 지금껏 지나온 20대를 10개의 트랙에 다채로운 시각으로 풀어내 그동안의 성숙해진 감성을 오롯이 담았다.",
            recommendation: "빈 컵 (Empty Cup)<br>우울하고 힘 빠지는 노래.",
            cover: "https://image.bugsm.co.kr/album/images/3000/40271/4027185.jpg?version=20221119004352.0",
            link: "./iu/lilac.html"
        },
        {
            title: "장기하와 얼굴들",
            artist: "장기하와 얼굴들",
            year: "2011",
            description: "엉뚱하지만 멋지다.",
            recommendation: "그렇고 그런 사이<br>오늘부터 너랑 나랑은 너랑 나랑은 그렇고 그런 사이니까 사이니까 예이 사이니까, 사이니까, 그런 사이니까아아!!",
            cover: "https://image.bugsm.co.kr/album/images/1500/2894/289433.jpg?version=20220928020010.0",
            link: "./tbd.html"
        },
        
    ];

    // 랜덤하게 3개의 앨범 선택
    const selectedAlbums = [];
    while (selectedAlbums.length < 3) {
        const randomIndex = Math.floor(Math.random() * albums.length);
        if (!selectedAlbums.includes(albums[randomIndex])) {
            selectedAlbums.push(albums[randomIndex]);
        }
    }

    // 앨범 정보를 HTML에 추가
    const albumContainer = document.querySelector('.album-container');
    albumContainer.innerHTML = selectedAlbums.map(album => `
        <div class="album">
            <a href="${album.link}">
                <img src="${album.cover}" alt="앨범 커버" class="album-cover">
                <h3>${album.title}</h3>
                <p><strong>${album.artist}</strong> / ${album.year}</p>
                <p>${album.description}</p>
                <p><strong>추천곡</strong> ${album.recommendation}</p>
            </a>
        </div>
    `).join('');
});