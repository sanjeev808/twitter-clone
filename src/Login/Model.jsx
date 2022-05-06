import React from "react";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import {Button} from '@material-ui/core'


export default function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="d-flex" style={{marginTop:'20px'}}>
          <button onClick={() => closeModal(false)} className="closeModal">
            X
          </button>
          <TwitterIcon className="modalicon" />
        </div>
        <div className="formHeading">
          <div className="title">
            <h2> Create your account</h2>
          </div>
          <form action="">
            <div className="name">
              <input
                type="text"
                name="Name"
                id="Name"
                className="Name"
                placeholder="Name"
              />
            </div>
            <div className="Phone">
              <input
                type="number"
                name="Number"
                id="Number"
                className="Number"
                placeholder="Phone"
              />
            </div>
            <div >
              <h4 className="dateheading">Date of Birth</h4>
              <p className="datepara">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <div className="d-flex">
                <div>
                  <select name="Month" id="month" placeholder="Month">
                    <option value="">Month</option>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">October</option>
                    <option value="">December</option>


                  </select>
                </div>
                <div>
                  <select name="Date" id="date" placeholder="Date">
                    <option value="">Date</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>




                    
                  </select>
                </div>
                <div>
                  <select name="Year" id="year" placeholder="year">
                    <option value="">Year</option>
                    <option value="">2022</option>
                    <option value="">2021</option>
                    <option value="">2020</option>
                    <option value="">2019</option>
                    <option value="">2018</option>
                    <option value="">2017</option>
                    <option value="">2016</option>
                    <option value="">2015</option>
                    <option value="">2014</option>
                    <option value="">2013</option>
                    <option value="">2012</option>
                    <option value="">2011</option>
                    <option value="">2010</option>
                    <option value="">2009</option>
                    <option value="">2008</option>
                    <option value="">2007</option>
                    <option value="">2006</option>
                    <option value="">2005</option>
                    <option value="">2004</option>
                    <option value="">2003</option>
                    <option value="">2002</option>
                    <option value="">2001</option>
                    <option value="">2000</option>
                    <option value="">1999</option>
                    <option value="">1998</option>
                    <option value="">1997</option>
                    <option value="">1996</option>
                    <option value="">1995</option>
                    <option value="">1994</option>
                    <option value="">1993</option>
                    <option value="">1992</option>
                    <option value="">1991</option>
                    <option value="">1990</option>
                    <option value="">1889</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          {/* <div className="body"><p>csvfdvdbfdb</p></div> */} 
          <div className="footer" onClick={() => closeModal(false)}>
          <Button variant='outlined'  fullWidth className="footerbtn">Next</Button>
        </div>
        </div>
       
      </div>
    </div>
  );
}
