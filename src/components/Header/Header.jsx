import HeaderStyle from './Header.module.scss'

export const Header = ({children}) => {
    return (
        <>
            <div className={HeaderStyle.BGImage}></div>
            <header>
                <div className={HeaderStyle.HeaderElement}>
                <span className={`${HeaderStyle.circle} ${HeaderStyle.circleTopLeft}`}></span>
                <span className={`${HeaderStyle.circle} ${HeaderStyle.circleTopRight}`}></span>
                <span className={`${HeaderStyle.circle} ${HeaderStyle.circleBottomLeft}`}></span>
                <span className={`${HeaderStyle.circle} ${HeaderStyle.circleBottomRight}`}></span>
                    {children}
                </div>
            </header>
        </>
    )
}