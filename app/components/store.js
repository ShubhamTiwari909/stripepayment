import {create} from 'zustand'

const useStore = create((set) => ({
    data: [],
    setData:(newData) => set({ data: newData }),
    value:0,
    setValue:(newValue) => set({value:newValue})
}))
export default useStore