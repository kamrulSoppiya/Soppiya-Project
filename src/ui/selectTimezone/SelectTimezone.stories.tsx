import type { Meta, StoryObj } from "@storybook/react";
import SelectTimezone from "./SelectTimezone";

const meta: Meta<typeof SelectTimezone> = {
  component: SelectTimezone,
  title: "Selected Timezone",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};
