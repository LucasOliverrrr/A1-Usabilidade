const express = require("express")
const app     = express()
const fs      = require("fs") //fs = file system, precisa importar pois trabalha com arquivo
const porta   = 3001

app.get("/", (req, res) =>{ //rota principais ofertas (home)
    fs.readFile("home.html", (err, arquivo) =>{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(arquivo)
        return res.end() //retorno
    })
})

app.get("/bebidas", (req, res) =>{ //rota
    fs.readFile("bebidas.html", (err, arquivo) =>{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(arquivo)
        return res.end() //retorno
    })
})

app.get("/padaria", (req, res) =>{ //rota
    fs.readFile("padaria.html", (err, arquivo) =>{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(arquivo)
        return res.end() //retorno
    })
})

app.get("/acougue", (req, res) =>{ //rota
    fs.readFile("acougue.html", (err, arquivo) =>{ //trocar a rota
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(arquivo)
        return res.end() //retorno
    })
})

app.listen(porta, () => {console.log("Servidor Rodando")})