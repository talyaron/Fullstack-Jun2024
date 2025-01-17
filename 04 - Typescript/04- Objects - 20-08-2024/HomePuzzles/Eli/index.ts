
interface car {
  maker: string;
  model: string;
  fuelEff: number;
  error?: string;
}

interface trip {
  tripDistance: number;
  fuelPrice: number;
}

function getCar(): car {
  const myCar: car = {
    maker: "",
    model: "",
    fuelEff: 0,
  };

  try {
    myCar.maker = String(prompt("write a car maker"));
    if (!myCar.maker || myCar.maker == "" || myCar.maker == "null") {
      throw new Error("Invalid car maker");
    }

    myCar.model = String(prompt("write a car model"));
    if (!myCar.model || myCar.model == "" || myCar.model == "null") {
      throw new Error("Invalid car model");
    }
    myCar.fuelEff = Number(prompt("write the fuel efficency(km/L)"));
    if (!myCar.fuelEff || myCar.fuelEff == 0) {
      throw new Error("Invalid car fuel efficency");
    }
    return myCar;
  } catch (e) {
    console.error("something went wrong:", e.message);
    return myCar;
  }
}
function getTrip(): trip {
  const mytrip: trip = {
    tripDistance: 0,
    fuelPrice: 0,
  };
  try {
    mytrip.tripDistance = Number(prompt("How long is the trip (Kilometers)"));
    if (!mytrip.tripDistance || mytrip.tripDistance == 0) {
      throw new Error("Invalid trip distance");
    }
    mytrip.fuelPrice = Number(prompt("How much does fuel cost a liter?"));
    if (!mytrip.fuelPrice || mytrip.fuelPrice == 0) {
      throw new Error("Invalid fuel price");
    }
    return mytrip;
  } catch (e) {
    console.error("something went wrong:", e.message);
    return mytrip;
  }
}
function getFuelEcon(car: car, trip: trip): String {
  const carEfficency = Number((trip.tripDistance / car.fuelEff).toFixed(2));
  const carCost = (carEfficency * trip.tripDistance/trip.fuelPrice).toFixed(2);
  return `fuel in liters for the trip:${carEfficency} and cost $${carCost} `;
}

const myCar = getCar();
const myTrip = getTrip();
const econ = getFuelEcon(myCar, myTrip);

document.write(
  `${myCar.maker} ${myCar.model} has fuel efficency of : ${myCar.fuelEff} 
  good luck on your trip! (distance : ${myTrip.tripDistance} KM) 
  ${econ} `
);
