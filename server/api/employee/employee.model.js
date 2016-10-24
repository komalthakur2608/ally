'use strict';

import mongoose, {Schema} from 'mongoose';
import Organisation from '../organisation/organisation.model';
import Team from '../../components/models/team.model';
import Channel from '../../components/models/channel.model';


var EmployeeSchema= new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    required() {
      if (authTypes.indexOf(this.provider) === -1) {
        return true;
      } else {
        return false;
      }
    }
  },
  role: {
    type: String,
    default: 'employee'
  },
  organisation: {
    type: Schema.Types.ObjectId,
    ref: 'Organisation'
  },
  designation: String,
  department: String,
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }],
  channels: [{
    type: Schema.Types.ObjectId,
    ref: 'Channel'
  }]
});
export default mongoose.model('Employee', EmployeeSchema);
