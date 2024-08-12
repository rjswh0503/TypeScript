// 변수에 타입 지정
var 이름2 = '신재헌';
var 나이 = 32;
var 성별 = '남자';
var 결혼여부 = false;
// 배열에 타입 지정
var 맴버 = ['신', '김', '박', '이'];
// object 타입 지정 
var product = {
    name: '바지',
    price: 50000,
};
// 문자 or 숫자가 들어올 변수에 타입 지정
var 나이3 = 32;
// string | number는 나이3이라는 변수에  number, string 두 타입 할당이 가능하다.
// 배열도 마찬가지
var numbers = [1, 2, "3"];
/*
    var numbers : number[] = [1,2,"3"];
    이렇게 number 타입을 지정해준 배열에 strinrg값을 넣게 되면 string 형식을 number 형식에 할당할 수 없다는 오류가 뜬다.

    var numbers : (number | string)[] = [1,2,"3"];

    하지만 이렇게 numbers 배열에 타입을 (number | string)[] 이렇게 지정 해 준다면 배열안에 number string 둘 다 할당할 수 있다.

 */
// 오브젝트도 마찬가지
var member = {
    name: '신',
    age: 32
};
// typescript 실습문제
// 1. 기본타입
var name3 = '신재헌';
var age2 = 32;
var isStudent = false;
// 2. 객체
var Car = {
    make: '현대',
    model: '캐스퍼',
    year: 2023
};
var Student = {
    name: '신재헌',
    age: 32,
    courses: ["JavaScript", "TypeScript", "React", "NextJs"]
};
Student.courses;
// 함수
function 함수2(a) {
    return a * 2;
}
함수2(2);
