import type { Meta, StoryObj } from "@storybook/react";
import DropZone from "./DropZone";

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: "Drop Zone",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgFormat: [],
    onImageUpload: (file, url) => console.log(file, url)
  }
};
