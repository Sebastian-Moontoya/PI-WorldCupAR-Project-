const countryData = {
    "Tunez": {
        model: "modelos/tunez.glb", 
        video: "videos/tunez.mp4",
        stats: {
            "copas": 0,
            "participaciones": 6,
            "mejorPosicion": "Fase de grupos"
        },
        trivia: {
            question: "¿Cuál fue el primer equipo africano en ganar un partido en un Mundial?",
            options: ["Camerún", "Túnez (en 1978)", "Nigeria"],
            correctAnswer: "Túnez (en 1978)"
        }
    },"Marruecos": {
        model: "modelos/marruecos.glb", 
        video: "videos/marruecos.mp4",
        stats: {
            "copas": 0,
            "participaciones": 6,
            "mejorPosicion": "4to lugar (2022)"
        },
        trivia: {
            question: "¿En qué mundial Marruecos hizo historia llegando a semifinales?",
            options: ["Rusia 2018", "Qatar 2022", "Sudáfrica 2010"],
            correctAnswer: "Qatar 2022"
        }
    },"Paraguay": {
        model: "modelos/paraguay.glb", 
        video: "videos/paraguay.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 8,
            "mejorPosicion": "Cuartos de final (2010)"
        },
        trivia: {
            question: "¿Cuál fue la mejor participación de Paraguay en un mundial?",
            options: ["Cuartos de final (2010)", "Octavos de final (1998)", "Fase de grupos"],
            correctAnswer: "Cuartos de final (2010)"
        }
    },"Colombia": {
        model: "modelos/colombia.glb", 
        video: "videos/colombia.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 6,
            "mejorPosicion": "Cuartos de final (2014)"
        },
        trivia: {
            question: "¿Quién fue el goleador del mundial Brasil 2014?",
            options: ["Lionel Messi", "Thomas Müller", "James Rodríguez"],
            correctAnswer: "James Rodríguez"
        }
    },"Uruguay": {
        model: "modelos/uruguay.glb", 
        video: "videos/uruguay.mp4", 
        stats: {
            "copas": 2,
            "participaciones": 14,
            "mejorPosicion": "Campeón"
        },
        trivia: {
            question: "¿En qué año ganó Uruguay el primer mundial?",
            options: ["1930", "1950", "1924"],
            correctAnswer: "1930"
        }
    },"Ecuador": {
        model: "modelos/ecuador.glb", 
        video: "videos/ecuador.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 4,
            "mejorPosicion": "Octavos de final (2006)"
        },
        trivia: {
            question: "¿En qué mundial Ecuador llegó a Octavos de final?",
            options: ["Alemania 2006", "Brasil 2014", "Corea-Japón 2002"],
            correctAnswer: "Alemania 2006"
        }
    },"Australia": {
        model: "modelos/australia.glb", 
        video: "videos/australia.mp4",
        stats: {
            "copas": 0,
            "participaciones": 6,
            "mejorPosicion": "Octavos de final"
        },
        trivia: {
            question: "¿Cuál es el apodo de la selección australiana?",
            options: ["Kangaroos", "Socceroos", "Wallabies (es de rugby)"],
            correctAnswer: "Socceroos"
        }
    },"Jordania": {
        model: "modelos/jordania.glb", 
        video: "videos/jordania.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 0,
            "mejorPosicion": "Nunca ha clasificado"
        },
        trivia: {
            question: "¿Jordania ha participado en algún Mundial de la FIFA?",
            options: ["Si", "No", "Solo una vez"],
            correctAnswer: "No"
        }
    },"SouthKorea": {
        model: "modelos/southkorea.glb", 
        video: "videos/southkorea.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 11,
            "mejorPosicion": "4to lugar (2002)"
        },
        trivia: {
            question: "¿Cuál fue la mejor participación de Corea del Sur?",
            options: ["Cuartos de final", "4to lugar (2002)", "Octavos de final"],
            correctAnswer: "4to lugar (2002)"
        }
    },"Uzbekistan": {
        model: "modelos/uzbekistan.glb",
        video: "videos/uzbekistan.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 0,
            "mejorPosicion": "Nunca ha clasificado"
        },
        trivia: {
            question: "¿Ha clasificado Uzbekistán alguna vez al Mundial de la FIFA?",
            options: ["Si, una vez", "Si, dos veces", "No"],
            correctAnswer: "No"
        }
    },"Argentina": {
        model: "modelos/argentina.glb", 
        video: "videos/argentina.mp4", 
        stats: {
            "copas": 3,
            "participaciones": 18,
            "mejorPosicion": "Campeón"
        },
        trivia: {
            question: "¿Cuántas Copas del Mundo tiene Argentina?",
            options: ["1", "2", "3"],
            correctAnswer: "3"
        }
    },"Iran": {
        model: "modelos/iran.glb", 
        video: "videos/iran.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 6,
            "mejorPosicion": "Fase de grupos"
        },
        trivia: {
            question: "¿Cuántas victorias tiene Irán en la historia de los mundiales?",
            options: ["0", "3", "1"],
            correctAnswer: "3"
        }
    },"Japon": {
        model: "modelos/japon.glb", 
        video: "videos/japon.mp4",
        stats: {
            "copas": 0,
            "participaciones": 7,
            "mejorPosicion": "Octavos de final"
        },
        trivia: {
            question: "¿Cuál es el apodo de la selección japonesa de fútbol?",
            options: ["Los Samuráis Azules", "Los Dragones", "Sol Naciente"],
            correctAnswer: "Los Samuráis Azules"
        }
    },"NuevaZelanda": {
        model: "modelos/nuevazelanda.glb", 
        video: "videos/nuevazelanda.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 2,
            "mejorPosicion": "Fase de grupos"
        },
        trivia: {
            question: "¿Cuál es el apodo de la selección de Nueva Zelanda?",
            options: ["All Whites", "Kiwis", "All Blacks (es de rugby)"],
            correctAnswer: "All Whites"
        }
    },"EstadosUnidos": {
        model: "modelos/estadosunidos.glb", 
        video: "videos/estadosunidos.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 11,
            "mejorPosicion": "3er lugar (1930)"
        },
        trivia: {
            question: "¿Cuál es la mejor posición de EE.UU. en un mundial?",
            options: ["3er lugar (1930)", "Cuartos de final (2002)", "Octavos de final"],
            correctAnswer: "3er lugar (1930)"
        }
    },"Canada": {
        model: "modelos/canada.glb",
        video: "videos/canada.mp4", 
        stats: {
            "copas": 0,
            "participaciones": 2,
            "mejorPosicion": "Fase de grupos"
        },
        trivia: {
            question: "¿En qué mundial anotó Canadá su primer gol?",
            options: ["México 1986", "Qatar 2022", "Rusia 2018"],
            correctAnswer: "Qatar 2022"
        }
    },
    "Brasil": {
        model: "modelos/brasil.glb", 
        video: "/assets/videos/Mexico_Brasil.MP4", 
        stats: {
            "copas": 5, 
            "participaciones": 22,
            "mejorPosicion": "Campeón"
        }, 
        trivia: {
            question: "¿Cuántos títulos ha ganado la selección brasileña?",
            options: ["3", "4", "5"], 
            correctAnswer: "5"
        }
    }, "Mexico":{
        model: "modelos/mexico.glb", 
        video: "/assets/videos/Mexico_Brasil.MP4",
        stats: {
            "copas": 0, 
            "participaciones": 18, 
            "mejorPosicion": "Cuartos de final"
        }, 
        trivia: {
            question: "¿Cuál es el máximo goleador de la selección mexicana?", 
            options: ["Hugo Sanchez", "Chicharito Hernández", "Jared Borgetti"], 
            correctAnswer: "Chicharito Hernández"
        }
    }
}