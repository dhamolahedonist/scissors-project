import mongoose from "mongoose"
import shortId from 'shortid'
shortId.generate()
const shortUrlSchema = new mongoose.Schema({
    full:{
        type: String,
        required: true
    },
     short:{
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks:{
        type: Number,
        required: true,
        default: 0
    },
})

const ShortUrl  = mongoose.model('ShortUrl', shortUrlSchema)
export default ShortUrl