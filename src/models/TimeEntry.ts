import mongoose, { Schema, Document } from 'mongoose';

export interface ITimeEntry extends Document {
  whatYouDid: string;
  startTime: string; // e.g. "14:00"
  endTime: string;   // e.g. "15:30"
  category: string;
  enjoyed: boolean;
  note?: string;
  date: Date;
}

const TimeEntrySchema = new Schema<ITimeEntry>({
  whatYouDid: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  category: { type: String, required: true },
  enjoyed: { type: Boolean, default: false },
  note: { type: String },
  date: { type: Date, default: Date.now }
});

export default mongoose.models.TimeEntry || mongoose.model<ITimeEntry>('TimeEntry', TimeEntrySchema);
