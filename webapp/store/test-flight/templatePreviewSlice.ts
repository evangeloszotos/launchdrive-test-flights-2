import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pick } from 'ramda';

interface FormatUrlSource {
  desktopUrl: string;
  mobileUrl: string;
}

type TemplatePreviewFormat = 'desktop' | 'mobile';
interface TemplatePreviewState {
  open: boolean;
  formatOnOpen: TemplatePreviewFormat | 'preserveLast';
  format: 'desktop' | 'mobile';
  formatSource: FormatUrlSource | null;
  activeSrc: string | null;
  title: string;
}

const initialState: TemplatePreviewState = {
  title: '',
  open: false,
  formatSource: null,
  activeSrc: null,
  formatOnOpen: 'desktop',
  format: 'desktop',
};

interface OpenedPayload {
  title: string;
  desktopUrl: string;
  mobileUrl: string;
}

export const templatePreviewSlice = createSlice({
  name: 'templatePreview',
  initialState,
  reducers: {
    opened(state, action: PayloadAction<OpenedPayload>) {
      state.open = true;
      state.formatSource = pick(['mobileUrl', 'desktopUrl'], action.payload);
      state.title = action.payload.title;

      if (state.formatOnOpen !== 'preserveLast') {
        state.format = state.formatOnOpen;
      }

      state.activeSrc = state.formatSource[`${state.format}Url`];
    },
    closed(state) {
      state.open = false;
      state.formatSource = null;
      state.activeSrc = null;
    },
    formatChanged(state, action: PayloadAction<TemplatePreviewFormat>) {
      state.format = action.payload;
      if (state?.formatSource) {
        state.activeSrc = state.formatSource[`${state.format}Url`];
      }
    },
  },
});

export default templatePreviewSlice;
