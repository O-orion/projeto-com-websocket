import express from 'express';

const app = express();
const PORT = process.env.PORT || 8800

const caminhoAtual = url.fileURLToPath(import.meta.url)
const diretorioPublico = path.join(caminhoAtual, '../..', 'public')

app.use(express.static(diretorioPublico))

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})
