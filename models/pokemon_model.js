const mongoose=require('mongoose')


const PokemonSchema=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    attack: {
        type: String,
        required:true
    },
    defense: {
        type: String,
        required:true
    },
});

module.exports=mongoose.model('Pokemons',PokemonSchema)