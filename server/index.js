import express from 'epress'
import dotenv from 'dotenv'


const app = express()
dotenv.config()

app.listen(process.env.PORT, () => {



    console.log("Server is running on port " & PORT)
})