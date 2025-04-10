// Массив мероприятий
const eventsStore = [
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      date: "WED, MAR 13 · 11:30 PM UTC",
      image: "https://s3-alpha-sig.figma.com/img/f418/411f/d13dfb6134f41a12bb5e338421b09ea1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D61Fv4whWuwllzjWv~B1tlS1YFuL5igJnIp3su4tISl2oxZ6~DCW4h97D~LMW5jmzT5O3od2WliWds4G7t24icpdTrJPkPCs7AQmyia9atR8NS~1QrXePCULRMZNqqvY6B96MY0FWPOZkFzCrdrKGmNnxIxru5PLFL6njuyZN76CmVwIhQzxfUUtoDG5eN-Nb4vCyo1QuSdqXLkMRTcg~OKYoblJdIP566rySoTYl3y2M8-QYILR1dv6Ic4sWwFto63S0B-N5fti7QZVHNzE9CwOoaKwqZ6iL4HPWwttyJ17sADdorLO-NESmydQC5QE1wRkuLICv5ucdCQOtRQcxA__",
      type: "offline",
      attendees: 0,
      category: "Hobbies and Passions",
      distance: 5,
    },
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      date: "SAT, MAR 23 · 3:00 PM UTC",
      image: "https://s3-alpha-sig.figma.com/img/6aac/2ff4/4401f51223ae9b7aca68cf49987351f6?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WQie58LV7DC5fSYbNUEbbo89ksFDpdxk8ij~ssvy9U1eIRBQ0yP8NnEeLw8gZFz~NWQNK0dWCoBe6yHgcfRTeZ1MpdrPZ1c0oy3IigUMIirMW59tTYNKFv4UUQTkIOEiw70ZbaLAMUkDaBX0sLC3jF5URM35fan2x7c~Y8-LQdy~yh4xJ5j7JRT6TQmtgrTeWuCcwn~2Jb1QOzSdHf8VFORTcyA17U2NLYq7I9pwssCvhiVB-8OgkRyXZKZr4hXxm37zvRt9PvuhEJPrNU4giCZZfjqrKRCGC-l1QButc0eScPP1fRMxD9EkmpNoJxI8GDfTpbIbmSpWTsOuABp49Q__",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 25,
    },
    {
      title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      date: "WED, MAR 13 · 11:30 PM UTC",
      image: "https://s3-alpha-sig.figma.com/img/8e47/eb28/d477c3d604faa03637aa0043649be6ea?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XfYF~sAG~A7nJsdS8Mfln9-U60n~cTTE1oc8sZnOOOq3AkIrUke1rr7VQYxhkUWpYGeYezVJ7xMIJ6Mur4QBg1O2AoaIyJX93sUrKXkY-ScvBtyQPPkL1VcacKSw07UK6Dnyd6FIF0lOle9zHoAmJILbhVUpMCMIC-pY31Q90v5n7HaEL4Q~aMHmkVVUyJcwCX1Hnq-9ZWe5S4FA5yZDdUEELDDO3aESfAvDUOhck3Y3D4KfXOxJytCygACVPuN~ddRCCqKaFdpUQqMvc9qpEU7Mgz72ftaEwGxg5qAK4~iYbo747soCKZk6iGm3Ww~CUm8Y2P-Dkwd8N0oBU1xqQQ__",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 50,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      date: "WED, MAR 13 · 11:30 PM UTC",
      image: "./img/png/Book40+.png",
      type: "online",
      attendees: 0,
      category: "Technology",
      distance: 0,
    },
    {
      title: "Dump writing group weekly meetup",
      date: "WED, MAR 13 · 11:00 PM UTC",
      image: "/img/png/Dump.png",
      type: "online",
      attendees: 77,
      category: "Hobbies and Passions",
      distance: 0,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      date:  "THU, MAR 14 · 11:00 PM UTC",
      image: "img/png/Over40s.png",
      type: "online",
      attendees: 140,
      category: "Hobbies and Passions",
      distance: 0,
    },
  ];



// Получаем элементы из DOM
const categoryFilter = document.getElementById('categoryFilter');
const typeFilter = document.getElementById('typeFilter');
const distanceFilter = document.getElementById('distanceFilter');
const eventsContainer = document.getElementById('eventsContainer');

// Функция для отображения мероприятий
function renderEvents(events) {
  eventsContainer.innerHTML = ''; // Очистка контейнера

  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');

    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.title}" class="event-card-image">
      <div class="event-card-content">
        <div class="event-title">${event.title}</div>
        <div class="event-details">
          <div>${event.category}</div>
          <div>(${event.distance} km)</div>
          <div>${event.attendees} attendees</div>
        </div>
      </div>
    `;
    eventsContainer.appendChild(eventCard);
  });
}

// Функция для фильтрации мероприятий
function filterEvents() {
  const categoryValue = categoryFilter.value;
  const typeValue = typeFilter.value;
  const distanceValue = parseInt(distanceFilter.value, 10);

  const filteredEvents = eventsStore.filter(event => {
    const matchesCategory = categoryValue ? event.category === categoryValue : true;
    const matchesType = typeValue ? event.type === typeValue : true;
    const matchesDistance = distanceValue ? event.distance <= distanceValue : true;

    return matchesCategory && matchesType && matchesDistance;
  });

  renderEvents(filteredEvents);
}

// Слушатели на изменение фильтров
categoryFilter.addEventListener('change', filterEvents);
typeFilter.addEventListener('change', filterEvents);
distanceFilter.addEventListener('change', filterEvents);

// Отображение всех мероприятий при загрузке
renderEvents(eventsStore);


  // const categoryFilter = document.getElementById('categoryFilter');
  // const typeFilter = document.getElementById('typeFilter');
  // const distanceFilter = document.getElementById('distanceFilter');
  // const dateFilter = document.getElementById('dateFilter');
  // const cardsAfterFilters = document.getElementById('cardsAfterFilters')

  // function showCard () {
  //   const category = categoryFilter.value
  //   const type = typeFilter.value
  //   const distance = distanceFilter.value
  //   const date = dateFilter.value

  //   let filteredCards = eventsStore.filter((card) => {
  //     if(category !== 'all' && product.category !== category) {  // если значение не равно значению в карточке, то возвращает 0
  //       return false
  //     }
  //     //фильтрация по расстоянию
  //     if (distance !== 'all') {
  //       if(distance === '')
  //     }
  //   })
  // }


  