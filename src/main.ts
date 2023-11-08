import {Account} from './model/account'

const account = new Account();
console.log('privateKey: ', account.privateKey)
console.log('viewKey: ', account.viewKey)
console.log('address: ', account.address)

try {
    const account2 = new Account(account.privateKey);
    console.log('privateKey2: ', account2.privateKey)
    console.log('viewKey2: ', account2.viewKey)
    console.log('address2: ', account2.address)
} catch (e) {
    console.log(e)
}

