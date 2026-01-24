# 4주차 과제

일단 주말에 알바로 인해 시간이 많이 없어서,
첨부해주신 파일을 사용했습니다.
만약 시간이 남는다면,
분석을 철저하게 해서 README파일에 작성해두도록 하겠습니다!

## 1. html/css 분석

### 1_html

웹접근성을 위한 aria 속성이 많은 도움이 될 것 같습니다!
선생님이 마크업 해주신 html 파일을 보면서 갈 갈이 더 험난해 보이네요.
data-target 으로 길도 잘 보이고,
class를 잘 선택해서 document.querySelectorAll로 한번에 불러 올 수 있을 것 같습니다.

### 2_css

css파일이 정말 많아서 머리가 아팠습니다.

display: none 에서
--active 가 붙으면 display: block 으로
평소에는 꺼져있다가 켜지는 형식이라고 생각됩니다.

사용자가 버튼을 누르면,
--active 라는 클래스가 붙고,
--active 로 바뀌니 미리 준비해둔 스타일을 보여준다.

라고 생각을 하고 js 를 만들어보면 좋겠다 생각했습니다.

## 2. js 작성

먼저 재료를 준비했습니다.
뒤에서 forEach를 돌리기 위해 querySelectorAll을 사용해 가져왔습니다.

그리고 함수에 targetId, clickedButton 을 둘 다 받아서,
버튼을 찾는 과정 없이 받은 버트를 바로 사용했습니다.

document.querySelector('.tab-panel--active') 로 현재 켜진 패널과 버튼만 찾아서 끄려고 했지만,
한번에 다 끄고 필요한 곳 만 다시 켜게끔 만들었습니다.

다 끈 후 targetId를 찾아서 켜기 위해 getElementById 를 사용했습니다.
함수 시작때 받은 clickedButton 을 바로 사용하여 버튼도 활성화 해줍니다.

각 버튼을 예습한 이벤트 리스너에 연결합니다.

그리고 마지막으로 위에서 빼먹은 웹접근성을 체크했습니다.
setAttribute 를 사용하여
선택되지 않은 곳에는 "aria-selected", "false",
선택된 곳은 "aria-selected", "true" 로 상태를 바꿔줍니다.
