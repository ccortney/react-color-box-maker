import {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const initial_state = {
        color: "#000000", 
        side: ""
    }

    const [formData, setFormData] = useState(initial_state);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(initial_state)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Choose a Color</label>
            <input
                type="color"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor="side">Enter a Side Length</label>
            <input
                type="text"
                id="side"
                name="side"
                value={formData.side}
                size="5"
                minLength="1"
                maxLength="3"
                onChange={handleChange}
            />
            <button>Create Box</button>
        </form>
    )
}

export default NewBoxForm;