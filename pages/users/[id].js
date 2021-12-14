import React from 'react'
import { useRouter } from 'next/router'


export default function UserDetail() {

    // this component works for query params
    // /users/2
    const router = useRouter()

    console.log(router)
    return (
        <div>
            hello from user detail {router.query.id}
        </div>
    )
}
