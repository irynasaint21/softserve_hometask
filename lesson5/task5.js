//task5

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea() {
    let triangleArea;
    if (this.a < 0 && this.b < 0 && this.c < 0) {
      throw new Error('Triangle side cannot be negative');
    } else {
      let semiPerimeter = (this.a + this.b + this.c) / 2;
      triangleArea =
        ((semiPerimeter - this.a) *
          (semiPerimeter - this.b) *
          (semiPerimeter - this.c) *
          semiPerimeter) **
        (1 / 2);
    }
    return triangleArea;
  }
}

class Square extends GeometricFigure {
  constructor(squareSide) {
    super();
    this.squareSide = squareSide;
  }
  getArea() {
    return this.squareSide ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// const triangle = new Triangle(2,3,4);
// console.log(triangle.getArea())
// console.log(triangle.toString())

// const square1 = new Square(4)
// console.log(square1.getArea());

// const circle1 = new Circle(3);
// console.log(circle1.getArea());

const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)];
console.log(figures);

function handleFigures(arr) {
  let area;
  let totalArea = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] instanceof GeometricFigure;
    area = arr[i].getArea();
    console.log(`GeometricFigure: ${arr[i]} ${area}`);
    totalArea += area;
  }

  console.log(`Total area ${totalArea}`);
}

handleFigures(figures);

//
