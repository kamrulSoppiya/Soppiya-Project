import type { Meta, StoryObj } from "@storybook/react";
import Phone from "./Phone";

const meta: Meta<typeof Phone> = {
  component: Phone,
  title: "Phone",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};


