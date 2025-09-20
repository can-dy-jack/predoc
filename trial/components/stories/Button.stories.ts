import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

// import { Button } from './Button';
import { Button } from 'predoc/src/client/components';
import 'predoc/src/client/styles/vars.css';
import 'predoc/src/client/styles/base.css';
import 'predoc/src/client/styles/themes.css';

const meta = {
  title: 'Predoc Inner Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: '按钮类型',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    onClick: fn(),
    type: 'default',
    theme: 'default',
    size: 'normal'
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    type: 'default',
  },
};

export const Dashed: Story = {
  args: {
    children: 'Dashed Button',
    type: 'dashed',
  },
  name: 'dashed'
};

export const Fill: Story = {
  args: {
    children: 'Fill Button',
    type: 'fill',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    type: 'text',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    type: 'link',
  },
};
