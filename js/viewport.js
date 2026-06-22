/* viewport.js — 키보드 대응 화면 높이 보정
   ----------------------------------------------------------------
   iOS Safari 등에서 가상 키보드가 올라와도 100dvh 는 줄어들지 않아
   하단 고정 영역(.btn-area)이 키보드에 가려진다.
   visualViewport.height 를 --app-height 로 반영해 .app-screen 이
   "보이는 화면"만큼만 차지하게 만들면, 마지막 flex 자식인 .btn-area 가
   자연스럽게 키보드 바로 위에 붙는다. */
(function () {
  var vv = window.visualViewport;

  function setAppHeight() {
    var h = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--app-height', h + 'px');
  }

  setAppHeight();

  if (vv) {
    vv.addEventListener('resize', setAppHeight);
    vv.addEventListener('scroll', setAppHeight);
  } else {
    window.addEventListener('resize', setAppHeight);
  }

  /* 포커스된 입력칸이 키보드 위로 보이도록 스크롤 */
  document.addEventListener('focusin', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) {
      setTimeout(function () {
        t.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 300);
    }
  });
})();
