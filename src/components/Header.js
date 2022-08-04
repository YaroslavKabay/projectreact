import React from 'react';
import {GenresList} from "./GenresList";
import {GenresTools} from "./GenresTools";

const Header = () => {
    return (
        <div>
            <GenresTools/>
            <GenresList/>
        </div>
    );
};

export {Header};