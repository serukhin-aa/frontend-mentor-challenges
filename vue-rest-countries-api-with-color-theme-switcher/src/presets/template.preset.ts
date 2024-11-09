import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import { ButtonPreset } from '@/presets/componets/button.preset';

export const TemplatePreset = definePreset(Aura, {
  semantic: {
    primary: {
      electricBlue: {
        50: '#E0F7FF',
        100: '#B3EFFF',
        200: '#80E6FF',
        300: '#4DDEFF',
        400: '#26D7FF',
        500: '#00CFFF',
        600: '#00B3E6',
        700: '#0099CC',
        800: '#007FB3',
        900: '#006699'
      }
    }
  },
  components: {
    ...ButtonPreset
  }
});
