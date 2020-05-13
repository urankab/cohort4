import { Account, AccountController } from "./account.js";

//-------- ACCOUNT CLASS ------------------------------
test('Test Account1 constructor', () => {
    const account1 = new Account('checkingAcc', 25);
    expect(account1.accountName).toBe('checkingAcc');
    expect(account1.balance).toBe(25);
})

test('Test deposit/withdraw/show balance methods', () => {
    const account1 = new Account('checkingAcc', 25);
    account1.deposit(10);
    expect(account1.balance).toBe(35);
    account1.withdraw(30);
    expect(account1.balance).toBe(5);
    expect(account1.showBalance()).toBe("checkingAcc: $5");
})

//-------- ACCOUNT CONTROLLER CLASS -------------------
test('Test AccountController constructor', () => {
    const acc = new AccountController();
    expect(acc.accArray).toEqual([]);
})

test('Test add/delete/rename an Account', () => {
    const acc = new AccountController();
    acc.addAccount("Vacation", 100);
    expect(acc.accArray[0].accountName).toBe("Vacation");
    expect(acc.accArray[0].balance).toBe(100);
    expect(acc.accArray[0].key).toBe(1)
    acc.addAccount("Car", 500);
    expect(acc.accArray[1]).toEqual({ "accountName": "Car", "balance": 500 , "key": 2});
    acc.removeAccount("Vacation"); 
    expect(acc.accArray).not.toContain({ accountName: "Vacation", balance: 100 }); 
    expect(acc.accArray[0].accountName).toContain('Car'); 
    expect(acc.accArray.length).toEqual(1);
    acc.renameAccount("Car", "House");
    expect(acc.accArray[0].accountName).toEqual("House")
})

test('Test getting total of all accounts', () => {
    const acc = new AccountController();
    acc.addAccount("Kids", 1000);
    acc.addAccount("Cat", 10);
    expect(acc.totalBalance()).toBe('Total: $' + 1010);
})

test('Test deposit, withdrawal, show balance', () => {
    const acc = new AccountController();
    acc.addAccount("Kids", 1000);
    acc.accArray[0].deposit(15);
    expect(acc.accArray[0].showBalance()).toEqual("Kids: $" + 1015);
    acc.accArray[0].withdraw(100);
    expect(acc.accArray[0].showBalance()).toEqual("Kids: $" + 915);
})

test('Test getting HIGHEST of all accounts works', () => {
    const acc = new AccountController();
    acc.addAccount("Doggy Business", 3000);
    acc.addAccount("Video Games", 2000);
    acc.addAccount("Video Games", 300);
    expect(acc.highestAccount()).toBe("Highest Acc: Doggy Business: $3000");
})

test('Test getting LOWEST of all accounts works', () => {
    const acc = new AccountController();
    acc.addAccount("Doggy Business", 3000);
    acc.addAccount("Video Games", 2000);
    acc.addAccount("Video Games", 300);
    expect(acc.lowestAccount()).toBe("Lowest Acc: Video Games: $300");
})

test('Test that checkName() works', () => {
    const acc = new AccountController();
    acc.addAccount("House", 3000);
    expect(acc.checkName("House")).toBe(true);
})

test('Test that showAll() works', () => {
    const acc = new AccountController();
    acc.addAccount("House", 515);
    acc.addAccount("Kids", 900);
    acc.addAccount("Doggy Business", 3000);
    acc.addAccount("Video Games", 300);
    expect(acc.showAll()).toEqual([" House: $515 ", " Kids: $900 ", " Doggy Business: $3000 ", " Video Games: $300 "]);
})