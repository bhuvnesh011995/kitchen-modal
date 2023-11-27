const serverConfig = require("./config/server.config")

require("./app").app.listen(serverConfig.PORT,()=>{
    console.info(`server started at ${serverConfig.PORT}`)
})