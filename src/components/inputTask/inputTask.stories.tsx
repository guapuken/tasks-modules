import { Meta, Story } from "@storybook/react";
import React from "react";
import InputTask, { InputTaskProps } from "./inputTask";

const Template: Story<InputTaskProps> = (args)=>(
  <InputTask {...args}/>
)

export const Basic = Template.bind({})
Basic.args={}

export default {
  title:'InputTask',
  component:InputTask
} as Meta;