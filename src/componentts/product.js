import { useState } from "react";

function Product(){
    const [id,setId]=useState(1)
    const [libelle,setLibelle]=useState("")
    const [quantite,setQuantite]=useState(0)
    const [products,setProducts]=useState([])

    let addproduct=()=>{
        setProducts([...products,{id:id,libelle:libelle,quantite:quantite}])
    }


    return(
        <>
            <input onChange={(e)=>{setId(e.target.value)}} placeholder='id'></input>
            <input onChange={(e)=>{setQuantite(e.target.value)}} placeholder='Quantite'></input>
            <input onChange={(e)=>{setLibelle(e.target.value)}} placeholder='Libelle'></input>
            <button className='mb-3' onClick={addproduct}>Add product</button>
            
            {products.map(
                (item)=>
                     <p key={item.id}>{item.id} ¦ {item.libelle} ¦ {item.quantite}</p>
                
            )}

        </>
    )

}

export default Product