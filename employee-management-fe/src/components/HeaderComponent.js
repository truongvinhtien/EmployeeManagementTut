import React from "react";

const HeaderComponent = () => {
    const navHeaderClassName = 'navbar navbar-expand-md navbar-dark bg-dark'
    const javaguidesUrl = 'https://javaguides.net';
    const javaguidesClassName = 'navbar-brand';

    return (
        <div>
            <header>
                <nav className={navHeaderClassName}>
                    <div>
                        <a href={javaguidesUrl} className={javaguidesClassName}>
                            Employee Management Application
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent