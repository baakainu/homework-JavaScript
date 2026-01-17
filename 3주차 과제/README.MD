# 과제 수행 과정

먼저 과제를 작성하면서,
업로드 방식을 몰라서 다른 곳에 1,2번 과제를 먼저 작성 후 옮기는 방식으로 수행 했습니다.

## 1. 변수, 상수 작성 과제

해당 과제의 경우 조금만 생각해보면 답이 나오는 변수와 상수를 구분하는 과제라고 생각이 되어,
크게 어려움 없이 진행했습니다.
객체 이름을 짓는 일이 가장 어려웠습니다...
이건 많이 만들어보고, 많은 코드를 보다보면 습득될거라 생각합니다.

## 2. 함수 작성 과제

문제는 여기서부터 시작됐습니다.
어떤 함수를 어떻게 연결해야 될지 고민이 많았고,
역시나 객체 이름을 짓는건 너무 어렵습니다.

### 1. 환영 메시지 생성

난이도 ⭐ 답게 가장 무난하게 만들었던것 같습니다.
원래는

```javascript
const greetingMessage = function(...) {. . .}
```

형태로 작성했었는데,
수업에서 배운 **화살표 함수**를 사용해보자!
생각해서 화살표 함수로 바꿨습니다.

그리고 다음주 배울 예정인 조건 제어 (if...else) 를 사용해서
참(True)일 경우엔 VIP 메시지, 그렇지 않으면(else) 일반 메시지를 리턴하도록 설정했습니다.

### 2. 배송비 계산

이번엔 함수 표현식을 사용했고,
finalDeliveryCost(최종배송비)를 0으로 설정해두고, 조건이 붙으면 금액을 더하는 방식으로 진행했습니다.
이렇게 생각하니 기본 배송비가 무료 배송인 것 같아서 뭔가 상술 같네요.

논리 연산자(||)를 사용해서 둘 중 하나라도 참이면 추가 비용이 붙도록 설정했습니다.

### 3. 비밀번호 유효성 검사

먼저 .length를 붙여서 글자수를 숫자로 알려주도록 설정하고,
&&를 사용하여 왼쪽 조건과 오른쪽 조건이 모두 참일 때만 true가 되도록 했습니다.
요즘 특수문자나 숫자, 대문자가 포함되어야 하는 비밀번호가 많아서 AI에게 물어봤는데

```javascript
const isValidPassword = (password) => {
  // 1. 길이 검사 (8~20자)
  const isLengthValid = password.length >= 8 && password.length <= 20;

  // 2. 숫자 포함 여부 검사
  // /[0-9]/ : 0부터 9까지의 숫자가 하나라도 있는지 확인
  const hasNumber = /[0-9]/.test(password);

  // 3. 특수문자 포함 여부 검사
  // /[!@#$%^&*]/ : 괄호 안의 특수문자가 하나라도 있는지 확인
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  // 4. 세 가지 조건이 모두(AND) 참이어야 통과
  return isLengthValid && hasNumber && hasSpecialChar;
};
```

이라고 합니다!
**열심히 공부하겠습니다!**

### 4. 포인트 적립 계산

포인트가 정수로 나오기 위해 수업중에 사용했던 parseInt를 사용했는데,
혹시나 다른 방법이 있나 AI에게 물어봤습니다.
AI는 Math.floor() (내림 함수)를 추천해줬습니다.
차이점은 Math.floor()의 경우 소수점을 버림 취급이며.
parseInt는 문자열을 분석, 변환해서 소수점을 잘라버리는 거라서,
음수로 값이 나오게 되면 수학적으로 값이 변하게 된다고 합니다.
**결과만 생각하고 함수를 선언하면 안된다**고 생각했습니다.
하지만 포인트가 음수로 나오진 않으니 parseInt를 사용했습니다!

그리고 등급별로 포인트 단계를 나누기 위해 마찬가지로 다음주 배울 예정인 else if를 사용하였습니다.
마지막으로 else 를 다시 사용해 일반 회원에게 적용되는 포인트를 적용시켰습니다.

### 5. 영화 티켓 가격 계산

마지막 결과 값 나오는 방식에 대해서 고민을 많이 했습니다.
movieType 안에서 계산을 하자니 반복되는 과정도 많았고,
만약 다른 조건이 더 붙는다면 수정할 부분이 너무 많아졌습니다.
그리고 할인=뺼셈으로 생각해서

```javascript
price = price - price * 0.2;
```

로 처음에 생각을 했는데, 굳이 그럴 필요가 없없습니다.
price \* 0.8 로 간단하게 해결했습니다.

그리고 회고를 적으며 movieType을 switch로 쓰면 더 좋을거 같다고 생각이 들어서 적어봅니다!

```javascript
const totalPrice = function (movieType, earlyDiscount, numberOfViewer) {
  let ticketPrice = 0;
  switch (movieType) {
    case "일반":
      ticketPrice = 14000;
      break;

    case "3D":
      ticketPrice = 17000;
      break;

    case "IMAX":
      ticketPrice = 20000;
      break;
  }
  if (earlyDiscount) {
    ticketPrice = ticketPrice * 0.8; // 20% 할인
  }
  return ticketPrice * numberOfViewer;
};
```

이렇게 해봤는데 AI는 해당 상황에서 default 조건을 넣어서 0원에 예매되는 상황을 방지 하라고 조언해줬습니다.
처음 ticketPrice를 0원으로 설정해둬서 생긴 일이라고 생각됩니다.
default를 안쓰려면 처음 ticketPrice를 일반(14000)으로 생각하고 만들었어야 됐겠네요.
