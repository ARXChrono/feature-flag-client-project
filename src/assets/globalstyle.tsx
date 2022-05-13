import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body * {
  box-sizing: border-box;
}

/* Custom */

.page-layout {
  min-height: 100vh;
  width: 100h;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.promotional-banner {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 16px;
  display: flex;
  position: fixed;
  text-align: center;
  justify-content: center;
  color: rgb(46, 82, 61);
  background-color: rgb(241, 249, 250);
}

/* TODO Replace below */
.dashboard > .dashboard-details {
  width: 500px;
}

`

export default GlobalStyle
