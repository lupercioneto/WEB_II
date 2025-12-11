// Currying 
const log = (level) => (tag) => (message) => console.log(`[${level}] <${tag}>: ${message}`)

const logErro = log("ERRO")
const logServerError = logErro("SERVIDOR");
const logHttpErrorConnection = logErro("HTPP CONNECTION")