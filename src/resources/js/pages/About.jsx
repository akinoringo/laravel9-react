import React from 'react';
import { Button } from '@material-ui/core';

const About = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">React導入, route定義</div>
                    <div className="card-body">Im an example component!</div>
                    <Button color="secondary" variant="contained" href={`/`}>Homeに遷移ボタン</Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;