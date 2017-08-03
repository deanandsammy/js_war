
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                       
persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                        
persistence(4) === 0 // because 4 is already a one-digit number

// 第一次尝试

function persistence(num) {
    num = num.toString()

    if (num.length === 1) return 0

    let len = 2
    let time = 0
    let product = 0
    let str = ''

    while (len !== 1) {
        product = num.split('').map(item => parseInt(item)).reduce((product, num) => product * num)
        str = product.toString()
        len = str.length

        num = str
        time++
    }
    return time
}
