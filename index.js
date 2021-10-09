const routeHandlers = require('./src/routehandler')

const App = () => {
    const definedServer = {}
    return {
        startServer: (handlers)=> {
            handlers(this)
        }
    }
}

App().startServer(routeHandlers);