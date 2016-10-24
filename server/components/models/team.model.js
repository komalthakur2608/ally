'use strict';
import mongoose, {Schema} from 'mongoose';
import Organisation from '../../api/organisation/organisation.model';
import Employee from '../../api/employee/employee.model';
import Channel from './channel.model';
import Wall from './wall.model';

var TeamSchema = new Schema({
  name: String,
  organisation: {
    type: Schema.Types.ObjectId,
    ref: 'Organisation'
  },
  members: [{
    member: {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
    },
    role: String
  }],
  channels: [{
    type: Schema.Types.ObjectId,
    ref: 'Channel'
  }], 
  private_walls: [{
    type: Schema.Types.ObjectId,
    ref: 'Wall'
  }]
});

export default mongoose.model('Team', TeamSchema);
