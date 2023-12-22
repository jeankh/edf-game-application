import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { update } from "../../reducers/Ducks/certificationDukck";
import { createUser } from "../../services/sections/postResultat";
import { useNavigate } from 'react-router-dom';

export interface CertificateFormProps {

}

export const useCertificateForm = (props: CertificateFormProps) => {
  const navigate = useNavigate();
      const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
  
    const handleUpdate = (field: string, value: string | boolean | number) => {

    
      dispatch(update(field, value));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
      
        console.log(user);
      
        try {
          const response = await createUser(user);
          console.log(response);
          dispatch(update('uuid',response.id ));
          
          // window.location.href = '/Certificat'; 
          navigate('/Certificat');         
        } catch (error) {
          console.error('There was an error:', error);

          navigate('/Certificat');      

        }
      };
      



 

  // Return the props or other values as needed
  return { ...props , handleUpdate , user ,handleSubmit};
};
