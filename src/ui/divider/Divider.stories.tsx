import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: "Divider",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant:"default"
  }
};
export const SemiDark: Story = {
  args: {
    variant:"semi_dark"
  }
};
export const Dark: Story = {
  args: {
    variant:"dark"
  }
};
