import {create} from 'zustand';

type FeatureStore = {
    inViewFeature: string | null;
    setInViewFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
    inViewFeature: null,
    setInViewFeature: (feature: string | null) => set({inViewFeature: feature}),
}));

type CursorStore = {
    cursorVariant: string;
    setCursorVariant: (cursor: string) => void;
};

export const useCursorStore = create<CursorStore>((set) => ({
    cursorVariant: "default",
    setCursorVariant: (cursor: string) => set({cursorVariant: cursor}),
}));

