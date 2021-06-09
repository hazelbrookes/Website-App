import Navbar from './Navbar';
import { useState } from 'react';
import React from "react";
import BuildGrid from './BuildGrid';

function Page() {
    const [page, setPage] = useState('home');

    if (page === 'folio') {
        return (
            <>
                <Navbar page={page} changePage={setPage} />
                <BuildGrid />
            </>
        );
    }else if(page === 'about'){
        return (
            <>
                <Navbar page={page} changePage={setPage} />
            </>
        );
    }else{
        return (
            <>
                <Navbar page={page} changePage={setPage} />
            </>
        );
    }
};


export default Page;