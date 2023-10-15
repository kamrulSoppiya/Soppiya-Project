import type { Meta, StoryObj } from "@storybook/react";
import SelectCountry from "./SelectCountry";

const meta: Meta<typeof SelectCountry> = {
  component: SelectCountry,
  title: "Select Country",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
   
  },
};
