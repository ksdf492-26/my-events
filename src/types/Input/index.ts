export type Input = {
    type: string
    name: string
    value:string
    placeholder: string
     onChange: (name: string, value: string) => void;
}