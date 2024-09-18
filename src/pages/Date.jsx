import { useFetch } from '../hooks/useFetch';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { useState } from 'react';

export const Date = () => {
    // const today = new Date()
    // let month = String(today.getMonth() +1).padStart(2,'0')
    // let day = String(today.getDate()).padStart(2,'0')

    const { data, loading, error } = useFetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/11/26`);
    
    const [visibleCount, setVisibleCount] = useState(10)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    if (!data || !data.events) return <p>No events found.</p>

    const sortedEvents = data.events.sort((a, b) => a.year - b.year)

    const loadMoreEvents = () => {
        setVisibleCount(prevCount => prevCount +10)
    }

    return (
        <>
            <PageTitle title="By Date - History Site" />
            <ul>
                {sortedEvents.slice(0, visibleCount).map((event, index) => (
                    <li key={index}>
                        <h3>{event.year}</h3>
                        <p>{event.text}</p>
                        <a href={event.pages?.[0].content_urls.desktop.page} target="_blank">Read more</a>
                    </li>
                ))}
            </ul>
            {visibleCount < sortedEvents.length && (
                <button onClick={loadMoreEvents}>Load More</button>
            )}
        </>
    )
}