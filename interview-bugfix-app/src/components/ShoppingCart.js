import React, { useState, useEffect } from 'react'
import { userApi } from '../api/shoppingCartApi'

const ShoppingCart = () => {
  const [userProfile, setUserProfile] = useState(null)
  const cartTotal = 100

  useEffect(() => {
    const loadUserProfile = async () => {
      const data = await userApi.getUserProfile()
      setUserProfile(data)
    }

    loadUserProfile()
  }, [])

  const finalTotal = cartTotal - (cartTotal * userProfile.discountRate / 100)

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Welcome {userProfile.name}!</p>
      <p>Membership: {userProfile.membershipLevel}</p>
      <p>Cart Total: ${cartTotal}</p>
      <p>Your Discount: {userProfile.discountRate}%</p>
      <p>Final Total: ${finalTotal.toFixed(2)}</p>
    </div>
  )
}

export default ShoppingCart