export const Contacts = ({ user, active, onChange }) => {
    console.log(onChange, "contact jsx");
    console.log(active);
    console.log(user);

    return (<>
        {user.length > 0 && user.map((el) => (
            <div
                key={el.id}
                style={{ background: active === el ? "tomato" : null }}
                onClick={() => onChange(el)}
            >
                {el.name}
            </div>))}
    </>)
}