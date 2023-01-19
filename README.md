# 플로우 서버 개발자 과제입니다.

사이트 주소 : http://ec2-54-178-212-88.ap-northeast-1.compute.amazonaws.com:3000/
<br><br>
# 사용한 기술 스택
back-end : node.js(express), mysql
<br>
front-end : vueJS
<br>
인프라 : aws ec2, aws RDS
<br><br>

# 고민한 사항
<br>
- [테이블 설계를 한 테이블로 할 지 나눌지]
 - 하나로 합치게 되면 고정 확장자와 커스텀 확장자를 구분지어야 할 컬럼이 추가되고 고정 확장자에는 체크여부 컬럼이 생기는데 커스텀확장자 데이터에는 쓸모가 없는 컬럼이고 커스텀확장자가 더 많을 것으로 예상되어 테이블을 나누는 쪽으로 설계를 했습니다. (데이터를 불러와 나누는 작업을 하지 않아도 돼서 개발도 용이했습니다.)
<br>
- [커스텀 확장자 등록]
 - 중복검사와 고정 확장자에 있는 확장자는 아닌 지도 검사합니다. 대문자와 소문자를 혼용할 경우를 대비해서 서버로 들어온 값을 소문자로 치환후 검사하거나 등록합니다.
<br>
- [화면까지 구현해야해서 프로젝트 구성을 어떻게 할 지]
 - 화면은 한 페이지라서 따로 프로젝트를 만들지않고 노드에서 직접 렌더링하도록 만들었습니다.

<br><br><br><br>

설계 이미지
<br>
<img width="871" alt="Screen Shot 2023-01-20 at 1 54 16 AM" src="https://user-images.githubusercontent.com/97156898/213507894-7bb68063-5cbe-4974-ba00-e7a0b30bab19.png">
