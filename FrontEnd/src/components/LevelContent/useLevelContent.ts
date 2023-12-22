
import { Situation } from "../../types/models/Situation";
import {SavedSituation  } from "../../reducers/Ducks/situationDukck";
import { useStateContext } from "../../contexts/ContextProvider";

export interface LevelContentProps {
  data : Situation[] ;
   situations : SavedSituation[]
}

export const useLevelContent = (props: LevelContentProps) => {
  // const situation = {
  //   category: "science",
  //   first_choice: "Eteindre les lumières quand je change de pièce.",
  //   first_choice_electric_charge: 1,
  //   id_situation: 2,
  //   question:
  //     "Which planet is known as the Red Planet? kjbldsfdskjbbkjfbkbfdslkjbfdsjfbdskjbfkjdsbfkjdsbfkjdsbfkjdsbfkdsjb",
  //   right_answer: "Me rendormir ",
  //   seconde_choice:
  //     "Garder toutes les pièces allumées parce que j’ai peur du noir.",
  //   seconde_choice_electric_charge: 2,
  //   third_choice: "Me rendormir ",
  //   third_choice_electric_charge: 3,
  //   advice: "Conseil adkjksadnkjsandsakdnsakjda,dnsakjdnlsadsk.j",
  // };

  const { handleLevel, level } = useStateContext();


    
  return { ...props  ,level , handleLevel  }
}
