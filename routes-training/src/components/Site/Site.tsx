import s from './Site.module.css'
import { NavLink, Route, Routes,Navigate } from 'react-router-dom'
import { PageOne } from './pages/PageOne'
import { PageThree } from './pages/PageThree'
import { PageTwo } from './pages/PageTwo'
import { ErrorPage } from './pages/ErrorPage'

export function Site() {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h1>HEADER</h1>
            </div>
            <div className={s.body}>
                <div className={s.nav}>
                    <div>
                        <NavLink to={'page1'}> Page1</NavLink>
                        <NavLink to={'page2'}> Page2</NavLink>
                        <NavLink to={'page3'}> Page3</NavLink>
                    </div>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'page1'} />} />

                        <Route path={'/page1'} element={<PageOne />} />
                        <Route path={'/page2'} element={<PageTwo />} />
                        <Route path={'/page3'} element={<PageThree />} />

                        <Route path={'/*'} element={<ErrorPage />} />

                    </Routes>
                </div>
            </div>
        </div>
    )
}
