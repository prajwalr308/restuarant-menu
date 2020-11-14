
import React from 'react'
import AddItem from '../AddItem/AddItem'
import MenuList from '../menuList/MenuList'

function Home() {
    return (
        <div >
            <div style={{display:"flex"}} >
            <MenuList />
            <AddItem />
           
            </div>
            
        </div>
    )
}

export default Home
