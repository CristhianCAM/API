const AccountController = module.exports
const AccountService = require('../services/AccountService');

AccountController.listAccountsByCustomer = async(req, res, next) => {
    const params = req.params;

    try {
        const response = await AccountService.listAccountByCustomer(params.id)
        res.send(response)
    } catch (error) {
        console.log({ error });
        res.status(500).send({ error: error.message }).end();
        next(error);
    }
}

AccountController.createAccount = async(req, res, next) => {
    const body = req.body;

    try {
        await AccountService.create(body)
        res.send({ message: 'account created' })
    } catch (error) {
        console.log({ error });
        res.status(500).send({ error: error.message }).end();
        next(error);
    }
}

AccountController.delete = async(req, res, next) => {
    const params = req.params;

    try {
        await AccountService.cancelAccount(params.id)

        res.send({ message: 'account deleted' })
    } catch (error) {
        console.log({ error });

        res.status(500).send({ error: error.message }).end();
        next(error);
    }
}