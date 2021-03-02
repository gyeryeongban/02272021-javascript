// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionlity.
// Naerly all objects in JavaScript are instances of Object
// Object = {key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' sytax
const obj2 = new Object(); // 'object constructor' sytax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const apple = {name: 'apple', age: '7'};
print(apple);

// with JavaScript magic (dynamically typed language)
// can add properties later
apple.hasJob = true;
console.log(apple.hasJob);

// can delete properties later
delete apple.hasJob;
console.log(apple.hasJob);

// 2. Computed properties
// key should be always string
console.log(apple.name);
console.log(apple['name']);
apple['hasJob']=true;
console.log(apple.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(apple, 'name');
printValue(apple, 'age');

// 3. Property value shorthand
const person1 = {name: 'a', age: 2};
const person2 = {name: 'b', age: 3};
const person3 = {name: 'c', age: 4};
const person4 = new Person('apple',50);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in apple);
console.log('age' in apple);
console.log('random' in apple);
console.log(apple.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in apple) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'apple', age: '20'};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);