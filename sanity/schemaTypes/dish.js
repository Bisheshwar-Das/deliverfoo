import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of the dish',
      type: 'string',
      validation:(Rule)=>Rule.required(),
    }),
    defineField({
      name: 'short_descritpion',
      title: 'Short Description',
      type: 'string',
      validation:(Rule)=>Rule.required().max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish in $',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),
  ],
})
