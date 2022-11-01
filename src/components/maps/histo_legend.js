import React from 'react';
import './legend.css';

const HistoLegend = () => {
    return (
        <div className="legend">
            <div className="title">Cases per 100,000 person years</div>
            <div style={{ "--color": '#003f5c' }}>Over 1000</div>
            <div style={{ "--color": '#7a5195' }}>250 - 1000</div>
            <div style={{ "--color": '#ef5675' }}>100 - 250</div>
            <div style={{ "--color": '#ffa600' }}>0 - 100</div>
            <div style={{ "--color": '#fee5d9' }}>0</div>
        </div>
    );
}
export default HistoLegend;