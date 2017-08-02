/*
* 已知本金，利率，税率，计算本金增长到指定金额所需要的时间
*
* @param {Number} principal 本金
* @param {Number} interest 利息
* @param {Number} tax 税率
* @param {Number} desired 期望所得资金
* @returns {Number} 返回增长到指定金额所需要的年数
* */

function calculateYears (principal, interest, tax, desired) {
    let year = 0

    if (principal === desired) return year

    while (principal < desired) {
        principal = principal + (principal * interest) * (1 - tax)
        year++
    }
    return year
}