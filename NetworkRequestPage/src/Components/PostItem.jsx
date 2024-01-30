function PostItem({posts, handleClick, handleClick2, page}) {
    return (
        <div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {
                    posts.map((item)=> (
                        <div key={item.id} style={{border: "1px solid red", margin: "10px", padding: "10px", width: "300px"}}>
                            <h3>
                                <span style={{color: "red"}}>{item.id}</span>&nbsp;
                                <span>{item.title}</span>
                            </h3>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
            <button onClick={handleClick2} disabled = {page === 1 ? true : false}>Prev</button>
            <button onClick={handleClick} disabled = {page === 10 ? true : false}>Next</button>
        </div>
    );
}

export default PostItem
