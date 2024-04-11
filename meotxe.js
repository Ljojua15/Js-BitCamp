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

// function convert() {
//     let str = prompt('ხასიათი და სმაილი');
//     let happ = ':)';
//     let sad = ":(";
//     let repHapp = 'icinis';
//     let repSad = 'tiris';
//
//     if (str.includes(happ)) {
//         str = str.replace(happ, repHapp)
//     }
//     if (str.includes(sad)) {
//        str = str.replace(sad,repSad)
//     }
//         return  str
//
// }
//
//
// console.log(convert())
//
//


//პროექტი 7 - თამაში Mad Libs

/*

function wordsGame(){
    let name = prompt('შეიყვანეთ სახელი')
    let surName = prompt('შეიყვანეთ გვარი')
    let age = prompt('შეიყვანეთ ასაკი')
    let birthDay = prompt('შეიყვანეთ დაბადების რიცხვი')
    let birthMonth = prompt('შეიყვანეთ დაბადენის თვე')

    let answer =`შენ ხარ ${name} ${surName} ${age} წელის, დაბადებული ${birthDay} ${birthMonth}`

    function corectAnswer(){
        let ask = prompt(`"${answer}", დაწერეთ "კი" ან "არა"`)

        if (ask.includes('კი')){
            console.log('კარგია')
        }else if(ask.includes('არა')) {
            console.log('შეავსეთ თავიდან')
        }else{
            alert('დაწერეთ "კი" ან "არა"')
        }
    }

    corectAnswer()
}


wordsGame()

*/
