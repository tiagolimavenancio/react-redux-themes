import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

function ThemeContextComponent() {
  const themeContext = useContext(ThemeContext);

  return (
    <p style={{ color: themeContext.colors.primary }}>
      Você também pode acessar o tema dentro de um componente
    </p>
  );
}

export default ThemeContextComponent;
