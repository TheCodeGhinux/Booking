import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requires: true,
    },
    price: {
      type: Number,
      requires: true,
    },
    maxPeople: {
      type: Number,
      requires: true,
    },
    desc: {
      type: String,
      requires: true,
    },
    roomNumber: [{ 
      number: Number, 
      unavailableDates: {
        type: [Date]
      }
    }],
  },
  { timestamps: true }
);

export default mongoose.model('Room', roomSchema);
