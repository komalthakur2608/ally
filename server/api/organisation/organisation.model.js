'use strict';

import mongoose from 'mongoose';

import mongoose, {Schema} from 'mongoose';
import Employee from '../employee/employee.model';
import Team from '../../components/models/team.model';
import Wall from '../../components/models/wall.model';

var OrganisationSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  website: String,
  domainName: String,
  about: String,
  address: String,
  contacts: [{name : String, designation : String, phone : String, email : String}],
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }],
  status: {
    type: String,
    default: 'pending'
  },
  organisation_walls:[{
    type: Schema.Types.ObjectId,
    ref: 'Wall'
  }],
  restricted_walls: [{
    wall: {
    	type: Schema.Types.ObjectId,
    	ref: 'Wall'
    },
    team: {
    	type: Schema.Types.ObjectId,
    	ref: 'Team'
    }
  }]
});

export default mongoose.model('Organisation', OrganisationSchema);
