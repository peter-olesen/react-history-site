import { useState } from "react";

export const DateComponent = () => {

    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    
    const handleDateChange = (e) => {
        const value = e.target.value
        if (value === '' || (value >= 1 && value <= 31)) {
        setDate(value.slice(0, 2))
        }
    };
    
    const handleMonthChange = (e) => {
        const value = e.target.value
        if (value === '' || (value >= 1 && value <= 12)) {
        setMonth(value.slice(0, 2))
        }
    }
      
    return (
        <>
            <h1>ON:
                <input
                    type="number"
                    id="date"
                    name="date"
                    min="1"
                    max="31"
                    maxLength="2"
                    value={date}
                    onChange={handleDateChange}
                    placeholder="DD"
                />
                <input
                    type="number"
                    id="month"
                    name="month"
                    min="1"
                    max="12"
                    value={month}
                    maxLength="2"
                    onChange={handleMonthChange}
                    placeholder="MM"
                />
            </h1>
            <h2>What happened on this day - Here you can enter<br /> a specific date to get only events that happened<br /> on this date</h2>
        </>
    )
}