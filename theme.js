import { dark } from '@theme-ui/presets'

const theme = {
  ...dark,
  fonts: {
    body: 'Assistant',
  },
  colors: {
    ...dark.colors,
    primary: '#DD6031',
    secondary: '#24272D',
    highlight: '#c0f',
    error: '#e21616',
    text: '#F5F1ED',
    title: '#3F4650',
  },
  links: {
    ':hover': {
      color: 'text',
      backgroundColor: '#a40606',
      backgroundImage: ' linear-gradient(315deg, #a40606 0%, #d98324 74%)',
    },
  },
  images: {
    logo: {
      width: 70,
      height: 48,
    },
  },
  form: {
    boxShadow: (t) => `0 0 5px 3px ${t.colors.secondary}`,
    h2: {
      padding: '10px',
      margin: '10px',
    },
    label: {
      fontSize: 2,
      fontWeight: 'bold',
    },
    button: {
      padding: '10px',
      margin: '10px 5px 10px 5px',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
  buttons: {
    icon: {
      color: '##000',
    },
  },
  alerts: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    error: {
      color: 'text',
      bg: '#fc4e03',
    },
    muted: {
      color: 'text',
      bg: 'muted',
    },
  },
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    image: {
      maxHeight: '400px',
    },
    profile: {
      maxHeight: '400px',
      borderRadius: '10px',
    },
  },
  styles: {
    ...dark.styles,
    hr: { border: 0, borderBottom: '1px solid', borderColor: 'secondary' },
  },
}

export default theme
