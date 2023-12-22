import { useDispatch, useSelector } from "react-redux";
import { SavedSituation } from "../../reducers/Ducks/situationDukck";
import { RootState } from "../../reducers/rootReducer";
import { update } from "../../reducers/Ducks/certificationDukck";
import { useEffect } from "react";

export interface CertificateProps {
  situations?: SavedSituation[];
}

export const useCertificate = (props: CertificateProps) => {
  const { situations } = props;
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  let totalElectricCharge = 0;

  if (situations) {
    // console.log("I am in the certificate function.");

    // Extracting electric charges from situations
    const electricCharges: number[] = situations.map((situation) => situation.electric_charge);

    // Calculating total electric charge
    totalElectricCharge = electricCharges.reduce((total, charge) => total + charge, 0);
  }

  useEffect(() => {
    if (totalElectricCharge !== 0) {
      // console.log("Dispatching update action...");
      dispatch(update('score', totalElectricCharge));
    }
  }, [dispatch, totalElectricCharge]);

  return { ...props, totalElectricCharge };
};
