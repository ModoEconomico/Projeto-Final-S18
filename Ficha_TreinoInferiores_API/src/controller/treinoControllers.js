const treinoModel = require("../models/treinoModels");

const allTreinos = async (req, res) => {
    try {
    const allTreino = await treinoModel.find();
    res.status(200).json(allTreino)
    } catch (error) {
    console.log(error)
    res.status(500).json({
    message: error.message
    })
}
}
const treinoId = async (req, res) => {
    try {
    const findTreino = await treinoModel.findById(req.params.id)
    res.status(200).json(findTreino)
    } catch (error) {
    console.log(error)
    res.status(500).json({
    message: error.message
    })
}
}
const addTreino = async (req, res) =>{
    try {
    const {usuario, ordem, exercicio, serie, repeticao} = req.body
    const newTreinos= new treinoModel({usuario, ordem, exercicio, serie, repeticao})
    const savedTreino = await newTreinos.save()
    res.status(201).json({message: "Nova série adicionada, franguinha", savedTreino})
    } catch (error) {
    console.log(error)
    res.status(500).json({
    message: error.message
    })
    }
    }
    const updateTreino = async (req, res) =>{
        try {
        const {usuario, ordem, exercicio, serie, repeticao} = req.body
        const updated = await treinoModel.findByIdAndUpdate(
        req.params.id, {usuario, ordem, exercicio, serie, repeticao})
        res.status(200).json({message: "treino atualizado e salvo", updated})
        
        } catch (error) {
        console.error(error)
        res.status(500).json({message:"não foi possivel atualizar o treino"})
}
}
const deleteTreino = async (req, res) =>{
    try { const {id} = req.params
    const deleted = await treinoModel.findByIdAndDelete(id)
    const message = `O treino ${deleted.usuario} foi deletado com sucesso.`
    res.status(200).json({message})
    } catch (error) {
    console.error(error)
    res.status(500).json({message:"não foi possivel deletar o treino"})
}
}

module.exports = {
    allTreinos,
    treinoId,
    addTreino,
    updateTreino,
    deleteTreino
}
    