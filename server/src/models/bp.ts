import { IBp } from '@/interfaces/IBp';
import mongoose from 'mongoose';

const Bp = new mongoose.Schema(
    {
        diastolic: Number,
        systolic: Number,
        pulse: Number,
        date: Date,
        userId: String,
    },
    { timestamps: true },
);

export default mongoose.model<IBp & mongoose.Document>("Bp", Bp)