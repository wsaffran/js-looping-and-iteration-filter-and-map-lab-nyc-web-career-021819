// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
  return driverNames = newDrivers.map(function(driver) {
    return driver.name
  })
  return driverNames;
}

// Examine what is going on
function exactMatch(drivers, object) {
  for (const key in object) {
    return drivers.filter(function(driver) {
      return driver[key] === object[key]
    })
  }
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name
  })
}
