import type { Meta, StoryObj } from '@storybook/react';

import { BubbleSort } from './BubbleSort';

const meta = {
    component: BubbleSort
} satisfies Meta<typeof BubbleSort>

export default meta
type Story = StoryObj<typeof meta>

export const Eight: Story = {
    args: {
        initialArray: [6,8,3,7,5,4,1,2]
    }
} 

export const Three: Story = {
    args: {
        initialArray: [3,2,1]
    }
} 

export const Many: Story = {
    args: {
        initialArray: [9,10,11,12,13,14,15,16,17,6,8,3,7,5,4,1,2,]
    }
} 