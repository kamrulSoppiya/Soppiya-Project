import type { Meta, StoryObj } from "@storybook/react";
import ImageManager from "./ImageManager";

const meta: Meta<typeof ImageManager> = {
  component: ImageManager,
  title: "ImageManager",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
