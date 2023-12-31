console.log("Fixtures Connected");

const fixtureData = {
  "fixture": [
    {
      "round": 1,
      "title": "Bendigo Pioneers vs Calder Cannons",
      "location": "Melbourne Stadium",
      "date": "2023-09-01"
    },
    {
      "round": 2,
      "title": "Dandenong Stingrays vs Eastern Ranges",
      "location": "Geelong Park",
      "date": "2023-09-10"
    },
    {
      "round": 3,
      "title": "Geelong Falcons vs Oakleigh Chargers",
      "location": "Mornington Peninsula Arena",
      "date": "2023-09-17"
    },
    {
      "round": 4,
      "title": "Calder Cannons vs Eastern Ranges",
      "location": "Ballarat City Stadium",
      "date": "2023-09-24"
    },
    {
      "round": 5,
      "title": "Bendigo Pioneers vs Dandenong Stingrays",
      "location": "Mount Dandenong Ground",
      "date": "2023-10-01"
    },
    {
      "round": 6,
      "title": "Tasmania Devils vs GWS Giants",
      "location": "Frankston Park",
      "date": "2023-10-08"
    },
    {
      "round": 7,
      "title": "Western Jets vs Gold Coast Suns",
      "location": "Lake Wendouree Arena",
      "date": "2023-10-15"
    },
    {
      "round": 8,
      "title": "Tasmania Devils vs Western Jets",
      "location": "Geelong West Stadium",
      "date": "2023-10-22"
    },
    {
      "round": 9,
      "title": "Gold Coast Suns vs GWS Giants",
      "location": "Ringwood Oval",
      "date": "2023-10-29"
    },
    {
      "round": 10,
      "title": "Grand Finale",
      "location": "Melbourne Cricket Ground",
      "date": "2023-11-05"
    },
    {
      "round": 11,
      "title": "Quarter Final 1",
      "location": "Melbourne Cricket Ground",
      "date": "2023-11-05"
    },
    {
      "round": 12,
      "title": "Quarter Final 2",
      "location": "Melbourne Cricket Ground",
      "date": "2023-11-05"
    },
    {
      "round": 13,
      "title": "Semi Final",
      "location": "Melbourne Cricket Ground",
      "date": "2023-11-05"
    },
    {
      "round": 14,
      "title": "Grand Final",
      "location": "Melbourne Cricket Ground",
      "date": "2023-11-05"
    }
  ]
};

const fixture = document.querySelector("#fixtureTable");

fixtureData.fixture.forEach(item => {
  const row = fixture.insertRow();
  const roundCell = row.insertCell(0);
  const titleCell = row.insertCell(1);
  const locationCell = row.insertCell(2);
  const dateCell = row.insertCell(3);

  roundCell.textContent = item.round;
  titleCell.textContent = item.title;
  locationCell.textContent = item.location;
  dateCell.textContent = item.date;
});

