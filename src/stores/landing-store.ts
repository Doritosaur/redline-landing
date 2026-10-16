import { create } from 'zustand';

interface LandingState {
  clicks: number;
  increment: () => void;
}

export const useLandingStore = create<LandingState>()((set) => ({
  clicks: 0,
  increment: () => {
    set((state) => ({ clicks: state.clicks + 1 }));
  },
}));
