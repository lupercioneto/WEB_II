// Partial Application

// const log = (level, tag, message) => console.log(`[${level}] <${tag}>: ${message}`)

// log("ERRO", "<API>", "Erro ao integrar API de pagamento") 

const log2 = (level) => (tag, message) => console.log(`[${level}] <${tag}>: ${message}`)

const logInfo = log("INFO")
const logError = log("ERRO")
const logWarn = log("WARNING")

logInfo("BD", "Conexão bem sucedida")
logError("API", "Erro de integração com API de fretes")
logWarn("LIB", "Algumas dependências estão desatualizadas")

// Aplicando a função interna diretamente 
log2("TESTE")("PERFORMANCE", "Teste finalizado com sucesso")