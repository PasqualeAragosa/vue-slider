/*

DESCRIZIONE:
Partendo dal markup della versione svolta in js plain (vedi allegato), rifare lo slider ma questa volta usando Vue.

BONUS:
al click su una thumb, visualizzare in grande l'immagine corrispondente

applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe

*/

const {createApp} = Vue;

createApp({
    data() {
        return {
            current: 0,
            movies: {
                images: [
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp'
                ],
                titles: [
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    "Marvel's Avengers"
                ],
                texts: [
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
                ],
            }
        }
    },
    methods: {
        prevSlide() {
            this.current--;
            if (this.current === -1) {
                this.current = this.movies.images.length - 1;
            }
        },
        nextSlide() {
            this.current++;
            if (this.current === this.movies.images.length) {
                this.current = 0;
            }
        }
    }
}).mount('#app');