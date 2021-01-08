export const types = {
  INVERT_THEME: "APP_CONFIG/INVERT_THEME",
};

export const actions = {
  invertTheme: (theme) => ({
    type: types.INVERT_THEME,
    theme,
  }),
};

const initialState = {
  theme: "light",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.INVERT_THEME:
      return { ...state, theme: action.theme };

    default:
      return state;
  }
}
