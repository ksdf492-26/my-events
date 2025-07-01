export type ListerEvents = {
  CardOne: {
    title: string
    data: {
      name: string
      url: string
      distance: string
    }[]
  }
  CardTwo: {
    title: string
    data: {
      name: string
      url: string
      distance: string
    }[]
  }
  CardThree?: {
    title: string
    data: {
      name: string
      url: string
      distance: string
    }[]
}
}