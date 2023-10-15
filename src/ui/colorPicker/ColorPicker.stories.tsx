import type { Meta, StoryObj } from "@storybook/react";
import ColorPicker from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  title: "ColorPicker",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

