const userRouter = require('./user')
const cardRouter = require('./card')
const eventRouter = require('./event')
const { notFound, errHandler } = require('../middlewares/errHandler')

const initRoutes = (app) => {
    app.use('/api/user', userRouter)
    app.use('/api/card', cardRouter)
    app.use('/api/event', eventRouter)

    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRoutes