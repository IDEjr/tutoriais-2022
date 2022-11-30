import style from './box.module.css'

export default function box(props)
{
    return(
        <div className={style.container}>
            {props.children}
        </div>
    )
}