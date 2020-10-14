import React from 'react';
import frame from '../../../images/logos/Frame.png';
import { Button} from 'react-bootstrap';


const HeaderContainer = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-5 col-sm-12" style={{marginTop: '100px'}}>
                    <h1 className='pb-3'>Let's Grow Your Brand To The Next Level</h1>
                    <p className='pb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae recusandae qui id, aliquam delectus quisquam.</p>
                    <Button className='mb-5' variant="dark pl-4 pr-4">Hire Us</Button>
                </div>
                <div className="col-md-7 col-sm-12">
                    <img class="img-fluid" src={frame} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderContainer;