/*

BONUS:
applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

*/

const {createApp} = Vue;

createApp({
    data() {
        return {
            current: 0,
            movies: {
                images: [
                    'assets/img/01.webp',
                    'assets/img/02.webp',
                    'assets/img/03.webp',
                    'assets/img/04.webp',
                    'assets/img/05.webp'
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
        },
        selectSlide(index) {
            this.current = index;
        }
    }
}).mount('#app');