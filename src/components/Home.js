import React from 'react'
import Button from '@material-ui/core/Button';
import './Home.css'
import Header from './Header';

function Home() {
    return (
        <div>
            <Header />
            <input
                accept=".json"
                id="contained-button-file"
                className="input"
                type="file"
            />
            <label htmlFor="contained-button-file" className="btn_upload">
                <Button variant="contained" color="primary" component="span">
                Upload
                </Button>
            </label>
        </div>
    )
}

export default Home
