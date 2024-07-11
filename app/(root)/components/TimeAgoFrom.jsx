const TimeAgoFrom = (props) => {
    const date = new Date(props.date)
    const miliDiff = Date.now() - date
    const days = miliDiff / (1000 * 60 * 60 * 24)
    const months = days / 30
    const years = months / 12

    if (years > 1) {
        return (<>{Math.floor(years)}y</>)
    }

    if (months > 1) {
        return (<>{Math.floor(months)}m</>)
    }

    return (
        <>{Math.floor(days)}d</>
    )
}

export default TimeAgoFrom