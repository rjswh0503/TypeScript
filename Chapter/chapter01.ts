
// chapter 01 - typeScript 변수

// 변수에 타입 지정 가능
// 타입명 
/*
string 
number 
boolean 
null
undefined
...
*/
// 타입을 지정할 때 : 클론 뒤에 타입명을 넣으면 됨
// ex let 나이 : number = 32;

/*
이름 타입을 string으로 해줬기 때문에 

이름이라는 변수에는 string만 넣을 수 있다.

만약에 이름 = 20 이라는 number 주게 된다면 오류가 뜬다. 

*/

var 이름 : string = 'kim';

var 나이 : number = 25;


var 결혼여부 : boolean = true;


//array 자료형 
/*

array 자료형에도 타입을 지정할 수 있다.
let 회원들 = ['kim','park'];
회원들 이라는 변수명 앞에 :[] 써주고
:[] 사이에 : string[]타입을 지정해주면 
string값들만 array에 담을 수 있다 

*/
var 회원들 :string[] = ['kim','park']


/*  
array 자료형 타입을 string 으로 줬기 떄문에 어레이 안에 number 타입이 들어오게 되면 오류
ex ) let 회원들 :string[] = [123,'park']
*/

// object 자료형 써도 가능하다.

var 사람들 : {member1: string, member2 : string } = {member1 :'kim', member2:'park'}


// 실습 문제

// 1. 이름, 나이. 출생지역을 변수로 각각 저장


var 이름 : string = '신재헌';

var 나이 : number = 32;

var 출생지역 : string = '경기도 안산시';


// 2. 가장 좋아하는 곡과 가수이름을 변수에 object 담아보기

var 가수 : {노래제목: string, 가수이름: string} = {노래제목: '좋은 날', 가수이름: '아이유'}


// 3. 다음과 같이 생긴 자료의 타입지정를 해보기

let project : {

    member : string[], 
    days : number, 
    started : boolean
} = {
    member : ['kim','park'],
    days : 30,
    started : true,
}

  
/*
문자 or 숫자 들어올 수 있는 변수는 
Union Type 타입 2개 이상 합친 새로운 타입
*/

let 회원 : number | string = 'kim';


let 회원들1 : (number | string)[]  = [1,'2',3];

let 오브젝트 : {a : string | number } = {a : '123'};

// any 타입은 모든 자료형 허용해준다.

// any는 일반 js 변수

// any를 사용하게 되면 타입 관련 버그가 나도 안 잡아줌 

let 이름1 : any;

이름1 - 1;


// unKnown 타입 모든 자료형 허용해줌

let 나이1 : unknown = 1;


// 타입스크립트는 간단한 수학연산도 타입이 맞아야 함.


let 나이2 : number = 1;

나이2 + 1;

// 실습문제 1. 다음 변수 4개에 타입을 지정해보자.

let user : string = 'kim';
let age : number | undefined = undefined;
let married : boolean = false;
let 철수 : (string|number|undefined|boolean)[] = [user,age, married];

// 2. 학교라는 변수에 타입을 지정

let 학교 : {score: (number | boolean)[], teacher: string, friend: string|string[]} = {
    score : [100,97,84],
    teacher : 'Phil',
    friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee',학교.teacher];




// 함수 타입

// 함수에서 void 타입 사용 가능
// 타입지정된 파라미터는 필수 안 넣어주면 오류

// 파라미터값 ? :타입 
// ? 연산자는 들어올수도 있다 라는 뜻 

// function 함수(x? :number | undefined ) :void 

function 함수(x :number) :void {

    x * 2;
}

함수(5);


// 함수 실습문제

// 1. 이름을 파라미터로 입력하면 콘솔창에 출력

function 이름함수(x? : string) {
    if(x){
        console.log('안녕하세요' + x)
    }else {
        console.log('이름이 없습니다.');
    }
}
이름함수();


// 2. 
