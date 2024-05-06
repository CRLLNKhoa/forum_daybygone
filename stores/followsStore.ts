import { create } from 'zustand'

export const useFollowStore = create((set) => ({
  follows: [],
  setFollows: (newFollow:any) => set({ follows: newFollow }),
}))