import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { DarkModeButton } from '../components/DarkModeButton/DarkModeButton'
import readIcon from '../assets/icons/icons8-bookmark-48.png'

export const Home = () => {
    const today = new Date()
    let month = String(today.getMonth() +1).padStart(2,'0')
    let day = String(today.getDate()).padStart(2,'0')

    const { data, loading, error } = useFetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`);
    
    const [visibleCount, setVisibleCount] = useState(10)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    if (!data || !data.events) return <p>No events found or fetching events from database.</p>

    const sortedEvents = data.events.sort((a, b) => a.year - b.year)

    const loadMoreEvents = () => {
        setVisibleCount(prevCount => prevCount +10)
    }

    return (
        <>
            <PageTitle title="Today - History Site" />
            <DarkModeButton />
            <main className="timelineStyling">
                {sortedEvents.slice(0, visibleCount).map((event, index) => (
                    <article className="listItem" key={index}>
                        <h3 className="listH3">YEAR: {event.year}</h3>
                        <p>{event.text}</p>
                        <a href={event.pages?.[0].content_urls.desktop.page} target="_blank">
                            <img src={readIcon} alt="" />
                            Read more
                        </a>
                    </article>
                ))}                
            </main>
            {visibleCount < sortedEvents.length && (
                <button onClick={loadMoreEvents}>Load More</button>
            )}
        </>
    )
}