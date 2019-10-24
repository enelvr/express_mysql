import { Schema, model, Document} from 'mongoose';

const schema = new Schema({
  name: String,
  phone: Number,
  email: String,
  description: String
});

interface IQuote extends Document {
  id?: string;
  name: string;
  phone: number;
  email: string;
  description: string;
}

export default model<IQuote>('Quote', schema);