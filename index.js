const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () =>  drivers.slice(0, 2);

const returnLastTwoDrivers = () => drivers.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplyValue) => {
    return function (fare) {
        const fareResult = fare * multiplyValue;
        return fareResult;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driversToReturn) {
   return driversToReturn(drivers);
}