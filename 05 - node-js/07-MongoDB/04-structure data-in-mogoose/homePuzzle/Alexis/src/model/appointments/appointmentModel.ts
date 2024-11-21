import { Schema, model, Document } from 'mongoose';

interface Appointment extends Document {
    name: string;
    price: number;
    description: string;
    category: string;
    inStock: boolean;
clientId: string;
serviceProviderId:string;
startTime:Date;
endTime:Date;
status: boolean;
serviceId:string;
rating:number;
reviewId:string;
}

const appointmentSchema = new Schema<Appointment>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true }
});

const Appointment = model<Appointment>('Appointment', appointmentSchema);

export default Appointment;