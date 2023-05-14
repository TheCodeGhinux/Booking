import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requires: true,
    unique: true,
  },
  email: {
    type: String,
    requires: true,
    unique: true,
  },
  password: {
    type: String,
    requires: true, 
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
},
{ timestamps: true }
);

export default mongoose.model('User', userSchema);