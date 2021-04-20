const AccountService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')

AccountService.listAccountByCustomer = async(customerId) => {
    const customerFound = await CustomerRepository.findById(customerId)

    if (customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    return AccountRepository.listAccountsByCustomer(customerId)
}

AccountService.create = async(account) => {
    const customerFound = await CustomerRepository.findById(account.customerid)

    if (customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    const accountByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    if (accountByCustomer.length >= 3) {
        throw new Error('no more than 3 accounts...')
    }

    account.openedat = new Date();
    account.amount = 0;
    await AccountRepository.create(account)
}

AccountService.cancelAccount = async(idAccount) => {
    const Accounts = await AccountRepository.findById(idAccount)


    if (Accounts.length === 0) {
        throw new Error('account number does not exist')
    }

    if (Accounts.amount > 0) {
        throw new Error('the amount still has amount available')
    }

    await AccountRepository.delete(idAccount)
}