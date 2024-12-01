import "./button.scss"

function Button({children, type}) {

    return (
        <button className={`type ${type === "primary" ? "primary" : "secondary"}`} type="submit">{children}</button>
    )
}

export default Button