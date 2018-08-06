import { CHANGE_ORIENTATION } from './actiontypes';

export const changeOrientation = orientation => ({
  type: CHANGE_ORIENTATION,
  orientation: orientation
})
