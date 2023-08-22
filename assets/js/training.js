console.log("Training Schedule Connected");

const trainingData = {
  "training": [
    {
      "day": "Monday",
      "time": "4.00pm",
      "location": "Melbourne Stadium",
      "description": "Junior League"
    },
    {
      "day": "Tuesday",
      "time": "5.00pm",
      "location": "Melbourne Stadium",
      "description": "Senior League"
    },
    {
      "day": "Wednesday",
      "time": "4.00pm",
      "location": "Melbourne Stadium",
      "description": "Junior League"
    },
    {
      "day": "Thursday",
      "time": "5.00pm",
      "location": "Melbourne Stadium",
      "description": "Senior League"
    },
    {
      "day": "Friday",
      "time": "4.00pm",
      "location": "Melbourne Stadium",
      "description": "Under 12's"
    },
    {
      "day": "Saturday",
      "time": "N/A",
      "location": "No Training",
      "description": "No Training"
    },
    {
      "day": "Sunday",
      "time": "N/A",
      "location": "No Training",
      "description": "No Training"
    }
  ]
};

const training = document.getElementById("trainingTable");

trainingData.training.forEach(item => {
  const row = training.insertRow();
  const dayCell = row.insertCell(0);
  const timeCell = row.insertCell(1);
  const locationCell = row.insertCell(2);
  const descriptionCell = row.insertCell(3);

  dayCell.textContent = item.day;
  timeCell.textContent = item.time;
  locationCell.textContent = item.location;
  descriptionCell.textContent = item.description;
});

