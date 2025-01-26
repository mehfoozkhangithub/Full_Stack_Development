export const Contacts = ({ user, active, onChange }) => {
    console.log(user, active, onChange, "contact jsx");

    return (<>
        {user.lenght > 0 && user.map((el) => (
            <div
                key={el.id}
                style={{ background: active === el ? "tomato" : null }}
                onClick={() => onChange(user)}
            >
                {el.name}
            </div>))}
    </>)
}