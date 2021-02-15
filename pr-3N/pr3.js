// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// const obj1 = { name: 'Maksym', age: 37, wife: true };
// const obj2 = { product: 'pig', height: 50, weight: 120 };
// const obj3 = { house: 45, street: 'Teremki', city: 'Kyiv' };
// const obj4 = { country: 'Ukraine', index: 3187, status: false };
// const obj5 = { post: true, floor: 12, neighbor: 'beauty' };

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = { nick: 'Kolya', skills: ['opera', 'WoT'], wife: { surname: 'cherry' } };
// let student = { id: 234568, books: ['Java', 'React', 'Node'], bike: { speed: 21 } };
// let tourist = { active: true, equipment: ['tent', 'ax', 'mangal'], vacation: { spring: 'March', summer: 'June', winter: 'december'}};
// let fisher = { fish: ['pike', 'shark', 'carp'], season: { first: 'autumn', quantity: 12 }, mashroom: 'white' };
// let laptop = {memory: {hdd:'1TB', ssd:'240GB'}, feature: ['Asus', 'X302L', 8, 'free Dos'], work: true};

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let key in obj1) {
//     console.log(key);
// };
// for (let key in obj2) {
//     console.log(key);
// };
// for (let key in obj3) {
//     console.log(key);
// };
// for (let key in obj4) {
//     console.log(key);
// };
// for (let key in obj5) {
//     console.log(key);
// };
// for (let key in man) {
//     console.log(key);
// };
// for (let key in man.wife) {
//     console.log(key);
// };
// for (let key in student) {
//     console.log(key);
// };
// for (let key in student.bike) {
//     console.log(key);
// };
// for (let key in tourist) {
//     console.log(key);
// };
// for (let key in tourist.vacation) {
//     console.log(key);
// };
// for (let key in fisher) {
//     console.log(key);
// };
// for (let key in fisher.season) {
//     console.log(key);
// };
// for (let key in laptop) {
//     console.log(key);
// };
// for (let key in laptop.memory) {
//     console.log(key);
// };

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(man));
// console.log(Object.keys(man.wife));
// console.log(Object.keys(student));
// console.log(Object.keys(student.bike));
// console.log(Object.keys(tourist));
// console.log(Object.keys(tourist.vacation));
// console.log(Object.keys(fisher));
// console.log(Object.keys(fisher.season));
// console.log(Object.keys(laptop));
// console.log(Object.keys(laptop.memory));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let arrCar = [
//     {
//         id: 01,
//         model: 'Lexus NX',
//         producer: 'Japan',
//         tankVolume: 60,
//         horsePower: 198,
//         color: 'black'
//     },
//     {
//         id: 02,
//         model: 'KIA Sorento',
//         producer: 'South Korea',
//         tankVolume: 80,
//         horsePower: 235,
//         color: 'green'
//     },
//     {
//         id: 03,
//         model: 'Peugeot 3008',
//         producer: 'France',
//         tankVolume: 43,
//         horsePower: 165,
//         color: 'grey'
//     },
//     {
//         id: 04,
//         model: 'Honda CR-V',
//         producer: 'Japan',
//         tankVolume: 57,
//         horsePower: 181,
//         color: 'white'
//     },
//     {
//         id: 05,
//         model: 'Mazda CX-5',
//         producer: 'Japan',
//         tankVolume: 56,
//         horsePower: 187,
//         color: 'red'
//     },
//     {
//         id: 06,
//         model: 'Skoda Octavia',
//         producer: 'Czech',
//         tankVolume: 50,
//         horsePower: 115,
//         color: 'silver'
//     },
//     {
//         id: 07,
//         model: 'Renault Sandero',
//         producer: 'France',
//         tankVolume: 50,
//         horsePower: 90,
//         color: 'blue'
//     },
//     {
//         id: 08,
//         model: 'Opel Insignia',
//         producer: 'Germany',
//         tankVolume: 70,
//         horsePower: 140,
//         color: 'orange'
//     },
//     {
//         id: 09,
//         model: 'Toyota RAV4',
//         producer: 'Japan',
//         tankVolume: 60,
//         horsePower: 203,
//         color: 'yellow'
//     },
//     {
//         id: 10,
//         model: 'Nissan Qashqai',
//         producer: 'Japan',
//         tankVolume: 65,
//         horsePower: 141,
//         color: 'broun'
//     }
// ];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//         {
//                 name: 'Kyiv',
//                 population: 2884000,
//                 country: 'Ukraine',
//                 region:'Europa',

