import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Checkbox",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name:"Are you sure?",
  },
};
