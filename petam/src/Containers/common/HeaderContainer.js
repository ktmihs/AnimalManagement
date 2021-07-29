import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Components/common/Header';
import { logout } from '../../modules/user';
import { hlogout } from '../../modules/hospital';

const HeaderContainer = () => {
  const { user, hospital } = useSelector(({ user, hospital}) => ({ user: user.user, hospital: hospital.hospital}));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
   const onHLogout = () => {
     dispatch(hlogout());
   };
  return (
    <>
      {user && <Header user={user} onLogout={onLogout} />}
      {hospital && <Header user={hospital} onLogout={onHLogout} ></Header>}
      {!user & !hospital && (
        <Header />
      )}
  
    </>
  );
};

export default HeaderContainer;
