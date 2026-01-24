// 탭 버튼들과 탭 패널들 가져오기
const tabButtons = document.querySelectorAll(".tab-nav__button");
const tabPanels = document.querySelectorAll(".tab-panel");

function activateTab(targetId, clickedButton) {
  // 모든 패널 숨기기
  tabPanels.forEach((panel) => {
    panel.classList.remove("tab-panel--active");
  });

  // 모든 버튼의 활성화 상태 끄기
  tabButtons.forEach((button) => {
    button.classList.remove("tab-nav__button--active");
    // 접근성: "선택되지 않음" 상태로 변경
    button.setAttribute("aria-selected", "false");
  });

  // 선택된 패널을 활성화
  const activePanel = document.getElementById(targetId);
  if (activePanel) {
    activePanel.classList.add("tab-panel--active");
  }

  // 클릭된 버튼을 활성화
  if (clickedButton) {
    clickedButton.classList.add("tab-nav__button--active");
    // 접근성: "선택됨" 상태로 변경
    clickedButton.setAttribute("aria-selected", "true");
  }
}

// 각 버튼에 클릭 이벤트를 연결
tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // 클릭된 버튼의 값 가져오기
    const targetId = e.currentTarget.dataset.target;
    // ID와 클릭된 버튼 전달하여 탭 활성화 함수 호출
    activateTab(targetId, e.currentTarget);
  });
});
