const fs = require('fs')

const navoiy = `
Alisher Navoiy g'azallari to'plami — O'zbek xalqining buyuk shoiri va mutafakkiri Alisher Navoiy o'lmas «Xamsa» asari tarkibidagi dostonlari, beqiyos «Xazoyin ul-maoniy»ni tashkil etgan she'riyati, o'n to'rt nomdagi nasriy asarlari bilan adabiyotimizni boyitgan, uni jahon adabiyoti darajasiga ko'targan, bashariyatning madaniyat xazinasiga ulkan hissa qo'shgan ijodkordir.`

function foo(error) {
    console.log('Molodes Ziyadulla, barakat top!')
    console.log(error)
}

function bar(error) {
    console.log('Molodes Farruxbek')
    console.log(error)
}

// fs.rm('navoiy-gazallari.txt', bar)
fs.writeFile("read.js", "const fs = require('fs');", foo)