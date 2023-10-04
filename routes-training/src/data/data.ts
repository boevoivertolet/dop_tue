export const data: DataType = {
    pages: [
        {
            heading: 'Page 1',
            about: 'This os page one'
        }, {
            heading: 'Page 2',
            about: 'This os page two'
        }, {
            heading: 'Page 3',
            about: 'This os page three'
        }
    ]
}
export type DataType = {
    pages: PagesType[]
}
type PagesType = {
    heading: string
    about: string
}