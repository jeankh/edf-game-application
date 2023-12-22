import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveChoice, setNextTrue } from "../../reducers/Ducks/situationDukck";
import { Situation } from "../../types/models/Situation";
import { useStateContext } from "../../contexts/ContextProvider";

export function useRound(situation: Situation) {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { handleLevel } = useStateContext();

  const handleSaveSituation = (
    choice: string,
    electricChargeCount: number,
    id_situation: number
  ): void => {
    dispatch(
      saveChoice({
        id_situation,
        choice,
        electric_charge: electricChargeCount,
        next: false,
      })
    );
    setSelected(true);
  };

  const handleNext = (id: number): void => {
    dispatch(setNextTrue(id));
    handleLevel();
  };

  return { selected, handleSaveSituation, handleNext };
}