//         },
//         {
//                 name: 'Lviv',
//                 population: 744314,
//                 country: 'Ukraine',
//                 region:'Europa',

//         },
//         {
//                 name: 'Lima',
//                 population: 9674755,
//                 country: 'Republic of Peru',
//                 region:'South America',

//         },
//         {
//                 name: 'Havana',
//                 population: 2131480,
//                 country: 'Republic of Cuba',
//                 region:'West Indies',

//         },
//         {
//                 name: 'Cape Town',
//                 population: 433688,
//                 country: 'Republic of South Africa',
//                 region:'Africa',

// }
// ]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let arrCarDrive = [
//     {
//         id: 01,
//         model: 'Lexus NX',
//         producer: 'Japan',
//         tankVolume: 60,
//         horsePower: 198,
//         color: 'black',
//         driver: {
//                 name: 'Ivan',
//                 age: 43,
//                 sex: 'male',
//                 experience: 14
//         }
//     },
//     {
//         id: 02,
//         model: 'KIA Sorento',
//         producer: 'South Korea',
//         tankVolume: 80,
//         horsePower: 235,
//         color: 'green',
//         driver: {
//                 name: 'Olya',
//                 age: 32,
//                 sex: 'female',
//                 experience: 8
//         }
//     },
//     {
//         id: 03,
//         model: 'Peugeot 3008',
//         producer: 'France',
//         tankVolume: 43,
//         horsePower: 165,
//         color: 'grey',
//         driver: {
//                 name: 'Fedya',
//                 age: 39,
//                 sex: 'male',
//                 experience: 18
//         }
//     },
//     {
//         id: 04,
//         model: 'Honda CR-V',
//         producer: 'Japan',
//         tankVolume: 57,
//         horsePower: 181,
//         color: 'white',
//         driver: {
//                 name: 'Katya',
//                 age: 41,
//                 sex: 'female',
//                 experience: 17
//         }
//     },
//     {
//         id: 05,
//         model: 'Mazda CX-5',
//         producer: 'Japan',
//         tankVolume: 56,
//         horsePower: 187,
//         color: 'red',
//         driver: {
//                 name: 'Lorem',
//                 age: 85,
//                 sex: 'male',
//                 experience: 52
//         }
//     }
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < arrCar.length) {
//         console.log(arrCar[i]);
//         i++;
// };
// let j = 0;
// while (j < cities.length) {
//         console.log(cities[j]);
//         j++;
// };
// let k = 0;
// while (k < arrCarDrive.length) {
//         console.log(arrCarDrive[k]);
//         k++;
// };

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < arrCar.length; i++) {
//       console.log(arrCar[i]);  
// }
// for (let j = 0; j < cities.length; j++) {
//       console.log(cities[j]);  
// }
// for (let k = 0; k < arrCarDrive.length; k++) {
//       console.log(arrCarDrive[k]);  
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let car of arrCar) {
//         console.log(car);
// };
// for (let city of cities) {
//         console.log(city);
// };
// for (let carDrive of arrCarDrive) {
//         console.log(carDrive);
// };

// - взять объекты из задания 1 и превратить каждый в json.
// const obj1 = { name: 'Maksym', age: 37, wife: true };
// const obj2 = { product: 'pig', height: 50, weight: 120 };
// const obj3 = { house: 45, street: 'Teremki', city: 'Kyiv' };
// const obj4 = { country: 'Ukraine', index: 3187, status: false };
// const obj5 = { post: true, floor: 12, neighbor: 'beauty' };

// let obj1Str = JSON.stringify(obj1);
// console.log(obj1Str);
// let obj2Str = JSON.stringify(obj2);
// console.log(obj2Str);
// let obj3Str = JSON.stringify(obj3);
// console.log(obj3Str);
// let obj4Str = JSON.stringify(obj4);
// console.log(obj4Str);
// let obj5Str = JSON.stringify(obj5);
// console.log(obj5Str);

// - взять json из задания 11 и превратить их обратно в объекты.

// let obj1Obj = JSON.parse(obj1Str);
// console.log(obj1Obj);
// let obj2Obj = JSON.parse(obj2Str);
// console.log(obj2Obj);
// let obj3Obj = JSON.parse(obj3Str);
// console.log(obj3Obj);
// let obj4Obj = JSON.parse(obj4Str);
// console.log(obj4Obj);
// let obj5Obj = JSON.parse(obj5Str);
// console.log(obj5Obj);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let arrCar = [
//     {
//         id: 01,
//         model: 'Lexus NX',
//         producer: 'Japan',
//         tankVolume: 60,
//         horsePower: 198,
//         color: 'black'
//     },
//     {
//         id: 02,
//         model: 'KIA Sorento',
//         producer: 'South Korea',
//         tankVolume: 80,
//         horsePower: 235,
//         color: 'green'
//     },
//     {
//         id: 03,
//         model: 'Peugeot 3008',
//         producer: 'France',
//         tankVolume: 43,
//         horsePower: 165,
//         color: 'grey'
//     },
//     {
//         id: 04,
//         model: 'Honda CR-V',
//         producer: 'Japan',
//         tankVolume: 57,
//         horsePower: 181,
//         color: 'white'
//     },
//     {
//         id: 05,
//         model: 'Mazda CX-5',
//         producer: 'Japan',
//         tankVolume: 56,
//         horsePower: 187,
//         color: 'red'
//     },
//     {
//         id: 06,
//         model: 'Skoda Octavia',
//         producer: 'Czech',
//         tankVolume: 50,
//         horsePower: 115,
//         color: 'silver'
//     },
//     {
//         id: 07,
//         model: 'Renault Sandero',
//         producer: 'France',
//         tankVolume: 50,
//         horsePower: 90,
//         color: 'blue'
//     },
//     {
//         id: 08,
//         model: 'Opel Insignia',
//         producer: 'Germany',
//         tankVolume: 70,
//         horsePower: 140,
//         color: 'orange'
//     },
//     {
//         id: 09,
//         model: 'Toyota RAV4',
//         producer: 'Japan',
//         tankVolume: 60,
//         horsePower: 203,
//         color: 'yellow'
//     },
//     {
//         id: 10,
//         model: 'Nissan Qashqai',
//         producer: 'Japan',
//         tankVolume: 65,
//         horsePower: 141,
//         color: 'broun'
//     }
// ];
// for (let i = 0; i < arrCar.length; i++) {
//     arrCar[i] = JSON.stringify(arrCar[i]);
// }
// console.log(arrCar);

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let cities = [
//     {
//         name: 'Kyiv',
//         population: 2884000,
//         country: 'Ukraine',
//         region: 'Europa',

//     },
//     {
//         name: 'Lviv',
//         population: 744314,
//         country: 'Ukraine',
//         region: 'Europa',

//     },
//     {
//         name: 'Lima',
//         population: 9674755,
//         country: 'Republic of Peru',
//         region: 'South America',

//     },
//     {
//         name: 'Havana',
//         population: 2131480,
//         country: 'Republic of Cuba',
//         region: 'West Indies',

//     },
//     {
//         name: 'Cape Town',
//         population: 433688,
//         country: 'Republic of South Africa',
//         region: 'Africa',

//     }
// ]
// for (let i = 0; i < cities.length; i++) {
//     cities[i] = JSON.stringify(cities[i]);
// }
// console.log(cities);
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let arrCarDrive = [
//     {
//         id: 01,
//         model: 'Lexus NX',
//         producer: 'Japan',
//         tankVolume: 60,
//         horsePower: 198,
//         color: 'black',
//         driver: {
//             name: 'Ivan',
//             age: 43,
//             sex: 'male',
//             experience: 14
//         }
//     },
//     {
//         id: 02,
//         model: 'KIA Sorento',
//         producer: 'South Korea',
//         tankVolume: 80,
//         horsePower: 235,
//         color: 'green',
//         driver: {
//             name: 'Olya',
//             age: 32,
//             sex: 'female',
//             experience: 8
//         }
//     },
//     {
//         id: 03,
//         model: 'Peugeot 3008',
//         producer: 'France',
//         tankVolume: 43,
//         horsePower: 165,
//         color: 'grey',
//         driver: {
//             name: 'Fedya',
//             age: 39,
//             sex: 'male',
//             experience: 18
//         }
//     },
//     {
//         id: 04,
//         model: 'Honda CR-V',
//         producer: 'Japan',
//         tankVolume: 57,
//         horsePower: 181,
//         color: 'white',
//         driver: {
//             name: 'Katya',
//             age: 41,
//             sex: 'female',
//             experience: 17
//         }
//     },
//     {
//         id: 05,
//         model: 'Mazda CX-5',
//         producer: 'Japan',
//         tankVolume: 56,
//         horsePower: 187,
//         color: 'red',
//         driver: {
//             name: 'Lorem',
//             age: 85,
//             sex: 'male',
//             experience: 52
//         }
//     }
// ];
// let newCarDrive = [];
// for (let i = 0; i < arrCarDrive.length; i++) {
//     newCarDrive[i] = JSON.stringify(arrCarDrive[i]);
// }
// console.log(newCarDrive);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{
//     name: 'vasya',
//     age: 31,
//     skills: ['JS', 'Java'],
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     skills: ['3D', 'C##'],
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     skills: ['Adobe', 'MS'],
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }];
// for (const user of users) {
//     console.log(user.name);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let newUsers = [];
// for (const user of users) {
//     for (const skill of user.skills) {
//         newUsers.push(skill);
//     }
// }
// console.log(newUsers);
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         skills: ['java', 'js']
//     }, {
//         name: 'petya',
//         age: 30,
//         status: true,
//         skills: ['java', 'js', 'html']
//     }, {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         skills: ['mysql', ',mongo']
//     }, {
//         name: 'olya',
//         age: 28,
//         status: false,
//         skills: ['java', 'js']
//     }, {
//         name: 'max',
//         age: 30,
//         status: true,
//         skills: ['mysql', ',mongo']
//     }];
// for (let user of users) {
//     console.log(user);
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
// }


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// let arrAdress = [];
// for (let user of users) {
//     arrAdress.push(user.address);
// }
// console.log(arrAdress);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i = 0; i < users.length; i++) {

//     let arrAdress = [];
//     for (let user of users) {
//         arrAdress.push(user.address);
//     }

//     const div = document.createElement("div");
//     div.innerText = `name: ${users[i].name} age: ${users[i].age} status: ${users[i].status} city: ${arrAdress[i].city} country:${arrAdress[i].country} street: ${arrAdress[i].street}`;
//     document.body.appendChild(div);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {

//     let arrAddress = [];
//     for (let user of users) {
//         arrAddress.push(user.address);
//     }

//     const div = document.createElement("div");

//     const divName = document.createElement("div");
//     divName.innerText = `name: ${users[i].name}`

//     const divAge = document.createElement("div");
//     divAge.innerText = `age: ${users[i].age}`;

//     const divStatus = document.createElement("div");
//     divStatus.innerText = `status: ${users[i].status}`;

//     const divAddress = document.createElement("div");
//     divAddress.innerText = `city: ${arrAddress[i].city} country:${arrAddress[i].country} street: ${arrAddress[i].street}`;

//     div.appendChild(divName);
//     div.appendChild(divAge);
//     div.appendChild(divStatus);
//     div.appendChild(divAddress);
//     document.body.appendChild(div);
// };
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {

//     let arrAddress = [];
//     for (let user of users) {
//         arrAddress.push(user.address);
//     }

//     const div = document.createElement("div");

//     const divName = document.createElement("h2");
//     divName.innerText = `name: ${users[i].name}`

//     const divAge = document.createElement("div");
//     divAge.innerText = `age: ${users[i].age}`;

//     const divStatus = document.createElement("div");
//     divStatus.innerText = `status: ${users[i].status}`;

//     const divAddress = document.createElement("div");
//     divAddress.innerText = `Address:`;

//     const city = document.createElement("div");
//     city.innerText = `- city: ${arrAddress[i].city}`;

//     const country = document.createElement("div");
//     country.innerText = `- country: ${arrAddress[i].country}`;

//     const street = document.createElement("div");
//     street.innerText = `- street: ${arrAddress[i].street}`;

//     div.appendChild(divName);
//     div.appendChild(divAge);
//     div.appendChild(divStatus);
//     div.appendChild(divAddress).appendChild(city);
//     div.appendChild(divAddress).appendChild(country);
//     div.appendChild(divAddress).appendChild(street);
//     document.body.appendChild(div);
// };

//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

        // let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false },];
        // let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' },];
        // let usersWithCities = JSON.parse(JSON.stringify(usersWithId));

        // for (let user of usersWithCities) {      //var-1
        //     for (let city of citiesWithId) {
        //         if (user.id === city.user_id) {
        //             user.address = city;
        //         }
        //     }
        // }
        // console.log(usersWithCities);
        // console.log(usersWithId);


        // usersWithCities.forEach(user => {            //var-2
        //     user.address = citiesWithId.find(value => value.user_id === user.id)
        // });
        // console.log(usersWithCities);
        // console.log(usersWithId);






// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

            // const box = document.createElement('div');
            // box.id = 'main';
            // box.className = 'test';
            // box.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, labore.";
            // document.body.appendChild(box);
            // let textMain = document.getElementById('main');
            // console.log(textMain);
            // let innerText = textMain.innerHTML;
            // console.log(innerText);
            // const textClass = document.getElementsByClassName('test');
            // for (let element of textClass) {
            //     element.innerText = "Hello Okten)";
            //     console.log(element);
            // }
            // const textTag = document.getElementsByTagName('div')
            // for (let tag of textTag) {
            //     tag.innerText = "Hello WORLD";
            //     console.log(tag);
            // }



// - змінити цей текст використовуючи селектори id, class,  tag
            // textMain.innerText = "GOOD NIGHT!ALL Sleep";
            // console.log(textMain);

            // const textClass = document.getElementsByClassName('test');
            // for (let element of textClass) {
            //     element.innerText = "Hello Okten)";
            //     console.log(element);}

            // const textTag = document.getElementsByTagName('div')
            // for (let tag of textTag) {
            //     tag.innerText = "Hello WORLD";
            //     console.log(tag);
            // }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
        // const box = document.createElement('div');
        // box.id = 'main';
        // box.className = 'test';
        // box.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, labore.";
        // document.body.appendChild(box);
        // let textMain = document.getElementById('main');
        // console.log(textMain);
        // const my_arr_Tag = document.getElementsByTagName('div');
        // for (let element of my_arr_Tag) {
        //         element.style.width = '400px';
        //         element.style.height = '400px';
        //         element.style.backgroundColor = 'grey';
        // }
        // const my_arr_Class = document.getElementsByClassName('test');
        // for (let element of my_arr_Class) {
        //         element.style.width = '600px';
        //         element.style.height = '200px';
        //         element.style.backgroundColor = 'tomato';
        // }
        // textMain.style.width = '500px';
        // textMain.style.height = '150px';
        // textMain.style.backgroundColor = 'green';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

        // const boxTable = document.createElement('table');
        // const TableTr = document.createElement('tr');
        // const TableTd1 = document.createElement('td');
        // const TableTd2 = document.createElement('td');
        // const TableTd3 = document.createElement('td');
        // TableTd1.innerText = '123';
        // TableTd2.innerText = 'world';
        // TableTd3.innerText = 123;
        // document.body.appendChild(boxTable);
        // document.body.appendChild(boxTable).appendChild(TableTr);
        // document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd1);
        // document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd2);
        // document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd3);
        // console.log(boxTable);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//         const boxTable = document.createElement('table');
//         for (i = 0; i < 10; i++) {
//            const TableTr = document.createElement('tr');
//            const TableTd1 = document.createElement('td');
//            const TableTd2 = document.createElement('td');
//            const TableTd3 = document.createElement('td');
//            TableTd1.innerText = 10 + i * 10;
//            TableTd2.innerText = 10 + i * 20;
//            TableTd3.innerText = 10 + i * 100;
//            document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd1);
//            document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd2);
//            document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd3);
//            document.body.appendChild(boxTable).appendChild(TableTr);
//          };
//         document.body.appendChild(boxTable);
//         console.log(boxTable);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

            // const boxTable = document.createElement('table');
            // for (i = 0; i < 10; i++) {
            //         const TableTr = document.createElement('tr');
            //         for (j = 0; j < 5; j++) {
            //                 const TableTd1 = document.createElement('td');
            //                 TableTd1.innerText = 10 + j * 10;
            //                 document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd1);
            //         };
            //         document.body.appendChild(boxTable).appendChild(TableTr);
            // }
            // document.body.appendChild(boxTable);
            // console.log(boxTable);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
        // let n = +prompt('Enter a number of lines');
        // let m = +prompt('Enter a number of columns');
        // const boxTable = document.createElement('table');
        // for (i = 0; i < n; i++) {
        //         const TableTr = document.createElement('tr');
        //         for (j = 0; j < m; j++) {
        //                 const TableTd1 = document.createElement('td');
        //                 TableTd1.innerText = 10 + j * 10;
        //                 document.body.appendChild(boxTable).appendChild(TableTr).appendChild(TableTd1);
        //         };
        //         document.body.appendChild(boxTable).appendChild(TableTr);
        // }
        // document.body.appendChild(boxTable);
        // console.log(boxTable);


// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
        // let arrNew = [];
        // const arrClass = document.getElementsByTagName('*');
        // for (let cla of arrClass) {
        //         if (cla.getAttribute('class')) {
        //                 console.log(cla);
        //                 arrNew.push(cla);
        //         };
        // };
        // console.log(arrNew);
        //  - знайти всі параграфи ,та змінити текст на hello oktenweb!
        // let arrNew = [];
        // const arrClass = document.getElementsByTagName('p');
        // for (let cla of arrClass) {
        //         cla.innerText = "hello oktenweb!"
        //         arrNew.push(cla);
        // };
        // console.log(arrNew);

//  - знайти всі div та змінити ім колір на червоний
        // const arrClass = document.getElementsByTagName('div');   // var-1
        // for (let cla of arrClass) {
        //         cla.style.color = 'red'
        // };

            // const arrClass = document.querySelectorAll('div');                     // var-2
            // for (let cla of arrClass) {
            //         cla.style.color = 'tomato'
            // };

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
        // const box = document.getElementById('content');
        // console.log(box);
        // const ulH = document.createElement('ul');
        // const arrH = document.querySelectorAll('h2');
        // for (i = 0; i < arrH.length; i++) {
        //         const liH = document.createElement('li');
        //         liH.innerText = arrH[i].innerText;
        //         ulH.appendChild(liH);
        // };
        // box.appendChild(ulH);



// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//         {
//                 title: 'Первое правило Бойцовского клуба.',
//                 body: 'Никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//                 title: 'Второе правило Бойцовского клуба.',
//                 body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//                 title: 'Третье правило Бойцовского клуба.',
//                 body: 'В схватке участвуют только двое.'
//         },
//         {
//                 title: 'Четвертое правило Бойцовского клуба.',
//                 body: 'Не более одного поединка за один раз.'
//         },
//         {
//                 title: 'Пятое правило Бойцовского клуба.',
//                 body: 'Бойцы сражаются без обуви и голые по пояс.'
//         },
//         {
//                 title: 'Шестое правило Бойцовского клуба.',
//                 body: 'Поединок продолжается столько, сколько потребуется.'
//         },
//         {
//                 title: 'Седьмое правило Бойцовского клуба.',
//                 body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//         },
//         {
//                 title: 'Восьмое и последнее правило Бойцовского клуба.',
//                 body: 'Новичок обязан принять бой. Первый и последний.'
//         },
// ];

            // const wrap = document.createElement('div');
            // wrap.id = 'wrap';
            // for (i = 0; i < rules.length; i++) {
            //         const rule = rules[i];
            //         const div = document.createElement('div');
            //         const h2 = document.createElement('h2');
            //         const p = document.createElement('p');
            //         div.className = `rules rule${i}`;
            //         h2.innerText = rule.title;
            //         p.innerText = rule.body;
            //         div.appendChild(h2);
            //         div.appendChild(p);
            //         wrap.appendChild(div);
            // }
            // document.body.appendChild(wrap);


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
        // async function getResponse() {                  // var - 1
        //     let response = await fetch('https://jsonplaceholder.typicode.com/users');
        //     let content = await response.json();
        //     const wrap = document.createElement('div');
        //     let key;
        //     for (key in content) {
        //         wrap.innerHTML += `
        //         <div>
        //             <div>
        //                 id: ${content[key].id} <br/>
        //                 name: ${content[key].name} <br/>
        //                 username: ${content[key].username} <br/>
        //                 email: ${content[key].email} <br/>
        //                 <div> 
        //                     address: <br/>
        //                     street:${content[key].address.street} <br/>
        //                     suite:${content[key].address.suite} <br/>
        //                     city:${content[key].address.city} <br/>
        //                     zipcode:${content[key].address.zipcode} <br/>
        //                     <div> 
        //                         Geo: <br/>
        //                         lat:${content[key].address.geo.lat} <br/>
        //                         lng:${content[key].address.geo.lng} <br/>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>        
        //             phone: ${content[key].phone} <br/>
        //             </div>
        //             <div>
        //             website: ${content[key].website} <br/>
        //             </div>
        //             <div> company:<br/>
        //                     name: ${content[key].company.name} <br/>
        //                     catchPhrase: ${content[key].company.catchPhrase} <br/>
        //                     bs: ${content[key].company.bs} <br/>
        //             </div>
        //         <hr/>
        //         </div>`
        //     };
        //     document.body.appendChild(wrap);
        // };
        // getResponse();


                // const wrap = document.createElement('div');             // var - 2
                // fetch('https://jsonplaceholder.typicode.com/users')
                //     .then(r => r.json())
                //     .then(result => {
                //         console.log(result);
                //         let key;
                //         for (key in result) {
                //             wrap.innerHTML += `
                // <div>
                //             <div>
                //                 id: ${result[key].id} <br/>
                //                 name: ${result[key].name} <br/>
                //                 username: ${result[key].username} <br/>
                //                 email: ${result[key].email} <br/>
                //                 <div> 
                //                     address: <br/>
                //                     street:${result[key].address.street} <br/>
                //                     suite:${result[key].address.suite} <br/>
                //                     city:${result[key].address.city} <br/>
                //                     zipcode:${result[key].address.zipcode} <br/>
                //                     <div> 
                //                         Geo: <br/>
                //                         lat:${result[key].address.geo.lat} <br/>
                //                         lng:${result[key].address.geo.lng} <br/>
                //                     </div>
                //                 </div>
                //             </div>
                //             <div>        
                //                  phone: ${result[key].phone} <br/>
                //             </div>
                //             <div>
                //                  website: ${result[key].website} <br/>
                //             </div>
                //             <div> company:<br/>
                //                     name: ${result[key].company.name} <br/>
                //                     catchPhrase: ${result[key].company.catchPhrase} <br/>
                //                     bs: ${result[key].company.bs} <br/>
                //             </div>
                //         <hr/>
                //         </div>`
                //         };
                //         document.body.appendChild(wrap);
                //     })


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

        // async function getResponse() {   //var-1
        //     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //     let content = await response.json();
        //     const wrap = document.createElement('div');
        //     let key;
        //     for (key in content) {
        //         wrap.innerHTML += `
        //         <div>
        //             <div>
        //                 userId: ${content[key].userId} <br/>
        //                 id: ${content[key].id} <br/>
        //                 title: ${content[key].title} <br/>
        //                 body: "${content[key].body}"  <br/>
        //             </div>
        //         <hr/>
        //         </div>`
        //     };
        //     document.body.appendChild(wrap);
        // };
        // getResponse();


                // const wrap = document.createElement('div');             // var - 2
                // fetch('https://jsonplaceholder.typicode.com/posts')
                //     .then(r => r.json())
                //     .then(result => {
                //         console.log(result);
                //         let key;
                //         for (key in result) {
                //             wrap.innerHTML += `
                // <div>
                //             <div>
                //                 userId: ${result[key].userId} <br/>
                //                 id: ${result[key].id} <br/>
                //                 title: ${result[key].title} <br/>
                //                 body: "${result[key].body}"  <br/>
                //             </div>
                //         <hr/>
                //         </div>`
                //         };
                //         document.body.appendChild(wrap);
                //     })


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

            // async function getResponse() {            //var-1
            //     let response = await fetch('https://jsonplaceholder.typicode.com/comments');
            //     let content = await response.json();
            //     const wrap = document.createElement('div');
            //     let key;
            //     for (key in content) {
            //         wrap.innerHTML += `
            //         <div>
            //             <div>
            //                 postId: ${content[key].postId} <br/>
            //                 id: ${content[key].id} <br/>
            //                 name: ${content[key].name} <br/>
            //                 email: ${content[key].email} <br/>
            //                 body: "${content[key].body}"  <br/>
            //             </div>
            //         <hr/>
            //         </div>`
            //     };
            //     document.body.appendChild(wrap);
            // };
            // getResponse();

                    // const wrap = document.createElement('div');             // var - 2
                    // fetch('https://jsonplaceholder.typicode.com/comments')
                    //     .then(r => r.json())
                    //     .then(result => {
                    //         console.log(result);
                    //         let key;
                    //         for (key in result) {
                    //             wrap.innerHTML += `
                    // <div>
                    //             <div>
                    //                 postId: ${result[key].postId} <br/>
                    //                 id: ${result[key].id} <br/>
                    //                 name: ${result[key].name} <br/>
                    //                 email: ${result[key].email} <br/>
                    //                 body: "${result[key].body}"  <br/>
                    //             </div>
                    //         <hr/>
                    //         </div>`
                    //         };
                    //         document.body.appendChild(wrap);
                    //     })

// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

                // const wrap = document.createElement('div');
                // fetch('https://jsonplaceholder.typicode.com/posts')
                //     .then(r => r.json())
                //     .then(result => {
                //         let key;
                //         let key2;
                //         fetch('https://jsonplaceholder.typicode.com/comments')
                //             .then(r1 => r1.json())
                //             .then(rescom => {
                //                 for (key in result) {
                //                     wrap.innerHTML += `
                //                             <div>
                //                             <div>
                //                                 userId: ${result[key].userId} <br/>
                //                                 id: ${result[key].id} <br/>
                //                                 title: ${result[key].title} <br/>
                //                                 body: ${result[key].body}  <br/>
                //                             </div>
                //                             </div>`;
                //                     for (key2 in rescom) {
                //                         if (rescom[key2].postId === result[key].id) {
                //                             wrap.innerHTML += `
                //                     <div>
                //                         <div>
                //                             postId: ${rescom[key2].postId} <br/>
                //                             id: ${rescom[key2].id} <br/>
                //                             name: ${rescom[key2].name} <br/>
                //                             email: ${rescom[key2].email} <br/>
                //                             body: ${rescom[key2].body}  <br/>
                //                         </div>
                //                     </div>`}
                //                     };
                //                     wrap.innerHTML += `<hr/>`
                //                 }
                //             });
                //         document.body.appendChild(wrap);
                //     });