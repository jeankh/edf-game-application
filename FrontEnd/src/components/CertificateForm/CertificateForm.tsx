import { CertificateFormProps, useCertificateForm } from "./useCertificateForm";
import React from "react";
import "./CertificateForm.css";

const CertificateForm: React.FC<CertificateFormProps> = (props) => {
  const { handleUpdate, user, handleSubmit } = useCertificateForm(props);

  return (
    // export interface User {
    //   name: string;
    //   nickname: string;
    //   email: string;
    //   age: number;
    //   score: number;
    // }

    <>
      <div className="CertificateForm">
        <form className="NotreForm" onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={user.nickname}
            onChange={(e) => handleUpdate("nickname", e.target.value)}
            name="nickname"
            placeholder="Your name.."
            required
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="name"
            value={user.name}
            onChange={(e) => handleUpdate("name", e.target.value)}
            placeholder="Your last name.."
            required
          />

          <label htmlFor="lEmail"> Email </label>
          <input
            type="email"
            id="lEmail"
            name="email"
            // value={user.age}
            onChange={(e) => handleUpdate("email", e.target.value)}
            placeholder="Your email  .. "
            required
          />

          <label htmlFor="lAge"> Age </label>
          <input
            type="number"
            id="lAge"
            name="Age"
            // value={user.age}
            onChange={(e) => handleUpdate("age", e.target.value)}
            placeholder="Your Age .. "
            min={7}
            max={110}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default CertificateForm;
