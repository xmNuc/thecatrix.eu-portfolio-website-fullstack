import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  creator: String,
  title: String,
  titlePl: String,
  message: String,
  messagePl: String,
  info: String,
  infoPl: String,
  builded: String,
  website: String,
  github: String,
  tags: [String],
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
