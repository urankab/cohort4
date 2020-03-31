import { Account, AccountController } from "./account.js";

//-------- ACCOUNT CLASS ------------------------------

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
    expect(account1.showBalance()).toBe("checkingAcc: $5");
})

//-------- ACCOUNT CONTROLLER CLASS ------------------------------

const accController = new AccountController();

test('Test AccountController constructor works', () => {
    const acc = new AccountController();
    expect(acc.accArray).toEqual([]);
})

test('Test that adding an account works', () => {
    accController.addAccount("Vacation", 100);
    expect(accController.accArray[0].accountName).toBe("Vacation");
    expect(accController.accArray[0].balance).toBe(100);
    accController.addAccount("Car", 500);
    expect(accController.accArray[1]).toEqual({ "accountName": "Car", "balance": 500 });
    expect(accController.accArray).toEqual([{ accountName: "Vacation", balance: 100 }, { accountName: 'Car', balance: 500 }])
})


test('Test that deleting an account works', () => {
    accController.removeAccount("Vacation"); //Remove vacation fund account
    //console.log(accController.accArray);
    expect(accController.accArray).not.toContain({ accountName: "Vacation", balance: 100 }); //Check that Vacation is not in there
    expect(accController.accArray[0].accountName).toContain('Car'); //Check Car account is there
    expect(accController.accArray.length).toEqual(1);
})

test('Test that renaming an account works', () => {
    accController.renameAccount("Car", "House");
    //console.log(accController.accArray);
    expect(accController.accArray[0].accountName).toEqual("House")
})

test('Test getting total of all acc balance works', () => {
    accController.addAccount("Kids", 1000);
    expect(accController.accArray).toEqual +
        ([{ accountName: "House", balance: 500 }, { accountName: 'Kids', balance: 1000 }])
        //We have House: $500 and Kids: $1000 so far
    expect(accController.totalBalance()).toBe('Total: $' + 1500);
})

test('Test deposit, withdrawal, showBalance', () => {
    accController.accArray[0].deposit(15);
    expect(accController.accArray[0].showBalance()).toEqual("House: $" + 515);
    accController.accArray[1].withdraw(100);
    expect(accController.accArray[1].showBalance()).toEqual("Kids: $" + 900);
})

test('Test getting HIGHEST of all accounts works', () => {
    accController.addAccount("Doggy Business", 3000);
    accController.addAccount("Video Games", 300);
    //We have House, Kids, Doggy Business, Video Games accounts so far
    expect(accController.highestAccount()).toBe("Highest Acc: Doggy Business: $3000");
})

test('Test getting LOWEST of all accounts works', () => {
    expect(accController.lowestAccount()).toBe("Lowest Acc: Video Games: $300");
})

test('Test showAll', () => {
    expect(accController.showAll()).toEqual(' House,515  Kids,900  Doggy Business,3000  Video Games,300 ');
})

test('Test that checkName() works', () => {
    expect(accController.checkName("House")).toBe(true);
})

import { Account, AccountController } from "./account.js";