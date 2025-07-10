export type DetailsEventPanel = {
    url: string
    name: string
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