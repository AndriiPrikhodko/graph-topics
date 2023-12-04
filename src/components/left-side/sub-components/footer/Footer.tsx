import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer" data-testid='footer'>
            <div className="legal-notice">
                <h2>Author</h2>
                <p>© {currentYear} Andrii Prykhodko. All Rights Reserved. email:
                    <a>prykhodkoaa@gmail.com</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer