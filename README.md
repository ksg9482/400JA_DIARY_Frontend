# 400JA_DIARY

## 기획
하루 400자, 가볍게 일기를 쓰는 웹 어플리케이션입니다.   
다양한 일기 웹/ 앱이 있지만 있는걸 그냥 사용하는 것 보다는 직접 만들어 보면서 필요한 기능을 구현하자는 생각에 기획하게 되었습니다.
처음에는 단순한 기능만 넣어서 개발할 생각이며 이는 새로운 기술 스택이 여러개 추가되는데 괜히 처음부터 대규모로 만들면 오류만 커진다고 판단했기 때문입니다.
### 요건
* 최대한 클린코드를 준수한다
* 사용자 페이지와 관리자 페이지 구분/구현
* 코드 재사용성을 높이기 위한 고려
## 기술 스택
* Node.Js
  * Javascript를 웹환경이 아닌 상황에서도 동작시키기 위한 런타임입니다.
* Express
  * NestJs도 있지만 npm을 직접 선택하면서 필요한 기능을 하나하나 살펴보기 위해 일부러 Express를 선택했다.
* mongoDB
  * 자신의 게시물을 타인이 간섭하지 않는다. 따라서 데이터 일관성이 그렇게 중요하지 않고 또 여러번의 조인 연산이 필요하지 않기 때문에 NoSQL을 사용하는 것도 적합하다고 생각해서 선택했다.
* Nginx
  * 정적 파일 관리 및 담당을 통해 서버의 부담 경감
  * 동작을 담당하는 서버를 보호
* Docker
  * 백엔드 환경 균일화
  * 클러스터 형식으로 조절
  * PM2 활용
* Jest
  * e2e test
  * unit test
## 페이지 구성
* 인트로 / 로그인 페이지
  * 일반 회원가입, Oauth(네이버, 구글, 카카오)
* 메인페이지 - 오늘 일기
* 일기 모아보기
  * 작성시간 기준 역순
  * 무한 스크롤, 갯수별로 보기 - 여차하면 갯수별 보기로 고정(페이지네이션)
* 검색 - 제목 검색, 내용 검색, 종합 검색, 태그 검색
* 마이페이지
  * 공통 - 등록된 이메일, 로그아웃, 회원탈퇴, 일기 총 작성 횟수, 일기 연속 작성 횟수
  * 일반회원 - 비밀번호 변경 가능
  * 소셜로그인 - 비밀번호 변경 불가
* 네비게이션 바 - 오늘의 일기, 일기 모아보기, 검색, 마이페이지
## 기능 구현
회원가입-로그인-소셜로그인-일기작성-일기확인-일기수정-일기검색-로그아웃-회원탈퇴

* 회원가입시 메일인증
* CORS해결
* JWT 미들웨어
* 사용자와 관리자 페이지 분리
* 태그 붙여서 관리

하루 일기 기능.
다양한 일기 웹/ 앱이 있지만 있는걸 그냥 사용하는 것 보다는 직접 만들어 쓰자는 생각.
처음에는 단순한 기능만 넣어서 개발. 새로운 기술 스택이 여러개 추가되는데 괜히 어렵게 만들면 오류만 커진다
순수하게 일기 생성 + 이미지 첨부에 특화되게 개발했다.

Nginx - 왜 쓰는지 잘 모르고 있다가 WAS와 WS의 차이를 알아보다 알게되었다.
정적파일을 담당해 동적서버의 부담을 줄이고 보안을 강화하기 위해 선택했다.

ElasticSearch - 일기이다 보니 한번 작성한 내용은 거의 수정하지 않고, 디지털의 강점인 검색하기 쉽다는 점을 극대화 하기위해 선택했다. ES를 유용하게 사용하는 방법인 '수정이 적고, 검색하는 경우가 많은' 상황에 알맞다.