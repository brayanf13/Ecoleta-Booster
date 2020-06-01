import express from 'express';

const app = express();

app.get('/users', (require, response) => {
    console.log('Listando usuários')

    response.json({
        name: "Brayan",
        idade: 20,
        trabalho: "Developer Web and Mobile at Exception Jr && LCC"
    })
})

app.listen(3333);