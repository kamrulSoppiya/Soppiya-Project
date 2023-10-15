import type { Meta, StoryObj } from "@storybook/react";
import Test from "./Test";

const meta: Meta<typeof Test> = {
  component: Test,
  title: "Test",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};
