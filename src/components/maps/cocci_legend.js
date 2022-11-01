import React from 'react';
import './legend.css';

const CocciLegend = () => {
    return (
        <div className="legend">
            <div className="title">Cases per 100,000 person years</div>
            <div style={{ "--color": '#003f5c' }}>Over 1000</div>
            <div style={{ "--color": '#58508d' }}>250 - 1000</div>
            <div style={{ "--color": '#bc5090' }}>100 - 250</div>
            <div style={{ "--color": '#ff6361' }}>50 - 100</div>
            <div style={{ "--color": '#ffa600' }}>0 - 50</div>
            <div style={{ "--color": '#fee5d9' }}>0</div>
        </div>
    );
}
export default CocciLegend;