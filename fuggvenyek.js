export const kutyafajtak = [
    {
        nev: "Fekete kutya",
        elohely: "Amerika",
        kep: "kutya1.jpg"
    },
    {
        nev: "Barna kutya",
        elohely: "Oroszország",
        kep: "kutya2.webp"
    },
    {
        nev: "Barna kutya2",
        elohely: "Ázsia",
        kep: "kutya3.jpg"
    },
    {
        nev: "Fehér kutya",
        elohely: "Antarktisz",
        kep: "kutya4.jpg"
    },
    {
        nev: "Fekete kutya",
        elohely: "Ruanda",
        kep: "kutya5.jpg"
    }
];

export function kutyakMegjelenitese(kutyafajtak) {
    let htmlTartalom = '';
    for (let kutya of kutyafajtak) {
        htmlTartalom += `
            <div class="kutya">
                <img src="${kutya.kep}" alt="${kutya.nev}">
            </div>
        `;
    }
    return htmlTartalom;
}


