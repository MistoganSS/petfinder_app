const ConvertTimestampToDate = (props) => {
    if (!props.timestamp || typeof props.timestamp !== 'number') return '';

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const date = new Date(props.timestamp * 1000)

    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear() % 100;

    return `${month} ${day}, ${year}`;
}
export default ConvertTimestampToDate

export const TimeElapsed = (props) => {
    if (!props.timestamp || typeof props.timestamp !== 'number') return '';

    const date = new Date(props.timestamp * 1000)
    const miliDelta = Date.now() - date

    const days = miliDelta / (1000 * 60 * 60 * 24)
    const months = days / 30
    const years = months / 12

    if (years > 1) {
        return (`${Math.floor(years)}y`)
    }

    if (months > 1) {
        return (`${Math.floor(months)}m`)
    }

    return (
        `${Math.floor(days)}d`
    )
}
