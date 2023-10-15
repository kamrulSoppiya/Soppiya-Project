import type { Meta, StoryObj } from "@storybook/react";
import SelectLanguage from "./SelectLanguage";

const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
  title: "Select Language",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
