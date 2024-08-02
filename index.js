

const express=require('express')
const app = express()


const PORT =process.env.PORT||3000



app.use((req,res,next)=>{
    console.log('Hi , I am middleware!');
    next()
})
app.use((req,res,next)=>{
    console.log('Hi , I am middleware2!');
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })