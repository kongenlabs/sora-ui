'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Switch, type SwitchProps } from '../primitive/switch';

type ThemeToggleSwitchProps = SwitchProps & {};
function ThemeToggleSwitch({ ...props }: ThemeToggleSwitchProps) {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Switch
      {...props}
      checked={theme === 'dark'}
      checkedLabel={<MoonIcon />}
      color={'secondary'}
      onCheckedChange={handleToggle}
      uncheckedLabel={<SunIcon />}
    />
  );
}

export { ThemeToggleSwitch };
export type { ThemeToggleSwitchProps };
