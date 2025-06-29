module.exports ={
    campeonato: {
        listarCampeonatos: "select * from campeonato"
    },
    jogador: {
        listarJogadoresPorGols: "select Jogador.jogador_id, Time.nome as time, Jogador.nome as jogador, count(tipo_evento) as gols from Time join Jogador on Time.time_id=Jogador.fk_time_id join Individual on jogador_id=fk_jogador_id where tipo_evento='goal' group by Time.nome, Jogador.nome, Jogador.jogador_id order by count(tipo_evento) desc limit 20;",
        listarJogadoresComMaisSubstituicao: "select j.nome, count(r.fk_evento_id) as totalSubstituicoes from Jogador j left join realiza r on r.fk_jogador_id = j.jogador_id group by j.nome order by totalsubstituicoes desc limit 20"
    },
    gol: {
        listarGolsPorTempo: "select concat(floor(minutagem / 10) * 10, '-', (floor(minutagem / 10) * 10) + 9) as faixa_tempo, count(minutagem) as gols from Evento join Individual on evento_id=fk_evento_id where tipo_evento='goal' group by faixa_tempo order by gols desc;"
    },
    estadio: {
        listarEstadiosPorCampeonatoBr: "select Estadio.nome as estadio, count(partida_id) as partidas from Estadio join Partida on estadio_id=fk_estadio_id where partida_id in (select partida_id from Partida join Campeonato on campeonato_id=fk_campeonato_id where Campeonato.nome='brasileiro') group by Estadio.nome order by partidas desc"
    },
    partida: {
        listarPartidasGols: "select partida_id, min(T.nome) as time_1, (select ifnull(sum(case when I2.tipo_evento='goal' then 1 else 0 end), 0) from Evento as E2 join Individual as I2 on E2.evento_id=I2.fk_evento_id join Jogador as J2 on J2.jogador_id=I2.fk_jogador_id join Time as T2 on T2.time_id=J2.fk_time_id where T2.nome=min(T.nome) and E2.fk_partida_id=partida_id) as gols_1, max(T.nome) as time_2, (select ifnull(sum(case when I2.tipo_evento='goal' then 1 else 0 end), 0) from Evento as E2 join Individual as I2 on E2.evento_id=I2.fk_evento_id join Jogador as J2 on J2.jogador_id=I2.fk_jogador_id join Time as T2 on T2.time_id=J2.fk_time_id where T2.nome=max(T.nome) and E2.fk_partida_id=partida_id) as gols_2 from Partida join Joga as J on partida_id=fk_partida_id join Time as T on T.time_id=J.fk_time_id group by partida_id order by partida_id limit 20;"
    }
}