
import React, { useState, useEffect } from "react";
// import {
//     HashRouter as Router,
//     Routes,
//     Route,
// } from "react-router-dom";
import { init } from '../store/landing';
// import { ErrorBoundary } from "./error";

import dynamic from "next/dynamic";
// import { Path } from "../constant";

const Landing = dynamic(async () => (await import("./landing")).Landing, {

});

// const Action = dynamic(async () => (await import("./action")).Action, {

// });
function Screen() {
    return (
        <>
            <Landing />
            {/* <Routes >
                <Route path={Path.Home} element={<Landing />} />
                <Route path={Path.Action} element={<Action />} />
            </Routes> */}
        </>
    );
}
const useHasHydrated = () => {
    const [hasHydrated, setHasHydrated] = useState<boolean>(false);

    useEffect(() => {
        setHasHydrated(true);
        init();
    }, []);

    return hasHydrated;
};


export function Home() {
    if (!useHasHydrated()) {
        return <div />;
    }

    return (
        <Screen />
        // <ErrorBoundary >
        //     <Router basename="/">
        //         <Screen />
        //     </Router>
        // </ErrorBoundary>
    );
}
