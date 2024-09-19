import { PageTitle } from '../components/PageTitle/PageTitle'
import { DarkModeButton } from '../components/DarkModeButton/DarkModeButton'

export const About = () => {
    return (
        <>
            <PageTitle title="About - History Site" />
            <DarkModeButton />
            <main className="aboutStyling">
                <p>Welcome to Today in History, where we take you on a wild ride through the twists and turns of the past! Whether it's epic battles, quirky inventions, or the occasional royal mishap, history is full of surprises—and we’re here to serve them up daily, straight to your screen.</p>
                <p>Think of us as your time-traveling tour guides, minus the flux capacitor. We scour the annals of history (well, technically, we let Wikipedia's API do the heavy lifting) to bring you fascinating tidbits from this very day, but years—or even centuries—ago. It’s like reliving the past, only without the plague and questionable fashion choices.</p>
                <p>Speaking of Wikipedia, let’s give a shout-out to our knowledge partner! Yep, all our historical facts come fresh from Wikipedia's API. So, if something seems unbelievable (like the time an <a href="https://en.wikipedia.org/wiki/Emu_War" target="_blank">emu war</a> actually happened), remember, we didn’t make it up—we just know where to find the good stuff.</p>
                <p>Here’s how it works: we dig up history’s best moments, throw in a little sorting magic, and present you with bite-sized chunks of "did-you-know" gold. Curious about what happened today but 500 years ago? We’ve got it. Want to impress your friends with an obscure fact about <a href="https://en.wikipedia.org/wiki/Ancient_Rome" target="_blank">ancient Rome</a>? Look no further. Need a conversation starter at dinner parties? We’ve got you covered.</p>
                <p>But don't just read, dive in! Browse through today’s events, click on the links, and head down that delightful Wikipedia rabbit hole (we know you want to). Whether you're a history buff or just here for the strange-but-true stories, Today in History is your one-stop shop for all things past.</p>
                <p>Remember: history is full of lessons, but it’s also full of laughs, weirdness, and plenty of "how on earth did that happen?" moments. So buckle up—it’s going to be a fun ride!</p>

            </main>
        </>
    )
}