export type ListerEvents = {
  CardOne: {
    title: string
    data: {
      id:number
      name: string
      url: string
      distance: string
    }[]
  }
  CardTwo: {
    title: string
    data: {
      id:number
      name: string
      url: string
      distance: string
    }[]
  }
  CardThree?: {
    title: string
    data: {
      id:number
      name: string
      url: string
      distance: string
    }[]
}
}