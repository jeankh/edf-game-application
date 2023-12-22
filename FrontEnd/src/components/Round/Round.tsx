import React, { useState } from "react";
import "./Round.css";
import Choice from "../Choice";
import { useDispatch, useSelector } from "react-redux";
import { saveChoice, setNextTrue } from "../../reducers/Ducks/situationDukck";
import { Situation } from "../../types/models/Situation";
import { useStateContext } from "../../contexts/ContextProvider";
import { RootState } from "../../reducers/rootReducer";

function Round({ situation }: { situation: Situation }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [disabledChoices, setDisabledChoices] = useState<boolean>(false);
  const [rightChoice, setRightChoice] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { handleLevel, level } = useStateContext();

  const situations = useSelector((state: RootState) => state.situations);
  const weCanNext = level === situations.length;

  const handleSaveSituation = (
    id_situation: number,
    choice: string,
    electricChargeCount: number,
    choiceIndex: number
  ) => {
    console.log({
      id_situation,
      choice,
      electric_charge: electricChargeCount,
      next: false,
    });
    dispatch(
      saveChoice({
        id_situation,
        choice,
        electric_charge: electricChargeCount,
        next: false,
      })
    );

    const rightChoice = checkRightChoice(choice); // Function to check if the choice is correct

    setSelected(choiceIndex);
    setRightChoice(rightChoice);
    setDisabledChoices(true);
  };

  const handleNext = (id: number) => {
    if (weCanNext) {
      dispatch(setNextTrue(id));
      handleLevel();
      setSelected(null);
      setDisabledChoices(false);
      setRightChoice(false);
    }
  };

  const checkRightChoice = (choice: string) => {
    return choice === situation.right_answer;
  };

  const {
    id_situation,
    question,
    first_choice,
    first_choice_electric_charge,
    second_choice,
    second_choice_electric_charge,
    third_choice,
    third_choice_electric_charge,
    right_answer,
    advise,
  } = situation;

  return (
    <div className="round">
      <h1>
        <div className="question-div">{question}</div>
      </h1>

      <div className="choices">
        <button
          className={`choice ${
            selected === 1 ? (rightChoice ? "rightChoice" : "badChoice") : ""
          } ${disabledChoices ? "disabled" : ""}`}
          disabled={disabledChoices}
          onClick={() =>
            !disabledChoices &&
            handleSaveSituation(
              id_situation,
              first_choice,
              first_choice_electric_charge,

              1
            )
          }
        >
          {first_choice}
        </button>
        <button
          className={`choice ${
            selected === 2 ? (rightChoice ? "rightChoice" : "badChoice") : ""
          } ${disabledChoices ? "disabled" : ""}`}
          disabled={disabledChoices}
          onClick={() =>
            !disabledChoices &&
            handleSaveSituation(
              id_situation,
              second_choice,
              second_choice_electric_charge,

              2
            )
          }
        >
          {second_choice}
        </button>
        <button
          className={`choice ${
            selected === 3 ? (rightChoice ? "rightChoice" : "badChoice") : ""
          } ${disabledChoices ? "disabled" : ""}`}
          disabled={disabledChoices}
          onClick={() =>
            !disabledChoices &&
            handleSaveSituation(
              id_situation,
              third_choice,
              third_choice_electric_charge,

              3
            )
          }
        >
          {third_choice}
        </button>
      </div>

      {selected && weCanNext && (
        <div className="answer">
          <div className="answer-text">
            {rightChoice && (
              <>
                <p className="answerYes">You're right!</p>
              </>
            )}
            {!rightChoice && (
              <>
                <p className="answerNo">Nope!</p>
              </>
            )}

            <p className="right_answerP">
              <b>The Correct Answer Is: </b>
              <span>{right_answer}</span>
            </p>
            <p className="advisep">
              <i>{advise}</i>
            </p>
          </div>
          <button
            className="MybtnSectionMy"
            onClick={() => handleNext(id_situation)}
          >
            Go to Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Round;
