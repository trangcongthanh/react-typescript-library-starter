import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Blank } from '@packages/blank'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Packages/Blank',
	component: Blank,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
} as ComponentMeta<typeof Blank>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Blank> = (args) => <Blank {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Default.args = {
// 	primary: true,
// 	label: 'Button',
// }
