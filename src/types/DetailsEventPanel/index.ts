export type DetailsEventPanel = {
    url: string
    name: string
    location: string
    distance: string 
    price: number
    quantity: number
    saleEnds:Date
    description:string
    EventClick: {
        more: () => void
        fewer: () => void
    }
}