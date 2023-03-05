import {IProd} from '../models'

interface ProductsProps {
  prod: IProd
}

export function Products(props: ProductsProps){
return (
  <div>
   {props.prod.title}
   {props.prod.title}
  </div>
)}
