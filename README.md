# 용산구 YOUTH 통합 플랫폼 마크업
용산구 YOUTH 통합 플랫폼 마크업 작업을 위한 공간입니다.

## 환경설정 및 실행
> - [nunjucks 템플릿](https://mozilla.github.io/nunjucks/templating.html)을 사용하여 HTML 작성합니다.
> - 스타일은 scss 코드로 작성합니다.

1. npm install (node 버전 14.15.3)
2. `gulp` 명령어 입력

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
    │      └─include
    ├─img
    └─style
        ├─css
        ├─font
        └─scss
```
