
//定义一个接口，限制person对象的属性
export interface PersonInter {
    id: string,
  name: string,
  age: number
}
export interface NewsInter {
  id: string,
  title: string,
  content: string
}

//自定义类型
export type Persons = PersonInter[]