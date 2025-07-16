const Person = ({ user, handleRemove }) => {
    console.log("hello");

    return (
        <>
            <div>{user.name}</div>
            <button className="border p-3" onClick={() => handleRemove(user.id)}>X</button>
        </>
    )
}

export default Person