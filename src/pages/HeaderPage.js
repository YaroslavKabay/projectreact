import React from 'react';

import {GenresList, GenresTools} from "../components";

const HeaderPage = () => {
    return (
        <div>
            <GenresTools/>
            <GenresList/>
        </div>
    );
};

export {HeaderPage};