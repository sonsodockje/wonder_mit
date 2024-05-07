import { create } from "zustand";

const useSearchStore = create((set) => ({
  keyword: "",
  setKeyword: (input: any) => set(() => ({ keyword: input })),
}));

export default useSearchStore;
