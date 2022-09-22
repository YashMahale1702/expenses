import React from 'react';
import './Chart.scss';
import ChartBar from './ChartBar';

const Chart = (props) => {
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
