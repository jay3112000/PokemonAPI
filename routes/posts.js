const express=require('express')
const Pokemon=require('../models/pokemon_model')
const router =express.Router();
/////////////get all pokemons
router.get('/',async(req,res)=>{
    try{
        const pokemon=await Pokemon.find();
        res.json(pokemon)
    }catch(error){
        res.json({message:error})

    }
});

/////////////////////////// post pokemon
router.post('/',async(req,res)=>{
    
    const post=new Pokemon({
        name:req.body.name,
        attack:req.body.attack,
        defense:req.body.defense
    });
    try{
        console.log(req.body)
        const savedPokemon=await post.save();
        res.json(savedPokemon);
    }catch(error){
        res.json({message:err})

    }
})
/////////////GET POKEMON BY ID
router.get('/:pokemonId',async(req,res)=>{
    try{
        const pokemon=await Pokemon.findById(req.params.pokemonId)
        res.json(pokemon)
    }
    catch(e){
        res.json({message:e})
    }
})
module.exports=router