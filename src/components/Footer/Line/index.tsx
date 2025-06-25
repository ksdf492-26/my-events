import { Props } from "@/types/LineFooter"

function index ({text}:Props) {
    return (
        text.map(element => (
            <li key={element}>
                {element}
            </li>
        ))
    )
}

export default index