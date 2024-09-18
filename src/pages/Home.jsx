import { useFetch } from '../hooks/useFetch';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { DarkModeButton } from '../components/DarkModeButton/DarkModeButton'

export const Home = () => {
    const today = new Date()
    let month = String(today.getMonth() +1).padStart(2,'0')
    let day = String(today.getDate()).padStart(2,'0')

    const { data, loading, error } = useFetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    if (!data || !data.events) return <p>No events found.</p>

    const sortedEvents = data.events.sort((a, b) => a.year - b.year)

    return (
        <>
            <PageTitle title="Today - History Site" />
            <DarkModeButton />
            <ul>
                {sortedEvents.map((event, index) => (
                    <li key={index}>
                        <h3>{event.year}</h3>
                        <p>{event.text}</p>
                        <a href={event.pages?.[0].content_urls.desktop.page} target="_blank">Read more</a>
                    </li>
                ))}
            </ul>
        </>
    )
}