export const getTimeDifference = (createdDate) => {
    const currentDate = new Date()
    const convertedDate = new Date(createdDate)

    const timeDifference = currentDate - convertedDate

    const days = Math.floor(timeDifference / 86400000);
    const hours = Math.floor(timeDifference / 3600000)
    const minutes = Math.floor(timeDifference / 60000)
    const seconds = Math.floor(timeDifference / 1000)
    
    return {days: days, hours: hours, minutes: minutes, seconds: seconds}
}