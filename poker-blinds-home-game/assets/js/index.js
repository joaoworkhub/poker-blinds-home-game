var torneio = {
    id: 1,
    nomeTorneio: "Home Game do João",
    dataHoraInicio: "",
    dataHoraFim: "",
    nivel: 1,
    blinds: [{
            nivel: 1,
            small: 50,
            big: 100,
            ante: 100,
            duracao: 15 * 60,
            break: false
        },
        {
            nivel: 2,
            small: 100,
            big: 200,
            ante: null,
            duracao: 15 * 60,
            break: false
        }
    ],
    jogadores: [{
            id: 1,
            nomeJogador: "João",
            foto: "joao.jpg",
            eliminado: false,
            posicao: 1,
            buyIn: true,
            reBuys: 0,
            addOn: true
        },
        {
            id: 2,
            nomeJogador: "Palestra",
            foto: "palestra.jpg",
            eliminado: true,
            posicao: 2,
            buyIn: true,
            reBuys: 2,
            addOn: true
        }
    ],
    buyIn: {
        valor: 40,
        fichas: 15000
    },
    reBuy: {
        valor: 20,
        fichas: 10000
    },
    addOn: {
        valor: 30,
        fichas: 30000
    },
    premiacao: {
        qtdPosicoes: null,
        pctPosicoes: 0.15,
        ranking: [{
                posicao: 1,
                pontos: 100
            },
            {
                posicao: 2,
                pontos: 60
            },
            {
                posicao: 3,
                pontos: 20
            }
        ],
        valores: [{
                posicao: 1,
                qtdValor: null,
                ptcValor: 0.5
            },
            {
                posicao: 2,
                qtdValor: null,
                ptcValor: 0.3
            },
            {
                posicao: 1,
                qtdValor: null,
                ptcValor: 0.2
            }
        ]
    }
};

var ranking = {
    posicoes: [{
            idJogador: 1,
            posicao: 1,
            pontos: 100
        },
        {
            idJogador: 2,
            posicao: 2,
            pontos: 50
        }
    ],
    jogadores: [{
            id: 1,
            nomeJogador: "Daniel",
            foto: "daniel.jpg",
            posicao: 1,
            buyIn: true,
            reBuys: 0,
            addOn: true,
            pontos: 10
        },
        {
            id: 2,
            nomeJogador: "Fred",
            foto: "fred.jpg",
            posicao: 2,
            buyIn: true,
            reBuys: 2,
            addOn: true,
            pontos: 6
        },
        {
            id: 2,
            nomeJogador: "Victor",
            foto: "victor.jpg",
            posicao: 3,
            buyIn: true,
            reBuys: 2,
            addOn: true,
            pontos: 3
        },
        {
            id: 2,
            nomeJogador: "Otávio",
            foto: "otavio.jpg",
            posicao: 4,
            buyIn: true,
            reBuys: 2,
            addOn: true,
            pontos: 1
        },
        {
            id: 2,
            nomeJogador: "João",
            foto: "joao.jpg",
            posicao: 5,
            buyIn: true,
            reBuys: 2,
            addOn: true,
            pontos: 1
        },
        {
            id: 2,
            nomeJogador: "Biza",
            foto: "biza.jpg",
            posicao: 6,
            buyIn: true,
            reBuys: 2,
            addOn: true,
            pontos: 1
        },
        {
            id: 2,
            nomeJogador: "Palestra",
            foto: "palestra.jpg",
            posicao: 7,
            buyIn: true,
            reBuys: 2,
            addOn: true,
            pontos: 1
        },
        {
            id: 2,
            nomeJogador: "Tiê",
            foto: "tie.jpg",
            posicao: 8,
            buyIn: true,
            reBuys: 2,
            addOn: true,
            pontos: 1
        }
    ],
    torneios: [
        torneio
    ],
    premiacao: [{
            posicao: 1,
            valor: 0.45
        },
        {
            posicao: 2,
            valor: 0.25
        },
        {
            posicao: 3,
            valor: 0.15
        },
        {
            posicao: 4,
            valor: 0.10
        },
        {
            posicao: 5,
            valor: 0.05
        }
    ]
};

jQuery(document).ready(function() {
    montarLeft();
    montarCenter();
    montarRight();


});

function montarLeft() {
    jQuery("#pb-info-title").text(torneio.nomeTorneio);
    jQuery("#pb-info-level").text("Nível " + torneio.nivel);
    jQuery("#pb-settings").text("Configurações");
}

function montarCenter() {
    var torneioNivel = torneio.nivel;
    var blinds = obterPorValor(torneio.blinds, "nivel", torneioNivel);
    montarBlinds(blinds);
    montarTimer(blinds);

    jQuery(".pb-button-play").on("click", function() {
        var display = document.querySelector('#pb-timer');
        startTimer(blinds.duracao, display);
    });

    jQuery("#pb-settings").text("Configurações");
}

function montarRight() {
    montarPlayers();
}

function montarPlayers() {
    jQuery("#pb-ranking-box").empty();

    var templatePlayer = '<div class="pb-ranking-row"><div class="pb-player-place">';
    templatePlayer += '{player-place}º';
    templatePlayer += '</div>';
    templatePlayer += '<div class="pb-player-photo" style="background-image: url(\'./assets/imagens/players/{player-photo}\');">';
    templatePlayer += '';
    templatePlayer += '</div>';
    templatePlayer += '<div class="pb-player-name">';
    templatePlayer += '{player-name}';
    templatePlayer += '</div>';
    templatePlayer += '<div class="pb-player-points">';
    templatePlayer += '{player-points}';
    templatePlayer += '</div></div>';

    for (var i = 0; i < ranking.jogadores.length; i++) {
        var player = ranking.jogadores[i];
        var template = templatePlayer;

        template = template.replace("{player-place}", player.posicao);
        template = template.replace("{player-photo}", player.foto);
        template = template.replace("{player-name}", player.nomeJogador);
        template = template.replace("{player-points}", player.pontos);

        jQuery("#pb-ranking-box").append(template);
    }
}

function montarBlinds(blinds) {
    jQuery("#pb-current-blinds").text(blinds.small + "/" + blinds.big);
    jQuery("#pb-current-ante").text(blinds.ante);
}

function montarTimer(blinds) {
    jQuery("#pb-timer").text(millisToMinutesAndSeconds(blinds.duracao * 1000));
}

// UTIL

function obterPorValor(array, propriedade, valor) {
    return array.find(x => x[propriedade] === valor);
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;

    var red = 16;
    var green = 139;
    var blue = 63;

    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        red++;
        green--;

        if (--timer < 0) {

            timer = duration;
        }

        jQuery(".circle").css({ "border": "30px solid rgb(" + red + "," + green + "," + blue + ")" });

    }, 1000);
}