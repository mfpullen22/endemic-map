import React from 'react';
import './legend.css';

const BlastoLegend = () => {
    return (
        <div className="legend">
            <div className="title">Cases per 100,000 person years</div>
            <div style={{ "--color": '#003f5c' }}>Over 150</div>
            <div style={{ "--color": '#7a5195' }}>50 - 150</div>
            <div style={{ "--color": '#ef5675' }}>25 - 50</div>
            <div style={{ "--color": '#ffa600' }}>1 - 25</div>
            <div style={{ "--color": '#fee5d9' }}>0</div>
        </div>
    );
}
export default BlastoLegend;