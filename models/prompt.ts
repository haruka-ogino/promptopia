import { Model, Schema, model, models } from 'mongoose'

export interface IPrompt extends Document {
  creator: Schema.Types.ObjectId
  prompt: string
  tag: string
}

export interface Post extends IPrompt {
  _id: {}
  __v: number
}

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required'],
  },
})

const Prompt: Model<IPrompt> =
  models.Prompt || model<IPrompt>('Prompt', PromptSchema)

export default Prompt
