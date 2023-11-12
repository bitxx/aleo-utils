import {Account as AleoAccount, Signature} from '@aleohq/sdk';


// privateKey:  APrivateKey1zkpEFHotKw8L8eFwVgSEzCAAragxZ3pejRGeUb8R9jVpqJX
// viewKey:  AViewKey1d4N8Nz8mKJKG8b6orn2NLyJLNQRotRwCweBuAxnTK3XW
// address:  aleo1fma3l3ygpmqf7629c5rg0hdd0j20g7lhfvav9qyrlsj6mqmr9sys0h2qup
export class Account {
    private aleoAccount: AleoAccount

    constructor();
    constructor(privateKey: string);

    constructor(privateKey?: string) {
        this.aleoAccount = new AleoAccount({privateKey: privateKey})
    }

    decryptRecord(ciphertext: string): string {
        return this.aleoAccount.decryptRecord(ciphertext)
    }

    sign(msg: number[]): Signature {
        return this.aleoAccount.sign(Uint8Array.from(msg))
    }

    verify(msg: number[], signature: Signature): boolean {
        return this.aleoAccount.verify(Uint8Array.from(msg), signature)
    }

    get privateKey(): string {
        return this.aleoAccount.privateKey().to_string()
    }

    get address(): string {
        return this.aleoAccount.address().to_string()
    }

    get viewKey(): string {
        return this.aleoAccount.viewKey().to_string()
    }
}