CREATE TABLE usuarios (
id SERIAL primary key,
nome varchar(100) not null,
email varchar(100) not null,
senha varchar(255) not null,
data_nascimento date not null,
genero varchar(20),
bio varchar(300),
criado_em timestamp,
atualizado_em timestamp,
deletado_em timestamp
);

CREATE TABLE enderecos (
id SERIAL primary key,
usuario_id int references usuarios(id) not null,
logradouro varchar(150),
numero varchar(10),
complemento varchar(50),
bairro varchar(100),
cidade varchar(100),
estado varchar(50),
cep varchar(15),
latitude DECIMAL(9, 6),
longitude DECIMAL(9, 6)
);

CREATE TABLE fotos_usuarios (
id SERIAL primary key,
usuario_id int references usuarios(id) not null,
url_foto varchar(255) not null,
principal boolean,
criado_em timestamp,
atualizado_em timestamp,
deletado_em timestamp
);

CREATE TABLE interacoes (
id SERIAL primary key,
usuario_origem int references usuarios(id) not null,
usuario_destino int references usuarios(id) not null,
tipo varchar(10),
criado_em timestamp,
atualizado_em timestamp,
deletado_em timestamp
);

CREATE TABLE interesses (
id SERIAL primary key,
nome varchar(50) not null
);

CREATE TABLE usuarios_interesses (
usuario_id int references usuarios(id),
interesse_id int references interesses(id),
primary key (usuario_id, interesse_id)
);

CREATE TABLE matches (
id SERIAL primary key,
usuario1_id int references usuarios(id) not null,
usuario2_id int references usuarios(id) not null,
criado_em timestamp,
atualizado_em timestamp,
deletado_em timestamp
);

CREATE TABLE mensagens (
id SERIAL primary key,
match_id int references matches(id) not null,
remetente_id int references usuarios(id) not null,
conteudo TEXT not null,
enviado_em timestamp
);