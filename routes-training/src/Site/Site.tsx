import s from './Site.module.css'

export function Site() {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h1>HEADER</h1>
            </div>
            <div className={s.body}>
                <div className={s.nav}>1234</div>
                <div className={s.content}>content</div>
            </div>
        </div>
    )
}
