import React from 'react'
import { useParams } from 'react-router-dom'
import { DataType } from '../../../data/data'
import { ErrorPage } from './ErrorPage'


export const Page: React.FC<DataType> = (props) => {
    const { pages, ...restProps } = props
    const params = useParams()

    return (
        <div>
            {pages[Number(params.id)]
                ? <div>
                    <div>
                        {pages[Number(params.id)].heading}
                    </div>
                    <div>
                        {pages[Number(params.id)].about}
                    </div>
                </div>
                : <ErrorPage />
            }


        </div>
    )
}

