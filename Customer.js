import {model,Schema} from 'mongoose';

const customerSchema=new Schema({
     customer_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    lastname:String,
    address:String,
    phone_number:Number,
    birthday:String,
},
{
  versionKey:false,
  timestamps:true
});

export default model('Customer',customerSchema);