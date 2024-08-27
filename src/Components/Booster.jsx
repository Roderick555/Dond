import React from 'react'
import Wheel from './Wheel'
import '../index.css'

function Booster() {
  return (
    
    <div className='booster'>

        <div className="spin-wheel">
            <Wheel/>
        </div>

        <div className='booster-section'>
    
            <div>
                <h3>Your daily Booster:</h3>
                <div className='booster-items'>
                    <button>Tapping Guru <br/>3/3</button>
                    <button>Full Tanker <br/>3/3</button>
                </div>
                <div className='upgrade-section'>
                    <h3 className='upgrade-text'>Change Your Level</h3>
                    <button className='upgrade-btn'>Upgrade</button>
                </div>
            </div>


        </div>

        <div>
            <h3>Boosters:</h3>
            <div className='booster-items-line'>
                <div className='booster-item'>
                    <i className='fas fa-fire'></i>
                    <div className='boost-item-detail'>
                        <h5>Boost X2</h5>
                        <p>400</p>                        
                    </div>
                </div>
                <div className='booster-item'>
                    <i className='fas fa-fire'></i>
                    <div className='boost-item-detail'>
                        <h5>Boost X2</h5>
                        <p>400</p>                        
                    </div>
                </div>
                <div className='booster-item'>
                    <i className='fas fa-fire'></i>
                    <div className='boost-item-detail'>
                        <h5>Boost X2</h5>
                        <p>400</p>                        
                    </div>
                </div>

            </div>
        </div>
</div>
  )
}

export default Booster