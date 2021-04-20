const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.create = (accounts) => {
    return DB('accounts').insert(accounts)
}

AccountRepository.listAccountsByCustomer = (customerId) => {
    return DB('accounts').where({ customerid: customerId }).select('*')
}

AccountRepository.delete = (customerId) => {
    return DB('accounts').where({ id: customerId }).del()
}

AccountRepository.findById = (idAccounts) => {
    return DB('accounts').where({ id: idAccounts }).select('*')
}