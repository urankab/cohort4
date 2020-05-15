// import { Account, AccountController } from './functions'
import funcs from './functions'

//-------- ACCOUNT CLASS ------------------------------
test('Test Account Class constructor', () => {
    const account1 = new funcs.Account('checkingAcc', 25);
    expect(account1.accountName).toBe('checkingAcc');
    expect(account1.balance).toEqual(25.00);
})

test('Test Account Class deposit/withdraw/show balance methods', () => {
    const account1 = new funcs.Account('checkingAcc', 25);
    account1.deposit(10);
    expect(account1.balance).toBe(35.00);
    account1.withdraw(30);
    expect(account1.balance).toBe(5);
    expect(account1.showBalance()).toBe("checkingAcc: $5.00");
})

//-------- ACCOUNT CONTROLLER CLASS -------------------
test('Test keys generation', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("Art", 200)
    expect(acc.accArray[0].key).toBe(0)
    expect(acc.getAccountFromKey(0)).toEqual({ "accountName": "Art", "balance": 200.00, "key": 0 })
})

test('Test add/delete/rename an Account', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("Vacation", 100);
    expect(acc.accArray[0].accountName).toBe("Vacation");
    expect(acc.accArray[0].balance).toEqual("100.00");
    acc.addAccount("Car", 500);
    expect(acc.accArray[1]).toBe({ "accountName": "Car", "balance": 500.00, "key": 1 });
    expect(acc.accArray).toEqual([{ accountName: "Vacation", balance: 100.00, "key": 0 }, { accountName: 'Car', balance: 500, "key": 1 }])
    acc.removeAccount("Vacation"); //Remove vacation fund account
    expect(acc.accArray).not.toContain({ accountName: "Vacation", balance: 100 }); //Check that Vacation is not in there
    expect(acc.accArray[0].accountName).toContain('Car'); //Check Car account is there
    expect(acc.accArray.length).toEqual(1);
    acc.renameAccount("Car", "House");
    expect(acc.accArray[0].accountName).toEqual("House")
})

test('Test getting total of all accounts', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("Kids", 1000);
    acc.addAccount("Cat", 10);
    expect(acc.totalBalance()).toBe('Total: $' + 1010.00);
})

test('Test deposit, withdrawal, show balance', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("Kids", 1000);
    acc.accArray[0].deposit(15);
    expect(acc.accArray[0].showBalance()).toEqual("Kids: $" + 1015.00);
    acc.accArray[0].withdraw(100);
    expect(acc.accArray[0].showBalance()).toEqual("Kids: $" + 915.00);
})

test('Test getting HIGHEST of all accounts works', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("Doggy Business", 3000.00);
    acc.addAccount("Video Games", 2000.00);
    acc.addAccount("Video Games", 300.00);
    expect(acc.highestAccount()).toBe("Highest Acc: Doggy Business: $3000");
})

test('Test getting LOWEST of all accounts works', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("Doggy Business", 3000);
    acc.addAccount("Video Games", 2000);
    acc.addAccount("Video Games", 300);
    expect(acc.lowestAccount()).toBe("Lowest Acc: Video Games: $300");
})

test('Test that checkName() works', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("House", 3000);
    expect(acc.checkName("House")).toBe(true);
})

test('Test that showAll() works', () => {
    const acc = new funcs.AccountController();
    acc.addAccount("House", 515);
    acc.addAccount("Kids", 900);
    acc.addAccount("Doggy Business", 3000);
    acc.addAccount("Video Games", 300);
    expect(acc.showAll()).toEqual([" House: $515.00 ", " Kids: $900.00 ", " Doggy Business: $3000.00 ", " Video Games: $300.00 "]);
})