# TORONTO

## 토론토 프로젝트
![toronto](https://user-images.githubusercontent.com/33307948/174878545-4df68032-9e09-4a58-8c4e-ccdc9d463378.png)

## 프로젝트 소개
현재 유행하고 있는 꺳잎 논쟁, 새우 논쟁 등 다양한 주제에 대해 간단하게 투표하고 사람들과 의견을 공유할 수 있는 토론 커뮤니티 서비스입니다!

## TEAM 나영
![나영팀](https://user-images.githubusercontent.com/33307948/174882493-1e326b09-a805-4f48-bfc2-4c9340baf7d7.png)

### 팀원 소개

이재웅: 팀장, 프론트엔드 개발
장규범: 프론트엔드 개발
홍정기: 프론트엔드 개발
팽건우: 프론트엔드 개발

## 개발 일정

[Period](https://prgrms.notion.site/020074cef4c84f4c85b0421892e5bd5a?v=e978958f6aec4917989610e59a754475&p=9293791abbb54ac6ae7ca9a262aefd1b)

- 06.06.2022 ~ 06.22.2022
  - ~06.08.2022 : 1차 기획서
  - ~06.15.2022: 중간 점검
    - 프로젝트 소개 영상
    - 회고록
  - ~ 06.22.2022: 최종 결과
    - 프로젝트 최종 발표

## Tech Stack

- Language: HTML/CSS/JavaScrip
- IDE: VSCode
- Library: React([create-react-app](https://github.com/facebook/create-react-app))
- 배포: Netlify
- 도구: [Storybook](https://github.com/storybookjs/storybook), [styled-components](https://github.com/styled-components/styled-components), ESLint, Prettier, Notion

## 프로젝트 기능
### 주요 기능
- 홈페이지
![홈페이지](https://user-images.githubusercontent.com/33307948/174885107-51570845-3555-493f-82e0-20541f434a1a.png)

- 투표
![투표](https://user-images.githubusercontent.com/33307948/174886020-8060a694-b2cb-449a-af34-cefd96450c65.png)

- 투표 결과 확인 및 댓글
![투표 결과 확인 및 댓글](https://user-images.githubusercontent.com/33307948/174886132-bd16e09c-c44c-4ef8-b58e-955be70b3c6f.png)


## 기대 효과
다양한 SNS에서 산발적으로 토론이 이뤄지고 있습니다. 해당 주제에 대한 의견을 모아놓은 커뮤니티 구성함으로써 본인과 타인의 생각을 확인하고 의견을 교류할 수 있습니다.

## 폴더 구조
```
📦toronto
 ┣ 📂.netlify
 ┃ ┗ 📜edge-functions-import-map.json
 ┣ 📂.storybook
 ┃ ┣ 📜main.js
 ┃ ┗ 📜preview.js
 ┣ 📂functions
 ┃ ┗ 📜request.js
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜manifest.json
 ┃ ┣ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜Api.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┣ 📜SCDream.otf
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📜post_placeholder.png
 ┃ ┃ ┃ ┣ 📜toronto.png
 ┃ ┃ ┃ ┗ 📜user_placeholder.png
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┣ ***
 ┃ ┃ ┣ 📂molecules
 ┃ ┃ ┃ ┣ ***
 ┃ ┃ ┗ 📂organisms
 ┃ ┃ ┃ ┣ ***
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂contexts
 ┃ ┃ ┣ 📜UserContext.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂useAsync
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜useAsyncFn.jsx
 ┃ ┃ ┣ 📂useForm
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┣ 📂lib
 ┃ ┃ ┗ 📜Login.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜About.jsx
 ┃ ┃ ┣ 📜Controversy.jsx
 ┃ ┃ ┣ 📜ControversyResult.jsx
 ┃ ┃ ┣ 📜EditProfile.jsx
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┣ 📜Post.jsx
 ┃ ┃ ┣ 📜SignUp.jsx
 ┃ ┃ ┣ 📜UserListPage.jsx
 ┃ ┃ ┣ 📜UserProfile.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂stories
 ┃ ┃ ┗ 📂components
 ┃ ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┃ ┃ ┣ 📜***
 ┃ ┃ ┃ ┣ 📂molecules
 ┃ ┃ ┃ ┃ ┣ 📜***
 ┃ ┃ ┃ ┗ 📂organisms
 ┃ ┃ ┃ ┃ ┗ 📜***
 ┃ ┣ 📂templates
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜asyncActionUtils.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
 ┣ 📜.env
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜craco.config.js
 ┣ 📜netlify.toml
 ┣ 📜package.json
 ┗ 📜yarn.lock
 
