// here we defines all the routes that are related to the admin and API's here
import express from 'express'

const router = express.Router()

router.post('/adminlogin',(req,res)=>{
    console.log(req.body)
})


export  {router as adminRouter}