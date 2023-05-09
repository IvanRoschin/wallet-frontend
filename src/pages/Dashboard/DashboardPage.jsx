import { useState } from 'react';
// import toast from 'react-hot-toast';
// import i18n from 'i18n';

import { AppBar } from 'components/AppBar';
import { Navigation } from 'components/Navigation';
import { Balance } from 'components/Balance';
import { Currency } from 'components/Currency';
import { Transactions } from 'components/Transactions';
import Media from 'react-media';
// import { Container } from 'globalStyles/globalStyle';

import {
  // Wrapper,
  // LeftSide,
  // RightSide,
  PageContainer,
  Wrap,
  AddTransButton,
  SvgAddBtn,
} from './DashboardPage.styled';
import AddTransactionModal from 'components/Transactions/AddTransactionModal/AddTransactionModal';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleModalToggle = () => {
    setOpen(true);
  };

  const handleButtonToggle = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar />
      <PageContainer>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <>
              <Navigation />
              <Balance />
              <Transactions />
              <Currency />
              {open ? (
                <AddTransactionModal handleButtonToggle={handleButtonToggle} />
              ) : (
                <Wrap>
                  <AddTransButton type="button" onClick={handleModalToggle}>
                    <SvgAddBtn />
                  </AddTransButton>
                </Wrap>
              )}
            </>
          )}
        />
        {/* <Wrapper>
          <LeftSide>
            <Navigation />
            <Balance />
            <Currency />
          </LeftSide>
          <RightSide>
            <Transactions />
          </RightSide>
        </Wrapper> */}
      </PageContainer>
    </>
  );
};

export default Dashboard;
