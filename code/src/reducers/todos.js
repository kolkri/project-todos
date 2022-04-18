import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'

export const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: (store, action) => {
            console.log('store', store)
            console.log('action', action)
            
            const newTodo = {
                id: uniqid(),
                text: action.payload[0],
                isComplete: false,
                dueDate: action.payload[1],
                category: action.payload[2]
            }
            store.items = [...store.items, newTodo]
        },
        toggleTodo: (store, action) => {
            const updatedItems = store.items.map((item) => {
                if (item.id === action.payload) {
                    const updatedTodo = {
                        ...item, 
                        isComplete: !item.isComplete,
                    }
                    return updatedTodo
                }
                else{
                    return item
                }
            })
            store.items = updatedItems
        },
        deleteTodo: (store, action) => {
            const decreasedItems = store.items.filter(item => item.id !== action.payload)
            store.items = decreasedItems
        },
        deleteAll: (store, action) => {
            store.items = []
        },
        completeAll: (store, action) => {
            const updatedItems = store.items.map((item) => {
                const updatedTodo = {
                    ...item, 
                    isComplete: true,
                }
                return updatedTodo
            })
            store.items = updatedItems
        }
    }
})