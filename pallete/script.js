document.addEventListener("DOMContentLoaded", function() {
    const tracklistItems = document.querySelectorAll('#tracklist li');
    const youtubeEmbed = document.getElementById('youtube-embed');
    const officialDescriptionText = document.getElementById('official-description').querySelector('p');
    const personalReview = document.getElementById('personal-review');
    const personalReviewText = document.getElementById('personal-review-text');
    const showOfficialBtn = document.getElementById('show-official');
    const showPersonalBtn = document.getElementById('show-personal');


    const officialDescriptions = [
        "화려한 코드진행이 돋보이는 기분 좋은 팝재즈 트랙으로 '밤편지', '마음' 등 수 차례 아이유와 멋진 호흡을 보여준 김제휘가 작곡을, 아이유가 작사를 맡았다. 깜짝 놀랄 만큼 빛이 나고 아름다운 건 다른 어느 것도 아닌 바로 지금, 여기, 우리라는 메시지가 사랑스럽게 다가오는 곡이다.",
        "아이유가 기존에 시도해보지 않은 장르의 감각적이면서도 포근한 신스팝 R&B 트랙이다. 2년 전에 발매했던 '스물셋'과는 다른 듯, 또 이어지는 아이유 본인에 대한 이야기를 차분히 담아내고 있다. ‘스물셋’에서는 동시에 함께 존재하는 전혀 다른 이면과 그 혼란스러움을 솔직하고 대담하게 풀어놨다면 이번에는 헷갈리지 않고 본인이 좋아하는 것을 또박또박 짚어내며 ”이제 날 조금 알 것 같다”고 이야기하는 아이유의 여유가 돋보인다. 더욱이 G-DRAGON의 피쳐링으로 이 이야기는 단순히 아이유 개인만의 것이 아닌 스물다섯이라는 나이, 또는 청춘이 가지는 그 아름다움과 찬란함으로 주제가 확장된다. 진솔하면서도 날이 서지 않은 다정한 메시지가 부드러운 신스소리와 어우러져 살랑거린다.",
        "빈티지한 피아노 소리와 서정적인 오케스트라 선율이 완벽한 하모니를 자랑하는 R&B 발라드 트랙이다. 감성과 감각을 동시에 표현해내는 천재 아티스트 샘 김의 곡과 아이유의 가사와 보컬이 만나 전혀 새로운 색깔을 만들어낸다. 이별을 겪은 남녀라면 쉽게 공감할 만한, 사랑에 있어 가장 슬픈 이별의 순간을 둘이 만든 영화의 엔딩씬으로 빗대어 가사로 풀어낸 곡이다.",
        "아이유와 오혁의 공식적인 첫 콜라보레이션으로 정규4집의 두 번째 선공개곡으로 낙점, 두 아티스트의 색다른 매력과 독특한 케미로 발매 전부터 대중의 큰 관심을 받았다. 미니멀한 악기 구성의 R&B 넘버인 이 곡에서 아이유와 오혁은, 직접 작사, 작곡에 참여하였고, 현실적이면서도 감각적인 가사와 멜로디를 주고 받으며 권태기 남녀의 갈등을 긴장감 있게 표현해 냈으며, Track Producer로는 데뷔곡 '미아'부터 '봄, 사랑, 벚꽃 말고', '레옹', '스물셋' 등을 함께해온 작곡가 이종훈이 참여해 곡의 완성도를 더했다.",
        "농담을 건네듯 재기 발랄한 사운드의 일렉트로닉 신스팝 트랙이다. '봄처녀', '순이', '비온다' 등 색깔이 뚜렷한 음악으로 모든 뮤지션들이 탐내는 매력적인 아티스트 선우정아가 작곡가로 나섰고 아이유와 선우정아가 함께 글을 작업했다. 사랑에 대한 냉소적이고도 사실은 애절한 고찰이 눈길을 끄는 곡이다.",
        "제목에서도 눈치 챌 수 있듯 술 냄새가 강하게 풍기는 인디팝 트랙이다. 장난스러운 베이스와 리듬과는 전혀 상반되는 진지한 기타 솔로가 아이러닉하면서도 매력적인 킬링 파트가 된다. 기본적으로는 헛소리인 듯하지만 모두들 각자 취했을 때를 생각해 보면.. ‘휴 더 하면 더 했지..’",
        "피아노, 스트링, 플룻, 클라리넷의 신선한 구성의 발라드 트랙이다. 처음부터 끝까지 정해진 BPM 없이 연주자와 보컬이 프리하게 곡을 끌고 나간다는 점 또한 눈에 띈다. 재즈신에서 이미 수준 높은 음악성으로 정평이 나 있는 섬세한 아티스트 손성제가 작곡가로 나섰다. 갑자기 뽑혀나간 사랑니 자리를 오래도록 앓듯, 아직 마음은 아프더라도 이제는 정말 마침표를 찍겠다는 다짐이, 그럼에도 누구 하나 울부짖지 않는 절제된 소리들이 더욱 서글프게 다가온다.",
        "서정적인 기타 선율과 아이유의 목소리가 잘 어우러진 어쿠스틱 사운드의 포크 발라드로, 작곡에는 '마음'과 '나의 옛날 이야기' 등으로 이미 수 차례 아이유와 공동작업을 맡았던 작곡가 김제휘와 뉴페이스 김희원이, 작사에는 아이유가 직접 참여하여 또 한 번 멋진 호흡을 자랑했다. 지난달 정규앨범의 첫 번째 선공개곡으로 발표되어 ‘아이유 표 발라드’ 특유의 섬세한 감성으로 오랜 시간 리스너들의 큰 사랑을 받아오고 있다.",
        "기타의 첫 3음만으로 아티스트 이병우의 내공을 들을 수 있는 클래식한 느낌의 발라드이다. 단지 기타 한 대와 목소리 하나로 5분 가까이 되는 러닝타임을 긴장감 있게 끌고 가는 두 아티스트의 대화가 근사하다. 실제 매번 원테이크로 서로 호흡하며 녹음한 노력이 그대로 전해진다. 이번 앨범에서는 유일하게 아이유가 작사에 참여하지 않은 곡으로 작곡, 작사, 연주에 모두 이병우가 나섰다.",
        "길이와 구성 모두 이번 앨범에서 가장 큰 사이즈를 자랑하며 더블 타이틀곡으로 낙점이 된 이 곡은 흡사 아이유의 정규2집 1번 트랙 “비밀”이란 곡을 떠올리게 할 만큼 웅장한 사운드가 돋보이는 팝발라드 트랙이다. 우리나라 독보적인 스트링 편곡자 박인영의 지휘 아래 펼쳐지는 아름다운 스트링 선율과, 아이유의 콘서트에서 늘 환상의 호흡을 보여주는, 이른바 '아이유밴드' 멤버들이 라이브로 공연하듯 합주하며 가감 없이 실력 발휘를 하였으며, 그 틈으로 단 하나의 코러스도 없이 그 거대한 사운드를 뚫고 나오는 아이유의 목소리까지. 그 한 줄기 목소리가 전하는 위로는 어디에라도 닿을 듯이 기세 있다. 작곡에는 이종훈, 작사는 아이유와 김이나가 처음으로 공동 작업을 했다.",
        
    ];

    const personalReviews = [
        "이 노래가 아마 내가 좋은 날, 너랑 나, 분홍신 같은 흔히 알려져 있는 곡 말고 처음 접한 곡으로 알고 있다. 내가 이 노래에서 가장 높게 평가하는 부분은 '있지 저런 건 그저 자그만 돌멩이야'라는 부분 아래 깔리는 아카펠라 사운드이다.",
        "아이유가 이전 앨범인 CHAT-SHIRE에서 아주아주 날이 선 모습을 보여줌으로서 본인의 불안한 심리상태를 투영했다면 '이제 조금 알 것 같아 난'이라는 가사를 통해 본인이 조금 더 성장했고, 불안함이 조금 더 안정되었다는 것을 드러내는 곡. 솔직히 처음에 이 곡 가사보고 되게 슬프더라. (내가 유애나라서...)",
        "7번 트랙 마침표 다음으로 좋아했던(물론 지금은 아니다) 곡이다. 연인들끼리 대화를 나누는 모습에서 상대를 기여코 위로해보려고 하지만 그 말이 더 아프다며 원망하는 내용, 이 내용은 이별해봐야만 아는 내용이다. ",
        "사랑은 언젠가 식는다. 즉, 사랑은 영원하지 않다. 그런 사랑이 점점 식어갈 때, 그 사랑은 더 이상 사랑이 아니라 귀찮은 걸림돌에 불과하게 되어버린다. 그런 마음이 너무 아팠던 내용.",
        "알만한 사람끼리 이정도 거짓말엔 속아줘야하는게 예의 아닌가? 그 특유의 끈적하고 기분나쁜 감성의 노래이다. 이 노래를 바탕으로 영화 페르소나의 썩지 않게 아주 오래가 나왔다니 그건 놀라운 것 같다.",
        "진짜 술 같은 노래. 처음엔 이 노래 별로였는데 들으면 들을 수록 이상하게 좋다. 그런 의미에서 진짜 술 같은 노래가 아닐까 싶다. 노래 가사에서 술냄새가 나는 건 또 처음이네.  ",
        "내가 가장 좋아하는 노래. 역설적인 가사가 인상적이었다. 조용하지만 좋은 사운드를 가진 피아노와 그 아래에서 감동을 주는 스트링 사운드가 좋았다. 내가 아주 힘들던 때 나를 달래주고 사랑으로 상처입었던 내 마음을 위로해주었던 노래. 그런 의미에서 이 노래는 내게 단지 그냥 '노래'라고 할 수 없다. 내게는 그냥 수록곡 그 이상의 의미를 가지는 그런 음악이다. 그래서 아마 내 스스로는 이 노래가 내가 음악을 시작하게 한 계기로 생각한다.",
        "가장 대중적인 발라드. 나도 사실 불면증이 있는데 이 노래 가사에서 큰 공감을 끌어냈다고 생각한다. 지금의 아이유가 있게 해준 노래.",
        "짝사랑, 그건 너무 아픈 사랑이다. 짝사랑을 하는 입장에서야 행복하지 짝사랑을 당하는 입장에서는 얼마나 싫을까. 이성으로 인해서 포기할 수 밖에 없는 짝사랑에 대해 다룬 이 노래는 음악감독 이병우씨의 역량이 돋보이는 그런 음악이었다.",
        "아이유가 도대체 이 노래로 무슨 말을 담고 싶었을까. 내가 그동안 이렇게 아팠다고 전하고 싶었을까? 아니면 상처입은 이름들에게 위로를 전하고 싶었을까? 이 노래는 여러 시각을 가질 수 있던 노래였다. 이 노래는 지쳐있던 나에게 위로의 말을 건넬 수 있었던 음악이다. 이게 내가 이 음반을 명반으로 꼽는 이유이다.",
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
            officialDescriptionText.innerText = officialDescriptions[index]; // 해당 트랙의 공식 설명 업데이트
            personalReviewText.innerText = personalReviews[index]; // 해당 트랙의 개인 평론 업데이트
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