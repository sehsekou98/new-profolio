export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
         name: 'title',
         title: 'Title',
         description: 'title of  skill',
         type: 'string',
        },
        {
         name: 'progress',
         title: 'Progress',
         type: 'number',
         description:'progress of skill from 0 to 100%',
         validation: (Role) => Role.min(0).max(100), 
         },
       {
        name: 'image',
        title: 'Image',
        type: 'image',
        option: {
            hotspot: true,
        },
       },
    ],
};
