import dayjs from "dayjs"


export const getMonth = ( month = dayjs().month() ) => {

    const year = dayjs().year();

    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCnt = -firstDayOfMonth;
    
    const dayMatrix = Array.from({length: 5}, () => {
        return Array.from({length: 7}, () => {
            return dayjs(new Date(year, month, ++currentMonthCnt))
        })
    })

    return(dayMatrix)
}