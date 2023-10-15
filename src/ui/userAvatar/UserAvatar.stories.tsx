import type { Meta, StoryObj } from "@storybook/react";
import UserAvatar from "./UserAvatar";

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
  title: "UserAvatar",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name:{
        firstName:"",
        lastName:"Raihan"
    }
  },
};
