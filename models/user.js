import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const user = new Schema({
  firstname: {type: String, required: [true, 'Nombre obligatorio']},
  lastname: {type: String, required: [true, 'Apellido obligatorio']},
  account: String,
  email: String,
  addresses: {
      label: {type: String},
      street: {type: String},
      city: {type: String},
      state: {type: String},
      zip: {type: String},
      country: {type: String},
      googleMapsShortCode:{type: String},
  }, 
  date:{type: Date, default: Date.now},
  activo: {type: Boolean, default: true}
});

// Convertir a modelo
const User = mongoose.model('User', user);

export default User;