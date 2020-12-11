var timerClock = 0;

var timerClockPaused = false;

var minutosBlinds = 20;

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
            ante: null,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 2,
            small: 100,
            big: 200,
            ante: null,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 3,
            small: 150,
            big: 300,
            ante: null,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 4,
            small: 200,
            big: 400,
            ante: null,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 5,
            small: 250,
            big: 500,
            ante: null,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 6,
            small: 300,
            big: 600,
            ante: null,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: null,
            small: null,
            big: null,
            ante: null,
            duracao: minutosBlinds * 60,
            break: true
        },
        {
            nivel: 7,
            small: 400,
            big: 800,
            ante: 800,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 8,
            small: 500,
            big: 1000,
            ante: 1000,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 9,
            small: 600,
            big: 1200,
            ante: 1200,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 10,
            small: 800,
            big: 1600,
            ante: 1600,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 11,
            small: 1000,
            big: 2000,
            ante: 2000,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 12,
            small: 1500,
            big: 3000,
            ante: 3000,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 13,
            small: 2000,
            big: 4000,
            ante: 4000,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 14,
            small: 2500,
            big: 5000,
            ante: 5000,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 15,
            small: 3000,
            big: 6000,
            ante: 6000,
            duracao: minutosBlinds * 60,
            break: false
        },
        {
            nivel: 16,
            small: 4000,
            big: 8000,
            ante: 8000,
            duracao: minutosBlinds
             * 60,
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

ranking.jogadores = [{
    id: 1,
    nomeJogador: "Daniel",
    foto: "daniel.jpg",
    posicao: 1,
    buyIn: true,
    reBuys: 0,
    addOn: true,
    pontos: 0
},
{
    id: 2,
    nomeJogador: "Fred",
    foto: "fred.jpg",
    posicao: 2,
    buyIn: true,
    reBuys: 2,
    addOn: true,
    pontos: 0
},
{
    id: 2,
    nomeJogador: "Shogo",
    foto: "shogo.jpg",
    posicao: 3,
    buyIn: true,
    reBuys: 2,
    addOn: true,
    pontos: 0
},
{
    id: 2,
    nomeJogador: "Luiz Paulo",
    foto: "luizpaulo.jpg",
    posicao: 4,
    buyIn: true,
    reBuys: 2,
    addOn: true,
    pontos: 0
},
{
    id: 2,
    nomeJogador: "João",
    foto: "joao.jpg",
    posicao: 5,
    buyIn: true,
    reBuys: 2,
    addOn: true,
    pontos: 0
},
{
    id: 2,
    nomeJogador: "Tiê",
    foto: "tie.jpg",
    posicao: 8,
    buyIn: true,
    reBuys: 2,
    addOn: true,
    pontos: 0
}];

jQuery(document).ready(function() {
    montarLeft();
    montarCenter();
    montarRight();
});

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}

function montarLeft() {
    jQuery("#pb-info-title").text(torneio.nomeTorneio);
    jQuery("#pb-settings").text("Configurações");
}

function montarCenter() {
    mudarNivel();

    jQuery(document).on("click", ".pb-button-play", function() {
        if (timerClockPaused) {
            resumeTimer();
        } else {
            startTimer();
        }
    });

    jQuery(document).on("click", ".pb-button-pause", function() {
        pauseTimer();
    });

    jQuery(document).on("click", ".pb-button-stop", function() {
        resetTimer();
    });

    jQuery(document).on("click", ".pb-button-next", function() {
        pauseTimer();
        proximoNivel();
    });

    jQuery(document).on("click", ".pb-button-prev", function() {
        pauseTimer();
    });

    jQuery("#pb-settings").text("Configurações");
}

function proximoNivel () {
    torneio.nivel = torneio.nivel + 1;
    localStorage.setItem('nivel', torneio.nivel);
    mudarNivel();
}

function nivelAnterior () {
    torneio.nivel = torneio.nivel + 1;
    localStorage.setItem('nivel', torneio.nivel);
    mudarNivel();
}

function mudarNivel() {
    var nivelRecuperado = localStorage.getItem("nivel");
    var timerRecuperado = localStorage.getItem("timer");
    
    if (nivelRecuperado == null) {
        jQuery("#pb-info-level").text("Nível " + torneio.nivel);
        var blinds = obterPorValor(torneio.blinds, "nivel", torneio.nivel);
        montarBlinds(blinds);
        montarTimer(blinds.duracao);
    } else {
        torneio.nivel = parseInt(nivelRecuperado);
        jQuery("#pb-info-level").text("Nível " + torneio.nivel);
        var blinds = obterPorValor(torneio.blinds, "nivel", torneio.nivel);
        montarBlinds(blinds);
        montarTimer(parseInt(timerRecuperado));
        startTimer();
    }
}

function resumeTimer() {
    var nivelRecuperado = localStorage.getItem("nivel");
    var timerRecuperado = localStorage.getItem("timer");

    if (nivelRecuperado != null) {
        torneio.nivel = parseInt(nivelRecuperado);
        jQuery("#pb-info-level").text("Nível " + torneio.nivel);
        var blinds = obterPorValor(torneio.blinds, "nivel", torneio.nivel);
        montarBlinds(blinds);
        montarTimer(parseInt(timerRecuperado));
        startTimer();
    }
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

function montarTimer(timer) {

    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    jQuery("#pb-timer").text(minutes + ":" + seconds);
}

// UTIL

function obterPorValor(array, propriedade, valor) {
    return array.find(x => x[propriedade] === valor);
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function startTimer() {
    var display = document.querySelector('#pb-timer');
    var blinds = obterPorValor(torneio.blinds, "nivel", torneio.nivel);
    var duration = blinds.duracao;
    var timerRecuperado = localStorage.getItem("timer");

    if (timerRecuperado != null) {
        duration = parseInt(timerRecuperado);
    }

    var turns = [
        (duration / 3 * 2),
        (duration / 3 * 1),
        (duration / 3 * 0)
    ];

    var turn = 0;
    var colorIncrease = 255 / (duration / 3);

    var timer = duration,
        minutes, seconds;


    var red = 0;
    var green = 100;
    var blue = 0;

    timerClock = setInterval(function() {

        localStorage.setItem('timer', timer);
        localStorage.setItem('nivel', torneio.nivel);

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        jQuery("#pb-timer").text(minutes + ":" + seconds);

        if (turn == 0) {
            green = green + colorIncrease;
        } else if (turn == 1) {
            red = red + colorIncrease;
            green = green + colorIncrease;
        } else if (turn == 2) {
            red = red + colorIncrease;
        }

        if (timer == turns[turn]) {
            turn = turn + 1;

            if (turn == 1) {
                green = 100;
                blue = 0;
                red = 100;
            } else {
                green = 0;
                blue = 0;
                red = 100;
            }
        }

        if (--timer < 0) {
            var mySound = new sound("./assets/sons/sino.mp3");
            mySound.play();
            localStorage.clear();
            timer = duration;
            stopTimer();
            torneio.nivel = torneio.nivel + 1;
            mudarNivel();
            startTimer();
        } else {
            jQuery(".circle").css({ "border": "2.2em solid rgb(" + red + "," + green + "," + blue + ")" });
        }

    }, 1000);
}

function pauseTimer() {
    timerClockPaused = true;
    clearInterval(timerClock);
}

function stopTimer() {
    timerClockPaused = false;
    clearInterval(timerClock);
}

function resetTimer() {
    torneio.nivel = 1;
    localStorage.clear();
    stopTimer();
    montarCenter();
}

function changeBlinds() {
    torneio.nivel
}