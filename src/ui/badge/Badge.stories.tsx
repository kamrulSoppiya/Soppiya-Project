import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
    component: Badge,
    title: "Badge",
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  export const Base: Story = {
    args: {
        children: "Neutral",
        variation:"neutral"
      },
  };
  export const Info: Story = {
    args: {
        children: "Information",
        variation:"info"
      },
  };
  export const Success: Story = {
    args: {
        children: "Success",
        variation:"success"
      },
  };
  export const Warning: Story = {
    args: {
        children: "Warning",
        variation:"warning"
      },
  };
  export const Critical: Story = {
    args: {
        children: "Danger",
        variation:"danger"
      },
  };