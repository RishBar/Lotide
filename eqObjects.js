const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (typeof(object1[key]) === 'object') {
      for (let x in object1[key]) {
        if (Object.keys(object1[key]).length !== Object.keys(object2[key]).length || object1[key].length !== object2[key].length) {
          return false;
        } else if (object1[key][x] !== object2[key][x]) {
          return false;
        }
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


const obj3 = { a: 1, b: 2, c: { a: 1, b: 2 }, d: { x: 1, y: 2 } };
const obj4 = { d: { x: 1, y: 2 }, a: 1, c: { a: 1, b:2 }, b: 2 };
console.log(eqObjects(obj3, obj4)); // => true

const obj5 = { a: 1, b: 2, c: { a: 1, b: 3 }, d: { x: 1, y: 2 } };
const obj6 = { d: { x: 1, y: 2 }, a: 1, c: { a: 1, b: 2 }, b: 2 };
console.log(eqObjects(obj5, obj6)); // => false