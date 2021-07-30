import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pack = new Schema({
  account: {type: String, required: [true, 'Cuenta requerida']},
  itemStatus: {type:String},
  barcode: {type:String},
  trackingNumber:{type:String},
  sender:{type:String},
  weight:{type:String},
  description:{type:String},
  amount:{type:String},
  packId: {type: String, required: [true, 'Cuenta requerida']},
  date:{type: Date, default: Date.now},
});

// Convertir a modelo
const Pack = mongoose.model('Pack', pack);

export default Pack;