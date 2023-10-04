export const data: DataType = {
    pages: [
        {
            heading: 'Page 1',
            about: 'This is page one'
        }, {
            heading: 'Page 2',
            about: 'This is page two'
        }, {
            heading: 'Page 3',
            about: 'This is page three'
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