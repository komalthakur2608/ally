import mongoose, {Schema} from 'mongoose';
import Organisation from '../../api/organisation/organisation.model';
import Employee from '../../api/employee/employee.model';
import Team from './team.model';

var ChannelSchema = new Schema({
  name: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  history: [{
    user: String,
    message: String,
    messageType: String,
    time: {
      type: Date,
      default: Date.now
    }
  }]
});

export default mongoose.model('Channel', ChannelSchema);
