import { Account, AccountController } from './functions'

//-------- ACCOUNT CLASS ------------------------------

test('Test getDefaults', () => {
    const acctCtrl = new AccountController()
    const a1 = acctCtrl.getDefaults()

    expect(a1.accountName).toBe('')
    expect(a1.balance).toBe('')
    expect(a1.key).toBe('')
})

test('Test updating default values', () => {
    const acctCtrl = new AccountController()
    Account.lastKey = 0

    let a1, a2;

    a1 = acctCtrl.getDefaults()
    a1.accountName = 'House'

    acctCtrl.addAccount(a1)

    //Get account with key of 1
    a2 = acctCtrl.getAccountByKey('1')
    expect(a2.accountName).toBe('House')

    a2.accountName = 'Hats'
    expect(a2.accountName).toBe('Hats')
})

test('Test Account Class constructor', () => {
    const account1 = new Account({ accountName: 'checkingAcc', balance: 100, key: 0 })
    expect(account1.accountName).toBe('checkingAcc');
    expect(account1.balance).toBe(100);
})

test('Test Account Class deposit/withdraw/show balance methods', () => {
    //Expecting empty default values 
    const defaultAcc = new Account({})
    expect(defaultAcc).toEqual({ accountName: '', balance: '', key: '' })

    //Creating an Account
    const account1 = new Account({ accountName: 'House', balance: 100, key: 0 })
    account1.deposit(10);
    expect(account1.balance).toBe(110);
    account1.withdraw(30);
    expect(account1.balance).toBe(80);
    expect(account1.key).toBe(0);
    expect(account1.showBalance()).toBe('House: $80');
    expect(account1.showName()).toBe('House')
})

//-------- ACCOUNT CONTROLLER CLASS -------------------
test('Test keys generation when we create accounts', () => {
    const accCtrl = new AccountController();

    accCtrl.addAccount({ accountName: 'Cats', balance: 25 })
    accCtrl.addAccount({ accountName: 'Dogs', balance: 10 })

    expect(Object.values(accCtrl.accounts)[0]).toEqual({ accountName: 'Cats', balance: 25, key: 1 })
    expect(accCtrl.getAccountByKey(1)).toEqual({ accountName: 'Cats', balance: 25, key: 1 })
    expect((accCtrl.accounts[1]).key).toBe(1)
})

test('Test checking name if it already exists', () => {
    const accCtrl = new AccountController();

    accCtrl.addAccount({ accountName: 'Party', balance: 100 })
    accCtrl.addAccount({ accountName: 'Candy', balance: 25 })
    accCtrl.addAccount({ accountName: 'Juice', balance: 10 })

    expect(accCtrl.checkLength()).toBe(3)
    expect(accCtrl.checkName('Party')).toBe(true)
})

test('Test delete/rename an Account works', () => {
    const acc = new AccountController();
    acc.addAccount({ accountName: 'Jiggly Puff', balance: 10 });
    acc.addAccount({ accountName: 'Cream Puff', balance: 10 });
    acc.addAccount({ accountName: 'Jello', balance: 10 });
    acc.removeAccount('Jiggly Puff')
    expect(acc.checkLength()).toBe(2)
    expect(acc.checkName('Cream Puff')).toBe(true)
    expect(acc.checkName('Jiggly Puff')).toBe(false)

    expect(acc.getAccountNameByKey(2)).toBe('Cream Puff')
    // acc.getAccountNameByKey(2)
    // expect(acc.selectedName).toBe('Cream Puff')

    acc.renameAccount('Cream Puff', 'Ghosts')
    expect(acc.accounts[2].accountName).toBe('Ghosts')
    expect(acc.getAccountNameByKey(2)).toBe('Ghosts')

    // acc.getAccountNameByKey(2)
    // expect(acc.selectedName).toBe('Ghosts')
    // acc.removeAccount(acc.selectedName)

    // expect(acc.checkLength()).toBe(1)
    // expect(acc.accounts).toEqual({ "3": { "accountName": "Jello", "balance": 10, "key": 3 } })
    // console.log(acc.accounts)
})

test('Test getting total of all accounts', () => {
    const acc = new AccountController();
    acc.addAccount({ accountName: 'Jiggly Puff', balance: 10 });
    acc.addAccount({ accountName: 'Cream Puff', balance: 10 });
    acc.addAccount({ accountName: 'Yeet', balance: 15 });
    expect(acc.totalBalance()).toBe('$' + 35);
})

test('Test getting HIGHEST of all accounts works', () => {
    const acc = new AccountController();
    acc.addAccount({ accountName: 'I Love Bunnies', balance: 1000 });
    acc.addAccount({ accountName: 'Curry Fund', balance: 50 });
    acc.addAccount({ accountName: 'Cookies', balance: 5 });
    expect(acc.highestAccount()).toBe("I Love Bunnies - $1000");
})

test('Test getting LOWEST of all accounts works', () => {
    const acc = new AccountController();
    acc.addAccount({ accountName: 'Pottery Lessons', balance: 50 });
    acc.addAccount({ accountName: 'Chicken Nuggets', balance: 10 });
    acc.addAccount({ accountName: 'Candy', balance: 5 });
    expect(acc.lowestAccount()).toBe('Candy - $5');
})

test('Test that showAll() works', () => {
    const acc = new AccountController();
    acc.addAccount({ accountName: 'Sushi Day', balance: 300 });
    acc.addAccount({ accountName: 'Camping', balance: 50 });
    acc.addAccount({ accountName: 'Jello', balance: 15 });
    expect(acc.showAll()).toContain('Sushi Day - $300\nCamping - $50\nJello - $15');
})