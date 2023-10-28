import { ProductWithImages } from "@/types";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: ProductWithImages;
  onOpen: (data: ProductWithImages) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductWithImages) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
