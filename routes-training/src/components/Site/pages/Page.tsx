import React from 'react'
import { useParams } from 'react-router-dom'
import { DataType } from '../../../data/data'


export const Page = (props: DataType) => {
    const params = useParams()

    return (
        <div>
            {props.pages[Number(params.id)].about}
        </div>
    )
}

