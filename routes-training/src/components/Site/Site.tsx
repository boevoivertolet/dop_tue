import s from './Site.module.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage'
import { S } from '../_styles'
import { Page } from './pages/Page'
import { data } from '../../data/data'


export function Site() {


    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h1>HEADER</h1>
            </div>
            <div className={s.body}>
                <div className={s.nav}>
                    <S.NavWrapper> <NavLink to={'page/0'}> Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'page/1'}> Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'page/2'}> Page3</NavLink></S.NavWrapper>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'page1'} />} />

                        <Route path={'/page/:id'} element={<Page pages={data.pages} />} />
                        <Route path={'/*'} element={<ErrorPage />} />

                    </Routes>
                </div>
            </div>
        </div>
    )
}


// import s from './Site.module.css'
// import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
// import { PageOne } from './pages/PageOne'
// import { PageThree } from './pages/PageThree'
// import { PageTwo } from './pages/PageTwo'
// import { ErrorPage } from './pages/ErrorPage'
// import { S } from '../_styles'
//
//
// export function Site() {
//
//
//     return (
//         <div className={s.wrapper}>
//             <div className={s.header}>
//                 <h1>HEADER</h1>
//             </div>
//             <div className={s.body}>
//                 <div className={s.nav}>
//                     <S.NavWrapper> <NavLink to={'page1'}> Page1</NavLink></S.NavWrapper>
//                     <S.NavWrapper><NavLink to={'page2'}> Page2</NavLink></S.NavWrapper>
//                     <S.NavWrapper><NavLink to={'page3'}> Page3</NavLink></S.NavWrapper>
//                 </div>
//                 <div className={s.content}>
//                     <Routes>
//                         <Route path={'/'} element={<Navigate to={'page1'} />} />
//
//                         <Route path={'/page1'} element={<PageOne />} />
//                         <Route path={'/page2'} element={<PageTwo />} />
//                         <Route path={'/page3'} element={<PageThree />} />
//
//                         <Route path={'/*'} element={<ErrorPage />} />
//
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
