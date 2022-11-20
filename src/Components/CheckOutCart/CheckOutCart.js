import React from 'react'

export default function CheckOutCart({item}) {
    const {id, name, imageUrl, quantity} = item
  return (
    <div>
        <img src={imageUrl}/>
        <p>{name}</p>
        
        <button>Decrease</button><p>{quantity}</p><button>Increase</button>
    </div>
  )
}
