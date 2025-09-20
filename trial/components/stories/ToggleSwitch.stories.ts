import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

// import { Button } from './Button';
import { SwitchAppearance } from 'predoc/src/client/components';
import 'predoc/src/client/styles/vars.css';
import 'predoc/src/client/styles/base.css';
import 'predoc/src/client/styles/themes.css';

const meta = {
  title: 'Predoc Inner Components/Switch Theme',
  component: SwitchAppearance,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof SwitchAppearance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Switch: Story = {
  args: {},
};
