"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// interface useSidebarToggleStore {
//   isOpen: boolean;
//   setIsOpen: () => void;
// }

// export const useSidebarToggle = create(
//   persist(
//     (set, get) => ({
//       isOpen: true,
//       setIsOpen: () => {
//         set({ isOpen: !get().isOpen });
//       },
//     }),
//     {
//       name: "sidebarOpen",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

export const useSidebarToggle = create(
  persist(
    (set, get) => ({
      isOpen: true,
      setIsOpen: () => {
        set({ isOpen: !get().isOpen });
      },
    }),
    {
      name: "sidebarOpen",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
