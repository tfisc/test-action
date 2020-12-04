function add(a, b) {
    return a + b;
}

function addWithIf(a, b) {
    if (a > 4) {
        return a + b;
    } else {
        return a / b;
    }

}

function objectTest(param1) {
    if (param1.name === 'test') {
        return 'name is test'
    } else {
        return 'name is not test'
    }

}