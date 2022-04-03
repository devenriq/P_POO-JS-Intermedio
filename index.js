const juan = {
  name: "Juan",
  age: 18,
  approvedCourses: ["Course 1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// console.log(
//   Object.defineProperty(juan, "pruebaNASA", {
//     value: "extraterrestres",
//     enumerable: true,
//     writable: true,
//     configurable: true,
//   })
// );

Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(juan, "editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(juan, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(juan, "pruebaNasa", {
  value: "Extraterrestres",
  writable: false,
  enumerable: false,
  configurable: false,
});

// console.log(Object.getOwnPropertyDescriptors(juan));
