const dotenv = require("dotenv")
dotenv.config()
 const mongoose = require("mongoose")

const {DB_URI, PORT} = process.env

const app = require("./app");



(async() => {
   await mongoose.connect(DB_URI)
   console.log("Date base conection succsses")
   
   app.listen(PORT, () => {
      console.log("Server running on port 3000");
   });
})()