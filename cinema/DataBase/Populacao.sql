use cinema;
select * from Salas;
select * from Filmes;
select * from Ingresso;

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Inserts Salas =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* Insert Sala 1*/
insert into Salas values (default,"Sala 1",100,"15:00",0,"white");
insert into Salas values (default,"Sala 1",100,"18:00",0,"white");

/* Insert Sala 2*/
insert into Salas values (default,"Sala 2",120,"17:00",0,"white");

/* Insert Sala 3*/
insert into Salas values (default,"Sala 3",110,"22:00",0,"white");

/* Insert Sala 4*/
insert into Salas values (default,"Sala 4",90,"16:00",0,"white");
insert into Salas values (default,"Sala 4",90,"20:00",0,"white");

/* Insert Sala 5*/
insert into Salas values (default,"Sala 5",100,"18:00",0,"white");

/* Insert Sala 6*/
insert into Salas values (default,"Sala 6",90,"21:00",0,"white");

/* Insert Sala 7*/
insert into Salas values (default,"Sala 7",150,"15:00",0,"white");
insert into Salas values (default,"Sala 7",150,"20:30",0,"white");


/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Inserts Filmes =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* Insert Filmes sala 1 */
insert into Filmes values (default,"A aterradora saga de Esther continua nesta emocionante prequela, Órfã.Depois de planear uma brilhante fuga de um hospital psiquiátrico na Estónia, Esther viaja até a América passando-se pela filha desaparecida de uma família milionária.No entanto, após uma inesperada reviravolta, a mãe começa a desconfiar da criança assassina, e tudo faz para proteger a sua família.
","98 MIN","Orfã : A Origem",1);

insert into Filmes values (default,"A aterradora saga de Esther continua nesta emocionante prequela, Órfã.Depois de planear uma brilhante fuga de um hospital psiquiátrico na Estónia, Esther viaja até a América passando-se pela filha desaparecida de uma família milionária.No entanto, após uma inesperada reviravolta, a mãe começa a desconfiar da criança assassina, e tudo faz para proteger a sua família.
","98 min","Orfã : A Origem",2);

/* Insert Filmes sala 2 */
insert into Filmes values (default,"Uma dona de casa que vive em uma comunidade experimental começa a suspeitar que a empresa de seu marido está escondendo segredos perturbadores.
","123 MIN","Não Se Preocupe Querida ",3);

/* Insert Filmes sala 3*/
insert into Filmes values (default,"Finney Shaw, de 13 anos, é sequestrado por um sádico assassino mascarado e mantido em um porão à prova de som. Até que um telefone desconectado na parede começa a tocar, e ele logo descobre que pode ouvir as vozes das vítimas anteriores do maníaco.
","103 MIN","O Telefone Preto ",4);

/* Insert Filmes sala 4*/
insert into Filmes values (default,"Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.
","120 MIN","A Mulher Rei ",5);
insert into Filmes values (default,"Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.
","120 MIN","A Mulher Rei ",6);

/* Insert Filmes sala 5*/
insert into Filmes values (default,"No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Na'vi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora.
","150 MIN","Avatar ",7);

/* Insert Filmes sala 6*/
insert into Filmes values (default,"Após um paciente sofrer um trauma, um médico começa a se distrair em seus próprios pensamentos.
","115 MIN","Sorria ",8);

/* Insert Filmes sala 7*/
insert into Filmes values (default,"Fall é um filme de suspense de sobrevivência de 2022 dirigido e co-escrito por Scott Mann. Estrelado por Grace Caroline Currey, Virginia Gardner, Mason Gooding e Jeffrey Dean Morgan, o filme segue duas mulheres que escalam uma torre de rádio de 600 metros de altura e ficam presas no topo sem saída.
","107 MIN","A Queda ",9);
insert into Filmes values (default,"Fall é um filme de suspense de sobrevivência de 2022 dirigido e co-escrito por Scott Mann. Estrelado por Grace Caroline Currey, Virginia Gardner, Mason Gooding e Jeffrey Dean Morgan, o filme segue duas mulheres que escalam uma torre de rádio de 600 metros de altura e ficam presas no topo sem saída.
","107 MIN","A Queda ",10);

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Inserts Ingressos =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Insert Ingresso sala 1*/
insert into Ingresso values (default,"100","0","20",1);
insert into Ingresso values (default,"100","0","20",2);

/* Insert Ingresso sala 2*/
insert into Ingresso values (default,"120","0","20",3);

/* Insert Ingresso sala 3*/
insert into Ingresso values (default,"110","0","20",4);

/* Insert Ingresso sala 4*/
insert into Ingresso values (default,"90","0","20",5);
insert into Ingresso values (default,"90","0","20",6);

/* Insert Ingresso sala 5*/
insert into Ingresso values (default,"100","0","20",7);

/* Insert Ingresso sala 6*/
insert into Ingresso values (default,"90","0","20",8);

/* Insert Ingresso sala 7*/
insert into Ingresso values (default,"150","0","20",9);
insert into Ingresso values (default,"150","0","20",10);

select * from Salas s 
join  Filmes f 
on  s.IDSALAS = f.ID_SALAS_FILMES
join ingresso i
on  s.IDSALAS = i.ID_SALAS_INGRESSOS;

select s.NUMERO_SALA,s.HORARIO,s.CAPACIDADE,f.SINOPSE,f.DURACAO,f.FILME,i.INGRESSOSDISP,i.INGRESSOSVEND from salas s 
join Filmes f 
on s.IDSALAS = f.ID_SALAS_FILMES
join Ingresso i
on s.IDSALAS = i.ID_SALAS_INGRESSOS;

select s.NUMERO_SALA,f.FILME,i.INGRESSOSDISP,i.INGRESSOSVEND,s.faturamento from salas s 
join Filmes f 
on s.IDSALAS = f.ID_SALAS_FILMES
join Ingresso i
on s.IDSALAS = i.ID_SALAS_INGRESSOS;

UPDATE salas s
    INNER JOIN ingresso i ON s.IDSALAS = i.ID_SALAS_INGRESSOS
    SET s.FATURAMENTO = 0 , i.INGRESSOSDISP = 100 , i.INGRESSOSVEND = 0 , s.capacidade = 100, s.cor = "white"
    WHERE s.IDSALAS = 1  ;
    

select * from  salas;
