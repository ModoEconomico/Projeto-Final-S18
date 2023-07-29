const mongoose = require("mongoose");
const treinoSchema = mongoose.Schema(
    {_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
        usuario: {
            type: String,
            required: true,
            unique: true,
        },
        ordem: {
            type: String,
            required: true,
        },
        exercicio: {
            type: String,
            required: true,
        },
        serie: {
            type: Number,
            required: true
        },
        repeticao: {
            type: Number,
            required: true,
        }
    },
    {
        versionkey: false
    }
)
const model = mongoose.model("Ficha:", treinoSchema)
module.exports = model

/*const mongoose = require('mongoose');

const treinoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  serie: { type: Number, required: true },
  repeticoes: { type: Number, required: true },
  carga: { type: Number, required: true },
});

const Treino = mongoose.model('Treino', treinoSchema);

module.exports = Treino;*/
