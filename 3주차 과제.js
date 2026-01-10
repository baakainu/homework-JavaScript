// 1. 변수, 상수 작성 과제
// 1) 영화 제목 (변경 가능하므로 변수)
let movieTitle = "주토피아 2";

// 2) 빛의 속도 (변하지 않는 물리 상수)
const SPEED_OF_LIGHT = 299792458;
// 절대 변하지 않는 빛의 속도라서 대문자로 작성

// 3) 이메일 인증 완료 여부 (상태가 변하므로 변수, 불리언)
let isEmailVerified = true;

// 4) 상품 재고 수량 (판매되면 줄어드므로 변수)
let productStock = 47;

// 5) 회원 포인트 (적립/사용으로 변하므로 변수)
let memberPoints = 15800;

// 6) API 서버 기본 URL (서버 주소는 고정값이므로 상수)
const baseUrl = "https://api.example.com";

// 7) 게시글 조회수 (증가하므로 변수)
let viewCount = 1234;

// 8) 배송 상태 (단계별로 변하므로 변수)
let deliveryStatus = "배송중";

// 9) 쿠폰 사용 가능 여부 (사용 후 변하므로 변수, 불리언)
let isCouponAvailable = true;

// 10) 최대 업로드 파일 크기 (시스템 설정값이므로 상수)
const MAX_UPLOAD_SIZE = 10485760;

// 11) 사용자 등급 점수 (변동 가능하므로 변수, 소수점)
let userRating = 85.5;

// 12) 알림 수신 동의 여부 (설정 변경 가능하므로 변수, 불리언)
let isNotificationAgreed = false;

// 2. 함수 작성 과제
// 1) 환영 메시지 생성
const greetingMessage = (memberName, memberGrade) => {
  if (memberGrade === "VIP") {
    return `🌟 VIP ${memberName}님, 특별한 혜택이 준비되어 있습니다!`;
  } else {
    return `안녕하세요, ${memberName}님! 즐거운 쇼핑 되세요.`;
  }
};

// --- 실행 결과 확인 ---
console.log(greetingMessage("민자홍", "VIP"));
// 출력: 🌟 VIP 민자홍님, 특별한 혜택이 준비되어 있습니다!

console.log(greetingMessage("정인우", "일반"));
// 출력: 안녕하세요, 정인우님! 즐거운 쇼핑 되세요.
