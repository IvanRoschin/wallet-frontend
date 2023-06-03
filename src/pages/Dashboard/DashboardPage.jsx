import { AppBar } from 'components/AppBar';
import { Navigation } from 'components/Navigation';
import { Balance } from 'components/Balance';
import { Currency } from 'components/Currency';
import { TransactionsList } from 'components/Transactions';
import { Statistics } from 'pages/Statistics/Statistics';
import Media from 'react-media';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'globalStyles/globalStyle';
import {
  Wrapper,
  LeftSide,
  RightSide,
  Wrap,
  AddTransButton,
  SvgAddBtn,
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
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1279px)',
          desktop: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile && (
              <>
                <Container>
                  <Navigation />
                  {pathname === '/home' && (
                    <>
                      <Balance /> <TransactionsList />
                      {open ? (
                        <AddTransactionModal
                          handleButtonToggle={handleButtonToggle}
                        />
                      ) : (
                        <Wrap>
                          <AddTransButton
                            type="button"
                            onClick={handleModalToggle}
                          >
                            <SvgAddBtn />
                          </AddTransButton>
                        </Wrap>
                      )}
                    </>
                  )}
                  {pathname === '/statistic' && <Statistics />}
                  {pathname === '/currency' && <Currency />}
                </Container>
              </>
            )}
            {matches.tablet && (
              <>
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
                  {pathname === '/home' && (
                    <>
                      <TransactionsList />
                      {open ? (
                        <AddTransactionModal
                          handleButtonToggle={handleButtonToggle}
                        />
                      ) : (
                        <Wrap>
                          <AddTransButton
                            type="button"
                            onClick={handleModalToggle}
                          >
                            <SvgAddBtn />
                          </AddTransButton>
                        </Wrap>
                      )}
                    </>
                  )}
                  {pathname === '/statistic' && <Statistics />}
                </Container>
              </>
            )}
            {matches.desktop && (
              <>
                <Container>
                  <Wrapper>
                    <LeftSide>
                      <Navigation />
                      <Balance />
                      <Currency />
                    </LeftSide>
                    <RightSide>
                      {pathname === '/home' && (
                        <>
                          <TransactionsList />
                          {open ? (
                            <AddTransactionModal
                              handleButtonToggle={handleButtonToggle}
                            />
                          ) : (
                            // <Wrap>
                            <AddTransButton
                              type="button"
                              onClick={handleModalToggle}
                            >
                              <SvgAddBtn />
                            </AddTransButton>
                            // </Wrap>
                          )}
                        </>
                      )}
                      {pathname === '/statistic' && <Statistics />}
                    </RightSide>
                  </Wrapper>
                </Container>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default Dashboard;
