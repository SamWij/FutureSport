console.log("Club Fees Connected");

const feesData = {
  fees: [
    {
      type: "Membership",
      cost: "$200",
      frequency: "annual"
    },
    {
      type: "Uniform Kit",
      cost: "$150",
      frequency: "per season"
    },
    {
      type: "Training Fees",
      cost: "$100",
      frequency: "per season"
    },
    {
      type: "Tournament Fee",
      cost: "$25",
      frequency: "per tournament"
    }
  ]
};

const feesTable = document.getElementById("feesTable");

feesData.fees.forEach(item => {
  const row = feesTable.insertRow();
  const typeCell = row.insertCell(0);
  const costCell = row.insertCell(1);
  const frequencyCell = row.insertCell(2);

  typeCell.textContent = item.type;
  costCell.textContent = item.cost;
  frequencyCell.textContent = item.frequency;
});
