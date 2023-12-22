// action types
const SAVE_CHOICE = 'SAVE_CHOICE';
const SET_NEXT_TRUE = 'SET_NEXT_TRUE'; // New action type

export interface SavedSituation {
  id_situation: number;
  choice: string;
  electric_charge: number;
  next ?:  boolean
}
// action creator
export const saveChoice = (situation: SavedSituation ) => ({
  type: SAVE_CHOICE,
  payload: { situation },
});
// action creator to set next to true
export const setNextTrue = (id: number) => ({
  type: SET_NEXT_TRUE,
  payload: { id },
});

// reducer
const initialState: SavedSituation[] = [];

const situationsReducer = (state = initialState, action: any): SavedSituation[] => {
  switch (action.type) {
    case SAVE_CHOICE:
      const { situation  } = action.payload;
      const existingSituationIndex = state.findIndex(
        (savedSituation) => savedSituation.id_situation === situation.id_situation
      );

      if (existingSituationIndex !== -1) {
        return state.map((savedSituation, index) =>
          index === existingSituationIndex
            ? { ...savedSituation, choice: situation.choice, electric_charge: situation.electric_charge }
            : savedSituation
        );
      } else {
        return [...state, { id_situation: situation.id_situation, choice: situation.choice, electric_charge: situation.electric_charge , next : false}];
      }

    default:
      return state;
  }
};

export default situationsReducer;



