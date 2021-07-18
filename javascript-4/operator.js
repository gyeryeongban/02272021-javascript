// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; // 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // 3
// postIncrement = counter;
// counter = counter + 1; // 4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const postIncrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postIncrement = counter--;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // glreater than
console.log(10 >= 6); // glreater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullable0bject && nullableObject.something
if (nullable0bject != null) {
    nullable0bject.somrthing;
}

function check() {
    for (let i = 0; i < 10; i++) {
        wasting time
        console.log('🥳');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality operators
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion // loose equality는 타입을 변경해서 검사, stringFive이 문자열이긴 한데 안에 들어있는건 숫자 5기 때문에 너넨 똑같아 라고 하는 것
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion // 타입을 신경쓰기 때문에 타입이 다르면 너넨 다른 애들이야 라고 하는 것, 코딩할때 웬만하면 strict equality로 검사하는게 좋음
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const apple1 = { name: 'apple' };
const apple2 = { name: 'apple' };
const apple3 = apple1;
console.log(apple1 == apple2); // apple1과 2는 각각 다른 ref가 저장되어 있기 때문에 ref가 다름 -> F
console.log(apple1 === apple2); // apple1과 2는 똑같은 타입이든 아니든 ref값이 다르기 때문에 -> F
console.log(apple1 === apple3); // apple1이 가지고 있는 ref value를 apple3으로 할당했기 때문에 apple1과 3은 똑같은 ref를 갖고 있음 -> T

// equality - puzzler
console.log(0 == false); // false: 0, null, undefined, NaN, '' -> T
console.log(0 === false); // 분리형 타입이 아니기 때문에 -> F
console.log('' == false); // false: 0, null, undefined, NaN, '' -> T
console.log('' === false); // 분리형 타입이 아니기 때문에 -> F
console.log(null == undefined); // 둘은 같은 것으로 간주되기 때문에 -> T
console.log(null === undefined); // 둘은 다른 타입이기 때문에 -> F

// 8. Conditional operators: if
// if, else if, else
const name = 'apple';
if (name === 'apple') {
    console.log('Welcome, Apple');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon')
}

// 9. Ternary operator: ? // if를 간단하게 쓸 수 있는 것이며, 간단하게 작성할때만 사용 아니면 가독성 떨어짐
// condition ? valuel : value2;
console.log(name === 'apple' ? 'yes' : 'no');

// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const brower = 'IE';
switch (brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    defalut:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is trethy,
// body code is executed.
// 조건문이 맞을때만 block을 실행하고 싶다면 while을 써야 함
let i = 3;
while (i > 0) { // 조건 확인
    console.log(`while: ${i}`); // 출력
    i--; // 감소
}

// do while loop, body code is executed first,
// then check the condition
// block을 먼저 실행하고 싶다면 do while을 써야 함
do { // 출력
    console.log(`do while: ${i}`);
    i--; // 감소
} while (i > 0); // 조건 확인

// for loop, for(begin; condition; step)
// begin은 한번만, condition과 step은 무한으로 condition이 안맞을 때까지
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    // block 안에 let이라는 지역 변수를 선언해서 작성하는 것도 좋음
    console.log(`inline variable for: ${i}`);
}

// nested loops
// i가 0일때 j를 0부터 9까지 빙 돌리고 i가 1일때 j를 0부터 9까지 돌림
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
//break는 루프를 완전히 끝내는 것, continue는 지금 것만 스킵하고 다시 다음 스텝으로 넘어가는 것
// Q1. interate from 0 to 10 and print only even numbers
// (use continue)
A1.
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1, ${i}`);
}

// 실제 작성할때는 원하는 것만 출력되게 작성
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1, ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)
A2.
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2: ${i}`);
}