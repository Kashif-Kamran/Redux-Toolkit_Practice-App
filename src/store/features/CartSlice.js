import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../data/CartItems";
// Setting Up Redux Thunk 
const url = "https://course-api.com/react-useReducer-cart-project"


export const getCartItems = createAsyncThunk("cart/getCartItems",async () =>
{
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299)
    {
        const cartItems = await response.json();
        return { cartItems };
    }
    else
    {
        throw new Error("Error Occured While Loading Cart Items");
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        amount: 0,
        total: 0,
        isLoading: false,
    },
    extraReducers: {
        [getCartItems.pending]: (state) =>
        {
            state.isLoading = true;
        }
        ,
        [getCartItems.fulfilled]: (state,action) =>
        {
            state.isLoading = false;
            state.cartItems = action.payload.cartItems;
        },
        [getCartItems.rejected]: (state,action) =>
        {
            state.isLoading = false;
            state.error = action.error.message;
        }
    },

    reducers: {
        clearCart: (state) =>
        {
            state.cartItems = [];
        },
        removeItem: (state,action) =>
        {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        increaseQuantity: (state,action) => 
        {
            state.cartItems = state.cartItems.map((item) =>
            {
                if (item.id === action.payload)
                {
                    return { ...item,amount: item.amount + 1 }
                }
                return item;
            })
        },
        decreaseQuantity: (state,action) =>
        {
            state.cartItems = state.cartItems.map((item) =>
            {
                if (item.id === action.payload)
                {
                    return { ...item,amount: item.amount - 1 }
                }
                return item;
            })
        },
        calculateTotals: (state) =>
        {
            let total = 0;
            let amount = 0;
            state.cartItems.forEach((item) =>
            {
                amount += item.amount;
                total += item.price * item.amount;
            });
            state.amount = amount;
            state.total = total;
        }
    }

});
// console.log("cartSlice",cartSlice)
export const { clearCart,removeItem,increaseQuantity,decreaseQuantity,calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;