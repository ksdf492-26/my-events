import { IconType } from "react-icons/lib"


export type Button = {
    type: 'submit' | 'button'
    text: string 
    OnClick?: () => void
}