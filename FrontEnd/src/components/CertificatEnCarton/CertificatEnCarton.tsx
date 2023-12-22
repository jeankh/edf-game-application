import {
  CertificatEnCartonProps,
  useCertificatEnCarton,
} from "./useCertificatEnCarton";
import React from "react";
import "./CertificatEnCarton.css";

const CertificatEnCarton: React.FC<CertificatEnCartonProps> = (props) => {
  const {} = useCertificatEnCarton(props);

  return <>CertificatEnCarton</>;
};

export default CertificatEnCarton;
