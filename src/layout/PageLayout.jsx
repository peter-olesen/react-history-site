import { Outlet, useLocation } from "react-router-dom"
import { Header } from '../components/Header/Header'
import { Navigation } from '../components/Navigation/Navigation'
import { Divider } from '../components/Divider/Divider'
import { DateComponent } from '../components/DateComponent/DateComponent'

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
                        <DateComponent />
                    </>
                );
            case '/about':
                return (
                    <>
                        <h1>ABOUT US</h1>
                        <h2>Today in History serves up history’s weirdest moments,<br /> guaranteed to make you laugh and wonder how we’ve made it this far!</h2>
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