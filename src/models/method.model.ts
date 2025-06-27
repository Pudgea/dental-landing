export interface Method{
    name: string
    data: MethodData[]
    img?: string
}

export interface MethodData{
    desc: string
    list?: string[]
}