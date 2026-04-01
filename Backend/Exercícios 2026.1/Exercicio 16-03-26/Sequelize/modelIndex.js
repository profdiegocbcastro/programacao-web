import Usuario from './usuarios/model.js';
import Endereco from './enderecos/model.js';
import Foto from './fotos/model.js';
import Interacao from './interacoes/model.js';
import UsuarioInteresse from './usuarios/interessesUsuarioModel.js';
import Interesse from './interesses/model.js';
import Match from './matches/model.js';
import Mensagem from './mensagens/model.js';

Usuario.hasOne(Endereco, {foreignKey: 'usuario_id'});
Usuario.hasMany(Foto, {foreignKey: 'usuario_id'});
Usuario.hasMany(Interacao, {as: 'origem', foreignKey: 'usuario_origem'});
Usuario.hasMany(Interacao, {as: 'destino', foreignKey: 'usuario_destino'});
Usuario.hasMany(Match, {as: 'usuario1', foreignKey: 'usuario1_id'});
Usuario.hasMany(Match, {as: 'usuario2', foreignKey: 'usuario2_id'});
Usuario.belongsToMany(Interesse, {
    through: UsuarioInteresse,
    foreignKey: 'usuario_id',
    otherKey: 'interesse_id'
})
Usuario.hasMany(Mensagem, {foreignKey: 'remetente_id'});

Interesse.belongsToMany(Usuario, {
    through: UsuarioInteresse,
    foreignKey: 'interesse_id',
    otherKey: 'usuario_id'
})

Interacao.belongsTo(Usuario, {as: 'origem', foreignKey: 'usuario_origem'});
Interacao.belongsTo(Usuario, {as: 'destino', foreignKey: 'usuario_destino'});

Foto.belongsTo(Usuario, {foreignKey: 'usuario_id'});

Endereco.belongsTo(Usuario, {foreignKey: 'usuario_id'});

Match.belongsTo(Usuario, {as: 'usuario1', foreignKey: 'usuario1_id'});
Match.belongsTo(Usuario, {as: 'usuario2', foreignKey: 'usuario2_id'});
Match.hasMany(Mensagem, {foreignKey: 'match_id'});

Mensagem.belongsTo(Usuario, {foreignKey: 'remetente_id'});
Mensagem.belongsTo(Match, {foreignKey: 'match_id'});

export { Usuario, Endereco, Foto, Interacao, Interesse, UsuarioInteresse, Match, Mensagem };