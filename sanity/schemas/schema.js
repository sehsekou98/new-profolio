import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'

//Importing object and document
import experience from './experience';
import pageInfo from './pageInfo';
import social from './social';
import project from './project';
import skill from './skill';


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ 
    skill,
    pageInfo,
    experience,
    social,
    project,
  ]),
});
