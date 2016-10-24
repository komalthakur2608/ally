'use strict';
import mongoose, {Schema} from 'mongoose';
import Organisation from '../../api/organisation/organisation.model';
import Team from './team.model';

var InviteSchema = new Schema({
  invite_id: String,
  organisation: {
    type: Schema.Types.ObjectId,
    ref: 'Organisation'
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  time: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Invite', InviteSchema);
