import { CertificateProps, useCertificate } from "./useCertificate";
import React from "react";
import "./Certificate.css";

const Certificate: React.FC<CertificateProps> = (props) => {
  const { totalElectricCharge } = useCertificate(props);

  return (
    <>Certificate : votre totalElectricCharge est : {totalElectricCharge}</>
  );
};

export default Certificate;
