const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology:true,
            useNewUrlParser: true 
        })

        console.log(" DB is connected")

    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB