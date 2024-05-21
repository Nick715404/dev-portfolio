import { createEffect, createStore } from "effector";

type LayoutStore = 'light' | 'dark';

export const $layout = createStore<LayoutStore>('light');
export const SwitchThemesFX = createEffect((state: string): string => state);
$layout.on(SwitchThemesFX.doneData, (_, action) => { action });