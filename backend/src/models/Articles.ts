import { model, Document, Schema } from 'mongoose'

export interface IArticles extends Document {
    category: Schema.Types.ObjectId
    name: string
    description: string
    salePrice: number
    stock: number
    state: boolean
}

const articleSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    },
    name: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    description: {
        type: String,
        maxlength: 255
    },
    salePrice: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    state: {
        type: Boolean,
        default: 1
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<IArticles>('Articles', articleSchema)