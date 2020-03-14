import Account from "./account.js";

const account1 = new Account('checkingAcc', 25);

test('Does the constructor set up work?', () => {
    expect(account1.accountName).toBe('checkingAcc');
    expect(account1.balance).toBe(25);
})

test('Test that the deposit/withdraw methods works', () => {
    account1.deposit(10);
    expect(account1.balance).toBe(35);
    account1.withdraw(30);
    expect(account1.balance).toBe(5);
})

test('Test show balance method', () => {
    expect(account1.showBalance()).toBe(5);
})