'use strict';
// object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
// constructor
    constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
    }

    // methods
    speak() {
        console.log(`this.name`: hello!);
    }
}

console.apple = new Person('apple', 20);
console.log(apple.name);
console.log(apple.age);
apple.speck();

2. Getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age();
    }

    set age() {
        // if (value) {
        //     throw Error('age can't be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jod', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// http://developer.mozila.org/en-US/docs/Wed/JavaScrupt/Refe
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Apple'
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
}

const article = new Article(1);
const article = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend anthor class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle expends Shape {}
class Triangle expends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'yellow');
rectangle.draw();
console.log(rectangle.getArea);
const triangle = new Triangle(20, 20, 'pink');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());