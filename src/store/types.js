/* Mutations */
export const SET_CANVAS = "setCanavas";
export const SET_FILE_TYPE = "setFileType";
export const SET_FILE_NAME = "setFileName";
export const SET_PIXEL_DATA = "SetPixelData";
export const SET_IMAGE_DATA = "SetImageData";
export const SET_CONVERTED_PIXEL_DATA = "setConvertedPixelData";
export const SET_SELECTED_COLOR = "setSelectedColor";
export const SET_SELECTED_PALETTE_VALUE = "setSelectedPaletteValue"

/*Actions*/

// Root
export const RESET = "reset";

// File
export const CHANGE_FILE_NAME = "changeFileName"
export const CHANGE_FILE_TYPE = "changeFileType";

// Palette
export const CHANGE_COLOR = "changeColor";

// Canvas
export const SHIFT_CANVAS_RIGHT = "shiftRight";
export const SHIFT_CANVAS_LEFT = "shiftLeft";
export const SHIFT_CANVAS_UP = "shiftUp";
export const SHIFT_CANVAS_DOWN = "shiftDown";
export const CLEAR_CANVAS = "clearCanvas";
export const INIT_CANVAS = "initializeCanvas";

// Output
export const SHIFT_DATA_LEFT = "shiftDataLeft";
export const SHIFT_DATA_RIGHT = "shiftDataRight";
export const SHIFT_DATA_UP = "shiftDataUp";
export const SHIFT_DATA_DOWN = "shiftDataDown";
export const UPDATE_OUTPUT = "updateOutput";
export const CONVERT_PIXEL_DATA = "convertPixelMatrix";
export const RESET_MATRIX = "resetMatrix";

/* Getters */
export const GET_CONVERTED_PIXEL_DATA = "getConvertedPixelData";
export const GET_PIXEL_MATRIX = "getPixelMatrix";
export const GET_CANVAS = "getCanvas";

