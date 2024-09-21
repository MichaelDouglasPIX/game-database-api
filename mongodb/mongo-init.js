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
        "_id": "66e70e757a19b685fe12a5e2",
        "name": "Unity"
    },
    {
        "_id": "66e70f141186426c051b22d9",
        "name": "Unreal"
    }]);

db.createCollection("genres");
db.genres.insertMany([
    {
        "_id": "66e5b34dbb2609fe3ce46cdd",
        "name": "Action"
    },
    {
        "_id": "66e732abe020fbae22c0b7a5",
        "name": "RPG"
    },
    {
        "_id": "66e732b8e020fbae22c0b7a7",
        "name": "Adventure"
    },
    {
        "_id": "66e732c0e020fbae22c0b7a9",
        "name": "SPORT"
    },
    {
        "_id": "66ecdae33520228bec24bac2",
        "name": "comedy"
    },
    {
        "_id": "66ecdaee3520228bec24bac4",
        "name": "first person"
    },
    {
        "_id": "66ede89457a8d083094f2161",
        "name": "Puzzle"
    },
    {
        "_id": "66ede8aa57a8d083094f2163",
        "name": "Strategy"
    },
    {
        "_id": "66ede98957a8d083094f216b",
        "name": "Rhythm"
    },
    {
        "_id": "66edeaaa57a8d083094f2173",
        "name": "Arcade"
    }]);

db.createCollection("gaming_platforms");
db.gaming_platforms.insertMany([
    {
        "_id": "66e5bbcc2423e76502a171f1",
        "platform": "Steam"
    },
    {
        "_id": "66e7349e987013a1e66fa9f5",
        "platform": "Itch.io"
    },
    {
        "_id": "66ede8f457a8d083094f2167",
        "platform": "Play Store"
    },
    {
        "_id": "66edeacc57a8d083094f2175",
        "platform": "Game Jolt"
    }]);

