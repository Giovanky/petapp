import { model, Schema, Document } from 'mongoose'

export interface ICategories extends Document {
    name: string
    description: string
    state: boolean
}

const categorySchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true,
        unique: true
    },
    description: {
        type: String,
        maxlength: 255
    },
    state: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<ICategories>('Categories', categorySchema)