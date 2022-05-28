const WeightTrackerList = ({trackerList}) => {
    return (
        <div>
            <h2>Weight Data</h2>
            <br />
            {trackerList.map((item, index) => (
                <div key={index}>
                    <h4>{item.date}</h4>
                    <h4>{item.weight} lb</h4>
                </div>
                
            ))}
        </div>
    )
}

export default WeightTrackerList;