import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

// import { Button } from './Button';
import { Button } from '../client/components/button';
import '../client/styles/vars.css';
import '../client/styles/base.css';
import '../client/styles/themes.css';

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

// // 
// export const DefaultPrimary: Story = {
//   args: {
//     children: 'Default Primary',
//     theme: 'primary',
//     size: 'normal',
//     type: 'default',
//   },
// };

// export const DefaultDark: Story = {
//   args: {
//     children: 'Default Dark',
//     theme: 'dark',
//     type: 'default',
//   },
// };

// export const DefaultDanger: Story = {
//   args: {
//     children: 'Default Danger',
//     theme: 'danger',
//     type: 'default',
//   },
// };

// export const DefaultSuccess: Story = {
//   args: {
//     children: 'Default Success',
//     theme: 'success',
//     type: 'default',
//   },
// };

// export const DefaultWarning: Story = {
//   args: {
//     children: 'Default Warning',
//     theme: 'warning',
//     type: 'default',
//   },
// };

// export const DefaultInfo: Story = {
//   args: {
//     children: 'Default Info',
//     theme: 'info',
//     type: 'default',
//   },
// };

// // 
// export const DashedPrimary: Story = {
//   args: {
//     children: 'Dashed Primary',
//     theme: 'primary',
//     size: 'normal',
//     type: 'dashed',
//   },
// };

// export const DashedDark: Story = {
//   args: {
//     children: 'Dashed Dark',
//     theme: 'dark',
//     type: 'dashed',
//   },
// };

// export const DashedDanger: Story = {
//   args: {
//     children: 'Dashed Danger',
//     theme: 'danger',
//     type: 'dashed',
//   },
// };

// export const DashedSuccess: Story = {
//   args: {
//     children: 'Dashed Success',
//     theme: 'success',
//     type: 'dashed',
//   },
// };

// export const DashedWarning: Story = {
//   args: {
//     children: 'Dashed Warning',
//     theme: 'warning',
//     type: 'dashed',
//   },
// };

// export const DashedInfo: Story = {
//   args: {
//     children: 'Dashed Info',
//     theme: 'info',
//     type: 'dashed',
//   },
// };

// // 
// export const FillPrimary: Story = {
//   args: {
//     children: 'Fill Primary',
//     theme: 'primary',
//     size: 'normal',
//     type: 'fill',
//   },
// };

// export const FillDark: Story = {
//   args: {
//     children: 'Fill Dark',
//     theme: 'dark',
//     type: 'fill',
//   },
// };

// export const FillDanger: Story = {
//   args: {
//     children: 'Fill Danger',
//     theme: 'danger',
//     type: 'fill',
//   },
// };

// export const FillSuccess: Story = {
//   args: {
//     children: 'Fill Success',
//     theme: 'success',
//     type: 'fill',
//   },
// };

// export const FillWarning: Story = {
//   args: {
//     children: 'Fill Warning',
//     theme: 'warning',
//     type: 'fill',
//   },
// };

// export const FillInfo: Story = {
//   args: {
//     children: 'Fill Info',
//     theme: 'info',
//     type: 'fill',
//   },
// };

// //
// export const TextPrimary: Story = {
//   args: {
//     children: 'Text Primary',
//     theme: 'primary',
//     size: 'normal',
//     type: 'text',
//   },
// };

// export const TextDark: Story = {
//   args: {
//     children: 'Text Dark',
//     theme: 'dark',
//     type: 'text',
//   },
// };

// export const TextDanger: Story = {
//   args: {
//     children: 'Text Danger',
//     theme: 'danger',
//     type: 'text',
//   },
// };

// export const TextSuccess: Story = {
//   args: {
//     children: 'Text Success',
//     theme: 'success',
//     type: 'text',
//   },
// };

// export const TextWarning: Story = {
//   args: {
//     children: 'Text Warning',
//     theme: 'warning',
//     type: 'text',
//   },
// };

// export const TextInfo: Story = {
//   args: {
//     children: 'Text Info',
//     theme: 'info',
//     type: 'text',
//   },
// };

// // 
// export const LinkPrimary: Story = {
//   args: {
//     children: 'Link Primary',
//     theme: 'primary',
//     size: 'normal',
//     type: 'link',
//   },
// };

// export const LinkDark: Story = {
//   args: {
//     children: 'Link Dark',
//     theme: 'dark',
//     type: 'link',
//   },
// };

// export const LinkDanger: Story = {
//   args: {
//     children: 'Link Danger',
//     theme: 'danger',
//     type: 'link',
//   },
// };

// export const LinkSuccess: Story = {
//   args: {
//     children: 'Link Success',
//     theme: 'success',
//     type: 'link',
//   },
// };

// export const LinkWarning: Story = {
//   args: {
//     children: 'Link Warning',
//     theme: 'warning',
//     type: 'link',
//   },
// };

// export const LinkInfo: Story = {
//   args: {
//     children: 'Link Info',
//     theme: 'info',
//     type: 'link',
//   },
// };
