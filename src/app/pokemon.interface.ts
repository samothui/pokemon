export interface Pokemon{
    name:string,
    type:string,
    weight:number,
    height:number,
    img: string
}

export interface Pokedex{
  name:string,
  type:string,
  order:number,
  weight:number,
  height:number,
  img: string,
  stSpeed: number,
  stSPDef: number,
  stSPAtt: number,
  stDef: number,
  stAtt: number,
  stHP: number,
  ability: string,
  abilityDesc: string,
}
