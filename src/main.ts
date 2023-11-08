import { Account } from '@aleohq/sdk';

const account = new Account();

// Individual keys can be then be accessed through the following methods
const privateKey = account.privateKey();
const viewKey = account.viewKey();
const address = account.address();
console.log('privateKey: ', privateKey.to_string())
console.log('viewKey: ', viewKey.to_string())
console.log('address: ', address.to_string())
