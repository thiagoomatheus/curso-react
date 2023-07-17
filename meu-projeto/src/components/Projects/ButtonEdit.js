import { MdOutlineModeEditOutline as Edit } from "react-icons/md";

function ButtonEdit({text}) {

    return (
        <div>
            <button><Edit />{text}</button>
        </div>
    )
}

export default ButtonEdit