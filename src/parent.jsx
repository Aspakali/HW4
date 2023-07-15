
import child from './child.jsx';

function parent({value}){

  return (
    [value].map((d) => {
        return (
            <child
            image={d.image}
            productName={d.productName}
            price={d.price}
            description={d.description}
            />
            )
    
        })
  )
}
export default parent;