// action types
const SAVE_CHOICE = 'SAVE_CHOICE';

interface SavedSituation {
  id_situation: number;
  choice: string;
  electric_charge: number;
}
// action creator
export const saveChoice = (situation: SavedSituation, electricChargeCount: number) => ({
  type: SAVE_CHOICE,
  payload: { situation, electricChargeCount },
});

// reducer
const initialState: SavedSituation[] = [];

const situationsReducer = (state = initialState, action: any): SavedSituation[] => {
  switch (action.type) {
    case SAVE_CHOICE:
      const { situation, electricChargeCount } = action.payload;
      const existingSituationIndex = state.findIndex(
        (savedSituation) => savedSituation.id_situation === situation.id_situation
      );

      if (existingSituationIndex !== -1) {
        return state.map((savedSituation, index) =>
          index === existingSituationIndex
            ? { ...savedSituation, choice: situation.choice, electric_charge: electricChargeCount }
            : savedSituation
        );
      } else {
        return [...state, { id_situation: situation.id_situation, choice: situation.choice, electric_charge: electricChargeCount }];
      }

    default:
      return state;
  }
};

export default situationsReducer;



