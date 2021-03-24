import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


export default function DataGraph({ apiData }) {

    const filteredData = apiData.filter((a, i) => { return (i % 5 === 0) && a.Date.slice(5, 7) !== '03' })
        .map(a => { return { Date: a.Date.slice(0, 10), Deaths: a.Deaths, Recovered: a.Recovered, Confirmed: a.Confirmed ,Active:a.Active} })

    return (<div className="data-graph">
        <AreaChart
            width={800}
            height={400}
            data={filteredData}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Deaths" stackId="1" stroke="#ff0000" fill="#ff1111" />
            <Area type="monotone" dataKey="Recovered" stackId="1" stroke="#11dd11" fill="#11ff11" />
            <Area type="monotone" dataKey="Active" stackId="1" stroke="#000000" fill="#000000" />
            <Area type="monotone" dataKey="Confirmed" stackId="1" stroke="#1111ff" fill="#8884d8" />
        </AreaChart></div>
    );

}
