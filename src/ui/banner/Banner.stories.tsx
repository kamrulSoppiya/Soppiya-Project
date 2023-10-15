import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./Banner";

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: "Banner",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    status: "default"
  },
};
export const Info: Story = {
  args: {
    status: "info"
  },
};
export const Success: Story = {
  args: {
    status: "success"
  },
};
export const Warning: Story = {
  args: {
    status: "warning"
  },
};
export const Danger: Story = {
  args: {
    status: "danger"
  },
};