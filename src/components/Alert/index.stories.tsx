import type { Meta, StoryObj } from '@storybook/react';
import { RaulandAlert } from './index';

const meta: Meta<typeof RaulandAlert> = {
    title: 'Components/Alert',
    component: RaulandAlert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: false,
            description: 'The class name of the component',
        },
        style: {
            control: {
                type: 'object',
                description: 'The style of the component',
            },
        },
        startDecorator: {
            control: false,
            description: 'The start decorator of the component',
        },
        endDecorator: {
            control: false,
            description: 'The end decorator of the component',
        },
        variant: {
            control: {
                type: 'select',
                options: ['solid', 'outlined'],
                description: 'The variant of the component',
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['danger', 'warning', 'success'],
                description: 'The color of the component',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'lg',
        children: 'This is an alert',
        variant: 'outlined',
    },
};

export const Solid: Story = {
    args: {
        size: 'lg',
        children: 'This is a solid alert',
        variant: 'solid',
    },
};
