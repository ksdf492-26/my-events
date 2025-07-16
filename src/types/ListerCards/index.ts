import { ReactElement } from "react"

export type ListerCards = {
    title: string
    Cards: Array<{
        id: number
        name: string
        url: string
        distance: string
    }>
    
}