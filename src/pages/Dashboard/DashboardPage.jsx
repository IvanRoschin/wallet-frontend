import { AppBar } from 'components/AppBar';
import { Navigation } from 'components/Navigation';
import { Balance } from 'components/Balance';
import { Currency } from 'components/Currency';
import { Transactions } from 'components/Transactions';
import { Statistics } from 'pages/Statistics/Statistics';
import Media from 'react-media';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'globalStyles/globalStyle';
import {
  Wrapper,
  LeftSide,
  RightSide,
  PageContainer,
  Wrap,
  AddTransButton,
  SvgAddBtn,
  // DashboardSeparator,
} from './DashboardPage.styled';
import AddTransactionModal from 'components/Transactions/AddTransactionModal/AddTransactionModal';

const Dashboard = () => {
  const { pathname } = useLocation();
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
              {pathname === '/statistic' && <Statistics />}
              {pathname === '/home' && (
                <>
                  <Balance />
                  <Transactions />
                </>
              )}
              {pathname === '/currency' && <Currency />}
            </>
          )}
        />
        {open ? (
          <AddTransactionModal handleButtonToggle={handleButtonToggle} />
        ) : (
          <Wrap>
            <AddTransButton type="button" onClick={handleModalToggle}>
              <SvgAddBtn />
            </AddTransButton>
          </Wrap>
        )}
      </PageContainer>

      <Media
        query="(min-width: 768px)"
        render={() => (
          <Container>
            <Wrapper>
              <LeftSide>
                <Navigation />
                <Balance />
              </LeftSide>
              <RightSide>
                <Currency />
              </RightSide>
            </Wrapper>
            <Transactions />
            {open ? (
              <AddTransactionModal handleButtonToggle={handleButtonToggle} />
            ) : (
              <Wrap>
                <AddTransButton type="button" onClick={handleModalToggle}>
                  <SvgAddBtn />
                </AddTransButton>
              </Wrap>
            )}
          </Container>
        )}
      />
    </>
  );
};

export default Dashboard;