db.createCollection("games");
db.games.insertMany([
    {
        "_id": "66e73b6e39b671fc3ef6217b",
        "title": "Monkey Business",
        "summary": "Pequeno resumo sobre o jogo",
        "description": "Descricao completa do jogo!",
        "genre": [
            {
                "_id": "66e5b34dbb2609fe3ce46cdd"
            },
            {
                "_id": "66e732b8e020fbae22c0b7a7"
            }
        ],
        "status": "Demo",
        "engine": {
            "_id": "66e70e757a19b685fe12a5e2"
        },
        "stores": [
            {
                "url": "https://monkey-suits.itch.io/monkey-business",
                "gamingPlatforms": {
                    "_id": "66e7349e987013a1e66fa9f5"
                }
            }
        ],
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzUwOTkyMTQucG5n/original/CR3w8l.png"
            }
        ]
    },
    {
        "_id": "66ecdbac3520228bec24bacd",
        "title": "Relatos de Vera Cruz",
        "summary": "Pequeno resumo sobre o jogo",
        "description": "Se eu tivesse que escolher entre minha esposa e o General Galba, é claro que eu ia escolher nosso General! Ele me ama muito mais que aquela velhaca!",
        "genre": [
            {
                "_id": "66e732b8e020fbae22c0b7a7"
            },
            {
                "_id": "66ecdae33520228bec24bac2"
            },
            {
                "_id": "66ecdaee3520228bec24bac4"
            }
        ],
        "status": "demo",
        "engine": {
            "_id": "66e70e757a19b685fe12a5e2"
        },
        "stores": [
            {
                "url": "https://store.steampowered.com/app/2691780/Relatos_de_Vera_Cruz/?l=brazilian",
                "gamingPlatforms": {
                    "_id": "66e5bbcc2423e76502a171f1"
                }
            }
        ],
        "images": [
            {
                "name": "Capa",
                "url": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2691780/header_brazilian.jpg?t=1712401842"
            }
        ]
    },
    {
        "_id": "66ecde73864af80749ca68ee",
        "title": "Downtown Run-Down",
        "summary": "Salve o maximo de pessoas mesmo que mate elas por isso!",
        "genre": [
            {
                "_id": "66e5b34dbb2609fe3ce46cdd"
            },
            {
                "_id": "66ecdae33520228bec24bac2"
            }
        ],
        "status": "released",
        "engine": {
            "_id": "66e70f141186426c051b22d9"
        },
        "stores": [
            {
                "url": "https://intellipix.itch.io/downtown-run-down",
                "gamingPlatforms": {
                    "_id": "66e7349e987013a1e66fa9f5"
                }
            }
        ],
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzMwMjE1NDkucG5n/original/v0rELV.png"
            }
        ]
    },
    {
        "_id": "66ede90957a8d083094f2169",
        "title": "Vizinha Viral",
        "summary": "Em meio a um surto de um vírus novo, você está preso em casa com uma vizinha inconvieniente e aparentemente infectada!",
        "description": "Em meio a um surto de um vírus novo, você está preso em casa com uma vizinha inconvieniente e aparentemente infectada! Evite ser infectado até o resgate chegar, mas mantenha a conversa, pois ela pode sair se ficar chateada!",
        "genre": [
            {
                "_id": "66e5b34dbb2609fe3ce46cdd"
            },
            {
                "_id": "66ede89457a8d083094f2161"
            },
            {
                "_id": "66ede8aa57a8d083094f2163"
            }
        ],
        "status": "released",
        "engine": {
            "_id": "66e70e757a19b685fe12a5e2"
        },
        "stores": [
            {
                "url": "https://play.google.com/store/apps/details?id=com.monkeysuits.viralvizinha",
                "gamingPlatforms": {
                    "_id": "66ede8f457a8d083094f2167"
                }
            }
        ],
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzMzNDQwMjAucG5n/original/5G6EEm.png"
            }
        ]
    },
    {
        "_id": "66ede9d457a8d083094f216d",
        "title": "Toolbox Maestro",
        "summary": "Nada melhor para estreitar laços entre pais e filhos do que construir uma casa na árvore! Infelizmente, seu pai é muito metódico... Melhor segui-lo passo a passo para evitar que fique bravo!",
        "genre": [
            {
                "_id": "66ede98957a8d083094f216b"
            }
        ],
        "status": "released",
        "engine": {
            "_id": "66e70e757a19b685fe12a5e2"
        },
        "stores": [
            {
                "url": "https://monkey-suits.itch.io/toolbox-maestro",
                "gamingPlatforms": {
                    "_id": "66e7349e987013a1e66fa9f5"
                }
            }
        ],
        "images": [
            {
                "name": "Capa",
                "url": "https://img.itch.zone/aW1nLzkzMTYzNDcucG5n/original/9JT7o5.png"
            }
        ]
    },
    {
        "_id": "66edeaea57a8d083094f2177",
        "title": "Desce mais uma",
        "summary": "Desce mais uma, o simulador de garçom frenético! A MONKEY SUITS EXPERIENCE.",
        "description": "No bar de beira de estrada mais badalado do momento, você, um simples garçom, se encontra sozinho com a tarefa árdua de servir o maior número de clientes, sedentos por um choppinho dourado espumando direto da TORRE! Sirva os clientes, ganhe dinheiro e reputação, expanda e coloque mais TORRES DE CHOPP e COPOS pelo bar para servir melhor os clientes. Agrade os críticos e não dê nenhuma gota para as crianças bisbilhoteiras! JOGO DESENVOLVIDO DO DIA 02/01/2021 AO DIA 09/01/2021 PARA A GAMEJAAJ V COM O TEMA 'TORRES'.",
        "genre": [
            {
                "_id": "66edeaaa57a8d083094f2173"
            }
        ],
        "status": "released",
        "engine": {
            "_id": "66e70e757a19b685fe12a5e2"
        },
        "stores": [
            {
                "url": "https://gamejolt.com/games/desce-mais-uma/574490",
                "gamingPlatforms": {
                    "_id": "66edeacc57a8d083094f2175"
                }
            }
        ],
        "images": [
            {
                "name": "Capa",
                "url": "https://m.gjcdn.net/game-header/1300/574490-iqzhu2h6-v4.webp"
            }
        ]
    }]);


