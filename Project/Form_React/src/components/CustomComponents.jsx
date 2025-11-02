import { useState } from "react"


export const CustomComponents = ({ props }) => {
    console.log('🚀 ~ props:', props);
    const [formData, setFormData] = useState(
        props.reduce((acc, current) => {
            console.log('🚀 ~ current:', current);
            acc[current.name] = ''
            return acc
        }, {})
    );
    console.log('🚀 ~ formData:', formData);

    // dry run
    return (
        <>
            <h1>customComponents</h1>
            <form>
                <label htmlFor=""></label>
                <input type="text" />
            </form>
        </>
    )
}
