function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function inc(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

const h = compose(square, inc);
console.log(h(7)); // returns 49
