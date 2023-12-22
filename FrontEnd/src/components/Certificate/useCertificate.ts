import { SavedSituation } from "../../reducers/Ducks/situationDukck";

export interface CertificateProps {
  situations?: SavedSituation[];
}

export const useCertificate = (props: CertificateProps) => {
  const { situations } = props; // Destructure situations from props

  let totalElectricCharge = 0;

  if (situations ) {
    console.log("I am in the certificate function.");

    // Extracting electric charges from situations
    const electricCharges: number[] = situations.map((situation) => situation.electric_charge);

    // Calculating total electric charge
     totalElectricCharge  = electricCharges.reduce((total, charge) => total + charge, 0);

    // console.log("Total Electric Charge:", totalElectricCharge);
  }

  // Return the props or other values as needed
  return { ...props , totalElectricCharge };
};
