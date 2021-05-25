const { Schema, model } = require('mongoose');

const blazonSchema = new Schema(
    {
        title:String,
        description: String,
        img:String
      
    }
       
    );

module.exports = model('Blazon', blazonSchema);