create database Cinema;
use Cinema;

create table Salas (
IDSALAS int(4) auto_increment primary key,
NUMERO_SALA varchar(10),
CAPACIDADE int(3),
HORARIO varchar(10),
FATURAMENTO INT(5),
COR varchar(10)

);

create table Filmes(
IDFILME int(4) auto_increment primary key,
SINOPSE text,
DURACAO varchar(10),
FILME varchar(30),

/* CHAVE ESTRANGEIRA*/
ID_SALAS_FILMES INT(4),
FOREIGN KEY (ID_SALAS_FILMES)
references Salas (IDSALAS)
);

create table Ingresso(
IDINGRESSO int(4) auto_increment primary key,
INGRESSOSDISP int(5),
INGRESSOSVEND int(5),
VALOR varchar(6),

/* CHAVE ESTRANGEIRA*/
ID_SALAS_INGRESSOS INT(4),
FOREIGN KEY (ID_SALAS_INGRESSOS)
references Salas (IDSALAS)
);

