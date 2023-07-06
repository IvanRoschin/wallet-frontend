import { AppBar } from 'components/AppBar';
import { Navigation } from 'components/Navigation';
import { Balance } from 'components/Balance';
import { Currency } from 'components/Currency';
import { TransactionsList } from 'components/Transactions';
import { UserData } from 'components/UserData';
import { Category } from 'components/Category';
import { Statistics } from 'pages/Statistics/Statistics';
import Media from 'react-media';
import { useState, useEffect } from 'react';
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
import { AddTransactionModal } from 'components/Transactions/AddTransactionModal';
import { AddCategoryModal } from 'components/Category/AddCategoryModal';
import { useSearchParams } from 'react-router-dom';
import { setToken } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Home`;

    if (accessToken && refreshToken) {
      // token.set(accessToken);
      dispatch(setToken(accessToken));
      localStorage.setItem('refreshToken', refreshToken);
    }
  }, [accessToken, dispatch, refreshToken]);

  const handleModalTrans = () => {
    setOpen(true);
  };

  const handleButtonTrans = () => {
    setOpen(false);
  };

  const handleModalCategory = () => {
    setOpen(true);
  };

  const handleButtonCategory = () => {
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
                          handleButtonToggle={handleButtonTrans}
                        />
                      ) : (
                        <Wrap>
                          <AddTransButton
                            type="button"
                            onClick={handleModalTrans}
                          >
                            <SvgAddBtn />
                          </AddTransButton>
                        </Wrap>
                      )}
                    </>
                  )}
                  {pathname === '/statistic' && <Statistics />}
                  {pathname === '/currency' && <Currency />}
                  {pathname === '/account' && (
                    <>
                      <UserData /> <Category />
                      {open ? (
                        <AddCategoryModal
                          handleButtonToggle={handleButtonCategory}
                        />
                      ) : (
                        <Wrap>
                          <AddTransButton
                            type="button"
                            onClick={handleModalCategory}
                          >
                            <SvgAddBtn />
                          </AddTransButton>
                        </Wrap>
                      )}
                    </>
                  )}
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
                          handleButtonToggle={handleButtonTrans}
                        />
                      ) : (
                        <Wrap>
                          <AddTransButton
                            type="button"
                            onClick={handleModalTrans}
                          >
                            <SvgAddBtn />
                          </AddTransButton>
                        </Wrap>
                      )}
                    </>
                  )}
                  {pathname === '/statistic' && <Statistics />}
                  {pathname === '/account' && (
                    <>
                      <UserData /> <Category />
                      {open ? (
                        <AddCategoryModal
                          handleButtonToggle={handleButtonCategory}
                        />
                      ) : (
                        <Wrap>
                          <AddTransButton
                            type="button"
                            onClick={handleModalCategory}
                          >
                            <SvgAddBtn />
                          </AddTransButton>
                        </Wrap>
                      )}
                    </>
                  )}
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
                              handleButtonToggle={handleButtonTrans}
                            />
                          ) : (
                            // <Wrap>
                            <AddTransButton
                              type="button"
                              onClick={handleModalTrans}
                            >
                              <SvgAddBtn />
                            </AddTransButton>
                            // </Wrap>
                          )}
                        </>
                      )}
                      {pathname === '/statistic' && <Statistics />}
                      {pathname === '/account' && (
                        <>
                          <UserData /> <Category />
                          {open ? (
                            <AddCategoryModal
                              handleButtonToggle={handleButtonCategory}
                            />
                          ) : (
                            <Wrap>
                              <AddTransButton
                                type="button"
                                onClick={handleModalCategory}
                              >
                                <SvgAddBtn />
                              </AddTransButton>
                            </Wrap>
                          )}
                        </>
                      )}
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
