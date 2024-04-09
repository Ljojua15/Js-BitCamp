//layback Speed - საუბრის სიჩქარე

function separate() {
    let sence = prompt('შეიყვანეთ წინადადება')
    let dayofili = sence.replace(/\s/g, '... ') + '...'
    return dayofili
}

console.log(separate())