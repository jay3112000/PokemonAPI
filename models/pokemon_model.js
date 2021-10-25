const mongoose=require('mongoose')


const PokemonSchema=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    height:{
        type: String,
        required:true
    },
    weight:{
        type: String,
        required:true
    },
    hp:{
        type: String,
        required:true
    },
    types:{
        type:[String],
        required:true
    },
    weaknesses:{
        type:[String],
        required:true
    },
    next:{
        type:[String],
        required:true
    },
    
    attack: [
          {
              damage: String,
              special: String

          }
    ],
    defense: {
        type: String,
        required:true
    },
});

module.exports=mongoose.model('Pokemons',PokemonSchema)