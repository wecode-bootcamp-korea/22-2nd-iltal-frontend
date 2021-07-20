import { createContext, useState } from 'react';

export const RegistrationContext = createContext(null);

export const RegistrationUpdateContext = createContext(null);

export const RegistProviderWapper = props => {
  const [activeCategory, setActiveCategory] = useState('Host');
  const [uploadBackImage, setUploadBackImage] = useState('');
  const [uploadProfileImage, setUploadProfileImage] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');

  const [activeType, setActiveType] = useState('');
  const [activeSubtype, setActiveSubtype] = useState('');
  const [activePersonnelType, setActivePersonnelType] = useState('');
  const [reviseAddress, setReviseAddress] = useState('');
  const [addressSido, setAddressSido] = useState('');
  const [price, setPrice] = useState(0);

  const contextGetValue = {
    getter: {
      activeCategory,
      uploadBackImage,
      uploadProfileImage,
      nicknameValue,
      subjectValue,

      activeType,
      activeSubtype,
      activePersonnelType,
      reviseAddress,
      addressSido,
      price,
    },
  };

  const contextSetValue = {
    setter: {
      setActiveCategory,
      setUploadBackImage,
      setUploadProfileImage,
      setNicknameValue,
      setSubjectValue,

      setActiveType,
      setActiveSubtype,
      setActivePersonnelType,
      setReviseAddress,
      setAddressSido,
      setPrice,
    },
  };

  return (
    <RegistrationContext.Provider value={contextGetValue}>
      <RegistrationUpdateContext.Provider value={contextSetValue}>
        {props.children}
      </RegistrationUpdateContext.Provider>
    </RegistrationContext.Provider>
  );
};
