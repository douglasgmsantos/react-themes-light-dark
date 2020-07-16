import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from 'styled-components'

import { Container } from "./styles";

interface IProps {
  toggleTheme(): void
}

const Header: React.FC<IProps> = ({ toggleTheme }: IProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Ola Mundo
      <Switch
        onChange={() => toggleTheme()}
        checked={title == 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={colors.background}

      />
    </Container>
  )
}

export default Header;
