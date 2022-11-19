// 18/11/2022 > Esse arquivo está incompleto e precisa ser revisado até 02/12/22

const Modelo = require('./ModeloTabelaFornecedor')
const NaoEncontrado = require('../../erros/NaoEncontrado')

module.exports = {
    listar () {
        return Modelo.findAll({ raw: true })
    },
    inserir (fornecedor) {
        return Modelo.create(fornecedor)
    },
    async pegarPorId (id) {
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if (!encontrado) {
            throw new NaoEncontrado()
        }

        return encontrado
    },
    atualizar (id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        )
    },
    remover (id) {
        return Modelo.destroy({
            where: { id: id }
        })
    }
}