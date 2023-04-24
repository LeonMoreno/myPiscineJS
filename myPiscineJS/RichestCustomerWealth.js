/**
 * You are given an m x n integer grid accounts where accounts[i][j]
 * is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
 * Return the wealth that the richest customer has.
 * 
 * A customer's wealth is the amount of money they have in all their bank accounts. 
 * The richest customer is the customer that has the maximum wealth.
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
let maximumWealth = function(accounts) {
    
    let numMayor = 0;

    accounts.forEach(account => {
        let numSum = 0;
        account.forEach(num => {
            numSum += num;
        });
        console.log(`[ ${account} ] = ${numSum}`);
        if (numSum > numMayor)
            numMayor = numSum;
    });
    return (numMayor);
};


console.log(maximumWealth([[3, 5, 6], [9, 5, 87], [3, 5], [4, 54, 98], [43, 2, 8, 23]]));