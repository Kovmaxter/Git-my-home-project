// по ДЗ : 
// - Створити масив автівок з полями id,
// model, producer, tankVolume, horsePower, image. 
// 15 об'єктів.
// Вивести увесь масив в документ
// застилізувавши його по 2 елементи в ряд

let arrCar = [
    {
        id: 01,
        model: 'Lexus NX',
        producer: 'Japan',
        tankVolume: 60,
        horsePower: 198,
        image: './img/Lexus_NX_01.jpg'
    },
    {
        id: 02,
        model: 'KIA Sorento',
        producer: 'South Korea',
        tankVolume: 80,
        horsePower: 235,
        image: './img/KIA_Sorento_11.jpg'
    },
    {
        id: 03,
        model: 'Toyota Prius',
        producer: 'Japan',
        tankVolume: 43,
        horsePower: 98,
        image: './img/Toyota Prius.jpg'
    },
    {
        id: 04,
        model: 'Mazda MX-5',
        producer: 'Japan',
        tankVolume: 50,
        horsePower: 181,
        image: './img/Mazda MX-5.jpg'
    },
    {
        id: 05,
        model: 'Peugeot 3008',
        producer: 'France',
        tankVolume: 43,
        horsePower: 165,
        image: './img/Peugeot_3008_01.jpg'
    },
    {
        id: 06,
        model: 'Honda CR-V',
        producer: 'Japan',
        tankVolume: 57,
        horsePower: 181,
        image: './img/Honda_CRV_01.jpg'
    },
    {
        id: 07,
        model: 'Mazda CX-5',
        producer: 'Japan',
        tankVolume: 56,
        horsePower: 187,
        image: './img/Mazda_CX5_08.jpg'
    },
    {
        id: 08,
        model: 'Skoda Octavia',
        producer: 'Czech',
        tankVolume: 50,
        horsePower: 115,
        image: './img/Skoda_Octavia_10.jpg'
    },
    {
        id: 09,
        model: 'Lexus CT',
        producer: 'Japan',
        tankVolume: 35.5,
        horsePower: 134,
        image: './img/Lexus CT.jpg'
    },
    {
        id: 10,
        model: 'Renault Sandero',
        producer: 'France',
        tankVolume: 50,
        horsePower: 90,
        image: './img/Renault Sandero.jpg'
    },
    {
        id: 11,
        model: 'Fiat 500X',
        producer: 'Italy',
        tankVolume: 48,
        horsePower: 177,
        image: './img/Fiat 500X.jpg'
    },
    {
        id: 12,
        model: 'Opel Insignia',
        producer: 'Germany',
        tankVolume: 70,
        horsePower: 140,
        image: './img/Opel_Insignia_01.jpg'
    },
    {
        id: 13,
        model: 'Toyota RAV4',
        producer: 'Japan',
        tankVolume: 60,
        horsePower: 203,
        image: './img/Toyota RAV4.jpg'
    },
    {
        id: 14,
        model: 'Nissan Qashqai',
        producer: 'Japan',
        tankVolume: 65,
        horsePower: 141,
        image: './img/Nissan Qashqai.jpg'
    },
    {
        id: 15,
        model: 'Hyundai Tucson',
        producer: 'Korean',
        tankVolume: 62,
        horsePower: 181,
        image: './img/Hyundai_Tucson_2.0_.jpg'
    }
];
for (let i = 0; i < arrCar.length; i++) {
    document.write(`
<div class="car-item">
    <figure>
        <h2>${arrCar[i].model}&nbsp&nbsp&nbsp&nbsp # ${arrCar[i].id}</h2>
        <img src="${arrCar[i].image}" alt="${arrCar[i].model}">
    <figcaption> Producer: ${arrCar[i].producer} <br/>
                Tank Volume: ${arrCar[i].tankVolume} l<br/>
                Horse Power: ${arrCar[i].horsePower} hp<br/>
    </figcaption>
    </figure>
 </div>
`);
}