import React, {createContext, useState} from 'react';

const PageDataContext = createContext({});

export const PageDataProvider = ({children}) => {
    const [pageData, setPageData] = useState();

    return (
        <PageDataContext.Provider value={{pageData, setPageData}}>
            {children}
        </PageDataContext.Provider>
    );
};

export {PageDataContext};
