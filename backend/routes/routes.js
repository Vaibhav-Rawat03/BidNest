import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app=express()
const router=express.Router()
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/Signin.html'))
})

router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/Signup.html'))
})

app.listen(4040,()=>{
    console.log("Router is running fine")
})

export default router
