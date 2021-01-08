import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actions as appActions } from "../redux/appConfig/duck";

const CustomText = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;

function RootComponent() {
  const { theme } = useSelector((state) => state.appConfig);
  const dispatch = useDispatch();
  const actualTheme = theme;

  return (
    <>
      <CustomText>
        O tema possui uma cor e você pode mudá-la clicando abaixo
      </CustomText>
      <button
        onClick={() =>
          dispatch(
            appActions.invertTheme(actualTheme === "light" ? "dark" : "light")
          )
        }
      >
        Trocar tema
      </button>
    </>
  );
}

export default RootComponent;
