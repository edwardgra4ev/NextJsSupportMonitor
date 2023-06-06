export function getTimeRemaining(endTime) {
    var newDate = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor((newDate / 1000) % 60);
    var minutes = Math.floor((newDate / 1000 / 60) % 60);
    return {
        "total": newDate,
        "minutes": minutes,
        "seconds": seconds
    }
}