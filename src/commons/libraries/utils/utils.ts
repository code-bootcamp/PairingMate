// 날짜 : 2021.12.21
// 작성자 : 권태욱
// 내용 : 전역으로 사용 될 공통 기능들을 적어 내려 갑니다.
//       예시로 javascript 의 getDate 정보를 '####-##-##' 포맷 형식으로 변환하는 작업
export function getDate(myDate) {
    const date = new Date(myDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`; // 2021년 11월 10일
    // return `${year}-${month}-${day}`; // 2021-11-10
  }
