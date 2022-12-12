import express, { Express, query, Request, Response } from 'express';

const server: Express = express();

server.listen(3000, () => {
    console.log('Server OK')
})

//================================ ATIVIDADE 2 ====================================

server.get('/calculadora', (req: Request, res: Response) => {
    const { operacao , valorA, valorB } = req.query
    
    switch (operacao) {
        case "somar":
            res.send(`Resultado: ${Number(valorA) + Number(valorB)}`)
            break;
        case "subtrair":
            res.send(`Resultado: ${Number(valorA) - Number(valorB)}`) 
            break;
        case "multiplicar":
            res.send(`Resultado: ${Number(valorA) * Number(valorB)}`)
            break;
        case "dividir":
            res.send(`Resultado: ${Number(valorA) / Number(valorB)}`)
            break;
    
        default:
            break;
    }
})

//================================ ATIVIDADE 3 ====================================

let contador: number = 0

server.get('/contador', (req: Request, res: Response) => {
    if(contador === 10) {
        res.send(`Chegou à 10`)
        console.log(`Chegou à 10`)
        contador = 0
        return
    }
    res.send(`Contador: ${contador}`)
    console.log(`Contador: ${contador}`)
    contador ++
})


//================================ ATIVIDADE 4 ====================================

server.get('/numeral', (req: Request, res: Response) => {
    const { numero, operacao } = req.query
    
    if(operacao === 'anterior') {
        res.send(`${Number(numero) - 1}`)
        return
    }
    if(operacao === 'proximo') {
        res.send(`${Number(numero) + 1}`)
        return
    }
    
})


//================================ ATIVIDADE 5 ====================================

server.get('/inverter-string', (req: Request, res: Response) => {
    const { valor } = req.query

    if(valor){
        let invertido = JSON.stringify(valor!).split('').reverse()
        invertido = invertido.splice(1, invertido.length-2)
        let resposta = invertido.reduce(((n, m) => n+m))
        res.send(resposta)
        console.log(resposta)
    }

    res.send('não deu')
})

//================================ ATIVIDADE 6 ====================================

let arrayFinal: string[] = []

server.get('/remover-vogal', (req: Request, res: Response) => {
    const { valor } = req.query

    let meuArray = JSON.stringify(valor!).split('')
    meuArray = meuArray.splice(1, meuArray.length-2)
    
    let semVogal = meuArray.filter(letra => !(letra==="a" ||letra==="e" || letra==="i" || letra==="o"|| letra==="u"))
    
    let resposta = semVogal.reduce(((n, m) => n+m))

    arrayFinal.push(resposta)

    console.log(arrayFinal)
    res.send(arrayFinal)
})



