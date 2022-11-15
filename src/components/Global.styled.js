import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root{
    /* colors */
    --primary: rgba(99, 101, 109);
    --secondary:#fff;
    --light_gray:#cccccc;
    --overlay:rgba(0, 0, 0, 0.5);
    --box_shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    /* dimensions */
    --border_radius:8px;
}
`;
