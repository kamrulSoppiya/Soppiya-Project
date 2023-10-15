import type { Meta, StoryObj } from "@storybook/react";
import OTP from "./OTP";

const meta: Meta<typeof OTP> = {
  component: OTP,
  title: "OTP",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    onOtpValue(value) {
      console.log(value);
    },
  },
};
