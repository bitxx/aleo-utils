import {Account as AleoAccount, PrivateKey} from '@aleohq/sdk';


// privateKey:  APrivateKey1zkpEFHotKw8L8eFwVgSEzCAAragxZ3pejRGeUb8R9jVpqJX
// viewKey:  AViewKey1d4N8Nz8mKJKG8b6orn2NLyJLNQRotRwCweBuAxnTK3XW
// address:  aleo1fma3l3ygpmqf7629c5rg0hdd0j20g7lhfvav9qyrlsj6mqmr9sys0h2qup
export class Account {
    privateKey: string
    viewKey: string
    address: string

    constructor();
    constructor(privateKey: string);

    constructor(privateKey?: string) {
        let address: string = ''
        let viewKey: string = ''
        if (privateKey !== undefined) {
            let pk = PrivateKey.from_string(privateKey)
            address = pk.to_address().to_string()
            viewKey = pk.to_view_key().to_string()
        } else {
            const aleoAccount = new AleoAccount();
            privateKey = aleoAccount.privateKey().to_string();
            viewKey = aleoAccount.viewKey().to_string();
            address = aleoAccount.address().to_string();
        }
        this.privateKey = privateKey
        this.viewKey = viewKey
        this.address = address
    }
}