const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')
    /*
    async function probarCrearCliente() {
        await CustomerService.create({
            id: '5050',
            name: 'julian',
            lastname: 'barragan',
            email: 'julian@gmail.com'
        })
    }

    probarCrearCliente().then(console.log('OK'))

async function probarEditar() {
    await CustomerService.edit('50501', {
        lastname: 'tone',
        name: 'cambio',
    })
}

probarEditar().then(console.log('OK')

async function probarEliminar() {
    await CustomerService.delete('10')
}

probarEliminar().then(console.log('OK'))


async function probarBuscar() {
    const customer = await CustomerService.findCustomer('10949777362')
    console.log(customer)
}

probarBuscar().then(console.log('OK'))

async function probar() {
    const result = await AccountService.listAccountByCustomer('1094977736')
    console.log(result)
}

probar().then(console.log('OK'))

async function probar1() {
    const result = await AccountService.create({
        id: '45',
        customerid: '1094977736',
        openedat: new Date(),
        amount: 0,
    })
    console.log(result)
}

probar1().then(console.log('OK'))*/