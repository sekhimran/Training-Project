import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './navigation/Navigation';


const Cartdetail = () => {
    return (
        <div>
            <Navigation />
            <div className="container">
              <div className="table-responsive">
                <table className="table activitites">
                    <thead>
                        <tr>
                            <th scope="col" className="text-uppercase header">item</th>
                            <th scope="col" className="text-uppercase">Quantity</th>
                            <th scope="col" className="text-uppercase">price each</th>
                            <th scope="col" className="text-uppercase">total</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="item">
                            <div className="d-flex align-items-start"> 
                            <img src="https://www.freepnglogos.com/uploads/corona-png-logo/corona-bottle-transparent-png-logo-27.png" alt=""/>
                                <div> Wine Bottle Shaped in Gift Base 
                                </div>
                            </div>
                        </td>
                        <td>120</td>
                        <td>$21.40</td>
                        <td>$249</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cartdetail
