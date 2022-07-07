import "./Box.css"

const Box = ({id, color, side, deleteBox}) => {
    return (
        <div className="Box">
            <div
                className="Box-div"
                style={{
                    backgroundColor: color,
                    height: `${side}px`,
                    width: `${side}px`
                }}
            >
            </div>
            <button className="Box-button" onClick={() => deleteBox(id)}>X</button>
        </div>

    )
}

export default Box;