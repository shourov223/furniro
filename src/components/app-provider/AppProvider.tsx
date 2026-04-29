"use client"

import { CartStoreProvider } from "@/providers/cart-store-provider"
import React from "react"


interface Props {
    children: React.ReactNode
}
const AppProvider = ({children}: Props) => {
  return (
    <CartStoreProvider>
        {children}
    </CartStoreProvider>
  )
}

export default AppProvider