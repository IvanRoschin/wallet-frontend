// import { AppBar } from 'components/AppBar';
// import { useState } from 'react';
// import { Navigation } from 'components/Navigation';
// import { Container } from 'globalStyles/globalStyle';
// import { UserData } from 'components/UserData';
// import { Category } from 'components/Category';

// import {
//   Wrapper,
//   LeftSide,
//   RightSide,
//   Wrap,
//   AddTransButton,
//   SvgAddBtn,
// } from './UserPage.styled';
// import { AddCategoryModal } from 'components/Category/AddCategoryModal';

// const Dashboard = () => {
//   const [open, setOpen] = useState(false);
//   const handleModalToggle = () => {
//     setOpen(true);
//   };

//   const handleButtonToggle = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <AppBar />
//       <Container>
//         <Navigation />
//         <Wrapper>
//           <LeftSide>
//             <UserData />
//           </LeftSide>
//           <RightSide>
//             <Category />
//           </RightSide>
//         </Wrapper>
//       </Container>
//       {open ? (
//         <AddCategoryModal handleButtonToggle={handleButtonToggle} />
//       ) : (
//         <Wrap>
//           <AddTransButton type="button" onClick={handleModalToggle}>
//             <SvgAddBtn />
//           </AddTransButton>
//         </Wrap>
//       )}
//     </>
//   );
// };

// export default Dashboard;
