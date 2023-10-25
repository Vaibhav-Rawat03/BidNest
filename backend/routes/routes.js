import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import multer from 'multer'

const app=express()
const router=express.Router()
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const storage=multer.memoryStorage()     //creates in memory storage engine
const upload = multer({ storage: storage })

app.use(express.json())

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/Signin.html'))
})

router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/Signup.html'))
})

router.get('/about',(req,res) =>{
    res.sendFile(path.join(__dirname,'../../frontend/'))
})

router.get('/homebuyer',(req,res) =>{
    res.sendFile(path.join(__dirname,`../../frontend/homepagebuyers.html`))
})

router.get('/about',(req,res) =>{
    res.sendFile(path.join(__dirname,'../../frontend/About.html'))
})

router.get('/Sell',(req,res) =>{
    res.sendFile(path.join(__dirname,'../../frontend/Sellerlandingpage.html'))
})

router.post('/selldata', upload.single('image') , (req,res) =>{   //need to update
    const selldata=req.body
    const image=req.file.buffer
    console.log(image)
    // console.log(selldata)
    res.send('Data received')
})

router.post('/submit', (req,res) =>{
    const userData=req.body
    console.log(userData)
    // console.log(userData.Name)
    res.send('Data received')
})

router.post('/authenticate', (req,res) =>{
    const authenticate=req.body
    console.log(authenticate)
    res.send('Login Successful')
})

router.get('/search', (req,res) =>{
    const search=decodeURIComponent(req.query.q)
    console.log(search)
    res.send("Looks good")
})

app.listen(4040,()=>{
    console.log("Router is running fine")
})

export default router
