import type { Meta, StoryObj } from '@storybook/react';
import _ from 'lodash'
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
        initialArray: _.shuffle(_.range(1,50)),
        heightMultiplier: 6,
        stepDelayMs: 100
    }
} 