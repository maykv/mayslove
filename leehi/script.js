document.addEventListener("DOMContentLoaded", function() {
    const tracklistItems = document.querySelectorAll('#tracklist li');
    const youtubeEmbed = document.getElementById('youtube-embed');
    const officialDescriptionText = document.getElementById('official-description').querySelector('p');
    const personalReview = document.getElementById('personal-review');
    const personalReviewText = document.getElementById('personal-review-text');
    const showOfficialBtn = document.getElementById('show-official');
    const showPersonalBtn = document.getElementById('show-personal');


    const officialDescriptions = [
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다.",
        "이 앨범은 공식 설명이 첨부되지 않은 앨범입니다."
    ];

    const personalReviews = [
        "맨 처음 샘플링도 그렇고 확실히 DEAN만의 감성이 도드라지는 곡이다. <small><del>(사랑합니다)</del></small>",
        "해당 앨범은 2016년 4월 발매된 하프 앨범의 두 번째 장의 곡인데... 해당 앨범에서 가장 밝은 곡이라 또 뜬금 없는 느낌이다. 다만, 사랑에 관한 트랙인지라 확실히 뭔가 부각시키는 건 있다. <small>(사실 그럼 타이틀곡일 필요가 없다는 게 특징이다.)</small>", // My Star
        `재치있는 표현과 매력적인 멜로디, 이하이의 목소리와 발성이 특히 보여지는 곡이다.`,
        "이런 게 희망고문이라는 것을 자세히 보여준다. 타블로의 섬세한 가사가 인상적이다. 이 곡에서는 그나마 밝은 곡이 아닌가 생각한다. ", // 희망고문
        "종현이 생전에 남긴 족적들 중 하나. 아마 본인이 듣고 싶었던 이야기 아니었을까 생각한다. ",
        "이 곡은 좋냐 안 좋냐에 의의를 두는 것이 아니라, <u>이하이 최초의 자작곡이라는 것에 의의를 두고 싶다.</u> 본인 설명에 따르면 팬들은 언젠가 스쳐지나가는 사람들과 시간에 대한 이야기라고 한다.", // 스쳐간다
        "코드 쿤스트의 비트, 이하이의 보컬, Dok2의 랩이 합쳐져 멋진 트랙이 완성되었다. <small><del>대체 왜 19금인지는 알 수 없음...</del></small>",
        "힙합 R&B 곡이라니... 정말 특이한데 또 좋다... ",
        "이번 곡은 도입부가 그냥 사기이다. 해당 하프 앨범의 내용 중에서는 내용이 살짝 다른데, 다른 곡들은 차이는 쪽이라면 이번엔 차는 쪽이다.", // 안봐도 비디오
        "맨 처음 도입부 피아노가 인상적인 곡인데, 도입부가 이 곡의 전체 분위기를 가장 잘 보여주는 부분이라고 생각한다. 화자는 그나마 희망이라도 가지는 쪽인 \<희망고문\>과 다르게 아예 폐인처럼 되어버렸다. ", // MISSING U
        "이 노래가 가장 좋다. 도입부, 벌스, 코러스 모두 좋고 기승전결도 좋다. 특히 타블로의 랩이 처절함을 부각시켜준다. " // 밤샘
    ];

    const albumCover = document.getElementById('album-cover');

    // 앨범 커버 클릭 시 팝업 생성
    albumCover.addEventListener('click', function() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `<span class="close">&times;</span><img src="${this.src}" alt="앨범 커버" class="popup-image">`;
        
        // 팝업 배경 클릭 시 닫기
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                document.body.removeChild(popup);
            }
        });

        document.body.appendChild(popup);

        // 팝업 닫기 버튼 클릭 시 닫기
        const closeButton = popup.querySelector('.close');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(popup);
        });
    });

    tracklistItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const youtubeUrl = this.getAttribute('data-youtube');
            youtubeEmbed.src = youtubeUrl; // 유튜브 링크 설정
            officialDescriptionText.innerHTML = officialDescriptions[index]; // 해당 트랙의 공식 설명 업데이트
            personalReviewText.innerHTML = personalReviews[index]; // 해당 트랙의 개인 평론 업데이트
        });
    });

    showOfficialBtn.addEventListener('click', function() {
        officialDescription.style.display = 'block';
        personalReview.style.display = 'none';
    });

    showPersonalBtn.addEventListener('click', function() {
        personalReview.style.display = 'block';
        officialDescription.style.display = 'none';
    });
});