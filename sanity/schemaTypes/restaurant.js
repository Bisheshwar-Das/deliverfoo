import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurants',
  title: 'Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation:(Rule)=>Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation:(Rule)=>Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
      to: {type: 'author'},
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation:(Rule)=>Rule.max(200),
    }),
    defineField({
      name:'rating',
      title:'Enter a Rating from (1-5) Stars',
      type:'number',
      validation:(Rule)=>Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a value between 1 and 5"),
    }),
    defineField({
      name:'type',
      title:'Category',
      type:'string',
      validation:(Rule)=>Rule.required(),
      type:'reference',
      to:[{type:"category"}],
    }),
    defineField({
      name:'dishes',
      title:'Dishes',
      type:'array',
      of:[{type:'reference',to:[{type:'dish'}]}],
    }),
  ],
})
