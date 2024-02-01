const express = require('express');
const app = express();
const port = 2024;

let bancosAlimentos = [
    {Nome : "Banco de Alimentos São Paulo"},
    {Nome : "Banco de Alimentos Rio de Janeiro"},
    {Nome : "Banco de Alimentos Salvador"},
]

let abrigos = [
    {Nome : "Abrigo Esperança"},
    {Nome : "Casa de Acolhida"},
    {Nome : "Lar Solidário"},
]

let servicosSaudeMental = [
    {Nome : "Centro de Atenção Psicossocial"},
    {Nome : "Núcleo de Apoio à Saúde da Família"},
    {Nome : "Serviço Residencial Terapêutico"},
]

app.get('/', (req, res) => {
    res.send("Por favor, escolha entre os caminhos: /bancos-alimentos /abrigos ou /saude-mental")
})

app.get('/bancos-alimentos', (req, res) => {
    res.json({bancosAlimentos})
})

app.get('/abrigos', (req, res) => {
    res.json({abrigos})
})

app.get('/saude-mental', (req, res) => {
    res.json({servicosSaudeMental})
})

app.listen(port, () => {
console.log('API de Assistência Social rodando na porta 2024!');
})