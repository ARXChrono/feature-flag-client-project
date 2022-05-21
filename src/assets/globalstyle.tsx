import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f6f6;
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
  @media (min-width: 768px) {
    justify-content: center;
  }
}

.promotional-banner {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  position: fixed;
  text-align: center;
  justify-content: center;
  color: rgb(46, 82, 61);
  background-color: rgb(241, 249, 250);
}

/* TODO Replace below */
.dashboard {
  @media (max-width: 768px) {
    margin: 5rem 1rem 0;
  }
}

.dashboard > .dashboard-details {
  width: 500px;
  max-width: 100%;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

`

export default GlobalStyle
