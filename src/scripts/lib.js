// JavaScript 모듈 정의
export default {
    // 숫자를 천 단위로 쉼표로 구분하여 포맷팅하는 함수
    getNumberFormatted(val) {
        // val을 문자열로 변환하고, 정규 표현식을 사용하여 천 단위로 쉼표(,)를 삽입
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
