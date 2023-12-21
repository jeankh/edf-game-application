export interface TestsProps {}
import { useStateContext } from "../../contexts/ContextProvider";

export const useTests= (props: TestsProps) => {
  const {ShowLevelsTitles} = useStateContext()
 

  return { ...props  , ShowLevelsTitles  }
}
