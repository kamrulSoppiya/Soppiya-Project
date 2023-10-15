import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Modal",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};


