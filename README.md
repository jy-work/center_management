# 용산구 YOUTH 통합 플랫폼 마크업
용산구 YOUTH 통합 플랫폼 마크업 작업을 위한 공간입니다.

## 환경설정 및 실행
> - [nunjucks 템플릿](https://mozilla.github.io/nunjucks/templating.html)을 사용하여 HTML 작성합니다.
> - 스타일은 scss 코드로 작성합니다.

1. `$ npm install` (node 버전 12이상)
2. `$ npm install gulp -g`
3. `gulp` 명령어 입력

### 폴더 구조
- `src > html > templates` 폴더에 html 작성 > `src > html > dist` 폴더에 출력
- `src > style > scss` 폴더에 `scss`코드 작성 > `src > style > css` 폴더에 출력

```
@root
  └─src
    ├─html
    │  ├─dist
    │  │
    │  └─templates
    │  
    ├─img
    └─style
        ├─css
        ├─font
        └─scss
```

### UI 확인 방법
- `src > html > dist > uio.html` 페이지 확인

### 이미지 사용방법
구글 Material UI 아이콘을 사용하였습니다.
1. https://fonts.google.com/icons 에서 아이콘 검색
2. 아이콘 선택 후 오른쪽 code 복사
  > ex) `<span class="material-icons-outlined">home</span>`
3. 색을 변경할 경우, CSS `fill: #컬러값;` 으로 변경