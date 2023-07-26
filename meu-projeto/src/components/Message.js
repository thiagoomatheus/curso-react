import { useEffect, useState } from "react"
import Styles from "./Message.module.css"

function Message({msg, type}) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        // const timer = setTimeout(()=> {
        //     setVisible(false)
        // }, 3000)

        // return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${Styles.message} ${Styles[type]}`}>
                    <p>{msg}</p>
                </div>
            )

            }
        </>
    )
}

export default Message