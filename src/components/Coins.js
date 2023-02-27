import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

import './Coins.css'

const Coins = (props) => {
    return (
        <div className='container'>
            <div className='contianer'>
            
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <Navbar />
            
            
            </div>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p >Volume</p>
                    <p >Mkt Cap</p>
                </div>

              {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}

            </div>
        </div>
    )
}

export default Coins;  