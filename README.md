# 연금 MBTI TEST — HTML/CSS 변환

한국투자증권 **연금 MBTI TEST** 모바일 플로우(15화면)를 Figma 디자인 기준으로
HTML + CSS(별도 파일, 모바일 우선 반응형)로 변환한 결과물입니다.

## 실행
`index.html`을 브라우저로 열면 전체 화면 목록(썸네일)이 보이고, 클릭하면 각 화면으로 이동합니다.
개별 화면은 `screens/01-intro.html` … `screens/15-finish.html`을 직접 열어도 됩니다.

## 폴더 구조
```
index.html              전체 화면 목록(네비게이터)
css/
  tokens.css            색상·여백·반경·타이포 토큰 (CSS custom properties)
  base.css              리셋·모바일 셸·상태바·홈 인디케이터·유틸리티(u-)
  components.css        버튼·입력폼·카드·헤더·칩·시트·자리표시 박스 등 재사용 컴포넌트
js/
  viewport.js           키보드 대응 화면 높이 보정(visualViewport → --app-height)
assets/
  img/                  캐릭터·카드·가챠·상품 등 콘텐츠 이미지(PNG)
screens/
  01-intro.html         인트로
  02-guide.html         테스트 안내(권한 하단 시트 토글 스크립트 포함)
  03-permission.html    카메라 권한(하단 시트)
  04-test.html          문항 O/X
  05-loading.html       성향 분석 중(진행률 애니메이션 스크립트 포함)
  06-result.html        결과(INFJ)
  07-name.html          이름 입력
  08-phone.html         휴대폰번호 입력
  09-ready.html         해석 준비 완료
  10-kakao.html         카카오 채널
  11-kakao-done.html    친구 추가 완료
  12-gacha.html         가챠
  13-prize.html         당첨
  14-contact.html       연락 정보 입력
  15-finish.html        상품 수령 완료
```

## 변환 규칙
- **CSS 별도 파일** · **모바일 우선** 반응형 (≥600px에서 390×844 디바이스 프레임으로 중앙 정렬)
- 색상·여백·폰트 크기는 디자인 수치를 토큰(`css/tokens.css`)으로 반영
- 레이아웃은 Flex/Grid 기반으로 재구성 (절대좌표 미사용)
- **시스템 한글 폰트 스택** 대신 **Pretendard** 웹폰트 사용 (jsDelivr CDN)
- 반복 요소(버튼·입력폼·카드·시트)는 `components.css`에 재사용 컴포넌트로 분리
- **이미지·아이콘 처리** — 콘텐츠 이미지(캐릭터·카드·가챠·상품 등)는 `assets/img/`의 실제 PNG, 헤더·체크·화살표 등 UI 아이콘은 인라인 SVG, 아이콘 박스는 디자인과 동일하게 이모지를 사용했습니다.

## 네이밍 규칙
- **케밥케이스 + BEM** (`block__element--modifier`)
- 동적 상태는 `is-` 접두사 (`is-open`·`is-filled`·`is-ready`)
- 유틸리티 클래스는 `u-` 접두사
- 목록 화면(`index.html`) 전용 클래스는 `index-` 접두사로 네임스페이스

## 인터랙션(JS)
대부분은 정적 화면이지만, 일부 화면은 데모 동작을 위해 바닐라 JS를 포함합니다.
- `js/viewport.js` — iOS 등에서 가상 키보드가 올라올 때 `visualViewport.height`를 `--app-height`로 반영해, 하단 고정 버튼 영역(`.btn-area`)이 키보드 위에 붙도록 화면 높이를 보정합니다. 포커스된 입력칸을 키보드 위로 스크롤하는 동작도 포함합니다. **사용하려는 화면의 `<body>` 끝에 `<script src="../js/viewport.js"></script>`를 추가하면 동작합니다.**
- `screens/02-guide.html` — 카메라 권한 하단 시트 열기/닫기 토글(인라인 스크립트)
- `screens/05-loading.html` — 0→100% 진행률 애니메이션(`requestAnimationFrame`, 인라인 스크립트)

## 참고
- 각 화면 메타 뷰포트에 `viewport-fit=cover`를 적용해 노치/안전영역에 대응합니다.
- 키보드 영역(03 권한 시트 등)은 CSS로 그려 실제 OS 키보드를 대체했습니다.
- `screens/15-finish.html`의 “한투 동영상”은 디자인 원본이 대체 도형(플레이스홀더)입니다.
- Pretendard는 CDN으로 불러오므로 온라인 환경이 필요합니다. 완전 오프라인이 필요하면 폰트 파일을 `assets/font/`에 번들해 드릴 수 있습니다.
- 텍스트·문구는 디자인 원본을 그대로 사용했습니다.
