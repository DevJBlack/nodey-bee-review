const express = require("express")
const app = express();

const port = 4040

app.use(express.json())

const dummyData = ["Norm" , "Christian" , "Tyler" , "Devin" , "Dillon" , "Aster"]

app.get('/api/dummydata' , (req, res) =>{
  res.status(200).send(dummyData)
})

app.delete('/api/dummydata/:index' , function(req , res){
 dummyData.splice(req.params.index , 1 )
 res.status(201).send(dummyData)
})

app.put('/api/dummydata/:index' , (req, res) => {
let {index} = req.params
dummyData.splice(index , 1 , req.body.name)
res.status(200).send(dummyData)
})



app.listen(port, () => {
  console.log("Server active on port " + port )
})