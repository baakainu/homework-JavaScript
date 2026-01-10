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

// 2) 배송비 계산
const deliveryCost = function (orderAmount, deliveryArea) {
  // 1. 예외 처리: 주문 금액이 0원 이하인 경우
  if (orderAmount <= 0) {
    return 0;
  }

  let finalDeliveryCost = 0;

  // 2. 배송비 계산 (50,000원 미만이면 3,000원 부과)
  if (orderAmount < 50000) {
    finalDeliveryCost = 3000;
  }
  // 50,000원 이상이면 초기값 0이 유지 (무료 배송)

  // 3. 추가 배송비 계산 (제주 또는 도서 지역)
  // 배송지역이 빈 문자열("")인 경우는 이 조건에 걸리지 않아 기본 배송비만 적용됨
  if (deliveryArea === "제주" || deliveryArea === "도서산간") {
    finalDeliveryCost = finalDeliveryCost + 3000; // 기존 배송비에 3,000원 추가
  }

  return finalDeliveryCost;
};

// --- 실행 결과 확인 (테스트) ---

console.log(deliveryCost(40000, "서울"));
// 출력: 3000 (5만원 미만 + 일반)

console.log(deliveryCost(60000, "서울"));
// 출력: 0 (5만원 이상 무료 + 일반)

console.log(deliveryCost(40000, "제주"));
// 출력: 6000 (5만원 미만 3000 + 추가 3000)

console.log(deliveryCost(60000, "도서산간"));
// 출력: 3000 (5만원 이상 기본 무료 + 추가 3000)

console.log(deliveryCost(-500, "서울"));
// 출력: 0 (0원 이하)

console.log(deliveryCost(30000, ""));
// 출력: 3000 (빈 문자열은 일반 지역 취급)

// 3) 비밀번호 유효성 검사
const isValidPassword = (password) => {
  // 길이가 8 이상이고 20 이하인지 확인
  return password.length >= 8 && password.length <= 20;
};

// --- 실행 결과 확인 (테스트) ---

// 1. 정상 (10글자) -> true
console.log(isValidPassword("password123"));

// 2. 너무 짧음 (5글자) -> false
console.log(isValidPassword("short"));

// 3. 너무 김 (21글자) -> false
console.log(isValidPassword("verylongpassword12345"));

// 4) 포인트 적립 계산
function calculatePoints(payAmount, memberGrade) {
  let rewardRate = 0;

  // 등급별 적립률 설정
  if (memberGrade === "VIP") {
    rewardRate = 0.05; // 5%
  } else if (memberGrade === "GOLD") {
    rewardRate = 0.03; // 3%
  } else if (memberGrade === "SILVER") {
    rewardRate = 0.01; // 1%
  } else {
    // 그 외(일반)
    rewardRate = 0.005; // 0.5%
  }

  // 포인트 계산
  const rewardPoints = payAmount * rewardRate;
  // 소수점 이하를 무시, 정수만 사용
  return parseInt(rewardPoints);
}

// --- 실행 결과 확인 (테스트) ---

console.log(calculatePoints(100000, "VIP"));
// 100,000 * 0.05 = 5,000 -> 출력: 5000

console.log(calculatePoints(200000, "GOLD"));
// 200,000 * 0.03 = 6,000 -> 출력: 6000

console.log(calculatePoints(150000, "SILVER"));
// 150,000 * 0.01 = 1,500 -> 출력: 1500

console.log(calculatePoints(30000, "일반"));
// 30,000 * 0.005 = 150 -> 출력: 150

// 소수점 버림 테스트 (990원 결제 시 0.5%는 4.95원)
console.log(calculatePoints(990, "일반"));
// 4.95 -> 소수점 버림 -> 출력: 4
