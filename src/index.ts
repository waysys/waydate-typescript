function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

let gen = createFibonacciGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n >= 10; n++) {
            yield n
        }
    }
}