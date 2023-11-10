//get current position
function curSucess(pos) {
    const { coords } = pos;
    console.log(`latitude=${coords.latitude}`);
    console.log(`longitude=${coords.longitude}`);
    console.log(`within=${coords.accuracy.toFixed(2)} meters`);
    console.log(pos)
}
function curError(err) {
    console.log(`Error: ${err.code}-${err.message}`)
}
const curOptions = {
    enableHighAccuracy: true,//use gps is available
    timeout: 5000,//time to wait to stop trying for location
    maximumAge: 0//do not use cached position
}
//navigator.geolocation.getCurrentPosition(curSucess, curError, curOptions);

//watch postion
const target = {
    latitude: 21.1386368,
    longitude: 79.0790144
}

function watchSucess(pos) {
    console.log(pos)
    const { coords } = pos;
    if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log('you have reached your destination');
        navigator.geolocation.clearWatch(id);
    }
}
function watchError(err) {
    console.log(`Error: ${err.code}-${err.message}`)
}
const watchOptions = {
    enableHighAccuracy: true,//use gps is available
    timeout: 5000,//time to wait to stop trying for location
    maximumAge: 0//do not use cached position
}


const id = navigator.geolocation.watchPosition(watchSucess, watchError, watchOptions);

