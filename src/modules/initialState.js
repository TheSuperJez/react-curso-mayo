import Immutable from 'immutable';

let initialState = new Immutable.Map()
	.set('questionModule',
	new Immutable.Map().set('questionsList', new Immutable.List())
	)
	.set('candidateModule',
	new Immutable.Map().set('candidatesList', new Immutable.List())
	)
	.set('examenModule',
	new Immutable.Map()
		.set('preguntasList', [{
			pregunta: '¿Qué es Javascript?',
			respuestas: ['Un lenguaje de programación Web',
				'Una plataforma de desarrollo para Windows',
				'Un lenguaje basado en Java'
			],
			respuestaCorrecta: 0,
			peso: 2,
			seleccionUsuario: 0
		},
		{
			pregunta: '¿Qué es React?',
			respuestas: ['Un lenguaje de programación Web',
				'Una Framework de desarrollo para la vista',
				'Un API para Facebook'
			],
			respuestaCorrecta: 1,
			peso: 2,
			seleccionUsuario: 0
		},
		{
			pregunta: '¿Qué es Redux?',
			respuestas: ['Una plataforma para desarrollo Web',
				'Un framework para hacer responsivas las paginas',
				'Un framework que permite manejar un estado global en las aplicaciones'
			],
			respuestaCorrecta: 2,
			peso: 1,
			seleccionUsuario: 0
		},
		{
			pregunta: '¿Qué es NodeJS?',
			respuestas: ['Una plataforma para desarrollo Web',
				'Una plataforma para aplicaciones Javascript',
				'Un sistema operativo'
			],
			respuestaCorrecta: 2,
			peso: 1,
			seleccionUsuario: 0
		},
		{
			pregunta: '¿Qué es webpack?',
			respuestas: ['Una librería para manejar colecciones y arreglos',
				'Una aplicacion web',
				'Un empaquetador web'
			],
			respuestaCorrecta: 2,
			peso: 1,
			seleccionUsuario: 0
		}
		])
		.set('calificacion'), 0.0)

	.set('ajaxModule', 0);

export default initialState;
