import {useState} from "react";
import Box from "./Box.js";
import {v4 as uuid} from "uuid";
import NewBoxForm from "./NewBoxForm.js";

const BoxList = () => {

    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }

    const deleteBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id).map(box => box))
    }


    return (
        <div>
            <h1>Add a Box</h1>
                <NewBoxForm addBox={addBox}/>
            <h1>My Boxes</h1>
            <div>
                {boxes.map(({id, color, side}) => <Box key={id} id={id} color={color} side={side} deleteBox={deleteBox}/>)}
            </div>
        </div>
    )
}

export default BoxList;