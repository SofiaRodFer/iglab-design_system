import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from './Heading'

export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum.',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Default: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Testando</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}