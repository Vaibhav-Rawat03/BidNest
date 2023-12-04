import express from 'express'
import session from 'express-session'
import path from 'path'
import {fileURLToPath} from 'url'
import multer from 'multer'
import mongoose from 'mongoose'
import {register, sell, ques} from './schema.js'
import bcrypt from 'bcrypt'

const app=express()
const router=express.Router()

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

// const storage=multer.diskStorage({                                              //to save file in the a directory
//     destination:(req,file,cb)=>{
//         return cb(null , "./sellerdata")
//     },
    
//     filename:(req,file,cb)=>{
//         return cb(null , `${Date.now()}-${file.originalname}`)
//     }

// })

const storage=multer.memoryStorage();                                             //to get the buffer file of image for db storage
const upload=multer({storage:storage})
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
app.use(express.urlencoded({extended:false}))


mongoose.connect("mongodb://127.0.0.1:27017/Minordb" ).then(() =>{console.log("connected to database successfully")}).catch((error)=> {console.log("error in connecting to database" , error)})

app.use(express.json())

router.get('/',(req,res)=>{                                                           
    res.sendFile(path.join(__dirname,'../../frontend/HomePage.html'))              //homepage
})

router.get('/signin' ,(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/Signin.html'))                  //loginpage
})
router.get('/signup',(req,res)=>{                                                     //signuppage
    res.sendFile(path.join(__dirname,'../../frontend/Signup.html'))
})

router.get('/homebuyer',(req,res) =>{                                                 //homepage of buyer
    res.sendFile(path.join(__dirname,`../../frontend/homepagebuyers.html`))
})

router.get('/about',(req,res) =>{                                                     //aboutpage
    res.sendFile(path.join(__dirname,'../../frontend/About.html'))
})
 
router.get('/sell',(req,res) =>{                                                      //homepage of seller
    res.sendFile(path.join(__dirname,'../../frontend/Sellerlandingpage.html'))
})

router.post('/selldata', upload.single('image'), async(req,res) =>{                        //fetch req from seller
  
// console.log(req.file)
// console.log(req.body)
// console.log(req.session.email.email)
  const sellerdata= req.body

  const saveitem = new sell({
    email:req.session.email.email,
    image:req.file.buffer,
    productname:sellerdata.name,
    description:sellerdata.description,
    hours:sellerdata.hours,
    minutes:sellerdata.minutes,
    minprice:sellerdata.price
  })

  await saveitem.save().then(()=>(console.log('Item registered'))).catch((error)=>(console.log('error registering item' , error)))

  return res.status(200).send("Successfully got the data")
})

router.post('/submit', async(req,res) =>{                                             //fetch of signup page
    const userData=req.body
    console.log(userData)
    const verifyemail=userData.email

    const existing_user=await register.findOne({email:verifyemail})

    if(existing_user){
        console.log('email already exists')
        res.send("Email already exists, Signin")
        return
    }

    const newuserdata=new register({
        name:userData.name,
        email:userData.email,
        password:userData.password
    })

    await newuserdata.save().then(() => console.log('User registered')).catch(() => console.log("error registering"))

    res.send('Data received and user registered')
})

router.post('/authenticatebuyer', async(req,res) =>{                                //fetch of signin page
    const authenticate=req.body
    // console.log(authenticate)

    const check_email=authenticate.email
    const verify_password=authenticate.password

    const verify_email = await register.findOne({email:check_email})


    if(!verify_email){
        res.status(400).send("Wrong E-mail or Password")
        return
    }
    else{

    // const check_password=await bcrypt.compare(verify_password, verify_email.password)

   if(verify_password === verify_email.password){
    // res.status=200

    req.session.email=verify_email
    
    res.status(200).send('Successful Buyer')
    return  
   }
   else{
    console.log("Wrong e-mail or password")
    res.status(400).send("Wrong e-mail or password")
    return 
   }
}
})

router.post('/authenticateseller', async(req,res) =>{                                      //fetch of signin page
    const authenticate=req.body
    // console.log(authenticate)
    
    const check_email=authenticate.email
    const verify_password=authenticate.password
    
    const verify_email = await register.findOne({email:check_email})

    if(!verify_email){
        res.status(400).send("Wrong E-mail or Password")
        return
    }
    else{

    // const check_password=await bcrypt.compare(verify_password, verify_email.password)

    // console.log(check_password)

   if(verify_password === verify_email.password){

    req.session.email=verify_email

    res.status(200).send('Successful Seller')
    return 
   }
   else{
    console.log("Wrong e-mail or password")
    res.status(400).send("Wrong e-mail or password")
    return
   }
}
})
router.post('/ques', async(req,res)=>{
    const saveques = new ques({
        email:req.session.email.email,
        ques:req.body.ques
    })
    await saveques.save().then(() => console.log('Question registered')).catch(() => console.log("Not registered Question"))
    res.send("Ques saved")
})

router.post('/search1', (req,res) =>{                                                       //post req of homepagebuyers page
    const search=req.body.search
    req.session.searchdata=search
    res.send("Looks good")
})

router.get('/search', async(req,res) =>{                                                      //new search page needs to be added here
    res.sendFile(path.join(__dirname,'../../frontend/search.html')) 
    // const Product=await sell.find( )
    // console.log(Product)
    // res.json(Product)
    
})

// router.get('/getitems', async(req,res)=>{                                                     // send data to frontend
//     const Product=await sell.find({ fieldName: req.session.searchdata })
//     console.log(Product)
//     res.json(Product)
// })
router.get('/getitems', async (req, res) => {
    try {
      // Fetch data from the database
      const products = await sell.find();
  
      // Convert buffer to base64 for each product and include all fields in the response
      const productsWithBase64 = products.map(product => {
        const base64Image = Buffer.from(product.image.buffer, 'binary').toString('base64');
        return {
          email: product.email,
          productname: product.productname,
          description: product.description,
          hours: product.hours,
          minutes: product.minutes,
          minprice: product.minprice,
          image: base64Image,
        };
      });
      console.log(productsWithBase64)
      res.json(productsWithBase64);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).send('Internal Server Error');
    }
  });



export default router
