import type { Meta, StoryObj } from '@storybook/react';
import  Button  from './button';
import {useState} from 'react'
const meta = {
    title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		appearence: {
			type: 'string',
			description: 'Button color style',
			defaultValue: 'primary',
			options: ['primary', 'ghost', 'success', 'failure'],
			control: {
				type: 'select',
			},
		},
		size:{ 
			type:'string',
			description:'Button Size',
			defaultValue:'m',
			options:['s','m','l'],
			control:{
				type:'radio'
			}
		}
	},

	
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary:Story = {
  args:{
    children: 'Button',
	appearence: 'primary',
  },
};

export const Ghost:Story = {
	args: {
	  children: 'Button',
	  appearence: 'ghost',
	},
  };
  
  export const Success:Story = {
	args: {
	  children: 'Button',
	  appearence: 'success',
	},
  };
 
  export const Failure:Story = {
	args: {
	  children: 'Button',
	  appearence: 'failure',
	},
  };
  
  export const Small:Story = {
	args: {
	  children: 'Button',
	  size: 's',
	},
  };
  export const Medium:Story = {
	args: {
	  children: 'Button',
	  size: 'm',
	},
  };

  export const Large:Story = {
	args: {
	  children: 'Button',
	  size: 'l',
	},
  };


