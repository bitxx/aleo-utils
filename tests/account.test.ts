import {jest} from '@jest/globals'
import { Account, Address, PrivateKey, RecordCiphertext, ViewKey } from '@aleohq/sdk'


// node --no-warnings --experimental-vm-modules ./node_modules/jest/bin/jest.js --config jest-config.json --detectOpenHandles
describe('Account', () => {
    describe('constructors', () => {
        test('creates a new account if no parameters are passed', () => {
            // Generate account from rng
            const account = new Account();

            // Test object member type consistency
            expect(account._privateKey).toBeInstanceOf(PrivateKey);
            expect(account._viewKey).toBeInstanceOf(ViewKey);
            expect(account._address).toBeInstanceOf(Address);
            // Test convenience method type consistency
            expect(account.privateKey()).toBeInstanceOf(PrivateKey);
            expect(account.viewKey()).toBeInstanceOf(ViewKey);
            expect(account.address()).toBeInstanceOf(Address);
        });
    });
});
