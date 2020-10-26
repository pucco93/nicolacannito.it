import React, { useState } from 'react';
import headerStyles from './Header.styles';

export interface IHeaderProps {
    changePage: (newValue: string) => void;
}

const Header = (props: IHeaderProps) => {
    const [ value, setValue ] = useState("Home");
    const { mainNav } = headerStyles(props);

    return (
        <div className={ mainNav }>
        </div>
    );
};

export default Header;