const mongoose = require("mongoose")
require("dotenv").config()

exports.connect = () => {
  mongoose
    .connect(
      "mongodb+srv://tusharkanti29701:Tushar29701@studynotion.hugfyj4.mongodb.net/?retryWrites=true&w=majority&appName=StudyNotion"
    )
    .then(console.log(`DB Connection Success`))
    .catch((err) => {
      console.log(`DB Connection Failed`)
      console.log(err)
      process.exit(1)
    })
}
