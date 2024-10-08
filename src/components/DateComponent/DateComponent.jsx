import { useState } from "react";
import dc from './DateComponent.module.scss'

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
            <h1 className={dc.dateH1}>ON:&#x2800;
                <span className={dc.dateSpan}>
                    <input className={dc.dateInput}
                        type="number"
                        id="date"
                        name="date"
                        min="1"
                        max="31"
                        maxLength="2"
                        value={date}
                        onChange={handleDateChange}
                        placeholder="DD"
                        autocomplete="off"
                    /> /
                    <input className={dc.dateInput}
                        type="number"
                        id="month"
                        name="month"
                        min="1"
                        max="12"
                        value={month}
                        maxLength="2"
                        onChange={handleMonthChange}
                        placeholder="MM"
                        autocomplete="off"
                    />
                </span>
            </h1>
            <h2>What happened on this day - Here you can enter<br /> a specific date to get only events that happened<br /> on this date</h2>
        </>
    )
}