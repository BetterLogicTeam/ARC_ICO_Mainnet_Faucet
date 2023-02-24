import { Card } from "antd";
import React from "react";
import "./DashBoard.css";

export default function DashBoard() {
  return (
    <div>
      <div className="container">
        <div className=" left_connent text-start">
          <h1 className="main_home_heading text-white">
            Welcome to the PreSale of <br /> ARC Coin and WARC on Ethereum and Binance Chain.
          </h1>
          <p className="home_land_para text-white">
            Buy ARC and WARC with USDT and USDC on Ethereum Chain.
            Buy ARC and WARC with BUSD and USDC on Binance Chain.
            User can buy ARC Coins and WARC token at a very discounted price in the
            Presale.During the Presale the conversion rate is 8333 ARC per USDC/USDT/BUSD .
          </p>
          {/* <img src={dog} alt=""  className="dog_img" /> */}
          {/* <button  className="btn btn-success" onClick={()=>connectWallet()}>Connect </button> */}
          {/* <div className="d-flex">
              <img src={play} alt="" />
              <h3 className="play_headig">Watch a short Explainer Video</h3>
            </div> */}
        </div>
      </div>
      <div className="row container mt-5 ">
        
        <div className="col-lg-6 col-md-6 btn_center">
          <a
            href="https://arc-pre-sale-ethereum.netlify.app/"
            target="_blank"
            class="btn btn-1"
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            USDC (ERC20)
          </a>
        </div>
     
        <div className="col-lg-6 col-md-6 btn_center1">
          {/* <Card
            className="card_dashboard"
            bordered={false}
            style={{ width: 300 }}
          >
            <a href="https://arc-pre-sale-bsc.netlify.app/" target="_blank">
              <p>BUSD (BEP20)</p>
            </a>
          </Card> */}
          <a
            href="https://arc-pre-sale-bsc.netlify.app/"
            target="_blank"
            class="btn btn-1"
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            BUSD (BEP20)
          </a>
        </div>
      </div>

      <div className="row container mt-3 ">
        {/* <div className="col-lg-3"></div> */}
        <div className="col-lg-6 col-md-6 btn_center">
          {/* <Card
            className="card_dashboard"
            bordered={false}
            style={{ width: 300 }}
          >
            <a href="https://arc-pre-sale-ethereum.netlify.app/" target="_blank">
              <p>USDT (ERC20)</p>
            </a>
          </Card> */}

          <a
            href="https://arc-pre-sale-ethereum.netlify.app/"
            target="_blank"
            class="btn btn-1"
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            USDT (ERC20)
          </a>
        </div>
       
        <div className="col-lg-6 col-md-6 btn_center1">
          {/* <Card
            className="card_dashboard"
            bordered={false}
            style={{ width: 300 }}
          >
            <a href="https://arc-pre-sale-bsc.netlify.app/" target="_blank">
              <p>USDC (BEP20)</p>
            </a>
          </Card> */}

          <a
            href="https://arc-pre-sale-bsc.netlify.app/"
            target="_blank"
            class="btn btn-1"
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            USDC (BEP20)
          </a>
        </div>
      </div>
    </div>
  );
}
