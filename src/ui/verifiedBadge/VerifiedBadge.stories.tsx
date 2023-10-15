import type { Meta, StoryObj } from "@storybook/react";
import VerifiedBadge from "./VerifiedBadge";

const meta: Meta<typeof VerifiedBadge> = {
  component: VerifiedBadge,
  title: "Verified Badge",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};
