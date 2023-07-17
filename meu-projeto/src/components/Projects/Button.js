import { MdOutlineModeEditOutline as Edit, MdDeleteOutline as Delete } from "react-icons/md";

function Button({text, icon}) {

    return (
        <div>
            <button><{icon} />{text}</button>
        </div>
    )
}

export default Button