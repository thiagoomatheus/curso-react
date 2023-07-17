import { MdDeleteOutline as Delete } from "react-icons/md";

function ButtonEdit({text}) {

    return (
        <div>
            <button><Delete />{text}</button>
        </div>
    )
}

export default ButtonEdit