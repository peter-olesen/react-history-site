import { Outlet, useLocation } from "react-router-dom"
import { Header } from '../components/Header/Header'
import { Navigation } from '../components/Navigation/Navigation'
import { Divider } from '../components/Divider/Divider'

export function PageLayout() {
    const location = useLocation()
    const pathname = location.pathname

    const HeaderContent = () => {
        switch (pathname) {
            case '/':
                return (
                    <>
                        <h1>ON THIS DAY</h1>
                        <h2>What happened on this day - historical events,< br/> deaths and births thoughout time</h2>
                    </>
                );
            case '/date':
                return (
                    <>
                        <h1>ON: 22/08</h1>
                        <h2>What happened on this day - Here you can enter<br /> a specific date to get only events that happened<br /> on this date</h2>
                    </>
                );
            case '/since':
                return (
                    <>
                        <h1>SINCE: 1947</h1>
                        <h2>What happened on this day - Here you can enter<br />  a specific year to get only events for that year</h2>
                    </>
                );
        }
    }
    
    return (
        <>
            <Header>
                {HeaderContent()}                
            </Header>
            <Navigation />
            <Divider />
            <Outlet />
    </>
    )
}