"use client"
import { createContext } from "react";

const ProductContext = createContext({})

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProductContext.Provider value={{}}>
            {children}
        </ProductContext.Provider>
    )
}