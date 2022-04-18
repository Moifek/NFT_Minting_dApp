import React, { FC, useState } from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';

import logo from './logo.png';
import gif1 from './gif1.gif';
import './Homeindex.css';

interface Props {
  title: string;
  initialCount: number;
}

const Home: FC<Props> = ({ title, initialCount }) => {
  const [count, setCount] = useState(0);
  const { address } = useGetAccountInfo();
  const add = (factor = 1) => {
    if (factor < 0) {
      if (count > 0) setCount(count + factor);
    } else {
      setCount(count + factor);
    }
  };

  return (
    <div
      className='d-flex flex-fill align-items-center container'
      style={{
        backgroundColor: '#1e8520',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='row w-100 justify-content-between'>
        <div className='col-12 col-md-8 col-lg-5 mx-auto'>
          <img
            src={String(logo)}
            alt='Logo'
            className='rounded mx-auto d-block'
            style={{
              width: '370px',
              height: '320px',
              margin: '15px',
              padding: '25px'
            }}
          />

          <div className='card shadow-sm rounded border border-warning p-4'>
            <div className='card-body text-center'>
              <img
                src={String(gif1)}
                className='rounded border rounded-circle mx-auto d-block'
                style={{
                  width: '320px',
                  height: '320px',
                  border: '10px',
                  margin: '15px'
                }}
                alt='gif'
              ></img>
              <h2 className='mb-3' data-testid='title'>
                {dAppName}
              </h2>
              <div className='container'>
                {address ? (
                  <button
                    className='btn btn-warning btn-lg mt-3 text-white'
                    style={{
                      margin: '10px'
                    }}
                    onClick={() => add()}
                  >
                    +
                  </button>
                ) : null}
                {address ? <h5>{count}</h5> : null}
                {address ? (
                  <button
                    className='btn btn-secondary btn-lg mt-3 text-white'
                    style={{
                      margin: '5px'
                    }}
                    onClick={() => add(-1)}
                  >
                    -
                  </button>
                ) : null}
              </div>
              {address ? (
                <button
                  className='btn btn-warning btn-lg mt-3 text-white'
                  style={{
                    margin: '5px'
                  }}
                >
                  Mint
                </button>
              ) : null}{' '}
              {address ? (
                <button
                  className='btn btn-secondary btn-lg mt-3 text-white'
                  style={{
                    margin: '5px'
                  }}
                  onClick={() => {
                    window.open(
                      'https://deadrare.io/collection/ZEB-9k4d2j',
                      '_blank'
                    );
                  }}
                >
                  DeadRare
                </button>
              ) : null}
              <br />
              <br />
              <p className='mb-3'>
                This is the official N4P foresters NFTs Minting Site
                <br /> Login using your Elrond wallet.
              </p>
              {!address ? (
                <Link
                  to={routeNames.unlock}
                  className='btn btn-primary mt-3 text-white'
                  data-testid='loginBtn'
                >
                  Login
                </Link>
              ) : null}
            </div>
            <img
              src={String(logo)}
              className='rounded float-right'
              alt='...'
            ></img>
          </div>

          <p
            style={{
              padding: '15px',
              textAlign: 'center',
              alignContent: 'center',
              color: 'white'
            }}
          >
            We have set the gas limit to 1000 for the contract to successfully
            mint your NFT. We recommend that you do not lower the gas limit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;