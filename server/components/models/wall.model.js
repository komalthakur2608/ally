
import mongoose, {Schema} from 'mongoose';

var WallSchema = new Schema({
  name: String,
  owner: {
    owner_id : String,
    owner_type: String
  },
  history: [{
    employee_name: String,
    employee_email: String,
    message: String,
    time: {
      type: Date,
      default: Date.now
    },
    comments: [{
      name: String,
      email: String,
      comment: String,
      comment_time: {
        type: Date,
        default: Date.now
      }
    }]
  }]
});

export default mongoose.model('Wall', WallSchema);
