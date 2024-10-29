new Vue({
    el: '#app',
    data: {
      nombre: '',
      nombreIngresado: false,
      preguntas: [
        { texto: '¿Cuál es tu color favorito?', respuestas: [{ texto: 'Rojo', puntos: 10 }, { texto: 'Azul', puntos: 5 }, { texto: 'Verde', puntos: 3 }] },
        { texto: '¿Qué prefieres hacer en tu tiempo libre?', respuestas: [{ texto: 'Leer', puntos: 5 }, { texto: 'Deporte', puntos: 8 }, { texto: 'Ver TV', puntos: 2 }] },
        { texto: '¿Qué tipo de música prefieres?', respuestas: [{ texto: 'Pop', puntos: 6 }, { texto: 'Rock', puntos: 7 }, { texto: 'Clásica', puntos: 4 }] },
        { texto: '¿Cuál es tu estación del año favorita?', respuestas: [{ texto: 'Verano', puntos: 8 }, { texto: 'Invierno', puntos: 6 }, { texto: 'Otoño', puntos: 4 }] },
        { texto: '¿Cuál es tu comida favorita?', respuestas: [{ texto: 'Pizza', puntos: 8 }, { texto: 'Ensalada', puntos: 5 }, { texto: 'Sushi', puntos: 7 }] },
        { texto: '¿Prefieres viajar en...', respuestas: [{ texto: 'Avión', puntos: 9 }, { texto: 'Coche', puntos: 6 }, { texto: 'Tren', puntos: 4 }] },
        { texto: '¿Cuál es tu animal favorito?', respuestas: [{ texto: 'Perro', puntos: 8 }, { texto: 'Gato', puntos: 6 }, { texto: 'Pájaro', puntos: 3 }] },
        { texto: '¿Cuál es tu deporte favorito?', respuestas: [{ texto: 'Fútbol', puntos: 9 }, { texto: 'Baloncesto', puntos: 7 }, { texto: 'Natación', puntos: 5 }] },
        { texto: '¿Prefieres el cine o el teatro?', respuestas: [{ texto: 'Cine', puntos: 8 }, { texto: 'Teatro', puntos: 5 }, { texto: 'Ambos', puntos: 6 }] },
        { texto: '¿Cuál es tu bebida favorita?', respuestas: [{ texto: 'Café', puntos: 9 }, { texto: 'Té', puntos: 6 }, { texto: 'Agua', puntos: 4 }] },
      ],
      respuestas: [],
      mostrarResultado: false,
      resultado: ''
    },
    methods: {
      ingresarNombre() {
        if (this.nombre) {
          this.nombreIngresado = true;
        }
      },
      calcularPuntaje() {
        let total = this.respuestas.reduce((acc, puntos) => acc + (puntos || 0), 0);
        if (total > 60) {
          this.resultado = `${this.nombre}, tienes una personalidad muy activa.`;
        } else {
          this.resultado = `${this.nombre}, prefieres la tranquilidad.`;
        }
        this.mostrarResultado = true;
      }
    }
  });
  