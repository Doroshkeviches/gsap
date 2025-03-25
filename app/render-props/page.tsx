import React, { ReactNode } from 'react'

interface Props { }
interface IItem {
    name: string
}
interface IPost {
    author: string
}
const ITEMS: IItem[] = [{ name: 'Evgeniy' }, { name: 'Kate' }, { name: 'Fedor' }, { name: 'Elena' }]
const POSTS: IPost[] = [{ author: 'Evgeniy' }, { author: 'Kate' }, { author: 'Fedor' }, { author: 'Elena' }]

function Page(props: Props) {
    const { } = props

    return (
        <div>
            <List items={ITEMS} render={(it) => (
                <li>{it.name}</li>
            )} />
            <List items={POSTS} render={(it) => (
                <li>{it.author}</li>
            )} />
        </div>
    )
}

export default Page

interface ListProps<T> {
    items: Array<T>
    render: (it: T) => ReactNode
}


function List<T>(props: ListProps<T>) {
    const { items, render } = props

    return (
        <ul>
            {
                items.map((it) => render(it))
            }
        </ul>
    )
}