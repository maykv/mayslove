// yturl.js
const videoUrls = {
    "01": "tQRt_P_-EHg",
    "02": "7Jan-2W-IdY",
    "03": "G7Vixoao0bM",
    "04": "U1_0Vc-9mNw",
    "05": "l-H4QHLC-Uc",
    "06": "h9R33iFMBbY",
    "07": "9yfrVqCcrS0",
    "08": "ViDjwX-yfgc",
    "09": "G8YNFjruzPk",
    "10": "ZcHRydIz0eM",
    "11": "-9fC6oDFl5k",
    "12": "MR2ela9evnk",
    "13": "G7Vixoao0bM",
    "14": "ESWcsKySnNs",
    "15": "Mhyi9p7T7OM",
    "16": "pbELDkeLdho",
    "17": "BXzoYQ-3ETs",
    "18": "vrM2mrI83uk",
    "19": "bShOVeYi_vg",
    "20": "94bRrJ_5T8U",
    // 나머지 곡 제목에 대한 URL 추가
};

// 특정 고유 번호에 해당하는 전체 URL 생성 함수
function getVideoUrl(videoId) {
    const baseUrl = "https://www.youtube.com/embed/";
    return baseUrl + videoUrls[videoId]; // 고유 번호와 기본 URL 결합하여 반환
}