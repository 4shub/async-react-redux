export const initialState = {
    isHome: true,
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
