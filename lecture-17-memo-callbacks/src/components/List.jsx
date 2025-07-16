import { memo } from "react"
import Person from "./Person"

const List = ({ users, handleRemove }) => {
    return (
        <div>
            {
                users.map((user) => {
                    return <Person user={user} key={user.id} handleRemove={handleRemove}/>
                })
            }
        </div>
    )
}

export default memo(List)