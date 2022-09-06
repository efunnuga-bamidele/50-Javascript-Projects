
const calcInverterCapacity = document.querySelector('#btn-inverter');
const totalHouseLoad = document.getElementById('totalHouseLoad')
const powerFactor = document.getElementById('powerFactor')
const actualRating = document.getElementById('actualRating')
const ratingBuffer = document.getElementById('ratingBuffer')
const kvaRating = document.getElementById('kvaRating')


const calcBatteryCapacity = document.querySelector('#btn-battery');
const batteryCapacity = document.getElementById('batteryCapacity')
const batteryVoltage = document.getElementById('batteryVoltage')
const batteryQuantity = document.getElementById('batteryQuantity')
const houseLoad = document.getElementById('houseLoad')
const panelPower = document.getElementById('panelPower')
const panelVoltage = document.getElementById('panelVoltage')
const backupTime = document.getElementById('backupTime')
const batteryPower = document.getElementById('batteryPower')
const expBatteryPower = document.getElementById('expBatteryPower')
const expPanelCapacity = document.getElementById('expPanelCapacity')




calcInverterCapacity.addEventListener('click', () =>{
    let consumerLoad = totalHouseLoad.value;
    let pf = powerFactor.value;
    let calcRating = (consumerLoad / (pf * 1000)) 
    let calcBuffer = calcRating * 0.20;

    actualRating.value = Math.floor(calcRating * 1000 *100) / 100;
    ratingBuffer.value = Math.floor((calcRating + calcBuffer) * 1000);
    kvaRating.value = Math.floor((calcRating + (calcRating * 0.20)) * 100) / 100;
});


calcBatteryCapacity.addEventListener('click', () =>{
    let batteryAh = batteryCapacity.value
    let batteryVolt = batteryVoltage.value
    let batteryNumber = batteryQuantity.value
    let panelWatt = panelPower.value
    let panelVolt = panelVoltage.value
    
    //Output values calculation for battery
    let totalBatteryAh = batteryAh * batteryNumber
    let batteryWh = totalBatteryAh * batteryVolt
    let backupHours = (batteryWh * 0.85 ) / houseLoad.value

    backupTime.value = Math.floor(backupHours * 100) / 100
    batteryPower.value = Math.floor(backupTime.value * houseLoad.value * 100) / 100


})