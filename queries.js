module.exports ={
    campeonato: {
        listarCampeonatos: 'select * from campeonato'
    },
    jogador: {
        listarJogadoresPorGols: "select Time.nome as time, Jogador.nome as jogador, count(tipo_evento) as gols from Time join Jogador on Time.time_id=Jogador.fk_time_id join Individual on jogador_id=fk_jogador_id where tipo_evento='goal' group by Time.nome, Jogador.nome order by count(tipo_evento) desc limit 20;"
    }
}