import { kutyakMegjelenitese, kutyafajtak } from './fuggvenyek.js';

(function() {
    const tartalom = kutyakMegjelenitese(kutyafajtak);
    document.querySelector('.tartalom').innerHTML = tartalom;
}
)
();

document.getElementById("gomb").addEventListener("click", displayDate);