import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard } from './dashboard/dashboard'
import { NewCustomer } from './new-customer/new-customer'
import { Deposit } from './deposit/deposit'
import { Withdraw } from './withdraw/withdraw'
import './index.css'

import { Transfer } from './transfer/transfer'
import { Balance } from './balance/balance'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/new" element={<NewCustomer />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/balance" element={<Balance />} />
    </Routes>
  </BrowserRouter>
);


