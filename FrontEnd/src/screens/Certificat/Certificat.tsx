import { CertificatProps, useCertificat } from "./useCertificat";
import React from "react";
import "./Certificat.css";
import CertificatEnCarton from "../../components/CertificatEnCarton/CertificatEnCarton";

const Certificat: React.FC<CertificatProps> = (props) => {
  const {} = useCertificat(props);

  return (
    <>
      <p>text Certificat </p>
      <CertificatEnCarton />

      <> btn dounload </>
    </>
  );
};

export default Certificat;
