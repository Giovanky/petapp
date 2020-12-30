import { Schema , model, Document} from 'mongoose'
export interface ISales extends Document {
    user: Schema.Types.ObjectId
    typeVoucher: string
    serieVoucher: string
    numVoucher: string
    tax: number
    total: number
    state: boolean
    details: Array<object>
}
const saleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    typeVoucher: {
        type: String,
        maxlength: 20,
        required: true
    },
    serieVoucher: {
        type: String,
        maxlength: 10,
        required: true
    },
    numVoucher: {
        type: String,
        maxlength: 10,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    state: {
        type: Boolean,
        default: 1
    },
    details: [{
        _id:{
            type: String,
            required: true
        },
        article: {
            type: String,
            required: true            
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: true
        }
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default model<ISales>('Sales', saleSchema)