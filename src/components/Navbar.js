import React from 'react'
// import PropTypes from 'prop-types'


export default function Navbar(props) {
//   const [btnText, setBtnText] = useState("Enable light Mode")

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    {/* <div className={`form-check form-switch mx-1 text-${props.bg === 'light || green'?'dark': 'light'}`}>
                        <input className="form-check-input" onClick={props.backChange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable BlueTheme</label>
                    </div> */}
                    <div className={`form-check form-switch mx-1 text-${props.mode === 'light'?'dark': 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" area-role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//     title : "set title here",
//     aboutText : "set about here"
// }
