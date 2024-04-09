//layback Speed - საუბრის სიჩქარე
/*
function separate() {
    let sence = prompt('შეიყვანეთ წინადადება')
    let dayofili = sence.replace(/\s/g, '... ') + '...'
    return dayofili
}

console.log(separate())
*/

//პროექტი 6 - Making Faces - სახეების მიღება

// function convert() {
//     let str = prompt('ხასიათი და სმაილი')
//     let happ = ':)'
//     let sad = ":("
//     let repHapp = 'icinis'
//     let repSad = 'tiris'

//     if (str.includes(happ)) {
//         return str.replace(new RegExp("\\b" + happ + "\\b", "gi"), repHapp)
//     } else if (str.includes(sad)) {
//         return str.replace(new RegExp("\\b" + sad + "\\b", "gi"), repSad)
//     } else {
//         str
//     }
// }

// console.log(convert())

function convert() {
    let str = prompt('ხასიათი და სმაილი');
    let happ = ':)';
    let sad = ":(";
    let repHapp = 'icinis';
    let repSad = 'tiris';

    if (str.includes(happ)) {
        return str.replace(new RegExp(/\b/ + happ + "/\b/", "gi"), repHapp);
    } else if (str.includes(sad)) {
        return str.replace(new RegExp("\\b" + sad + "\\b", "gi"), repSad);
    } else {
        return str; // Return the original string when there are no emoticons
    }
}

console.log(convert());