
const getDateMonth = (dates = []) => {

    const result = dates.reduce((acc, date, index) => {
        const dateOnly = date.slice(0, 10);
        const timeOnly = date.slice(11);

        if (!acc[dateOnly]) {
            acc[dateOnly] = { [timeOnly]: index };
        } else if (!acc[dateOnly][timeOnly]) {
            acc[dateOnly][timeOnly] = index;
        }

        return acc;
    }, {});

    const uniqueDates = Object.entries(result).map(([date, times]) => {
        const time = Object.keys(times)[0];
        const index = times[time];
        return {time:`${date}T${time}`,index: index};
    });

    return uniqueDates;
}


export default getDateMonth;