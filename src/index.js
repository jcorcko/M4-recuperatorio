import express from 'express'

const router = express.Router()

const app = express()

app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

app.post('/api/multiplicacion/:multiplicador?', function(req,res) { 
    let multiplicador = req.params.multiplicador || 1
    let arreglo = req.body || [1,3,6,4,2]
    let multiplication = arreglo.map(function(element) { return element * multiplicador; })
    console.log(multiplication)
    res.json(
        {
            arreglo: arreglo,
            multiplication: multiplication
        }
    );  
  })

app.listen(3000)
console.log('Server is listening on port, ', 3000)