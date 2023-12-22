import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";

export interface CertificatProps {}

export const useCertificat = (props: CertificatProps) => {

  const user = useSelector((state: RootState) => state.user);
  return { ...props ,user    }
}
