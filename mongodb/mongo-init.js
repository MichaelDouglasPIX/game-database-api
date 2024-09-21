db = db.getSiblingDB("game_store");

db.createUser({
    user: "teste",
    pwd: "teste",
    roles: [
        {
            role: 'readWrite',
            db: 'game_store'
        },
    ],
});

db.createCollection("engines");
db.engines.insertMany([
    {
        "name": "Unity"
    },
    {
        "name": "Unreal"
    }]);

db.createCollection("genres");
db.genres.insertMany([
    {
        "name": "Action"
    },
    {
        "name": "RPG"
    },
    {
        "name": "Adventure"
    },
    {
        "name": "SPORT"
    },
    {
        "name": "comedy"
    },
    {
        "name": "first person"
    },
    {
        "name": "Puzzle"
    },
    {
        "name": "Strategy"
    },
    {
        "name": "Rhythm"
    },
    {
        "name": "Arcade"
    }]);

db.createCollection("gaming_platforms");
db.gaming_platforms.insertMany([
    {
        "platform": "Steam"
    },
    {
        "platform": "Itch.io"
    },
    {
        "platform": "Play Store"
    },
    {
        "platform": "Game Jolt"
    }]);

db.createCollection("games");
db.games.insertMany([
    {
        "title": "Monkey Business",
        "summary": "Pequeno resumo sobre o jogo",
        "description": "Descricao completa do jogo!",
        "genre": [],
        "status": "Demo",
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzUwOTkyMTQucG5n/original/CR3w8l.png"
            }
        ]
    },
    {
        "title": "Relatos de Vera Cruz",
        "summary": "Pequeno resumo sobre o jogo",
        "description": "Se eu tivesse que escolher entre minha esposa e o General Galba, é claro que eu ia escolher nosso General! Ele me ama muito mais que aquela velhaca!",
        "genre": [],
        "status": "demo",
        "images": [
            {
                "name": "Capa",
                "url": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2691780/header_brazilian.jpg?t=1712401842"
            }
        ]
    },
    {
        "title": "Downtown Run-Down",
        "summary": "Salve o maximo de pessoas mesmo que mate elas por isso!",
        "genre": [],
        "status": "released",
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzMwMjE1NDkucG5n/original/v0rELV.png"
            }
        ]
    },
    {
        "title": "Vizinha Viral",
        "summary": "Em meio a um surto de um vírus novo, você está preso em casa com uma vizinha inconvieniente e aparentemente infectada!",
        "description": "Em meio a um surto de um vírus novo, você está preso em casa com uma vizinha inconvieniente e aparentemente infectada! Evite ser infectado até o resgate chegar, mas mantenha a conversa, pois ela pode sair se ficar chateada!",
        "genre": [],
        "status": "released",
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzMzNDQwMjAucG5n/original/5G6EEm.png"
            }
        ]
    },
    {
        "title": "Toolbox Maestro",
        "summary": "Nada melhor para estreitar laços entre pais e filhos do que construir uma casa na árvore! Infelizmente, seu pai é muito metódico... Melhor segui-lo passo a passo para evitar que fique bravo!",
        "genre": [],
        "status": "released",
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzkzMTYzNDcucG5n/original/9JT7o5.png"
            }
        ]
    },
    {
        "title": "Desce mais uma",
        "summary": "Desce mais uma, o simulador de garçom frenético! A MONKEY SUITS EXPERIENCE.",
        "description": "No bar de beira de estrada mais badalado do momento, você, um simples garçom, se encontra sozinho com a tarefa árdua de servir o maior número de clientes, sedentos por um choppinho dourado espumando direto da TORRE! Sirva os clientes, ganhe dinheiro e reputação, expanda e coloque mais TORRES DE CHOPP e COPOS pelo bar para servir melhor os clientes. Agrade os críticos e não dê nenhuma gota para as crianças bisbilhoteiras! JOGO DESENVOLVIDO DO DIA 02/01/2021 AO DIA 09/01/2021 PARA A GAMEJAAJ V COM O TEMA 'TORRES'.",
        "genre": [],
        "status": "released",
        "images": [
            {
                "name": "Capa",
                "url": "https://m.gjcdn.net/game-header/1300/574490-iqzhu2h6-v4.webp"
            }
        ]
    }]);


