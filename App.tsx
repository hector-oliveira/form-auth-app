import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { SignUp } from '@appScreens/allAppScreens';
import theme from '@themes/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <SignUp />
      <StatusBar backgroundColor={theme.colors.light_shape_color[500]} />
    </ThemeProvider>
  );
}

