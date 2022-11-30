import style from './box.module.css'

export default function box(props)
{
    let display
    if(props.vertical) display = style.coluna
    else display = style.linha

    return(
        <div className={display}>
            {props.children}
        </div>
    )

}