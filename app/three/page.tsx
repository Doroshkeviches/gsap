import React from 'react'
import { Lusion } from './components/lusion/lusion'
import BaseExample from './components/base_example/BaseExample'
import { Kitchen } from './components/kitchen/kitchen'
import KitchenCopy from './components/kitchen_copy/KitchenCopy'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className='h-screen'>
            <KitchenCopy/>
        </div>
    )
}

export default Page
