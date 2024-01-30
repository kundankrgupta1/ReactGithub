import PropTypes from 'prop-types';
function DataDisplay({data}) {

    return (
        <>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {
                    data.map((items)=>(
                        <div key={items.id} style={{border: "1px solid red", margin: "10px", padding: "10px", width: "300px"}}>
                            <h3>
                                <span style={{color: "red"}}>{items.id}&nbsp;</span>
                                <span>{items.title}</span>
                            </h3>
                            <p>{items.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

DataDisplay.propTypes = {
    data: PropTypes.array.isRequired,
};

export default DataDisplay
