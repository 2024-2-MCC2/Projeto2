create database sanguessugasdatabase;

use sanguessugasdatabase;

create table estoque(
id_estoque integer primary key auto_increment,
quant_sangue_a_pos integer,
quant_sangue_a_neg integer,
quant_sangue_b_pos integer,
quant_sangue_b_neg integer,
quant_sangue_ab_pos integer,
quant_sangue_ab_neg integer,
quant_sangue_o_pos integer,
quant_sangue_o_neg integer
);

create table localdedoacao(
id_local integer primary key auto_increment,
id_estoque integer not null,
id_horario integer not null, 
nome_local varchar(50),
telefone_local varchar(14),
estacionamento_local decimal(5,2),
constraint FKestoque foreign key(id_estoque) references estoque(id_estoque),
constraint FKhorario foreign key(id_horario) references horario(id_horario)
);

create table horario(
id_horario integer primary key auto_increment,
dias_uteis_inicio_hora time,
dias_uteis_final_hora time,
finais_semana_inicio_hora time,
finais_semana_final_hora time,
feriados_inicio_hora time,
feriados_final_hora time
);

create table usuario(
id_user integer primary key auto_increment,
nome_user varchar(60),
data_nasc_user date,
endereco_user varchar(50),
email_user varchar(50) not null unique,
senha_user varchar(50) not null
);
