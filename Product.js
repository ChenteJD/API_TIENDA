import {model,Schema} from 'mongoose';

const productSchema=new Schema({
    barcode:{
        type:String,
        required:true,
        unique:true
    },
    
    description:String,
    brand:String,
    category:String,
    cost:Number,
    price:Number,
    stock:Number,
    expiredDate:String
},
{
  versionKey:false,
  timestamps:true
});

export default model('Product',productSchema);

